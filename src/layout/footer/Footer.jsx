import { BottomNavigation, BottomNavigationAction, Paper } from '@mui/material'
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import FavoriteOutlinedIcon from '@mui/icons-material/FavoriteOutlined';
import AssignmentIndIcon from '@mui/icons-material/AssignmentInd';
import { Link } from 'react-router-dom';
import ROUTES from '../../routes/routerModel';
import { useUser } from '../../providers/UserProvider';
import { useTheme } from '../../providers/AppThemeProvider';

export default function Footer() {
    const { userData } = useUser();
    const { isDark } = useTheme();
    return (
        <Paper sx={{ position: 'fixed', bottom: 0, left: 0, right: 0 }} elevation={3}>
            <BottomNavigation sx={{ display: "flex", justifyContent: "space-evenly", alignItems: "center", backgroundColor: isDark ? "paper" : "primary.main" }}>
                <BottomNavigationAction component={Link} to={ROUTES.ABOUT} icon={<InfoOutlinedIcon color="inherit" fontSize="large" />} />
                {userData && <BottomNavigationAction component={Link} to={ROUTES.FAV_CARDS} icon={<FavoriteOutlinedIcon color="inherit" fontSize="large" />} />}
                {userData && userData.isBusiness && <BottomNavigationAction component={Link} to={ROUTES.MY_CARDS} icon={<AssignmentIndIcon color="inherit" fontSize="large" />} />}
            </BottomNavigation>
        </Paper>
    )
}
