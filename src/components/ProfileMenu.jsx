import { Avatar, Divider, IconButton, Menu, MenuItem, Tooltip } from '@mui/material'
import React from 'react'
import useMenu from '../hooks/useMenu'
import useSignin from '../hooks/useSignin';

export default function ProfileMenu() {
    const { anchor, open, handleClick, handleClose } = useMenu();
    const { handleLogout } = useSignin();

    return (
        <>
            <Tooltip title="Account Settings">
                <IconButton
                    onClick={handleClick}
                >
                    <Avatar alt="avatar" src="/images/avatar.png" />
                </IconButton>
            </Tooltip>
            <Menu
                anchorEl={anchor}
                open={open}
                onClose={handleClose}
                transformOrigin={{ horizontal: 'right', vertical: 'top' }}
                anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
                slotProps={{
                    paper: {
                        elevation: 0,
                        sx: {
                            overflow: 'visible',
                            filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
                            mt: 1.5,
                            '& .MuiAvatar-root': {
                                width: 32,
                                height: 32,
                                ml: -0.5,
                                mr: 1,
                            },
                            '&::before': {
                                content: '""',
                                display: 'block',
                                position: 'absolute',
                                top: 0,
                                right: 14,
                                width: 10,
                                height: 10,
                                bgcolor: 'background.paper',
                                transform: 'translateY(-50%) rotate(45deg)',
                                zIndex: 0,
                            },
                        },
                    },
                }}
            >
                <MenuItem>
                    My Account
                </MenuItem>
                <Divider />
                <MenuItem onClick={() => {
                    handleLogout();
                    handleClose();
                }}>
                    Sign Out
                </MenuItem>
            </Menu>
        </>
    )
}
