import Header from "./Header";
import Players from './Players';

import { Link } from "react-router-dom";

import { Button } from "react-bootstrap";

function GameLobby() {
  return (
    <div className="d-flex flex-column align-items-center"
      style={pageStyle}>
      <Header />
      <Players />
      <Link to="/about">
        <Button variant="secondary">About</Button>
      </Link>
    </div>
  );
}

const pageStyle = {
  backgroundColor: '#565051',
  height: '100%'
}

export default GameLobby;