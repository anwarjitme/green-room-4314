import './App.css';
import Home_navbar from './Components/Navbar/Home_navbar';
import AllRoute from "./Pages/AllRoute";
//import Companydata from './Components/Company/Companydata';
//import Company from './Pages/Company';
function App() {
  return (
    <div className="App">
      <AllRoute />
      <Home_navbar/>
    </div>
  );
}

export default App;
