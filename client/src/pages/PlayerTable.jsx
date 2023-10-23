import NavBar from '../components/NavBar';
import useFetch from '../hooks/useFetch';
import { DataGrid } from '@mui/x-data-grid';


const PlayerTable = () => {

    const fetchAPI = useFetch("http://localhost:3001");
    const players = fetchAPI.data;
    const loading = fetchAPI.loading;
    console.log(players);

    return(
        <>
            <NavBar />
            <h1>Player Table</h1>
            {loading ? "Loading..." : <DataGrid
                columns={[{ field: 'name', flex: 1}, {field: 'position', flex: 1}, {field: 'caps', flex: 1}, {field: 'tries', flex: 1}]}
                rows={players}
                sx={{  }}
            />}
        </>

    )
}

export default PlayerTable;