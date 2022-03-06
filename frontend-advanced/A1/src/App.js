import "./styles.css";

import 'bootstrap/dist/css/bootstrap.min.css';

import Header from "./components/Header";
import Players from './components/Players';

function App() {
  return (
    <div className="d-flex flex-column align-items-center"
      style={pageStyle}>
      <Header />
      <Players />
    </div>
  );
}


const pageStyle = {
  backgroundColor: '#565051',
  height: '100%'
}

export default App;
