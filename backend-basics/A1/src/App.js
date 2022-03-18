import "./styles.css";
import 'bootstrap/dist/css/bootstrap.min.css';

import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import { collection, onSnapshot, query, orderBy, doc, setDoc } from 'firebase/firestore';

import GameLobby from "./components/GameLobby";
import Login from "./components/Login";
import About from "./components/About";

import ColorsContext from "./components/ColorsContext";
import PlayersContext from './components/PlayersContext';

import firestore from "./firebase";

function App() {
  const defaultColor = { name: "default", backgroundColor: "white", color: "black" };

  const [players, updatePlayers] = useState([{ name: "Player 1", color: "default" }, { name: "Player 2", color: "default" }, { name: "Player 3", color: "default" }, { name: "Player 4", color: "default" }]);
  const [colors, updateColors] = useState([defaultColor]);

  useEffect(() => {
    const colorCollection = query(collection(firestore, "colors"), orderBy("name"));
    onSnapshot(colorCollection, (snapshot) => {
      var colors = [defaultColor];
      snapshot.forEach((doc) => {
        colors.push(doc.data());
      })
      console.log(`colors: ${JSON.stringify(colors)}`);
      updateColors(colors);
    });

    const playerCollection = query(collection(firestore, "players"), orderBy("name"));
    onSnapshot(playerCollection, (snapshot) => {
      var players = new Object();
      snapshot.forEach((doc) => {
        players[doc.id] = doc.data();
      })
      console.log(`players: ${JSON.stringify(players)}`);
      updatePlayers(players);
    });

  }, []);

  const assignColor = (color, playerNum) => {
    console.log(`${players[playerNum].name} selected: ${color}`);
    const playerRef = doc(firestore, 'players', playerNum);
    setDoc(playerRef, { color: color }, { merge: true });
  }

  return (
    <ColorsContext.Provider value={colors}>
      <PlayersContext.Provider value={{ players, assignColor }}>
        <Router>
          <Routes>
            <Route path="/" element={<GameLobby />} />
            <Route path="/login" element={<Login />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </Router>
      </PlayersContext.Provider>
    </ColorsContext.Provider>
  );
}

export default App;
