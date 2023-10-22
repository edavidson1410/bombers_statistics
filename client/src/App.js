import './assets/App.css';
import PlayerInput from "./pages/PlayerInput";
import Home from './pages/Home';
import PlayerTable from './pages/PlayerTable';
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="players" element={<PlayerInput />} />
        <Route path="playerTable" element={<PlayerTable />} />
      </Routes>
    </div>
  );
}

export default App;
