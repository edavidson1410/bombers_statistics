import { useEffect, useState } from 'react';
import { TextField, Button, Box, RadioGroup, FormControlLabel, Radio } from '@mui/material';
import '../assets/MatchSubmission.css'
import NavBar from '../components/NavBar';
import useFetch from '../hooks/useFetch';
import { starters, subs } from '../assets/positions';

const MatchSubmission = () => {

    //fetch opponent and playerName data for dropdowns/autocomplete
    
    const opponentDB = useFetch("http://localhost:3001/opponents");
    const playerDB = useFetch("http://localhost:3001/players");
    const opponentList = opponentDB.data;
    const playerList = playerDB.data;
    const oppponentLoading = opponentDB.loading;
    const playerLoading = playerDB.loading;

    //states for match and player split
    const [match, setMatch] = useState({
        opponent_id: 0,
        bombers_score: 0,
        opponent_score: 0,
        date: '',
        home_away: 0
    });
      
    const [playerData, setPlayerData] = useState(starters);

    // handlers for input changes of Match and Player
    const handleMatchChange = (e) => {
        const { id, value } = e.target;
        setMatch((prevMatch) => ({
            ...prevMatch,
            [id]: value,
        }));
    };
    
    const handlePlayerChange = (e, index, field) => {
        const value = e.target.value;
        setPlayerData(prevData => {
          const updatePlayer = [...prevData];
          updatePlayer[index] = {
            ...updatePlayer[index],
            [field]: value
          };
          return updatePlayer;
        });

    };

    //fetch db data and auto completes search
    const onSearch = (e, searchTerm) => {
        searchTerm = e.target.value;
        console.log("search", searchTerm)
    }

    // Post Submit for both match and players
    const handleSubmitPost = async (e) => {
        e.preventDefault();
        const requestBody = {
            match,
            playerData,
        };
        console.log(requestBody)
        
        try {
            const response = await fetch('http://localhost:3001/matchSubmission', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(requestBody),
            });
        
            if (response.ok) {
            console.log('Data submitted successfully!');
            } else {
            console.error('Failed to submit data.');
            }
        } catch (error) {
            console.error('Error:', error);
        }
    };
    

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
                        onChange={(e) => {
                            onSearch(e)
                            handleMatchChange(e)
                        }} />
                    <div className="dropdown">
                        {opponentList.filter(opponent => {
                            const searchTerm = match.opponent_id.toLowerCase();
                            const opponentName = opponent.name.toLowerCase();
                            return searchTerm && opponentName.startsWith(searchTerm)
                        })
                        .map((opponent) => {
                            console.log(opponent)
                        })
                    }
                    </div>
                </div>
                <div className="score">
                    <TextField label="Bombers Score" id="bombers_score" size="small" 
                    onChange={(e) => handleMatchChange(e)}/>
                        <TextField label="Opponent Score" id="opponent_score" size="small" 
                        onChange={(e) => handleMatchChange(e)}/>
                </div>
                <div className="date">
                    {/* <TextField label="Year" id="year" size="small"/>
                    <TextField label="Season" id="season" size="small"/> */}
                    <TextField label="Date" id="date" size="small"
                    onChange={(e) => handleMatchChange(e)}/>
                </div>
                <div className="home_away">
                    <RadioGroup        
                        row
                        onChange={(e) => handleMatchChange(e)}>
                        <FormControlLabel value="0" control={<Radio id="home_away" />} label="Home"/>
                        <FormControlLabel value="1" control={<Radio id="home_away" />} label="Away"/>
                    </RadioGroup>
                </div>

                <div className="roster">
                    <ul className="starters">                
                        {starters.map((starter, index) => {
                        return(
                            <li>
                            <label htmlFor={String(starter.position_id)}>{starter.position_id}</label>
                                <TextField key={`position${starter.position_id}`} 
                                    label={starter.position} 
                                    id={String(starter.position_id)}
                                    variant="outlined" 
                                    size="small"
                                    style = {{width: "10rem"}}
                                    onChange={(e) =>
                                        handlePlayerChange(e, index, "player_id")
                                      } />
                                <TextField key={`tries${starter.position_id}`} 
                                    label="Tries" 
                                    variant="outlined" 
                                    size="small"
                                    style = {{width: "10rem"}}
                                    onChange={(e) =>
                                        handlePlayerChange(e, index, "tries")
                                      }/>
                                <TextField key={`conversions${starter.position_id}`} 
                                    label="Conversions"
                                    variant="outlined" 
                                    size="small"
                                    style = {{width: "10rem"}} 
                                    onChange={(e) =>
                                        handlePlayerChange(e, index, "conversions")
                                      }/>
                            </li>
                            )
                        })}
                    </ul>
                    <ul className="subs">
                        {subs.map((sub, index) => {
                            return(
                                <li >
                                <label htmlFor={String(sub.position_id)}>{sub.position_id}</label>
                                    <TextField key={`position${sub.position_id}`} 
                                        label={sub.position} 
                                        id={String(sub.position_id)}
                                        variant="outlined" 
                                        size="small"
                                        style = {{width: "10rem"}}
                                        onChange={(e) =>
                                            handlePlayerChange(e, index, "name")
                                        } />
                                    <TextField key={`tries${sub.position_id}`} 
                                        label="Tries" 
                                        variant="outlined" 
                                        size="small"
                                        style = {{width: "10rem"}} 
                                        onChange={(e) =>
                                            handlePlayerChange(e, index, "tries")
                                        }/>
                                    <TextField key={`conversions${sub.position_id}`} 
                                        label="Conversions"
                                        variant="outlined" 
                                        size="small"
                                        style = {{width: "10rem"}} 
                                        onChange={(e) =>
                                            handlePlayerChange(e, index, "conversions")
                                        }/>
                                </li>
                                )
                            })}
                    </ul>
                </div>

                <Button type="submit" color="accent" variant="contained" >Submit</Button>
            </form>
        </Box>
    </>
    )
}

export default MatchSubmission;

