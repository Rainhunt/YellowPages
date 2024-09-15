import { AppBar, Drawer, Toolbar } from '@mui/material'
import React from 'react'
import LeftNavBar from './LeftNavBar';
import RightNavBar from './RightNavBar';

export default function TopNav() {
    return (
        <AppBar position="sticky">
            <Toolbar
                elevate={10}
                sx={{ justifyContent: "space-evenly" }}
            >
                <LeftNavBar />
                <RightNavBar />
            </Toolbar>
        </AppBar>
    )
}
