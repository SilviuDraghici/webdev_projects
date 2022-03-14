import { useContext } from 'react';

import PlayerCard from './PlayerCard';
import PlayersContext from './PlayersContext';

const Players = () => {
    const { players, } = useContext(PlayersContext);
    return (
        <div className="row justify-content-evenly mt-4">
            {players.map((player, index) =>
                <PlayerCard name={player.name} playerNum={index + 1} key={index + 1}/>
            )}
        </div>
    )
}

export default Players