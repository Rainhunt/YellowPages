import { TextField } from '@mui/material'
import React from 'react'

export default function Field({ label, defaultValue, type = "search", onChange, error, required = false }) {
    return (
        <TextField
            id={label}
            name={label}
            label={label}
            type={type}
            variant="standard"
            value={defaultValue}
            helperText={error}
            onChange={onChange}
            error={Boolean(error)}
            required={required}
            fullWidth
        />
    )
}
