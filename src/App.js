import logo from './logo.svg';
import './App.css';
import AppNavbar from './Navbar';
import Header from './Header';
import Service from './Service';
import Education from './Education';
import Works from './Works';

function App() {
  return (
    <div className="App">
      <div className='container'>
       <AppNavbar/>
       <Header/>
       <Service/>
       <Education/>
       <Works/>
      </div>
      
    </div>
  );
}

export default App;
