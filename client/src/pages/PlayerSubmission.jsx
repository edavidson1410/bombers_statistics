import { useState } from 'react';
import { TextField, Button, Box } from '@mui/material';
import NavBar from '../components/NavBar';

const PlayerInput = () => {

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

    const handleSubmitPost = async (e) => {
        const response = await fetch('http://localhost:3001/playersInput', 
        {
            method: 'POST',
            headers: {
                "content-type": "application/json"
              },
            body: JSON.stringify(player)
        })
        console.log(response.body)
        return response;
    }


    const inputFields = ["name", "position", "caps", "tries"];

    return(
        <>
            <NavBar />
            <Box
              display="flex"
              justifyContent="center"
              alignItems="center"
              minHeight="100vh">
                <form>
                    {inputFields.map((field) => {
                        return <TextField key={field} label={field} id={field} variant="outlined" onChange={(e) => handleInputChange(e)} />
                    })}
                    <Button color="accent" variant="contained" onClick={handleSubmitPost}>Submit</Button>
                </form>
            </Box>
        </>
    )
}

export default PlayerInput;