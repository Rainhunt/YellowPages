import React, { createContext, useCallback, useContext, useEffect, useState } from 'react'
import { useSnack } from './LayoutProvider.jsx/SnackProvider';
import { useUser } from './UserProvider';

const CardContext = createContext();

export default function CardProvider({ children, fetch, filter }) {
    const [cards, setCards] = useState([]);
    const [filteredCards, setFilteredCards] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState();

    const { userData } = useUser();
    useEffect(() => {
        filter ? setFilteredCards(filter(cards, userData._id)) : setFilteredCards(cards);
    }, [cards]);

    const setSnack = useSnack();

    const getCards = useCallback(async () => {
        setIsLoading(true);
        try {
            const cardData = await fetch;
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
        <CardContext.Provider value={{ filteredCards, isLoading, error, getCards, setFilteredCards, handleDelete, handleEdit, handleLike }}>
            {children}
        </CardContext.Provider>
    )
}

export const useCards = () => {
    const context = useContext(CardContext);
    if (!context) throw new Error("useCards must be used within a Provider");
    return context;
}