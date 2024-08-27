// 'use client'
// import React from 'react';
// import { useState, useEffect } from 'react';

// //firebase 
// import {collection, addDoc, getDoc ,doc, QuerySnapshot, query, onSnapshot, deleteDoc} from "firebase/firestore";
// import {db} from './firebase';

// //material ui icons 
// import CheckIcon from '@mui/icons-material/Check';
// import ToggleButton from '@mui/material/ToggleButton';
// import DeleteSweepIcon from '@mui/icons-material/DeleteSweep';
// import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
// import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';

// //components
// import GradualSpacing from './styledComponents/GradualSpacing';
// import SkeletonItems from './styledComponents/SkeletonItems';



// interface Data {
//   name: string;
//   amount: number;
//   id?: string|number;
// }

// export default function Home() {
//   const [items, setItems] = useState<Data[]>([]);

//   const [newItem, setNewItem] = useState<Data>({name: '', amount:0});


//   const [showDescription, setShowDescription] = useState<number | null>(null);
//   const [total,setTotal] = useState<number>(0);

//   const toggleDescription = (index: number) => {
//     setShowDescription(showDescription === index ? null : index);
//   };

//   //Add items to the firebase 
//   const addItem = async (e:React.SyntheticEvent):Promise<void> =>{
//     e.preventDefault();
//     if(newItem.name!== '' && newItem.amount>0){
//       //setItems([...items, newItem]);
//       await addDoc(collection(db, 'items'),{
//         name: newItem.name.trim(),
//         amount : newItem.amount
//       });
//       setNewItem({name: '', amount: 0});
//     }

//   };

//   //READ DATA FROM FIREBASE
//   useEffect(() => {
//     const q = query(collection(db, 'items'));
//     const unsubscribe = onSnapshot(q, (querySnapshot) => {
//       let itemsArray: Data[] = [];

//       querySnapshot.forEach((doc) => {
//         itemsArray.push({
//           name: doc.data().name,
//           amount: doc.data().amount,
//           id: doc.id,
//         });
//       });
//       setItems(itemsArray);


//       //Calculate total expenses from firebase
//       const calculateTotal = () =>{
//         const totalAmount = itemsArray.reduce((sum,item) => sum +  parseFloat(String(item.amount)),0);
//         setTotal(totalAmount);
//       };
//       calculateTotal();
//       return () => unsubscribe();

//     });

//     return unsubscribe;
//   }, []);

//   //DELETE DATA FROM FIREBASE
//   const deleteItem = async (id:string) =>{
//     await deleteDoc(doc(db,'items',id));
//   }



//   return (
//     <main className="flex min-h-screen flex-col items-center justify-between p-4">
//       <div className="z-10 w-full max-w-4xl items-center justify-between font-mono text-sm">
//         <GradualSpacing text="Expense Tracker" />


//         <div className="bg-slate-800 p-4 rounded-lg flex flex-col sm:h-[80vh] h-[80vh] ">
//           <form 
//             className="grid grid-cols-6 items-center text-black gap-2 mb-4"
//             onKeyDown={(e) => {
//               if(e.key == 'Enter'){
//                 e.preventDefault();
//                 addItem(e);
//               }
//             }}
//           >
//             <input
//               type="text"
//               onChange={(e) => setNewItem({ ...newItem, name: e.target.value })}
//               value={newItem.name}
//               className="col-span-3 p-3 border rounded" 
//               placeholder="Enter Details" 
//             />
//             <input
//              type="number"
//              onChange={(e) => setNewItem({...newItem, amount: Number(e.target.value)})} 
//              value={String(newItem.amount)} 
//              className="col-span-2 p-3 border rounded" 
//              placeholder="Enter Amount" />

//             <ToggleButton className='text-white-500 bg-slate-950 rounded' onClick={addItem} value="check">
//               <CheckIcon className='text-white'/>
//             </ToggleButton>
//           </form>

//           <div className="flex-grow overflow-auto mb-4">
//             <ul>
//               {items.map((item, i) => (
//                 <li key={i} className='my-2 w-full bg-slate-950 rounded'>
//                   <div className='p-2  w-full flex justify-between items-start'>
//                     <div className='flex-grow mr-2'>
//                       <span className='capitalize text-lg'>
//                         {item.name}
//                       </span>
//                     </div>
//                     <div className='flex items-center'>
//                       <span className='text-lg mr-9 whitespace-nowrap'>₹{item.amount}</span>
//                       <ToggleButton 
//                         value="" 
//                         className="border-l-2 border-slate-900 hover:bg-slate-800 p-2"
//                         onClick={() => deleteItem(item.id as string)}
//                       >
//                         <DeleteSweepIcon className='text-white' />
//                       </ToggleButton>
//                     </div>
//                   </div>
//                 </li>
//               ))}
//             </ul>
//           </div>

//           {items.length < 1 ? ('') : 
//             <div className='flex justify-between p-3 bg-slate-700 rounded'>
//               <span className='text-xl'>Total</span>
//               <span className='text-xl'>₹{total}</span>
//             </div>
//           }
//         </div>
//       </div>
//     </main>
//   );
// }






'use client'
import React from 'react';

//components
import GradualSpacing from '../styledComponents/GradualSpacing';
import Expenses from './Components/ExpenseItems';
import Inputs from './Components/Inputs'
import BurgerMenu  from '../styledComponents/BurgerMenu';

//Auth 
import AuthGuard from '../AuthContext/useAuth'

import User from '../userInfo/page';

export default function Home() {
  return (
    <AuthGuard >
      <main className="flex min-h-screen flex-col items-center justify-between p-4 bg-white">
        <BurgerMenu />
        <div className="bg-white border-l-pink-900 z-10 max-w-90 max-w-3xl items-center justify-between font-mono text-sm">
          <GradualSpacing text="Expense Tracker" />
          {/* <User />  */}

          <div className="bg-white border  p-4 rounded-lg flex flex-col sm:h-[80vh] h-[80vh] ">

            <Inputs />

            <hr className="sm:border-t-4 border-black my-4" />

            <Expenses />
          
          </div>
        </div>
      </main>
    </AuthGuard>
  );
}
