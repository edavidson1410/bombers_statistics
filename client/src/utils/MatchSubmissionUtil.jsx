import { TextField } from '@mui/material';
import { starters, subs } from '../assets/positions';
import '../assets/MatchSubmission.css';



const starterRows =                        
    Object.keys(starters).map((i) => {
    return(
        <li>
            <label htmlFor={i}>{i}</label>
            <TextField key={`position${i}`} 
                label={starters[i]} 
                id={i} 
                variant="outlined" 
                size="small"
                style = {{width: "10rem"}} />
            <TextField key={`tries${i}`} 
                label="Tries"
                id={i} 
                variant="outlined" 
                size="small"
                style = {{width: "10rem"}} />
            <TextField key={`conversions${i}`} 
                label="Conversions"
                id={i} 
                variant="outlined" 
                size="small"
                style = {{width: "10rem"}} />
        </li>
    )
})

const subRows =                        
    Object.keys(subs).map((i) => {
    return(
        <li>
            <label htmlFor={i} className="posNum">{i}</label>
            <TextField key={`position${i}`} 
                label="Substitute" 
                id={i} 
                variant="outlined" 
                size="small" 
                style = {{width: "10rem"}} />
            <TextField key={`tries${i}`}
                label="Tries" 
                id={i} 
                variant="outlined" 
                size="small"
                style = {{width: "10rem"}} />
            <TextField key={`conversions${i}`}
                label="Conversions"
                id={i} 
                variant="outlined" 
                size="small"
                style = {{width: "10rem"}} />
        </li>
    )
})

export {
    starterRows,
    subRows
}