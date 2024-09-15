import React from 'react'
import BulletPoint from './BulletPoint'
import { Box, Typography } from '@mui/material'

export default function Logo({ sx }) {
    return (
        <Box sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            ...sx
        }}>
            <BulletPoint />
            <Typography sx={{
                margin: "0 5px",
                fontWeight: "800"
            }}>
                YELLOWPAGES
            </Typography>
            <BulletPoint />
        </Box>
    )
}
