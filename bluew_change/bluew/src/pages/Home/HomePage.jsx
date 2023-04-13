import Hero from "./Hero";
import SecondPage from "./SecondPage";
import MapContainer from "./MapContainer";
import UserAddLocation from "./UserAddLocation";
import { useState,useEffect } from "react";
import HomeNavbar from "./HomeNavbar";
import boyDrink from '../../assets/drink-1.jpg';
import fountain from '../../assets/fount2.jpg';
import restaurant from '../../assets/restaurant.jpg'



const HomePage = ({subMenuToggle,showSubMenu}) => {


    const smallAboutDetails = [
        {title:'What Is Blue W',description:'Blue W is an initiative that aims to provide free tap water wherever you are. This unique community-based program is dedicated to promoting municipal tap water as a healthy, easily accessible alternative to purchasing bottled drinks',image:fountain,id:1},
        {title:'What Do We Offer',description:'We enable businesses and public spaces to offer free tap water to people, reducing the need for single-use plastic water bottles. We aim to promote environmental sustainability and encourage people to stay hydrated by providing accessible, safe, and free tap water.',image:boyDrink,id:2},
        {title:'Our Mission',description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat ',image:restaurant,id:3},
        
      ]

    return ( 
        <>
            <HomeNavbar subMenuToggle={subMenuToggle} showSubMenu={showSubMenu} />  
            <Hero  />
            <SecondPage smallAboutDetails={smallAboutDetails} />
            <MapContainer />
            <UserAddLocation />
        </>

     );
}
 
export default HomePage;