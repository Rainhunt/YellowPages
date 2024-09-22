import { Container } from '@mui/material'
import React, { useEffect } from 'react'
import PageHeader from '../../components/PageHeader'
import LoginForm from '../../forms/login/LoginForm'
import { useNavigate } from 'react-router-dom';
import { useUser } from '../../providers/UserProvider';
import ROUTES from '../../routes/routerModel';
import SignupForm from '../../forms/signup/SignupForm';

export default function SignupPage() {
    const { userData } = useUser();
    const navigate = useNavigate();
    useEffect(() => {
        if (userData) navigate(ROUTES.ROOT, { replace: true });
    }, []);

    return (
        <Container>
            <PageHeader title="Welcome to Signup Page" subtitle="Here you can signup" />
            <SignupForm />
        </Container>
    )
}
