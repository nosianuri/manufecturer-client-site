import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './pages/Home/Home';
import Purchase from './pages/Purchase/Purchase';
import Navbar from './pages/Shared/Navbar';
import Login from './pages/Login/Login';

function App() {
  return (
    <>
      <Navbar></Navbar>
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/purchase' element={<Purchase />}></Route>
        <Route path='/login' element={<Login />}></Route>
        
      </Routes>
    </>
  );
}

export default App;
