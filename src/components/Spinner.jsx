import React from 'react'
import CircularProgress from '@mui/material/CircularProgress';

export default function Spinner({ color = "secondary", size = "40px" }) {
    return (
        <CircularProgress color={color} size={size} />
    )
}