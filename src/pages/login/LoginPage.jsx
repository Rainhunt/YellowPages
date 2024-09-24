import { Container } from '@mui/material'
import React, { useEffect } from 'react'
import PageHeader from '../../components/PageHeader'
import LoginForm from '../../forms/login/LoginForm'
import { useNavigate } from 'react-router-dom';
import { useUser } from '../../providers/UserProvider';
import ROUTES from '../../routes/routerModel';

export default function LoginPage() {
    //validate page auth
    const { userData } = useUser();
    const navigate = useNavigate();
    useEffect(() => {
        if (userData) navigate(ROUTES.ROOT, { replace: true });
    }, []);

    return (
        <Container>
            <PageHeader title="Welcome to Login Page" subtitle="Here you can login" />
            <LoginForm />
        </Container>
    )
}
