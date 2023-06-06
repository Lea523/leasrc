import { Route, Routes, BrowserRouter as Router } from 'react-router-dom';
import Home from './components/Home';
import Agents from './components/Agents';
import Maps from './components/Maps';
import Weapons from './components/Weapons';
import Signin from './components/Signin';
import Signup from './components/Signup';
import Header from './components//Header';

import './App.css';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Header/>
      <Router>
        <Routes>
          <Route path='/' element={<Home/>}></Route>
          <Route path='/agents' element={<Agents/>} ></Route>
          <Route path='/maps' element={<Maps/>} ></Route>
          <Route path='/weapons' element={<Weapons/>} ></Route>
          <Route path='/signin' element={<Signin/>} ></Route>
          <Route path='/signup' element={<Signup/>} ></Route>
        </Routes>
      </Router>
      <Footer/>
    </div>
  );
}

export default App;
