import { Card, CardActionArea } from '@mui/material';
import React from 'react'
import { useNavigate } from 'react-router-dom';
import ROUTES from '../../routes/routerModel';
import StandardActionBar from './StandardVariant/StandardActionBar';
import StandardBody from './StandardVariant/StandardBody';
import StandardHeader from './StandardVariant/StandardHeader';

export default function YellowCard({ cardData }) {
    const navigate = useNavigate();

    return (
        <Card sx={{
            display: "flex",
            flexDirection: "column",
            width: 250,
            m: 2
        }}>
            <CardActionArea onClick={() => navigate(`${ROUTES.CARD_INFO}/${cardData._id}`)} sx={{ flexGrow: 1 }}>
                <StandardHeader
                    image={cardData.image.url}
                    alt={cardData.image.alt}
                    title={cardData.title}
                    subtitle={cardData.subtitle}
                />
                <StandardBody
                    phone={cardData.phone}
                    address={cardData.address}
                    serialNum={cardData.bizNumber}
                />
            </CardActionArea>
            <StandardActionBar
                cardId={cardData._id}
                likes={cardData.likes}
            />
        </Card>
    )
}
