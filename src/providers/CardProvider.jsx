import React, { createContext, useCallback, useContext, useState } from 'react'
import { useSnack } from './LayoutProvider.jsx/SnackProvider';
import { getCardData } from '../services/cardApi';

const CardContext = createContext();

export default function CardProvider({ children }) {
    const [cards, setCards] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState();

    const setSnack = useSnack();

    const getCards = useCallback(async () => {
        setIsLoading(true);
        try {
            const cardData = await getCardData();
            setCards(cardData);
            setSnack("Retrieved all cards!");
        } catch (err) {
            setError(err.message);
        }
        setIsLoading(false);
    });

    const handleDelete = useCallback(async (cardId) => {
        console.log("deleting card");
        //link to cardApi
    });

    const handleEdit = useCallback(async (cardId) => {
        console.log("editing card");
        //link to cardApi
    });

    const handleLike = useCallback(async (cardId) => {
        console.log("liking card");
        //link to cardApi
    });

    return (
        <CardContext.Provider value={{ cards, isLoading, error, getCards, handleDelete, handleEdit, handleLike }}>
            {children}
        </CardContext.Provider>
    )
}

export const useCards = () => {
    const context = useContext(CardContext);
    if (!context) throw new Error("useCards must be used within a Provider");
    return context;
}