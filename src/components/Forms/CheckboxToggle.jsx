import { Checkbox, FormControlLabel } from '@mui/material'
import React from 'react'

export default function CheckboxToggle({ label, name, defaultValue, onChange }) {
    return (
        <FormControlLabel
            label={label}
            name={name}
            control={<Checkbox value={defaultValue} color="secondary" />}
            onChange={onChange}
        />
    )
}