import NavBar from '../components/NavBar';
import useFetch from '../hooks/useFetch';


const PlayerTable = () => {

    const players = useFetch("http://localhost:3001/players");
    console.log(players);


    return(
        <>
            <NavBar />
            <h1>Player Table</h1>
        </>

    )
}

export default PlayerTable;