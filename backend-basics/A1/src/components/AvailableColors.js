import { Dropdown } from 'react-bootstrap';

import { useContext } from 'react';

import ColorsContext from "./ColorsContext";
import PlayersContext from './PlayersContext';

const AvailableColors = () => {
    const colors = useContext(ColorsContext);

    const { players, } = useContext(PlayersContext);
    const playerColors = Object.keys(players).map((key) => players[key].color);
    
    return (
        <>
            {colors.map((color, index) => {
                return !playerColors.includes(color.name) && color.name !== "default" ?
                    <Dropdown.Item eventKey={color.name} key={index}
                        style={color}>{color.name}</Dropdown.Item>
                    : null
            })}

            <Dropdown.Divider />
            <Dropdown.Item eventKey="default"
                style={colors['default']}>reset</Dropdown.Item>

        </>
    )
}

export default AvailableColors