import { DropdownButton } from 'react-bootstrap';

import { useContext } from 'react';

import AvailableColors from './AvailableColors';

import ColorsContext from "./ColorsContext";
import PlayersContext from './PlayersContext';

const PlayerCard = ({ name, playerNum }) => {
    const { players, assignColor } = useContext(PlayersContext);

    const colors = useContext(ColorsContext);
    const color = colors.find(color => color.name === players[playerNum].color);
    
    return (
        <div className="card col-12 col-md-5 mb-4 "
            style={{ ...PlayerCardStyle, ...color }}>
            <div className="card-header text-center"
                style={headerStyle}>
                <header>
                    <h1>{name}</h1>
                </header>
            </div>
            <div className="card-body">
                <DropdownButton id="dropdown-basic-button" title="Select Color"
                    variant="dark"
                    onSelect={(color) => {
                        assignColor(color, playerNum)
                    }}>
                    <AvailableColors />
                </DropdownButton>
            </div>
        </div >
    )
}

const PlayerCardStyle = {
    //width: '200px'
    alignItems: 'center',
}

const headerStyle = {
    width: '100%',
    alignItems: 'center'
}

export default PlayerCard