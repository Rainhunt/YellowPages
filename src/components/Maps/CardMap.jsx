import React, { useEffect, useState } from 'react'
import { useCards } from '../../providers/CardProvider';
import { getCoordinatesFromAddress } from '../../services/mapApi';
import Map from './Map';
import Spinner from '../Spinner';
import ErrorMessage from '../ErrorMessage';
import { Paper } from '@mui/material';

export default function CardMap() {
    const { searchCards } = useCards();
    const [pos, setPos] = useState([]);
    useEffect(() => {
        const getCoordinates = async () => {
            try {
                const coords = await getCoordinatesFromAddress(searchCards.address);
                setPos(coords);
            } catch (err) {
                console.log(err);
            }
        }
        getCoordinates();
    }, [searchCards]);

    if (!pos) {
        return <Spinner />
    } else if (typeof pos[0] === "number" && typeof pos[1] === "number") {
        return (
            <Paper sx={{ p: 1 }}>
                <Map pos={pos} popup={<Spinner />} />
            </Paper>
        )
    } else {
        return <ErrorMessage message={"Location not found"} />
    }
}
