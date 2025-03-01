
import './App.css';
import Header from './components/header';

function App() {


  return (
    <>
     <Header/>
     <div className="w-full h-screen bg-blue-900 flex ">

      <div className=" border border-white bg-white h-[100px] w-[700px] rounded-lg flex justify-center items-center">
      
        <input className='' type ="date"/>
        <input type ="date"/>
    
    <select>
      <option>Luxury</option>
      <option>Normal</option>
      <option>Low</option>
    </select>
    <button>Book Now</button>
      
      </div>

     </div>
    </>
  );
} 

export default App
