import logo from './logo.svg';
import './App.css';
import AppNavbar from './Navbar';
import Header from './Header';
import Service from './Service';

function App() {
  return (
    <div className="App">
      <div className='container'>
       <AppNavbar/>
       <Header/>
       <Service/>
      </div>
      
    </div>
  );
}

export default App;
