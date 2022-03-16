import UserMenu from "./UserMenu"

const Header = () => {
    return (
        <header style={headerStyle}
            className="d-flex justify-content-between p-3">
                <h1 style={{width: 40}}></h1>
            <h1 className="mb-0">Game Lobby</h1>
            <UserMenu />
        </header>
    )
}

const headerStyle = {
    backgroundColor: '#34282C',
    color: 'white',
    width: '100%'
}

export default Header