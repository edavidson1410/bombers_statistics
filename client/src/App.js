import './assets/App.css';
import PlayerSubmission from "./pages/PlayerSubmission";
import MatchSubmission from "./pages/MatchSubmission";
import Home from './pages/Home';
import PlayerTable from './pages/PlayerTable';
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="players" element={<PlayerSubmission />} />
        <Route path="playerTable" element={<PlayerTable />} />
        <Route path="matchSubmission" element={<MatchSubmission />} />
      </Routes>
    </div>
  );
}

export default App;
