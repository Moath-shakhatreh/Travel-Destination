import logo from './logo.svg';
import Home  from './components/home/Home';
const jData = require('./data/db.json')
// import './App.css';

function App() {

  return (
    <>
    <Home jData={jData} />
    </>
  )
}

export default App;
