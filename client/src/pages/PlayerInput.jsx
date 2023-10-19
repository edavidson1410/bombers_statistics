import { useState, useEffect } from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import NavBar from '../components/NavBar';

const PlayerInput = () => {

    const [player, setPlayer] = useState({
        name: "",
        position: "",
        caps: "",
        tries: "",
    })

    useEffect(() => {
        const fetchData = async()=> {
            try {
                const response = await fetch("http://localhost:3001/players");
                const json = await response.json();
                return json
            } catch (e) {
                console.log(e);
            }
        }
        fetchData()
      }, []);

    const inputFields = ["Name", "Position", "Caps", "Tries"];

    return(
        <>
            <NavBar></NavBar>
            <Box
              display="flex"
              justifyContent="center"
              alignItems="center"
              minHeight="100vh">
                <form>
                    {inputFields.map((field) => {
                        return <TextField key={field} label={field} variant="outlined" />
                    })}
                    <Button variant="contained">Submit</Button>
                </form>
            </Box>
        </>
    )
}

export default PlayerInput;