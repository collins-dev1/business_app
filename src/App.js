import logo from './logo.svg';
import './App.css';
import AppNavbar from './Navbar';
import Header from './Header';
import Service from './Service';
import Education from './Education';
import Works from './Works';
import Testimony from './Testimony';
import Subscribe from './Subscribe';

function App() {
  return (
    <div className="App">
      <div className='container'>
       <AppNavbar/>
       <Header/>
       <Service/>
       <Education/>
       <Works/>
       <Testimony/>
       <Subscribe/>
      </div>
      
    </div>
  );
}

export default App;
