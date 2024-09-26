import { Button, Typography } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'

export default function NavBarLink({ to, hoverColor, onClick, sx, children }) {
    return (
        <Link to={to} style={{ color: "inherit", textDecoration: "none", ...sx }}>
            <Button color="inherit" sx={{ "&:hover": { backgroundColor: hoverColor } }} disableRipple={Boolean(hoverColor)}>
                <Typography component="span" sx={{ display: "flex", alignItems: "center" }}>
                    {children}
                </Typography>
            </Button>
        </Link>
    )
}
