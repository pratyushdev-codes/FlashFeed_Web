import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar';
import Header from './Components/Header';
import Reviews from './Components/Reviews';
import Download from './Components/Download';

function App() {
  return (
    <div className="App">
    <Navbar/>
    <Header/>
    <br/>
    <Reviews/>
    <br/>
    <br/>

    <Download/>
    </div>
  );
}

export default App;
