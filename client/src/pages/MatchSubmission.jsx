import { useState } from 'react';
import { TextField, Button, Box } from '@mui/material';
import '../assets/MatchSubmission.css'
import NavBar from '../components/NavBar';
import { starters, subs } from '../assets/positions';

const MatchSubmission = () => {

    //states for match and player split
    const [match, setMatch] = useState({
        opponent_id: 0,
        bombers_score: 0,
        opponent_score: 0,
        year: '',
        season: '',
        date: '',
    });
      
    const [playerData, setPlayerData] = useState(starters);

    // handlers for input changes of Match and Player
    const handleMatchChange = (e) => {
        const { id, value } = e.target;
        setMatch((prevMatch) => ({
            ...prevMatch,
            [id]: value,
        }));
        console.log(match)
    };
    
    const handlePlayerChange = (e, index, field) => {
        const value = e.target.value;
        setPlayerData(prevData => {
          const updatePlayer = [...prevData];
          console.log(updatePlayer[index])
          updatePlayer[index] = {
            ...updatePlayer[index],
            [field]: value
          };
          console.log(updatePlayer)
          return updatePlayer;
        });
      };

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
                        onChange={(e) => handleMatchChange(e)} />
                </div>
                <div className="score">
                    <TextField label="Bombers Score" id="bombers_score" size="small" 
                    onChange={(e) => handleMatchChange(e)}/>
                    <TextField label="Opponent Score" id="opponent_score" size="small" 
                    onChange={(e) => handleMatchChange(e)}/>
                </div>
                <div className="date">
                    <TextField label="Year" id="year" size="small"/>
                    <TextField label="Season" id="season" size="small"/>
                    <TextField label="Date" id="date" size="small"
                    onChange={(e) => handleMatchChange(e)}/>
                </div>

                <div className="roster">
                    <ul className="starters">                
                        {starters.map((starter, index) => {
                        return(
                            <li>
                            <label htmlFor={String(starter.id)}>{starter.id}</label>
                                <TextField key={`position${starter.id}`} 
                                    label={starter.position} 
                                    id={String(starter.id)}
                                    variant="outlined" 
                                    size="small"
                                    style = {{width: "10rem"}}
                                    onChange={(e) =>
                                        handlePlayerChange(e, index, "name")
                                      } />
                                <TextField key={`tries${starter.id}`} 
                                    label="Tries" 
                                    variant="outlined" 
                                    size="small"
                                    style = {{width: "10rem"}} 
                                    onChange={(e) =>
                                        handlePlayerChange(e, index, "tries")
                                      }/>
                                <TextField key={`conversions${starter.id}`} 
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
                                <label htmlFor={String(sub.id)}>{sub.id}</label>
                                    <TextField key={`position${sub.id}`} 
                                        label={sub.position} 
                                        id={String(sub.id)}
                                        variant="outlined" 
                                        size="small"
                                        style = {{width: "10rem"}}
                                        onChange={(e) =>
                                            handlePlayerChange(e, index, "name")
                                        } />
                                    <TextField key={`tries${sub.id}`} 
                                        label="Tries" 
                                        variant="outlined" 
                                        size="small"
                                        style = {{width: "10rem"}} 
                                        onChange={(e) =>
                                            handlePlayerChange(e, index, "tries")
                                        }/>
                                    <TextField key={`conversions${sub.id}`} 
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

