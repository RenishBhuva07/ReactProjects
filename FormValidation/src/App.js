import './App.css';
import { Route, Routes } from 'react-router-dom';
import HomePage from './homepage.jsx';
import Register from './register.jsx';
import Login from './login.jsx';
import SignUp from './signup.jsx';
import SignIn from './signin.jsx';

function App() {
  return (
    <>
        <Routes>
          <Route path='/' element={<HomePage/>}/>
          <Route path='/registration' element={<Register/>}/>
          <Route path='/login' element={<Login/>}/>
          <Route path='/signup' element={<SignUp/>}/>
          <Route path='/signin' element={<SignIn/>}/>
        </Routes>
    </>
  );
}

export default App;
