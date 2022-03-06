import { useState } from 'react';

import { DropdownButton, Dropdown } from 'react-bootstrap';

const PlayerCard = ({ name, playerNum }) => {
    const [colorAssignment, updateColorAssignment] = useState(["white", "white", "white", "white"]);

    const setColor = (color) => {
        //console.log(`color selected: ${color}`);
        updateColorAssignment(assignment => {
            assignment[playerNum - 1] = color;
            console.log(`new color assignment: ${assignment}`);
            return assignment;
        });
    }

    return (
        <div className="card col-12 col-md-5 mb-4 "
            style={{ ...PlayerCardStyle, ...colors[colorAssignment[playerNum - 1]] }}>
            <div className="card-header text-center"
                style={headerStyle}>
                <header>
                    <h1>{name}</h1>
                </header>
            </div>
            <div className="card-body">
                <DropdownButton id="dropdown-basic-button" title="Select Color"
                    variant="dark"
                    onSelect={setColor}>
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