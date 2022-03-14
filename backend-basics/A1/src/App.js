import "./styles.css";
import 'bootstrap/dist/css/bootstrap.min.css';

import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import { collection, doc, onSnapshot, query, orderBy } from 'firebase/firestore';

import GameLobby from "./components/GameLobby";
import About from "./components/About";

import PlayersContext from './components/PlayersContext';

import firestore from "./firebase";

function App() {
  const [players, updatePlayers] = useState([{name: "Player 1", color:"default"}, {name: "Player 2", color:"default"}, {name: "Player 3", color:"default"}, {name: "Player 4", color:"default"}]);

  useEffect(() => {
    const colors = collection(firestore, "colors");
    onSnapshot(colors, (snapshot) => {
      snapshot.forEach((doc) => {
        console.log(doc.data());
      })
    });

    const playerCollection = query(collection(firestore, "players"), orderBy("name"));
    onSnapshot(playerCollection, (snapshot) => {
      var players = [];
      snapshot.forEach((doc) => {
        players.push(doc.data());
      })
      console.log(`players: ${JSON.stringify(players)}`);
      updatePlayers(players);
    });

  }, []);

  const assignColor = (color, playerNum) => {
    //console.log(`color selected: ${color}`);
    const newAssignment = [...players];
    console.log(`newAssignment: ${JSON.stringify(newAssignment)}`);
    newAssignment[playerNum - 1].color = color;
    console.log(`new color assignment: ${newAssignment}`);
    updatePlayers(newAssignment);
  }

  return (
    <PlayersContext.Provider value={{ players, assignColor }}>
      <Router>
        <Routes>
          <Route path="/" element={<GameLobby />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </Router>
    </PlayersContext.Provider>
  );
}

export default App;
