import React, { createContext, useCallback, useContext, useState } from 'react'
import { getToken, getUser } from '../services/jwtLocal';

const UserContext = createContext();

export default function UserProvider({ children }) {
    const [token, setToken] = useState(getToken());
    const [userData, setUserData] = useState(getUser());

    const updateUser = useCallback(() => {
        setToken(getToken());
        setUserData(getUser());
    });

    return (
        <UserContext.Provider value={{ token, setToken, userData, setUserData, updateUser }}>
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