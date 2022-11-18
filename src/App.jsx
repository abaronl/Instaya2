import {BrowserRouter, Routes, Route} from 'react-router-dom'
import './App.css'
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import Create from './pages/Create';
import View from './pages/View';
import Update from './pages/Update';

function App() {

  return (
      <BrowserRouter>
          <Routes>
             <Route path='/' element={<Home/>}/>
             <Route path='View' element={<View/>}/>
             <Route path='Create' element={<Create/>}/>
             <Route path='Update' element={<Update/>}/>
          </Routes>
      </BrowserRouter>
      )
}

export default App
