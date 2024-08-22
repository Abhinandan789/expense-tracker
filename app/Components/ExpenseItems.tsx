import React, { useState, useEffect } from 'react';

//firebase imports
import { collection, addDoc, onSnapshot, deleteDoc, doc, query } from "firebase/firestore";
import { db } from '../Firebase/firebase';

//MUI styled components
import Skeleton from '../styledComponents/SkeletonItems'
import ToggleButton from '@mui/material/ToggleButton';
import DeleteSweepIcon from '@mui/icons-material/DeleteSweep';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';


interface Data {
    name: string;
    amount: number;
    id?: string | number;
}

export const ExpenseItems = () => {
    const [items, setItems] = useState<Data[]>([]);
    const [loading, setLoading] = useState<boolean>(true);  // Loading state
    const [total, setTotal] = useState<number>(0);

    const [showDescription, setShowDescription] = useState<number | null>(null);


    const toggleDescription = (e: number): void => {
        console.log(e);
    }

    // READ DATA FROM FIREBASE
    useEffect(() => {
        const q = query(collection(db, 'items'));
        const unsubscribe = onSnapshot(q, (querySnapshot) => {
            let itemsArray: Data[] = [];

            querySnapshot.forEach((doc) => {
                itemsArray.push({
                    name: doc.data().name,
                    amount: doc.data().amount,
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
    }, []);

    // DELETE DATA FROM FIREBASE
    const deleteItem = async (id: string) => {
        await deleteDoc(doc(db, 'items', id));
    }
    return (
        <>
            <div className="flex-grow overflow-auto mb-4">
                <ul>
                    {/* SKELETON STATE ADDING HERE  */}
                    {loading ? (
                        Array.from(new Array(6)).map((_, index) => (
                            <Skeleton />
                        ))
                    ) : (
                        items.length < 1 ? (
                            <li className="text-black text-center sm:text-4xl mt-9">{`<---------Add Expenses--------->`}</li>
                        ) : (
                            items.map((item, i) => (
                                <li key={i} className='my-2 w-full bg-slate-950 rounded'>
                                    <div className='p-2 w-full flex justify-between items-center'>
                                        <div className='mr-2 '>
                                            <span className='capitalize text-white sm:text-lg flex items-center whitespace-nowrap'>
                                                {item.name}
                                                <button
                                                    type="button"
                                                    className='ml-2 text-sm'
                                                    onClick={() => toggleDescription(i)}>
                                                    {showDescription === i ? <ArrowDropUpIcon /> : <ArrowRightIcon />}
                                                </button>
                                            </span>
                                        </div>
                                        <div className='flex items-center gap-7 whitespace-nowrap'>
                                            <span className='sm:text-lg mr-2 whitespace-nowrap'>₹{item.amount}</span>
                                            <ToggleButton
                                                value=""
                                                className="border-l-2 border-slate-900 hover:bg-slate-800 p-2"
                                                onClick={() => deleteItem(item.id as string)}
                                            >
                                                <DeleteSweepIcon className='text-white' />
                                            </ToggleButton>
                                        </div>
                                    </div>
                                </li>
                            ))
                        )
                    )}
                </ul>
            </div>
            {items.length < 1 ? ('') :
                <div className='text-white flex justify-between items-center p-3 bg-slate-950 rounded'>
                    <span className='sm:text-xl'>Total</span>
                    <span className='sm:text-xl'>₹{total}</span>
                </div>
            }
        </>
    )
}


export default ExpenseItems;