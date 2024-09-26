import { Container, Grid, Typography } from '@mui/material'
import React from 'react'
import { useNavigate } from 'react-router-dom'
import FormButton from './FormButton';
import LoopIcon from '@mui/icons-material/Loop';
import ROUTES from '../../routes/routerModel';

export default function Form({ validateForm, onReset, onSubmit, title, sx, children }) {
    const navigate = useNavigate();

    return (
        <Container
            component="form"
            sx={{ mt: 2, p: { xs: 1, xm: 2 }, ...sx }}
            noValidate
            onSubmit={onSubmit}
        >
            <Typography align="center" component="h1" variant="h5" mb={2}>
                {title}
            </Typography>

            <Grid container spacing={1}>
                {children}
            </Grid>

            <Grid container spacing={1} my={2} direction="row" width="100">
                <Grid item xs={12} sm={4} sx={{ display: "flex", justifyContent: "center" }}>
                    <FormButton color="error" onClick={() => navigate(ROUTES.ROOT)}>Cancel</FormButton>
                </Grid>

                <Grid item xs={12} sm={4} sx={{ display: "flex", justifyContent: "center" }}>
                    <FormButton onClick={onReset}> <LoopIcon /> </FormButton>
                </Grid>

                <Grid item xs={12} sm={4} sx={{ display: "flex", justifyContent: "center" }}>
                    <FormButton onClick={onSubmit} disabled={!validateForm()}> Submit </FormButton>
                </Grid>
            </Grid>
        </Container>
    )
}
