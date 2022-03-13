import { Link } from "react-router-dom";
import { useContext } from 'react';

import AssignedColorsContext from './AssignedColorsContext';

const About = () => {
    const { assignedColors, assignColor } = useContext(AssignedColorsContext);
    return (
        <>
            <p className="ms-2">*TODO* (Busy playing Elden Ring!) </p>
            <p className="ms-2">player 1: {assignedColors[0]} </p>
            <p className="ms-2">player 2: {assignedColors[1]} </p>
            <p className="ms-2">player 3: {assignedColors[2]} </p>
            <p className="ms-2">player 4: {assignedColors[3]} </p>
            <Link className="ms-2" to="/">Back to Game Lobby</Link>
        </>
    )
}

export default About