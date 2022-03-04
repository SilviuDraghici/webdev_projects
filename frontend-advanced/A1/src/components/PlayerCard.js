import { DropdownButton, Dropdown } from 'react-bootstrap';

const PlayerCard = ({ name }) => {
    return (
        <div className=" card col-12 col-md-5 mb-4 "
            style={PlayerCardStyle}>
            <div className="card-header text-center"
                style={headerStyle}>
                <header>
                    <h1>{name}</h1>
                </header>
            </div>
            <div className="card-body">
                <DropdownButton id="dropdown-basic-button" title="Select Color"
                    variant="dark"
                    onSelect={colorSelect}>
                    <Dropdown.Item eventKey="red"
                        style={red}>red</Dropdown.Item>
                    <Dropdown.Item eventKey="green"
                        style={green}>green</Dropdown.Item>
                    <Dropdown.Item eventKey="blue"
                        style={blue}>blue</Dropdown.Item>
                    <Dropdown.Item eventKey="yellow"
                        style={yellow}>yellow</Dropdown.Item>
                </DropdownButton>
            </div>
        </div >
    )
}

const colorSelect = (key) => {
    console.log(`color selected: ${key}`);
}

const PlayerCardStyle = {
    //width: '200px'
    alignItems: 'center',
}

const headerStyle = {
    width: '100%',
    alignItems: 'center'
}


const red = {
    backgroundColor: 'red',
    color: 'white'
}

const green = {
    backgroundColor: 'green',
    color: 'white'
}

const blue = {
    backgroundColor: 'blue',
    color: 'white'
}

const yellow = {
    backgroundColor: 'yellow'
}

export default PlayerCard