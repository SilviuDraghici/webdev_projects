import { useState } from 'react';

import PlayerCard from './PlayerCard';

const Players = () => {
    const [colorAssignment, updateColorAssignment] = useState(["white", "white", "white", "white"]);

    const setColor = (color, playerNum) => {
        //console.log(`color selected: ${color}`);
        updateColorAssignment(assignment => {
            assignment[playerNum - 1] = color;
            console.log(`new color assignment: ${assignment}`);
            return assignment;
        });
    }

    return (
        <div className="row justify-content-evenly mt-4">
            <PlayerCard name="Player 1" playerNum={1} setColor={setColor} colorAssignment={colorAssignment}/>
            <PlayerCard name="Player 2" playerNum={2} setColor={setColor} colorAssignment={colorAssignment}/>
            <PlayerCard name="Player 3" playerNum={3} setColor={setColor} colorAssignment={colorAssignment}/>
            <PlayerCard name="Player 4" playerNum={4} setColor={setColor} colorAssignment={colorAssignment}/>
        </div>
    )
}

export default Players