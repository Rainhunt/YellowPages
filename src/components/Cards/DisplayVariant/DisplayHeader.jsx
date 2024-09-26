import { CardHeader, CardMedia, Divider, Typography } from '@mui/material'
import React from 'react'

export default function DisplayHeader({ title, subtitle }) {
    return (
        <>
            <CardHeader title={title} subheader={subtitle}
                titleTypographyProps={{
                    fontSize: 48,
                    textAlign: "center"
                }}
                subheaderTypographyProps={{
                    fontSize: 32,
                }} />
            <Divider variant="middle" />
        </>
    )
}
