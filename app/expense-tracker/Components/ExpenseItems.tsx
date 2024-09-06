import React, { useState, useEffect } from 'react';

//firebase imports
import { collection, addDoc, updateDoc, onSnapshot, deleteDoc, query, doc } from "firebase/firestore";
import { db } from '../../Firebase/firebase';

//MUI styled components
import Skeleton from '../styledComponents/SkeletonItems'
import ToggleButton from '@mui/material/ToggleButton';
import DeleteSweepIcon from '@mui/icons-material/DeleteSweep';
import EditIcon from '@mui/icons-material/Edit';

import { useUser } from '@stackframe/stack';
import EditItemModal from './EditItemModal';



interface Data {
    name: string;
    amount: number;
    type: string;
    id: string;
}

export const ExpenseItems = () => {
    const user = useUser();
    const [items, setItems] = useState<Data[]>([]);
    const [loading, setLoading] = useState<boolean>(true);  // Loading state
    const [total, setTotal] = useState<number>(0);

    //const [editingItemId, setEditingItemId] = useState<string | null>(null);
    const [editingItem, setEditingItem] = useState<Data | null>(null);


    const handleEditClick = (itemId: string) => {
        const itemToEdit = items.find(item => item.id === itemId);
        if (itemToEdit) {
            setEditingItem(itemToEdit);
        }
        console.log("Edit clicked for item:", itemId);
    };
    

    const handleCloseModal = () => {
        setEditingItem(null);
    }

    const handleUpdateItem = async (updatedItem: Data) => {
        if (!user || !updatedItem.id) return;
        try {
            const itemRef = doc(db, `users/${user.id}/items`, updatedItem.id);

            const firebaseItem = {
                name: updatedItem.name,
                amount: updatedItem.amount,
                type: updatedItem.type
            };

            await updateDoc(itemRef, firebaseItem);
            setEditingItem(null);
        } catch (error) {
            console.error("Error updating document: ", error);
        }
    };

    useEffect(() => {
        console.log()
    }, [editingItem]);


    // READ DATA FROM FIREBASE
    useEffect(() => {
        if (!user) return;

        const q = query(collection(db, `users/${user.id}/items`));
        const unsubscribe = onSnapshot(q, (querySnapshot) => {
            let itemsArray: Data[] = [];

            querySnapshot.forEach((doc) => {
                itemsArray.push({
                    name: doc.data().name,
                    amount: doc.data().amount,
                    type: doc.data().type.toLowerCase(),
                    id: doc.id,
                });
            });
            setItems(itemsArray);

            // Calculate total expenses from firebase
            const calculateTotal = () => {
                const totalAmount = itemsArray.reduce((sum, item) => sum + parseFloat(String(item.amount)), 0);
                setTotal(totalAmount);
            };
            calculateTotal();

            setLoading(false);  // Set loading to false after data is fetched

            return () => unsubscribe();
        });

        return unsubscribe;
    }, [user]);

    // DELETE DATA FROM FIREBASE
    const deleteItem = async (id: string) => {
        if (!user) return;

        await deleteDoc(doc(db, `users/${user.id}/items`, id));
    }
    return (
        <>
            <div className="flex-grow overflow-auto mb-4 w-full">
                <table className="w-full border-collapse">
                    <thead>
                        <tr className="bg-slate-950 text-white">
                            <th className="p-2 text-left">Name</th>
                            <th className="p-2 text-left">Category</th>
                            <th className="p-2 text-right">Amount</th>
                            <th className="p-2 text-center">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {loading ? (
                            <tr>
                                <td colSpan={4}>
                                    <Skeleton />
                                </td>
                            </tr>
                        ) : items.length < 1 ? (
                            <tr>
                                <td colSpan={4} className="text-center p-4 text-slate-500">
                                    No expenses added yet
                                </td>
                            </tr>
                        ) : (
                            items.map((item, i) => (
                                <tr key={i} className={`border-b bg-slate-950`}>
                                    <td className="p-2">{item.name}</td>
                                    <td className="p-2 capitalize">{item.type}</td>
                                    <td className="p-2 text-right">₹{item.amount}</td>
                                    <td className="p-2 text-center">
                                        <button onClick={() => handleEditClick(item.id)} className="mr-2 text-blue-500 hover:text-blue-700">
                                            <EditIcon />
                                        </button>
                                        <button onClick={() => deleteItem(item.id)} className="text-red-500 hover:text-red-700">
                                            <DeleteSweepIcon />
                                        </button>
                                    </td>
                                </tr>
                            ))
                        )}
                    </tbody>
                </table>
            </div>
            {items.length > 0 && (
                <div className='text-white flex justify-between items-center p-3 bg-slate-950 rounded'>
                    <span className='sm:text-xl'>Total</span>
                    <span className='sm:text-xl'>₹{total}</span>
                </div>
            )}
            {editingItem && (
                <EditItemModal 
                    item={editingItem}
                    isOpen={true}
                    onClose={handleCloseModal}
                    onUpdate={handleUpdateItem}
                />
            )}
        </>
    )
}


export default ExpenseItems;