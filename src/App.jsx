<<<<<<< HEAD
import "./App.css";
import Navbar from "./components/Navbar";

function App() {
  return (
    <>
      <Navbar />
    </>
  );
=======
import { Route, Routes } from 'react-router';
import './App.css';
import Navbar from './components/Navbar';
import HomePage from './pages/HomePage';
import PastEvents from './pages/PastEvents';

function App() {
  return (
    <div className='main'>
      <Navbar/>

      <Routes>
        <Route path='/' element={<HomePage/>}/>
        <Route path='/past-events' element={<PastEvents/>}/>
      </Routes>
    </div>
  )
>>>>>>> 67d955ca81080bb6a770bf6ecd89abc913c8c6f9
}

export default App;
