import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import ROUTES from "../routes/routerModel";
import { useState } from "react";
import { useSnack } from "../providers/LayoutProvider/SnackProvider";
import { createCard, editCard } from "../services/cardApi";
import normalizeCard from "../normalization/card/normalizeCard";

export default function useCardForms(id) {
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

    const handleEditCard = useCallback(async (cardData, token) => {
        setIsLoading(true);
        try {
            const card = normalizeCard(cardData);
            const editedCard = await editCard(card, token, id);
            setError(null);
            navigate(`${ROUTES.CARD_INFO}/${editedCard._id}`);
        } catch (err) {
            setError(err.message);
            setSnack(err.message, "filled", "error");
        }
        setIsLoading(false);
    }, []);

    return { isLoading, error, handleCreateCard, handleEditCard }
}