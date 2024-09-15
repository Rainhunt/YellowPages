import DarkModeIcon from '@mui/icons-material/DarkMode';
import React from 'react'
import { useTheme } from '../../providers/AppThemeProvider';
import { useUser } from '../../providers/UserProvider';
import ProfileButton from '../../components/profileButton';
import SigninButtons from '../../components/SigninButtons';
import { Box, IconButton } from '@mui/material'

export default function RightNavBar() {
    const { toggleDarkMode } = useTheme();
    const { userData } = useUser();
    return (
        <Box sx={{
            display: "flex",
            alignItems: "center"
        }}>
            <IconButton
                onClick={toggleDarkMode}
            >
                <DarkModeIcon />
            </IconButton>
            {userData ? <ProfileButton /> : <SigninButtons />}
        </Box>
    )
}
