import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import Centered from '../../components/Centered';
import YellowCard from '../../components/Cards/YellowCard';
import { getCardData } from '../../services/cardApi';
import CardForm from '../../forms/cards/CardForm';
import Spinner from '../../components/Spinner';
import CardProvider from '../../providers/CardProvider';
import normalizeCard from '../../normalization/card/normalizeCard';
import mapCard from '../../normalization/card/mapCard';
import useCardForms from '../../hooks/useCardForms';
import { useUser } from '../../providers/UserProvider';
import ROUTES from '../../routes/routerModel';
import { useSnack } from '../../providers/LayoutProvider/SnackProvider';

export default function EditCard() {
    const { userData } = useUser();
    const navigate = useNavigate();

    const { id } = useParams();
    const [card, setCard] = useState();
    const [isLoading, setIsLoading] = useState(false);

    const { handleEditCard } = useCardForms(id);
    const setSnack = useSnack();

    useEffect(() => {
        const getCard = async () => {
            try {
                const response = await getCardData(id);
                if (response) setCard(response);
                //validate page auth
                if (!userData || userData._id !== response.user_id) navigate(ROUTES.ROOT, { replace: true });
            } catch (err) {
                navigate(ROUTES.ROOT);
                setSnack(err.message, "filled", "error");
            }
        }
        setIsLoading(true);
        getCard();
        setIsLoading(false);
    }, []);

    return (
        <Centered sx={{ flexGrow: 1, flexDirection: "row" }}>
            <CardProvider>
                {card ? <YellowCard cardData={card} variant="display" /> : <Spinner />}
            </CardProvider>
            {card ? <CardForm isLoading={isLoading} card={mapCard(card)} handleSubmit={handleEditCard} setRef={(ref) => {
                setCard(normalizeCard(ref));
            }} /> : <Spinner />}
        </Centered>
    )
}
