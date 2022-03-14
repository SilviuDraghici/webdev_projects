import "./styles.css";
import 'bootstrap/dist/css/bootstrap.min.css';

import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import { collection, doc, onSnapshot} from 'firebase/firestore';

import GameLobby from "./components/GameLobby";
import About from "./components/About";
import AssignedColorsContext from './components/AssignedColorsContext';

import firestore from "./firebase";

function App() {
  const [assignedColors, updateAssignedColors] = useState(["default", "default", "default", "default"]);

  console.log(firestore);
  const cols = collection(firestore, "colors");
  console.log(cols);

  onSnapshot(cols, (snapshot) => {
    snapshot.forEach((doc) => {
      console.log(doc.data());
    })
  });

  const assignColor = (color, playerNum) => {
    //console.log(`color selected: ${color}`);
    const newAssignment = [...assignedColors];
    newAssignment[playerNum - 1] = color;
    console.log(`new color assignment: ${newAssignment}`);
    updateAssignedColors(newAssignment);
  }

  return (
    <AssignedColorsContext.Provider value={{ assignedColors, assignColor }}>
      <Router>
        <Routes>
          <Route path="/" element={<GameLobby />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </Router>
    </AssignedColorsContext.Provider>
  );
}

export default App;
