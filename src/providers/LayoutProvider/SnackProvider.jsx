import { Alert, Snackbar } from '@mui/material';
import React, { createContext, useCallback, useContext, useState } from 'react'

const SnackContext = createContext();

export default function SnackProvider({ children }) {
    const [isSnackOpen, setIsSnackOpen] = useState(false);
    const [snackVariant, setSnackVariant] = useState("filled");
    const [snackColor, setSnackColor] = useState("success");
    const [snackMessage, setSnackMessage] = useState("undefined");

    const setSnack = useCallback((message = "undefined", variant = "filled", color = "success") => {
        setSnackVariant(variant);
        setSnackColor(color);
        setSnackMessage(message);
        setIsSnackOpen(true);
    }, []);

    return (
        <>
            <SnackContext.Provider value={setSnack}>
                {children}
            </SnackContext.Provider>

            <Snackbar
                anchorOrigin={{ vertical: "top", horizontal: "right" }}
                open={isSnackOpen}
                onClose={() => { setIsSnackOpen(false) }}
                autoHideDuration={5000}
            >
                <Alert variant={snackVariant} severity={snackColor}>
                    {snackMessage}
                </Alert>
            </Snackbar>
        </>
    )
}

export const useSnack = () => {
    const context = useContext(SnackContext);
    if (!context) throw Error("useSnack must be used within a SnackProvider");
    return context;
};