import {AppBar, Toolbar, Typography} from '@mui/material';
import '../assets/NavBar.css';
import logo from '../assets/bombers_logo.png';
import { Link } from 'react-router-dom';

const NavBar = () => {
    
    return(
        <AppBar position="static">
        <Toolbar variant="dense">
            <div className="logoContainer">
                <img src={logo} alt="Bombers Logo"></img>
                <Typography variant="h6" color="inherit" component="div">
                St. Louis Bombers
                </Typography>
            </div>
            <div className="linksContainer">
                <Link to="/">Home</Link>
                |
                <Link to="/playerTable">All-Time Statistics</Link>
                |
                <Link to="/players">Player Submission</Link>
                |
                <Link to="/matchSubmission">Match Submission</Link>
            </div>
            <div>
                Log In
            </div>
        </Toolbar>
        </AppBar>
    )
}

export default NavBar;
