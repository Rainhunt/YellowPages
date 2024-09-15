import React from 'react'
import { Box } from '@mui/material'

export default function Centered({ children, sx }) {
    return (
        <Box
            sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                ...sx
            }}
        >
            {children}
        </Box>
    )
}
