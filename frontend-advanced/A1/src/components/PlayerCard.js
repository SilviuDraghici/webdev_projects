import { DropdownButton, Dropdown } from 'react-bootstrap';

import { useState } from 'react';

const PlayerCard = ({ name, playerNum, setColor, colorAssignment }) => {
    const [color, updateColor] = useState(colors["white"]);

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
                        setColor(color, playerNum)
                        updateColor(colors[color])
                    }}>
                    <Dropdown.Item eventKey="red"
                        style={colors["red"]}>red</Dropdown.Item>
                    <Dropdown.Item eventKey="green"
                        style={colors['green']}>green</Dropdown.Item>
                    <Dropdown.Item eventKey="blue"
                        style={colors['blue']}>blue</Dropdown.Item>
                    <Dropdown.Item eventKey="yellow"
                        style={colors['yellow']}>yellow</Dropdown.Item>
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
    white: {
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
        backgroundColor: 'yellow'
    }
}

export default PlayerCard