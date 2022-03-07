import { Dropdown } from 'react-bootstrap';

import { useState } from 'react';

import AssignedColorsContext from './AssignedColorsContext';

const AvailableColors = ({ colors }) => {
    //const [availableColors, updateColor] = useState(colors["white"]);
    return (
        <>
            <AssignedColorsContext.Consumer>{
                (assignedColors) => {
                    return <>
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
                        {!assignedColors.includes("purple") ?
                            <Dropdown.Item eventKey="purple"
                                style={colors['purple']}>purple</Dropdown.Item>
                            : null}
                        {!assignedColors.includes("orange") ?
                            <Dropdown.Item eventKey="orange"
                                style={colors['orange']}>orange</Dropdown.Item>
                            : null}


                        <Dropdown.Divider />
                        <Dropdown.Item eventKey="white"
                            style={colors['white']}>reset</Dropdown.Item>
                    </>
                }}
            </AssignedColorsContext.Consumer>
        </>
    )
}

export default AvailableColors