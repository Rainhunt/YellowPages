import React, { createContext, useCallback, useContext, useState } from 'react'
import { getUser } from '../services/jwtLocal';

const UserContext = createContext();

export default function UserProvider({ children }) {
    const [userData, setUserData] = useState(getUser());

    const updateUser = useCallback(() => {
        setUserData(getUser());
    });

    return (
        <UserContext.Provider value={{ userData, updateUser }}>
            {children}
        </UserContext.Provider>
    )
}

export const useUser = () => {
    const context = useContext(UserContext);
    if (!context) {
        throw new Error("useUser must be used within provider");
    }
    return context;
}