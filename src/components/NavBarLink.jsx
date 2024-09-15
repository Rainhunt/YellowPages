import { Button, Typography } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'

export default function NavBarLink({ to, hoverColor, sx, children }) {
    return (
        <Link to={to} style={{ textDecoration: "none", color: "#000", ...sx }}>
            <Button color="inherit" sx={{ "&:hover": { backgroundColor: hoverColor } }} disableRipple={Boolean(hoverColor)}>
                <Typography component="span">
                    {children}
                </Typography>
            </Button>
        </Link>
    )
}
