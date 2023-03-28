import { useState,useEffect } from "react";

const useLocationDropDownList  = () => {
    const [responseData,setResponseData] = useState([]);
    const [stateList,setStates] = useState([]);
    const [citiesList,setCities] = useState([]);
    const [latitude,setLatitude] = useState(null);
    const [longitude,setLongitude] = useState(null);
    const [userLocationFound,setUserLocationFound] = useState(false);

    useEffect(()=> {
        fetch('https://pkgstore.datahub.io/core/world-cities/world-cities_json/data/5b3dd46ad10990bca47b04b4739a02ba/world-cities_json.json')
            .then(response => response.json())
            .then(res => setResponseData(res))
            .catch(err => console.error(err));
    },[])

    const countries = [... new Set(responseData.map(item => item.country))]; //keeping all countries within an array. If you look at the responseData, there are actually duplicates of countries,so we need to remove the duplicates by converting it to a set and destructuring to an array
    countries.sort(); //sorting the countries array

    const handleCountry = (e) => {
        let selectedCountryStates = responseData.filter(item => {return e.target.value === item.country}); //this returns an array of objects where the country of each item is the country selected by the user
        let states = [... new Set(selectedCountryStates.map(item => item.subcountry))]; // subcountry is the property in the response data that represents states/provinces . This returns a list of states

        setStates(states.sort());
        
    }

    
    const handleState = (e) => {
        let selectedStateCities = responseData.filter(item => {return e.target.value === item.subcountry}); //this returns an array of objects where the subcountry of each item is the state/province selected by the user
        let cities = [... new Set(selectedStateCities.map(item => item.name))]; // subcountry is the property in the response data that represents states/provinces . This returns a list of states

        setCities(cities.sort());  
    }

    const options = {
        timeout:15000, //maximum time for program to wait for response
        enableHighAccuracy: true, //making sure its a precise location
    }

    const navigatorFunction = () => {
        navigator.geolocation.getCurrentPosition(  
            (position) => { //success callback
                setLatitude(position.coords.latitude);
                setLongitude(position.coords.longitude);
                setUserLocationFound(true);
                
                
            },null,options //i dont think i need an error caallback
        )
    }

    return { countries, handleCountry, stateList,citiesList,handleState, navigatorFunction,latitude,longitude,userLocationFound };
}
 
export default useLocationDropDownList;