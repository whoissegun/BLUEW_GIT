import { useMemo,useState,useEffect, useRef,useCallback } from 'react';
import { useLoadScript,GoogleMap,Marker,Circle } from '@react-google-maps/api';
import Places from './Places';

const libraries = ["places"];

const MapContainer = () => {
    
    const [latitude,setLatitude] = useState(null);
    const [longitude,setLongitude] = useState(null);    
    const [errorOccurred, setErrorOccurred] = useState(false);
    const [mapLoaded,setMapLoaded] = useState(false);
    const [selected,setSelected] = useState(false)

    const apiKey = import.meta.env.VITE_GOOGLE_MAPS_API_KEY;
    const {isLoaded}  = useLoadScript({
        googleMapsApiKey: apiKey,
        libraries,
    })
      
    const options = useMemo(() => ({
        disableDefaultUI: true,
        clickableIcons: false,
    }),[] )

    const mapRef = useRef(null);
    const onLoad = useCallback((map) => {
        mapRef.current = map;
        setMapLoaded(true);
    },[])

    const setOffice = (position) => {
        mapRef.current?.panTo(position);
        setLatitude(position.lat);
        setLongitude(position.lng);
        setSelected(true);
        
      };
      

    const [searchLocationContainerWidgetOpen,setsearchLocationContainerWidgetOpen] = useState(false);
    
    const optionsLocator = {
        timeout:15000, //maximum time for program to wait for response
        enableHighAccuracy: true, //making sure its a precise location
    }

    const navigatorFunction = () => {
        navigator.geolocation.getCurrentPosition(  
            (position) => { //success callback
                setLatitude(position.coords.latitude);
                setLongitude(position.coords.longitude);
                
            }, () => {setErrorOccurred(true)} //error callback
            ,optionsLocator 
        )
    }

    const toggleWidget = () => {
        setsearchLocationContainerWidgetOpen(prev => !prev); //function for opening and closing searchLocationContainerWidget
    }

    useEffect(()=> {
        navigatorFunction();
    },[] )
    
    const center = useMemo(() => ({lat:latitude,lng:longitude}),[latitude,longitude]); //ensuring that even if user moves on the map, the center of the map is still the user's longitude and latitude

    const defaultOptions = { //default styling for circle
        strokeOpacity: 0.5,
        strokeWeight: 2,
        clickable: false,
        draggable: false,
        editable: false,
        visible: true,
      };
      const closeOptions = { //styling for close proximity circle
        ...defaultOptions,
        zIndex: 3,
        fillOpacity: 0.05,
        strokeColor: "#8BC34A",
        fillColor: "#8BC34A",
      };
      const middleOptions = { //styling for medium proximity circle
        ...defaultOptions,
        zIndex: 2,
        fillOpacity: 0.05,
        strokeColor: "#FBC02D",
        fillColor: "#FBC02D",
      };
      const farOptions = { //styling for far proximity circle
        ...defaultOptions,
        zIndex: 1,
        fillOpacity: 0.05,
        strokeColor: "#FF5252",
        fillColor: "#FF5252",
      };

    return ( 
        <div className="mapContainer flex relative">
            {!isLoaded || errorOccurred &&  //tailwind loading icon for when map hasn't loaded yet
                <div>
                    <div className="spinner border-t-4 border-b-4 border-gray-500 rounded-full w-12 h-12 animate-spin mt-10"></div>
                </div>}
            {!isLoaded || errorOccurred && //show the h1 tag if there is a connection error or user blocks location
                <div className="emptyContainer w-full h-fit">
                    <div className="error-text w-[80%] mx-auto relative bottom-48 ">
                        <h1 className=' text-4xl font-bold mt-72 text-red-800 underline '>An Unexpected Error Occured. Please Check Your Internet Connection Or Grant Us Permission To Access Your Location In Order To Use Map</h1> 
                    </div>
                </div>}

            { isLoaded && latitude && longitude && 
            
                <GoogleMap zoom={17} center={center} mapContainerClassName=" w-[70vw] sm:w-[100vw] md:w-[100vw] h-[100vh] lg:w-[100vw]" options={options} onLoad={onLoad}>

                     { selected && 
                     <>
                        <Marker position={center}/>
                        <Circle center={center} radius={150} options={closeOptions} />
                        <Circle center={center} radius={300} options={middleOptions} /> 
                        <Circle center={center} radius={450} options={farOptions} /> 
                        
                     </>}

                </GoogleMap>
            }
           

            { isLoaded && latitude && longitude && 
                <div className={`searchLocationContainerWidget xl:hidden  2xl:hidden bg-[#334B49] w-full absolute bottom-0 ${searchLocationContainerWidgetOpen? 'show' : 'h-16'} overflow-hidden rounded-t-lg px-4 py-2 transition-all duration-500`}>

                    <div className="header md:mb-3 sm:mb-5 hover:cursor-pointer" onClick={() => toggleWidget()}>
                        <i className="fa-sharp fa-solid fa-circle-chevron-down text-white fa-2x"></i>
                        <span className=' text-4xl text-white font-bold font-["Poppins"] ml-3'>Find A Location</span>
                    </div>

                    <Places setOffice = {(position) => {
                        setOffice(position);
                    }} />
                </div>
            }

            { isLoaded && latitude && longitude && 

                <div className=' absolute right-0 searchLocationContainer w-[30vw] h-[100vh] bg-[#334B49] sm:hidden md:hidden lg:hidden flex flex-col pl-6 pt-12 gap-y-12'>
                    <Places setOffice = {(position) => {
                        setOffice(position);
                    }} />
                </div>
            }

            

        </div>
     );
}
 
export default MapContainer;