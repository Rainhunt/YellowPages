import { Container } from '@mui/material'
import React, { useEffect } from 'react'
import PageHeader from '../../components/PageHeader'
import { useNavigate } from 'react-router-dom';
import { useUser } from '../../providers/UserProvider';
import ROUTES from '../../routes/routerModel';
import NewCardForm from '../../forms/cards/NewCardForm';

export default function NewCard() {
    const { userData } = useUser();
    const navigate = useNavigate();
    useEffect(() => {
        if (!userData || !userData.isBusiness) navigate(ROUTES.ROOT, { replace: true });
    }, []);

    return (
        <Container>
            <PageHeader title="Welcome to the New Card Page" subtitle="Here you can create a new card" />
            <NewCardForm />
        </Container>
    )
}
