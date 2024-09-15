import React from 'react'
import { Box } from '@mui/material'

export default function Main({ children, sx }) {
    return (
        <Box sx={{
            minHeight: "fit-content",
            display: "flex",
            flexDirection: "column",
            // backgroundColor: "#e3f2fd",
            ...sx
        }}>
            {children}
        </Box>
    )
}
