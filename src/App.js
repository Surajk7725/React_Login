import { Route, Routes } from 'react-router-dom';
import './App.css';
import Login from './Components/LoginSignup/Login';
import Register from './Components/LoginSignup/Register';
import Forget from './Components/LoginSignup/Forget';



function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Login/>}></Route>
        <Route path='/register' element={<Register/>}></Route>
        <Route path='/forget' element={<Forget/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
