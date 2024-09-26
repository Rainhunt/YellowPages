import React, { createContext, useCallback, useContext, useEffect, useState } from 'react'
import { useSnack } from './LayoutProvider.jsx/SnackProvider';
import { useUser } from './UserProvider';
import patch from '../services/requests/patch';
import del from '../services/requests/delete';
import { useNavigate } from 'react-router-dom';
import ROUTES from '../routes/routerModel';
import CardSearch from '../components/SearchBar/CardSearch';

const apiUrl = "https://monkfish-app-z9uza.ondigitalocean.app/bcard2/cards/";
const CardContext = createContext();

export default function CardProvider({ children, fetch, filter, searchBar }) {
    const { userData, token } = useUser();

    //all cards retrieved by the api call
    const [cards, setCards] = useState([]);
    //all cards the page should be able to display (e.g. all liked cards)
    const [filteredCards, setFilteredCards] = useState([]);
    useEffect(() => {
        filter ? setFilteredCards(filter(cards, userData._id)) : setFilteredCards(cards);
    }, [cards]);
    //filteredcards narrowed down by search parameters
    const [searchParams, setSearchParams] = useState({});
    const [searchCards, setSearchCards] = useState([]);
    const useSearchParams = useCallback(() => {
        let filteredToSearch = filteredCards;
        for (const search in searchParams) {
            filteredToSearch = searchParams[search](filteredToSearch);
        }
        setSearchCards(filteredToSearch);
    }, [filteredCards, searchParams]);
    useEffect(() => {
        useSearchParams();
    }, [filteredCards, searchParams]);

    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState();

    const setSnack = useSnack();
    const navigate = useNavigate();

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
            setSnack(err.message, "filled", "error");
        }
    });

    const handleEdit = useCallback(async (cardId) => {
        navigate(`${ROUTES.EDIT_CARD}/${cardId}`);
    });

    const handleLike = useCallback(async (cardId) => {
        try {
            return await patch(`${apiUrl}${cardId}`, {}, { "x-auth-token": token });
        } catch (err) {
            setSnack(err.message, "filled", "error");
            return null;
        }
    });

    return (
        <CardContext.Provider value={{ filteredCards, searchCards, isLoading, error, getCards, setSearchParams, handleDelete, handleEdit, handleLike }}>
            {searchBar}
            {children}
        </CardContext.Provider>
    )
}

export const useCards = () => {
    const context = useContext(CardContext);
    if (!context) throw new Error("useCards must be used within a Provider");
    return context;
}