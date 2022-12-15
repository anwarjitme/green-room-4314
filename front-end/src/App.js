import './App.css';
import ContactItem from './Components/ContactComponent/ContactItem';
import { ContactPage } from './Components/ContactComponent/ContactPage';
import { Navbar } from './Components/ContactComponent/Navbar';
import Home_navbar from './Components/Navbar/Home_navbar';
import AllRoute from "./Pages/AllRoute";
//import Companydata from './Components/Company/Companydata';
//import Company from './Pages/Company';
function App() {
  return (
    <div className="App">
      <AllRoute />
    </div>
  );
}

export default App;
