import { Link } from "react-router-dom";
import { useContext } from 'react';

import PlayersContext from './PlayersContext';

const About = () => {
    const { players, } = useContext(PlayersContext);
    return (
        <>
            <p className="ms-2">*TODO* (Busy playing Elden Ring!) </p>
            {Object.keys(players).map((key) =>
                <p className="ms-2" key={key}>{players[key].name}: {players[key].color} </p>)
            }
            <Link className="ms-2" to="/">Back to Game Lobby</Link>
        </>
    )
}

export default About