import React from 'react'
import { useParams } from 'react-router-dom'
import Centered from '../../components/Centered';
import CardProvider from '../../providers/CardProvider';
import { getCardData } from '../../services/cardApi';
import CardsStatus from '../../components/Cards/CardsStatus';

export default function ViewCard() {
    const { id } = useParams();
    return (
        <Centered sx={{ flexGrow: 1 }}>
            <CardProvider fetch={getCardData(id)}>
                <CardsStatus type={"card"} />
            </CardProvider>
        </Centered>
    )
}
