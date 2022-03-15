import { useContext } from 'react';

import PlayerCard from './PlayerCard';

import PlayersContext from './PlayersContext';

const Players = () => {
    const { players, } = useContext(PlayersContext);
    return (
        <div className="row justify-content-evenly mt-4">
            {Object.keys(players).map((key) => 
                <PlayerCard name={players[key].name} playerNum={key} key={key}/>
            )}
        </div>
    )
}

export default Players