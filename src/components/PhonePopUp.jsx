import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle } from '@mui/material';
import React, { useCallback } from 'react'

export default function PhonePopUp({ phone, open, setOpen }) {
    const handleClose = useCallback(() => {
        setOpen(false);
    }, []);

    const handleCall = useCallback(() => {
        window.location.href = `tel:${phone}`;
    }, [phone]);

    return (
        <Dialog
            open={open}
            onClose={handleClose}
        >
            <DialogTitle>
                Business Number
            </DialogTitle>
            <DialogContent>
                <DialogContentText>
                    {phone}
                </DialogContentText>
            </DialogContent>
            <DialogActions>
                <Button onClick={handleCall}>Call</Button>
                <Button onClick={handleClose}>Close</Button>
            </DialogActions>
        </Dialog>
    )
}
