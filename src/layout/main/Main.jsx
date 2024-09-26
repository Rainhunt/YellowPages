import React from 'react'
import { Box } from '@mui/material'
import ScrollToTop from '../../components/ScrollToTop'
import { useTheme } from '../../providers/AppThemeProvider'

export default function Main({ children, sx }) {
    const { isDark } = useTheme();
    return (
        <Box sx={{
            minHeight: "fit-content",
            display: "flex",
            flexDirection: "column",
            backgroundColor: isDark ? "#143041" : "#FBFBFB",
            ...sx
        }}>
            {children}
            <ScrollToTop />
        </Box>
    )
}
