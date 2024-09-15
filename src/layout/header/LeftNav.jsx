import React from 'react'
import { useLeftNav } from '../../providers/LayoutProvider.jsx/DrawerProvider'
import { Divider, Drawer, IconButton } from '@mui/material';
import { ArrowBack } from '@mui/icons-material';
import NavBarLink from '../../components/NavBarLink';


export default function LeftNav() {
    const { isDrawerOpen, toggleDrawerOpen } = useLeftNav();

    return (
        <Drawer open={isDrawerOpen} onClose={toggleDrawerOpen}>
            <IconButton
                size="large"
                color="inherit"
                onClick={toggleDrawerOpen}
            >
                <ArrowBack />
            </IconButton>
            <NavBarLink>Add Post</NavBarLink>
            <NavBarLink>Login</NavBarLink>
            <NavBarLink>Sign Up</NavBarLink>
            <NavBarLink>FAQs</NavBarLink>
            <Divider />
            <NavBarLink>Likes</NavBarLink>
            <NavBarLink>Mine</NavBarLink>
            <Divider />
        </Drawer>
    )
}
