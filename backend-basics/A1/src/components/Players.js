import PlayerCard from './PlayerCard';

const Players = () => {
    return (
        <div className="row justify-content-evenly mt-4">
                <PlayerCard name="Player 1" playerNum={1} />
                <PlayerCard name="Player 2" playerNum={2} />
                <PlayerCard name="Player 3" playerNum={3} />
                <PlayerCard name="Player 4" playerNum={4} />
        </div>
    )
}

export default Players