import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import ROUTES from "../routes/routerModel";
import { useState } from "react";
import { useSnack } from "../providers/LayoutProvider.jsx/SnackProvider";
import { createCard } from "../services/cardApi";
import normalizeCard from "../normalization/card/normalizeCard";

export default function useCards() {
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState({});

    const navigate = useNavigate();
    const setSnack = useSnack();

    const handleCreateCard = useCallback(async (cardData, token) => {
        setIsLoading(true);
        try {
            const card = normalizeCard(cardData);
            const newCard = await createCard(card, token);
            setError(null);
            navigate(`${ROUTES.CARD_INFO}/${newCard._id}`);
        } catch (err) {
            setError(err.message);
            setSnack(err.message, "filled", "error");
        }
        setIsLoading(false);
    }, []);

    return { isLoading, error, handleCreateCard }
}