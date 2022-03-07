import { useState } from 'react';

import PlayerCard from './PlayerCard';
import AssignedColorsContext from './AssignedColorsContext';

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
            <AssignedColorsContext.Provider value={assignedColors}>
                <PlayerCard name="Player 1" playerNum={1} assignColor={assignColor} />
                <PlayerCard name="Player 2" playerNum={2} assignColor={assignColor} />
                <PlayerCard name="Player 3" playerNum={3} assignColor={assignColor} />
                <PlayerCard name="Player 4" playerNum={4} assignColor={assignColor} />
            </AssignedColorsContext.Provider >
        </div>
    )
}

export default Players