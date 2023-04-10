import './App.css';
import logo from './logo.svg';
import { Routes, Route } from "react-router-dom";
import Home  from './components/home/Home';
import TourDetails from './components/TourDetails/TourDetails';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
const jData = require('./data/db.json');

function App() {

  return (
    <>
    <Header/>
    <Routes>
    <Route path='/' element={<Home jData={jData} />}></Route>
    <Route path='/city/:id' element={<TourDetails/>}></Route>
    </Routes>
    <Footer/>
    </>
  )
}

export default App;
