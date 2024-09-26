import { Container, Grid, Typography } from '@mui/material'
import AndroidIcon from '@mui/icons-material/Android'
import React from 'react'

export default function ErrorMessage({ message }) {
    return (
        <Container>
            <Grid container spacing={2}>
                <Grid item xs={12} md={8}>
                    <Typography variant="h5" color="initial">
                        Oops... Something went wrong: {message}
                    </Typography>
                </Grid>
                <Grid item justifyContent="center">
                    <AndroidIcon color="inherit" sx={{ fontSize: "100pt" }} />
                </Grid>
            </Grid>
        </Container>
    )
}
