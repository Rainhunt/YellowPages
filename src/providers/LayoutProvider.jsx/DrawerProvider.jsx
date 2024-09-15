import React, { createContext, useCallback, useContext, useState } from 'react'

const DrawerContext = createContext();

export default function DrawerProvider({ children }) {
    const [isDrawerOpen, setIsDrawerOpen] = useState(false);
    const toggleDrawerOpen = useCallback(() => {
        setIsDrawerOpen((prev) => !prev);
    });

    return (
        <DrawerContext.Provider value={{ isDrawerOpen, toggleDrawerOpen }}>
            {children}
        </DrawerContext.Provider>
    );
}

export const useLeftNav = () => {
    const context = useContext(DrawerContext);
    if (!context) throw new Error("useLeftNav must be used within a Provider");
    return context;
}