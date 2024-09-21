import React, { createContext, useCallback, useContext, useEffect, useState } from 'react'
import { useSnack } from './LayoutProvider.jsx/SnackProvider';
import { useUser } from './UserProvider';
import patch from '../services/requests/patch';
import del from '../services/requests/delete';

const apiUrl = "https://monkfish-app-z9uza.ondigitalocean.app/bcard2/cards/";
const CardContext = createContext();

export default function CardProvider({ children, fetch, filter }) {
    const [cards, setCards] = useState([]);
    const [filteredCards, setFilteredCards] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState();

    const { userData, token } = useUser();
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
        try {
            const response = await del(`${apiUrl}${cardId}`, {}, { "x-auth-token": token });
            if (response) {
                setIsLoading(true);
                cards.splice(cards.findIndex((card) => card._id === cardId), 1);
                setSnack(`Successfully deleted '${response.title}'`);
                setIsLoading(false);
            }
        } catch (err) {
            console.log(err);
            setSnack(err.message, "filled", "error");
        }
    });

    const handleEdit = useCallback(async (cardId) => {
        console.log("editing card");
        //link to cardApi
    });

    const handleLike = useCallback(async (cardId) => {
        return await patch(`${apiUrl}${cardId}`, {}, { "x-auth-token": token });
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