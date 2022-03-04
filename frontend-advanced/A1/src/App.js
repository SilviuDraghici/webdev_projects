import "./styles.css";

import 'bootstrap/dist/css/bootstrap.min.css';

import Header from "./components/Header";
import PlayerCard from './components/PlayerCard';

function App() {
  return (
    <div className="d-flex flex-column align-items-center"
      style={pageStyle}>
      <Header />

      <div className="row justify-content-evenly mt-4">
        <PlayerCard name="Player 1" />
        <PlayerCard name="Player 2" />
        <PlayerCard name="Player 3" />
        <PlayerCard name="Player 4" />
      </div>
    </div>
  );
}


const pageStyle = {
  backgroundColor: '#565051',
  height: '100%'
}

export default App;
