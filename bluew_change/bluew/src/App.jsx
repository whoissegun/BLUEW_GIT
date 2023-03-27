import { useState,useEffect } from 'react'
import './App.css'
import Navbar from './Navbar'
import Hero from './Hero'
import SecondPage from './SecondPage';
import boyDrink from './assets/drink-1.jpg';
import fountain from './assets/fount2.jpg';
import restaurant from './assets/restaurant.jpg'
import MapContainer from './MapContainer';


function App() {
  const [showSubMenu, setShowSubMenu] = useState(false);
  const [showHeroImg,setShowHeroImg] = useState(true);
  const [showObserverElements, setShowObserverElements] = useState(true);

  const subMenuToggle = () => {
    setShowSubMenu(prevShowSubMenu => !prevShowSubMenu);
  }
  const smallAboutDetails = [
    {title:'What Is Blue W',description:'Blue W is an initiative that aims to provide free tap water wherever you are. This unique community-based program is dedicated to promoting municipal tap water as a healthy, easily accessible alternative to purchasing bottled drinks',image:fountain,id:1},
    {title:'What Do We Offer',description:'We enable businesses and public spaces to offer free tap water to people, reducing the need for single-use plastic water bottles. We aim to promote environmental sustainability and encourage people to stay hydrated by providing accessible, safe, and free tap water.',image:boyDrink,id:2},
    {title:'Our Mission',description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat ',image:restaurant,id:3},
    
  ]
  useEffect(() => {
    const screenHeight = window.innerHeight;
    const screenWidth = window.innerWidth;
    if (screenHeight < 600 && screenWidth <= 640){
        setShowHeroImg(false);
    }
  },[])
  return (
    <>
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.3.0/css/all.min.css" />
      <link href="https://fonts.googleapis.com/css2?family=Poppins&family=Roboto&display=swap" rel="stylesheet" />
      <div className="App overflow-x-hidden">
      
      <Navbar subMenuToggle={subMenuToggle} showSubMenu={showSubMenu} />  
      <Hero showObserverElements={showObserverElements} setShowObserverElements={setShowObserverElements} />
      <SecondPage smallAboutDetails={smallAboutDetails} />
      <MapContainer />
      
    
    </div>
    </>
  )
}

export default App
