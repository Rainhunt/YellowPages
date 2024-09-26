import { Button } from '@mui/material'
import React from 'react'

export default function FormButton({ children, variant = "contained", size = "medium", color = "primary", onClick, disabled = false }) {
    return (
        <Button
            variant={variant}
            size={size}
            color={color}
            onClick={onClick}
            disabled={disabled}
            sx={{ width: "100%" }}
        >
            {children}
        </Button>
    )
}
