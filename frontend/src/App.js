import React from 'react';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import {ToastContainer} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { BrowserRouter as Router ,Routes,Route } from 'react-router-dom';
import Header from './Components/Header';
function App() {
  return (
    <>
    <Router>
      <div className='container'>
      <Header/>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/Login' element={<Login/>}></Route>
        <Route path='/Register' element={<Register/>}></Route>
      </Routes>
      </div>
    </Router>
  <ToastContainer/>
    </>
  );
}

export default App;
