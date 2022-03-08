import "./styles.css";
import 'bootstrap/dist/css/bootstrap.min.css';

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import GameLobby from "./components/GameLobby";
import About from "./components/About";


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<GameLobby />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </Router>
  );
}

export default App;
