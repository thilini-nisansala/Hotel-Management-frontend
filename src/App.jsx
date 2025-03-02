import './App.css';
import Header from './components/header';
import HomePage from './pages/client-page/homepage';
import AdminPage from './pages/adminPage/admin';
import { BrowserRouter, Route, Routes } from 'react-router-dom';


function App() {


  return (
    <BrowserRouter>
    <Routes path="/">
    <Route path="/" element={<HomePage/>}/>
    <Route path="/admin/*" element={<AdminPage/>}/>

    <Route path="/*" element={
      <div className="w-full h-[100vh] bg-green-300">404 Error</div>
      }/>
    
    
    </Routes>
    
    </BrowserRouter>
  );
} 

export default App
