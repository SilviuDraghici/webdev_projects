import "./styles.css";
import 'bootstrap/dist/css/bootstrap.min.css';

import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import { onAuthStateChanged } from "firebase/auth";
import { collection, onSnapshot, query, orderBy, doc, getDoc } from 'firebase/firestore';
import { httpsCallable } from "firebase/functions";
import { ref, } from "firebase/storage";

import GameLobby from "./components/GameLobby";
import Login from "./components/Login";
import About from "./components/About";

import UserContext from "./components/UserContext";
import ColorsContext from "./components/ColorsContext";
import PlayersContext from './components/PlayersContext';

import { auth, firestore, functions, storage } from "./firebase";


function App() {
  const defaultColor = { name: "default", backgroundColor: "white", color: "black" };

  const [user, setUser] = useState({ user: null, isAdmin: false });

  const [players, updatePlayers] = useState([{ name: "Player 1", color: "default" }, { name: "Player 2", color: "default" }, { name: "Player 3", color: "default" }, { name: "Player 4", color: "default" }]);
  const [colors, updateColors] = useState([defaultColor]);

  useEffect(() => {
    onAuthStateChanged(auth, async (user) => {
      if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/firebase.User
        const docRef = doc(firestore, "admins", user.uid);
        const docSnap = await getDoc(docRef);
        if (docSnap.exists()) {
          console.log("Admin!");
        } else {
          // doc.data() will be undefined in this case
          console.log("Not an Admin!");
        }
        setUser({ user:user, isAdmin: docSnap.exists() });
      } else {
        console.log("User signed out");
        setUser({ user: null, isAdmin: false });
      }
    });

    const colorCollection = query(collection(firestore, "colors"), orderBy("name"));
    onSnapshot(colorCollection, (snapshot) => {
      var colors = [defaultColor];
      snapshot.forEach((doc) => {
        colors.push(doc.data());
      })
      console.log(`Received colors list from server!`);
      updateColors(colors);
    });

    const playerCollection = query(collection(firestore, "players"), orderBy("name"));
    onSnapshot(playerCollection, (snapshot) => {
      var players = {};
      snapshot.forEach((doc) => {
        players[doc.id] = doc.data();
      })
      console.log(`Received players list from server!`);
      updatePlayers(players);
    });

  }, []);

  const assignColor = (color, playerNum) => {
    console.log(`Attempting selectColor`);

    const selectColor = httpsCallable(functions, 'selectColor');
    selectColor({ uid: playerNum, color: color }).then((result) => {
      console.log(`${players[playerNum].name} selected: ${color}`);
    }).catch((error) => {
      console.log(`Error selecting color: ${error.message}`);
    });
  }
  
  return (
    <UserContext.Provider value={user}>
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
    </UserContext.Provider>
  );
}

export default App;
