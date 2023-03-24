import {GoogleMap,useLoadScript,Marker} from '@react-google-maps/api'
import { useMemo,useState,useEffect } from 'react';
const MapContainer = () => {
    const {isLoaded} = useLoadScript({googleMapsApiKey: import.meta.env.VITE_GOOGLE_MAPS_API_KEY})
    const [latitude,setLatitude] = useState(null);
    const [longitude,setLongitude] = useState(null);
    const [userLocationFound,setUserLocationFound] = useState(false);
    const options = {
        timeout:15000, //maximum time for program to wait for response
        enableHighAccuracy: true, //making sure its a precise location
    }
    useEffect(()=> {
        navigator.geolocation.getCurrentPosition(  
            (position) => { //success callback
                setLatitude(position.coords.latitude);
                setLongitude(position.coords.longitude);
                setUserLocationFound(true);
            },null,options //i dont think i need an error caallback
        )
    } )
    

    const center = useMemo(() => ({lat:latitude,lng:longitude})) //ensuring that even if user moves on the map, the center of the map is still the user's longitude and latitude

    function Map(){
        return <GoogleMap zoom={12} center={center} mapContainerClassName=" w-[70vw] sm:w-[100vw] md:w-[100vw] h-[100vh]">
            <Marker  position={{lat:latitude, lng:longitude}}/>
        </GoogleMap>
    }
    return ( 
        <div className="mapContainer flex relative">
            {!isLoaded &&  //tailwind loading icon for when map hasn't loaded yet
                <div className="">
                    <div className="spinner border-t-4 border-b-4 border-gray-500 rounded-full w-12 h-12 animate-spin mt-10"></div>
                </div>}
            {!isLoaded && <h1 className=' text-4xl font-bold mt-72 text-red-800'>An Error Occured. Please Check Your Internet Connection</h1> }
            { isLoaded && latitude && longitude && <Map /> }
            {!userLocationFound && <h1  className=' text-red-700'>We can't access your location. Please grant your browser permission to do so</h1>}

            <div className=' absolute right-0 searchLocationContainer w-[30vw] h-[100vh] bg-[#334B49] sm:hidden md:hidden flex flex-col pl-6 pt-12 gap-y-12'>
                <div className="userCountry ">
                    <p className='text-white font-bold text-2xl mb-4'>Country</p>
                    <select className="userInput w-56 ml-4 px-3 py-1 h-9 bg-white rounded-lg" contentEditable>
                        <option value="America">America</option>
                        <option value="America">Canada</option>
                        <option value="America">Nigeria</option>
                        <option value="America">India</option>
                    </select>
                </div>

                <div className="userProvince">
                    <p className='text-white font-bold text-2xl mb-4'>Province</p>
                    <select className="userInput w-56 ml-4 px-3 py-1 h-9 bg-white rounded-lg" contentEditable>
                        <option value="America">America</option>
                        <option value="America">Canada</option>
                        <option value="America">Nigeria</option>
                        <option value="America">India</option>
                    </select>
                </div>

                <div className="userCity ">
                    <p className='text-white font-bold text-2xl mb-4'>City</p>
                    <select className="userInput w-56 ml-4 px-3 py-1 h-9 bg-white rounded-lg" contentEditable>
                        <option value="America">America</option>
                        <option value="America">Canada</option>
                        <option value="America">Nigeria</option>
                        <option value="America">India</option>
                    </select>
                </div>

                <div className="userAddress ">
                    <p className='text-white font-bold text-2xl mb-4'>Address</p>
                    <div className="addressInput w-56 ml-4 px-3 py-1 h-9 bg-white rounded-lg" contentEditable></div>
                </div>
            </div>

            

        </div>
     );
}
 
export default MapContainer;