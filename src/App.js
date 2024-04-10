import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar';
import Header from './Components/Header';
import Reviews from './Components/Reviews';

function App() {
  return (
    <div className="App">
    <Navbar/>
    <Header/>
    <Reviews/>
    </div>
  );
}

export default App;
