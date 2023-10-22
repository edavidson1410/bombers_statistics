import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import '../assets/NavBar.css';
import logo from '../assets/bombers_logo.png';
import { Link } from 'react-router-dom';

const NavBar = () => {
    
    return(
        <AppBar position="static">
        <Toolbar variant="dense">
            <img src={logo} alt="Bombers Logo"></img>
            <Typography variant="h6" color="inherit" component="div">
            St. Louis Bombers
            </Typography>
            <Link to="/">Home</Link>
            <Link to="/players">Player Input</Link>
            <Link to="/playerTable">Player Table</Link>
        </Toolbar>
        </AppBar>
    )
}

export default NavBar;
