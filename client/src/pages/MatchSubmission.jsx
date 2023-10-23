import { useState } from 'react';
import { TextField, Button, Box } from '@mui/material';
import '../assets/MatchSubmission.css'
import NavBar from '../components/NavBar';
import { starters, subs } from '../assets/positions';
import theme from '../assets/MatchSubmission.css';

const MatchSubmission = () => {

    const [player, setPlayer] = useState({
        name: "",
        position: "",
        caps: "",
        tries: "",
    })

    const handleInputChange = (e) => {
        const newPlayer = {...player};
        newPlayer[e.target.id] = e.target.value;
        setPlayer(newPlayer);
    }

    const starterRows =                        
        Object.keys(starters).map((i) => {
        return(
            <li>
                <label htmlFor={i}>{i}</label>
                <TextField key={i} 
                    label={starters[i]} 
                    id={i} 
                    variant="outlined" 
                    size="small"
                    onChange={(e) => handleInputChange(e)} />
            </li>
        )
    })

    const subRows =                        
        Object.keys(subs).map((i) => {
        return(
            <li>
                <label htmlFor={i}>{i}</label>
                <TextField key={i} 
                    label="Substitute" 
                    id={i} variant="outlined" 
                    size="small" 
                    onChange={(e) => handleInputChange(e)} />
            </li>
        )
    })
    

    return(
        <>
        <NavBar />
        <Box
          display="flex"
          justifyContent="center"
          minHeight="100vh">
            <form>
                <div className="matchup">
                    <h1>St. Louis Bombers</h1>
                    <h1> vs.</h1>
                    <TextField 
                        label="Opponent" 
                        id="opponent" 
                        size="small" 
                        InputProps={{className: theme}}/>
                </div>
                <div className="date">
                    <TextField label="Year" id="year" size="small"/>
                    <TextField label="Season" id="season" size="small"/>
                    <TextField label="Date" id="date" size="small"/>
                </div>
                <div className="roster">
                    <ul className="starters">                
                        {starterRows}
                    </ul>
                    <ul className="subs">
                        {subRows}
                    </ul>
                </div>
                <Button color="accent" variant="contained">Submit</Button>
            </form>
        </Box>
    </>
    )
}

export default MatchSubmission;

