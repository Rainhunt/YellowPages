import React, { useEffect, useState } from 'react'
import Centered from '../../components/Centered'
import Map from '../../components/Maps/Map'
import { getCoordinatesFromAddress } from '../../services/mapApi'
import Spinner from '../../components/Spinner';

export default function AboutPage() {
    const [pos, setPos] = useState([]);
    useEffect(() => {
        const getCoordinates = async () => {
            const coords = await getCoordinatesFromAddress({
                "state": "IL",
                "country": "israel",
                "city": "arad",
                "street": "shoham",
                "houseNumber": 5,
                "zip": 8920435,
                "_id": "66f2fcec00b4d006b4255f70"
            });
            setPos(coords);
        }
        getCoordinates();
    }, []);


    return (
        <Centered sx={{ flexGrow: 1 }}>
            {typeof pos[0] === "number" && typeof pos[1] === "number" && <Map pos={pos} popup={<Spinner />} />}
        </Centered>
    )
}
