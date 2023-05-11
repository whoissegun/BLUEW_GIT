import { useState,useEffect } from 'react'
import './App.css'
import Navbar from './Navbar'
import ProposalForm from './pages/GenerateProposal/ProposalForm';
import { BrowserRouter as Router, Routes,Route,useLocation} from 'react-router-dom';
import HomePage from './pages/Home/HomePage';
function App() {
  const [showSubMenu, setShowSubMenu] = useState(false);
  const [showObserverElements, setShowObserverElements] = useState(true);

  const subMenuToggle = () => {
    setShowSubMenu(prevShowSubMenu => !prevShowSubMenu);
  }

  function ConditionalNavbar() {
    const location = useLocation();
  
    if (location.pathname !== '/') {
      return <Navbar subMenuToggle={subMenuToggle} showSubMenu={showSubMenu} />;
    }
  
    return null;
  }
  
  
  
  return (
    <Router>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.3.0/css/all.min.css" />
        <link href="https://fonts.googleapis.com/css2?family=Poppins&family=Roboto&display=swap" rel="stylesheet" />
        <div className="App overflow-x-hidden">
        
        <ConditionalNavbar />
        <Routes>
          <Route path='/' element={ <HomePage subMenuToggle={subMenuToggle} showSubMenu={showSubMenu} />} />
          
          <Route path ='/generate-proposal' element={<ProposalForm />} />
        </Routes>
        
        
      
      </div>
    </Router>
  )
}

export default App
