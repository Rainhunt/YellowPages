import { Container } from '@mui/material'
import React from 'react'
import YellowCard from './YellowCard'

export default function YellowCards({ cards }) {
    return (
        <Container sx={{ display: "flex", flexWrap: "wrap" }}>
            {cards.map((card) => (
                <YellowCard cardData={card} key={card._id} />
            ))}
        </Container>
    )
}
