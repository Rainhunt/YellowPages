import React from 'react'
import MenuIcon from '@mui/icons-material/Menu';
import Logo from '../../components/Logo';
import { useLeftNav } from '../../providers/LayoutProvider.jsx/DrawerProvider';
import NavBarLink from '../../components/NavBarLink';
import ROUTES from '../../routes/routerModel';
import { Box, IconButton } from '@mui/material'

export default function LeftNavBar() {
    const { toggleDrawerOpen } = useLeftNav();

    return (
        <Box sx={{
            display: "flex",
            alignItems: "center"
        }}>
            <IconButton
                size="large"
                color="inherit"
                onClick={toggleDrawerOpen}
            >
                <MenuIcon />
            </IconButton>
            <NavBarLink to={ROUTES.ROOT} hoverColor={"transparent"}>
                <Logo
                    sx={{
                        mx: 5
                    }}
                />
            </NavBarLink>
            <NavBarLink to={ROUTES.ABOUT}>About</NavBarLink>
            <NavBarLink to={ROUTES.FAV_CARDS}>Fav</NavBarLink>
            <NavBarLink to={ROUTES.MY_CARDS}>Mine</NavBarLink>
            <NavBarLink>Sandbox</NavBarLink>
        </Box>
    )
}
