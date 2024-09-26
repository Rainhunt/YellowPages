import { Container } from '@mui/material'
import React from 'react'
import YellowCard from './YellowCard'

export default function YellowCards({ cards }) {
    return (
        <Container sx={{ display: "flex", flexWrap: "wrap", mb: 10, width: { xs: "300px", sm: "600px", md: "900px", xl: "1180px" } }}>
            {cards.map((card) => (
                <YellowCard cardData={card} key={card._id} />
            ))}
        </Container>
    )
}
