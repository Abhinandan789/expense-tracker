import React from 'react'
import { useState } from 'react';

//firebase imports 
import { collection, addDoc, onSnapshot, deleteDoc, doc, query } from "firebase/firestore";
import { db } from '../Firebase/firebase';


//Material Ui imports
import CheckIcon from '@mui/icons-material/Check';
import ToggleButton from '@mui/material/ToggleButton';


interface Data {
    name: string;
    amount: number;
    id?: string | number;
}

export const Inputs = () => {


    const [newItem, setNewItem] = useState<Data>({ name: '', amount: 0 });
    const addItem = async (e: React.SyntheticEvent): Promise<void> => {
        e.preventDefault();
        if (newItem.name !== '' && newItem.amount > 0) {
          await addDoc(collection(db, 'items'), {
            name: newItem.name.trim(),
            amount: newItem.amount
          });
          setNewItem({ name: '', amount: 0 });
        }
      };

  return (
    <>
        <form
            className="grid grid-cols-6 items-center text-black gap-2 mb-4"
            onKeyDown={(e) => {
              if (e.key === 'Enter') {
                e.preventDefault();
                addItem(e);
              }
            }}
          >
            <input
              type="text"
              onChange={(e) => setNewItem({ ...newItem, name: e.target.value })}
              maxLength={20}
              value={newItem.name}
              className="col-span-3 p-3 border rounded"
              placeholder="Enter Details"
            />
            <input
              type="number"
              maxLength={20}
              onChange={(e) => setNewItem({ ...newItem, amount: Number(e.target.value) })}
              value={String(newItem.amount)}
              className="col-span-2 p-3 border rounded"
              placeholder="Enter Amount"
            />
            <ToggleButton className='text-white-500 bg-slate-950 rounded' onClick={addItem} value="check">
              <CheckIcon className='text-white' />
            </ToggleButton>
          </form>
    </>
  )
}


export default Inputs;