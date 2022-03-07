import { DropdownButton } from 'react-bootstrap';

import { useState } from 'react';

import AvailableColors from './AvailableColors';

const PlayerCard = ({ name, playerNum, assignColor }) => {
    const [color, updateColor] = useState(colors["default"]);

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
                        updateColor(colors[color])
                    }}>
                    <AvailableColors colors={colors} />
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

const colors = {
    default: {
        backgroundColor: 'white',
        color: 'black'
    },
    red: {
        backgroundColor: 'red',
        color: 'white'
    },
    green: {
        backgroundColor: 'green',
        color: 'white'
    },
    blue: {
        backgroundColor: 'blue',
        color: 'white'
    },
    yellow: {
        backgroundColor: 'yellow',
        color: 'black'
    },
    purple: {
        backgroundColor: 'purple',
        color: 'black'
    },
    orange: {
        backgroundColor: 'orange',
        color: 'black'
    }
}

export default PlayerCard