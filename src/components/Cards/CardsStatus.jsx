import React, { useEffect } from 'react'
import Spinner from '../Spinner';
import ErrorMessage from '../ErrorMessage';
import { Typography } from '@mui/material';
import YellowCards from './YellowCards';
import { useCards } from '../../providers/CardProvider';
import Centered from '../Centered';
import YellowCard from './YellowCard';

export default function CardsStatus({ type }) {
    const { isLoading, error, searchCards: cards, getCards } = useCards();

    useEffect(() => {
        getCards();
    }, []);

    if (isLoading) return (
        <Centered sx={{ flexGrow: 1 }}>
            <Spinner />
        </Centered>
    );
    if (error) return <ErrorMessage message={error} />
    if (cards && cards.length === 0) return (
        < Typography m={2} >
            Oops... It seems like no cards match your search.
        </Typography >
    );
    if (cards) {
        switch (type) {
            case "cards":
                return < YellowCards cards={cards} />
            case "card":
                return <YellowCard cardData={cards} />
            case "display":
                return <YellowCard cardData={cards} variant="display" />
        }
    }
    return null;
}
