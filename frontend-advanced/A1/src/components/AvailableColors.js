import { Dropdown } from 'react-bootstrap';

import { useState } from 'react';

const AvailableColors = ({ colors, assignedColors }) => {
    //const [availableColors, updateColor] = useState(colors["white"]);

    return (
        <>
            {!assignedColors.includes("red") ?
                <Dropdown.Item eventKey="red"
                    style={colors["red"]}>red</Dropdown.Item>
                : null}
            {!assignedColors.includes("green") ?
                <Dropdown.Item eventKey="green"
                    style={colors['green']}>green</Dropdown.Item>
                : null}
            {!assignedColors.includes("blue") ?
                <Dropdown.Item eventKey="blue"
                    style={colors['blue']}>blue</Dropdown.Item>
                : null}
            {!assignedColors.includes("yellow") ?
                <Dropdown.Item eventKey="yellow"
                    style={colors['yellow']}>yellow</Dropdown.Item>
                : null}

        </>
    )
}

export default AvailableColors