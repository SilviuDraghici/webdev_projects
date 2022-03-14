import { Dropdown } from 'react-bootstrap';

import { useContext } from 'react';


import PlayersContext from './PlayersContext';

const AvailableColors = ({ colors }) => {
    const {players,} = useContext(PlayersContext);
    const playerColors = players.map(player => player.color);
    return (
        <>
            {!playerColors.includes("red") ?
                <Dropdown.Item eventKey="red"
                    style={colors["red"]}>red</Dropdown.Item>
                : null}
            {!playerColors.includes("green") ?
                <Dropdown.Item eventKey="green"
                    style={colors['green']}>green</Dropdown.Item>
                : null}
            {!playerColors.includes("blue") ?
                <Dropdown.Item eventKey="blue"
                    style={colors['blue']}>blue</Dropdown.Item>
                : null}
            {!playerColors.includes("yellow") ?
                <Dropdown.Item eventKey="yellow"
                    style={colors['yellow']}>yellow</Dropdown.Item>
                : null}
            {!playerColors.includes("purple") ?
                <Dropdown.Item eventKey="purple"
                    style={colors['purple']}>purple</Dropdown.Item>
                : null}
            {!playerColors.includes("orange") ?
                <Dropdown.Item eventKey="orange"
                    style={colors['orange']}>orange</Dropdown.Item>
                : null}

            <Dropdown.Divider />
            <Dropdown.Item eventKey="default"
                style={colors['default']}>reset</Dropdown.Item>

        </>
    )
}

export default AvailableColors