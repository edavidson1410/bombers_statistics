import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';

import '../assets/NavBar.css';

const NavBar = () => {
    
    return(
        <AppBar position="static">
        <Toolbar variant="dense">
            <IconButton edge="start" color="inherit" aria-label="menu" sx={{ mr: 2 }}>
            </IconButton>
            <Typography variant="h6" color="inherit" component="div">
            St. Louis Bombers
            </Typography>
        </Toolbar>
        </AppBar>
    )
}

export default NavBar;
