import React from 'react'
import Main from './main/Main'
import Header from './header/Header'
import { Box } from '@mui/material'

export default function Layout({ children }) {
    return (
        <Box
            sx={{
                width: "100vw",
                height: "100vh",
                maxWidth: "100%",
                display: "flex",
                flexDirection: "column"
            }}
        >
            <Header />
            <Main
                sx={{
                    flexGrow: 1
                }}>
                {children}
            </Main>
        </Box>
    )
}
