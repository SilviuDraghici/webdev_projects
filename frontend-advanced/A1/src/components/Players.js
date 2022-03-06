import { useState } from 'react';

import PlayerCard from './PlayerCard';

const Players = () => {
    const [assignedColors, updateAssignedColors] = useState(["white", "white", "white", "white"]);

    const assignColor = (color, playerNum) => {
        //console.log(`color selected: ${color}`);
        updateAssignedColors(assignment => {
            assignment[playerNum - 1] = color;
            console.log(`new color assignment: ${assignment}`);
            return assignment;
        });
    }

    return (
        <div className="row justify-content-evenly mt-4">
            <PlayerCard name="Player 1" playerNum={1} assignColor={assignColor} assignedColors={assignedColors}/>
            <PlayerCard name="Player 2" playerNum={2} assignColor={assignColor} assignedColors={assignedColors}/>
            <PlayerCard name="Player 3" playerNum={3} assignColor={assignColor} assignedColors={assignedColors}/>
            <PlayerCard name="Player 4" playerNum={4} assignColor={assignColor} assignedColors={assignedColors}/>
        </div>
    )
}

export default Players