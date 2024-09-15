import { Container } from '@mui/material'
import React from 'react'
import PageHeader from '../../components/PageHeader'
import LoginForm from '../../forms/login/LoginForm'

export default function LoginPage() {
    return (
        <Container>
            <PageHeader title="Welcome to Login Page" subtitle="Here you can login" />
            <LoginForm />
        </Container>
    )
}
