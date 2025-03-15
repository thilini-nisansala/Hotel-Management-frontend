import './App.css';
import Header from './components/header';
import HomePage from './pages/client-page/homepage';
import AdminPage from './pages/adminPage/admin';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import TestComponenet from './components/test/test';
import LoginPage from './pages/login/login';


function App() {


  return (
    <BrowserRouter>

    <Routes path="/*">

    <Route path="/admin/*" element={<AdminPage/>}/>
    <Route path ="/login" element ={<LoginPage/>}/>
    <Route path="/" element={<HomePage/>}/>
   
  
    
    
    </Routes>
    
    </BrowserRouter>
  );
} 

export default App
