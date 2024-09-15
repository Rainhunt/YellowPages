import React from 'react'
import NavBarLink from './NavBarLink'
import ROUTES from '../routes/routerModel'
import { Box } from '@mui/material'

export default function SigninButtons() {
    return (
        <Box>
            <NavBarLink to={ROUTES.SIGNUP}>Signup</NavBarLink>
            <NavBarLink to={ROUTES.LOGIN}>Login</NavBarLink>
        </Box>
    )
}
