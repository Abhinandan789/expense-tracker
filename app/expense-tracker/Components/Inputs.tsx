'use client'
import React, { useState } from 'react';
import { collection, addDoc, doc, setDoc, getDoc } from "firebase/firestore";
import { db } from '../../Firebase/firebase';
import { useUser } from '@stackframe/stack';
import CheckIcon from '@mui/icons-material/Check';
import ToggleButton from '@mui/material/ToggleButton';

interface Data {
  name: string;
  amount: number;
  type: string;
  id?: string | number;
}

export const Inputs = () => {

  const user = useUser();

  const [newItem, setNewItem] = useState<Data>({ name: '', amount: 0, type: 'Other' });

  if (!user) {
    return <div>Please log in to add expenses.</div>;
  }

  const addItem = async (e: React.SyntheticEvent): Promise<void> => {
    e.preventDefault();
    if (newItem.name !== '' && newItem.amount > 0 && user) {
      const userRef = doc(db, "users", user.id);
      const userSnap = await getDoc(userRef);

      if (!userSnap.exists()) {
        // If user document doesn't exist, create it with user info
        await setDoc(userRef, {
          email: user.primaryEmail,
          displayName: user.displayName,
          stackUserID: user.id
        });
      }

      // Add the new item to the user's items subcollection
      await addDoc(collection(db, `users/${user.id}/items`), {
        name: newItem.name.trim(),
        amount: newItem.amount,
        type: newItem.type.toLowerCase()
      });

      setNewItem({ name: '', amount: 0, type: 'Other' });
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
        <select
          onChange={(e) => setNewItem({ ...newItem, type: e.target.value })}
          value={newItem.type}
          className="col-span-4 p-3 border rounded"
        >
          <option value="Food">Food</option>
          <option value="Transport">Transport</option>
          <option value="Entertainment">Entertainment</option>
          <option value="Other">Other</option>
        </select>
        <ToggleButton className='bg-slate-950 ' onClick={addItem} value="check">
          <CheckIcon />
        </ToggleButton>
      </form>
    </>
  )
}


export default Inputs;