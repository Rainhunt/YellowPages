import React, { useState } from 'react'
import { useParams } from 'react-router-dom'
import Centered from '../../components/Centered';
import CardProvider, { useCards } from '../../providers/CardProvider';
import { getCardData } from '../../services/cardApi';
import CardsStatus from '../../components/Cards/CardsStatus';
import { Box, Grid, Paper } from '@mui/material';
import Map from '../../components/Maps/Map';
import Spinner from '../../components/Spinner';
import CardMap from '../../components/Maps/CardMap';

export default function ViewCard() {
    const { id } = useParams();

    return (
        <Centered sx={{ flexGrow: 1 }}>
            <CardProvider fetch={getCardData(id)}>
                <Box display="flex" justifyContent="center" alignItems="flex-start">
                    <Box mr={2}>
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