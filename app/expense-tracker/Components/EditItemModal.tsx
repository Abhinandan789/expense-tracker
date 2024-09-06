import React, { useState } from 'react';
import { Dialog, DialogContent, DialogTitle, Select, TextField, MenuItem, DialogActions, Button, SelectChangeEvent } from '@mui/material';

interface EditItemModalProps {
    item : {
        id: string;
        name: string;
        amount: number;
        type : string;
    };
    isOpen : boolean;
    onClose: () => void;
    onUpdate : (updatedItem : {id: string, name: string, amount: number, type: string}) => void;
}

export const EditItemModal: React.FC<EditItemModalProps>= ({item, isOpen, onClose, onUpdate}) => {
    
    const [editedItem, setEditedItem] = useState(item);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | { name?: string; value: unknown }>) => {
        const { name, value } = e.target;
        setEditedItem(prev => ({ ...prev, [name as string]: value }));
    };

    const handleSelectChange = (e: SelectChangeEvent<string>) => {
        const { name, value } = e.target;
        setEditedItem(prev => ({ ...prev, [name as string]: value.toLowerCase() }));
    };
    
    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        onUpdate(editedItem);
        onClose();
    }

    return (
        <Dialog open={isOpen} onClose={onClose}>
            <DialogTitle>Edit Expense Item</DialogTitle>
            <DialogContent>
                <TextField  
                    autoFocus
                    margin="dense"
                    name="name"
                    label="Item Name"
                    type="text"
                    fullWidth
                    variant="standard"
                    value={editedItem.name}
                    onChange={handleChange}
                />

                <TextField
                    margin='dense'
                    name= 'amount'
                    label='Amount'
                    type='number'
                    fullWidth
                    variant='standard'
                    value={editedItem.amount}
                    onChange={handleChange}
                />

                <Select
                    margin='dense'
                    name='type'
                    label='Type'
                    fullWidth
                    value={editedItem.type.toLowerCase()}
                    onChange={handleSelectChange}
                >
                    <MenuItem value='food'>Food</MenuItem>
                    <MenuItem value='transportation'>Transportation</MenuItem>
                    <MenuItem value='entertainment'>Entertainment</MenuItem>
                    <MenuItem value='other'>Other</MenuItem>
                </Select>
            </DialogContent>

            <DialogActions>
                <Button onClick={onClose}>Cancel</Button>
                <Button onClick={handleSubmit}>Update</Button>
            </DialogActions>
        </Dialog>
    )
}

export default EditItemModal;