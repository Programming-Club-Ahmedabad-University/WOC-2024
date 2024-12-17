import './App.css';
import Home from './components/Home';
import Navbar from './components/Navbar';
import PastEvents from './components/PastEvents';
import JoinUs from './components/JoinUs';
import ContactUs from './components/ContactUs';

function App() {
  return (
    <>
      <Navbar/>
      <Home/>
      <PastEvents/>
      <JoinUs/>
      <ContactUs/>
    </>
  )
}

export default App
