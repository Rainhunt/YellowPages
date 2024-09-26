import { Card, CardActionArea } from '@mui/material';
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import ROUTES from '../../routes/routerModel';
import CardHeaderVariants from './CardLayout/CardHeaderVariants';
import CardBodyVariants from './CardLayout/CardBodyVariants';
import CardActionBarVariants from './CardLayout/CardActionBarVariants';

export default function YellowCard({ cardData, variant = "standard" }) {
    const navigate = useNavigate();
    const [width, setWidth] = useState(variant === "display" ? 500 : 250);
    const [height, setHeight] = useState(variant === "display" ? "100%" : "fit-content");

    return (
        <Card sx={{
            display: "flex",
            flexDirection: "column",
            width: width,
            height: height,
            m: 2
        }}>
            <CardActionArea onClick={() => navigate(`${ROUTES.CARD_INFO}/${cardData._id}`)} sx={{ flexGrow: 1 }} disableRipple={variant === "display"}>
                <CardHeaderVariants cardData={cardData} variant={variant} />
                <CardBodyVariants cardData={cardData} variant={variant} />
            </CardActionArea>
            <CardActionBarVariants cardData={cardData} variant={variant} />
        </Card>
    )
}
