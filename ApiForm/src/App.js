import logo from './logo.svg';
import './App.css';
import { Outlet, Route, Routes } from 'react-router-dom';
import Register from './register.jsx';
import UserList from './userlist.jsx';

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Register />} />
        <Route path='/register' element={<Register />} />
        <Route path='/userlist' element={<UserList />} />
      </Routes>
    </>
  );
}

export default App;
