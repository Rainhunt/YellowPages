import React from 'react'
import { useParams } from 'react-router-dom'
import Centered from '../../components/Centered';
import CardProvider from '../../providers/CardProvider';
import { getCardData } from '../../services/cardApi';
import CardsStatus from '../../components/Cards/CardsStatus';
import { Box } from '@mui/material';
import CardMap from '../../components/Maps/CardMap';

export default function ViewCard() {
    const { id } = useParams();

    return (
        <Centered sx={{ my: 5 }}>
            <CardProvider fetch={getCardData(id)} toRootOnDelete={true}>
                <Box display="flex" justifyContent="center" alignItems="flex-start">
                    <Box mr={2} width="300px">
                        <CardsStatus type={"card"} />
                        <CardMap />
                    </Box>
                    <Box height={"100%"}>
                        <CardsStatus type={"display"} />
                    </Box>
                </Box>
            </CardProvider>
        </Centered>
    )
}