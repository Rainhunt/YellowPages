import React from 'react'
import { useLeftNav } from '../../providers/LayoutProvider/DrawerProvider'
import { Divider, Drawer, IconButton } from '@mui/material';
import { ArrowBack } from '@mui/icons-material';
import NavBarLink from '../../components/NavBarLink';
import ROUTES from '../../routes/routerModel';
import { useUser } from '../../providers/UserProvider';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import SwitchAccountIcon from '@mui/icons-material/SwitchAccount';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import AssignmentIndIcon from '@mui/icons-material/AssignmentInd';

const marginRight = 2

export default function LeftNav() {
    const { userData } = useUser();
    const { isDrawerOpen, toggleDrawerOpen } = useLeftNav();

    return (
        <Drawer open={isDrawerOpen} onClose={toggleDrawerOpen}>
            <IconButton
                size="large"
                color="inherit"
                onClick={toggleDrawerOpen}
                sx={{ width: "350px", maxWidth: "" }}
            >
                <ArrowBack />
            </IconButton>
            {userData && userData.isBusiness && <NavBarLink to={ROUTES.CREATE_CARD}>
                <AddCircleIcon sx={{ mr: marginRight }} />
                Add Post
            </NavBarLink>}
            {!userData && <>
                <NavBarLink to={ROUTES.SIGNUP}>
                    <PersonAddIcon sx={{ mr: marginRight }} />
                    Sign Up
                </NavBarLink>
                <NavBarLink to={ROUTES.LOGIN}>
                    <SwitchAccountIcon sx={{ mr: marginRight }} />
                    Login
                </NavBarLink>
            </>}
            {/* <NavBarLink>FAQs</NavBarLink> */}
            {userData && <>
                <Divider />
                <NavBarLink to={ROUTES.FAV_CARDS}>
                    <ThumbUpIcon sx={{ mr: marginRight }} />
                    Likes
                </NavBarLink>
            </>}
            {userData && userData.isBusiness && <NavBarLink to={ROUTES.MY_CARDS}>
                <AssignmentIndIcon sx={{ mr: marginRight }} />
                Mine
            </NavBarLink>}

            <Divider />
        </Drawer>
    )
}
