const Header = () => {
    return (
        <header style={headerStyle}
            className="d-flex justify-content-center p-3">
            <h1>Game Lobby</h1>
        </header>
    )
}

const headerStyle = {
    backgroundColor: '#34282C',
    color: 'white',
    width: '100%'
}

export default Header