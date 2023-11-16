import { useState } from 'react';
import { TextField, Button, Box } from '@mui/material';
import '../assets/MatchSubmission.css'
import NavBar from '../components/NavBar';
import { handleInputChange, starterRows, subRows } from '../utils/MatchSubmissionUtil';

const MatchSubmission = () => {

    const [match, setMatch] = useState({
        match_id: 0,
        date: 0,
        home_away: 0,
        bombers_score: 0,
        opponent_score: 0,
        opponent_id: 0
    })

    const [gamestats, setGamestats] = useState([
        { gamestat_id: 0,
        player_id: 0,
        match_id: 0,
        position_id: 0,
        tries: 0,
        converstions: 0 }
    ])

    const [playerData, setPlayerData] = useState({

    })
      
    // used for match data input change
    const handleInputChange = (e, setState, stat) => {
        const newStat = {...stat};
        newStat[e.target.id] = e.target.value;
        setState(newStat);
    }

    // Handle changes in player statistics
    const handlePlayerChange = (index, e) => {
    const { name, value } = e.target;
    setPlayerData((prevStats) => ({
        ...prevStats,
        players: [
        ...prevStats.players.slice(0, index),
        {
            ...prevStats.players[index],
            [name]: value,
        },
        ...prevStats.players.slice(index + 1),
        ],
    }));
    };

    const handleSubmitPost = async (e) => {
        const response = await fetch('http://localhost:3001/matches', 
        {
            method: 'POST',
            headers: {
                "content-type": "application/json"
              },
            body: JSON.stringify(match)
        })
        console.log(response.body)
        return response;
    }
    

    return(
        <>
        <NavBar />
        <Box
          display="flex"
          justifyContent="center"
          minHeight="100vh">
            <form onSubmit={ handleSubmitPost }>

                <div className="matchup">
                    <h1>St. Louis Bombers</h1>
                    <h1> vs.</h1>
                    <TextField 
                        label="Opponent" 
                        id="opponent_id" 
                        size="small"
                        onChange={(e) => handleInputChange(e, setMatch, match)} />
                </div>

                <div className="score">
                    <TextField label="Bombers Score" id="bombers_score" size="small" 
                    onChange={(e) => handleInputChange(e, setMatch, match)}/>
                    <TextField label="Opponent Score" id="opponent_score" size="small" 
                    onChange={(e) => handleInputChange(e, setMatch, match)}/>
                </div>

                <div className="date">
                    <TextField label="Year" id="year" size="small"/>
                    <TextField label="Season" id="season" size="small"/>
                    <TextField label="Date" id="date" size="small"
                    onChange={(e) => handleInputChange(e, setMatch, match)}/>
                </div>

                <div className="roster">
                    <ul className="starters">                
                        {starterRows}
                    </ul>
                    <ul className="subs">
                        {subRows}
                    </ul>
                </div>

                <Button color="accent" variant="contained" >Submit</Button>
            </form>
        </Box>
    </>
    )
}

export default MatchSubmission;

