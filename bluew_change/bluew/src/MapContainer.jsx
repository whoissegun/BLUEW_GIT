import {useLoadScript} from '@react-google-maps/api'
import { useMemo,useState,useEffect } from 'react';
import useLocationDropdownList from './useLocationDropdownList';
import Map from './Map';
const MapContainer = () => {
    const {isLoaded} = useLoadScript({googleMapsApiKey: import.meta.env.VITE_GOOGLE_MAPS_API_KEY})
    const [searchLocationContainerWidgetOpen,setsearchLocationContainerWidgetOpen] = useState(false);
    const { countries =[], handleCountry, stateList,citiesList,handleState,navigatorFunction,latitude,longitude,userLocationFound,errorOccurred } = useLocationDropdownList();

    const toggleWidget = () => {
        setsearchLocationContainerWidgetOpen(prev => !prev); //function for opening and closing searchLocationContainerWidget
    }

    useEffect(()=> {
        navigatorFunction();
    },[] )
    
    const center = useMemo(() => ({lat:latitude,lng:longitude})); //ensuring that even if user moves on the map, the center of the map is still the user's longitude and latitude
    
    
    return ( 
        <div className="mapContainer flex relative">
            {!isLoaded &&  //tailwind loading icon for when map hasn't loaded yet
                <div>
                    <div className="spinner border-t-4 border-b-4 border-gray-500 rounded-full w-12 h-12 animate-spin mt-10"></div>
                </div>}
            {!isLoaded && errorOccurred &&
                <div className="emptyCountainer w-full h-100vh">
                    <h1 className=' text-4xl font-bold mt-72 text-red-800'>An Unexpected Error Occured. Please Check Your Internet Connection Or Grant Us Permission To Access Your Location</h1> 
                </div>}
            { isLoaded && latitude && longitude && <Map zoom={17} center={center}/> }
           

            { isLoaded && latitude && longitude && <div className={`searchLocationContainerWidget xl:hidden  2xl:hidden bg-[#334B49] w-full absolute bottom-0 ${searchLocationContainerWidgetOpen? 'show' : 'h-16'} overflow-hidden rounded-t-lg px-4 py-2 transition-all duration-500`}>

                <div className="header md:mb-3 sm:mb-5 hover:cursor-pointer" onClick={() => toggleWidget()}>
                    <i className="fa-sharp fa-solid fa-circle-chevron-down text-white fa-2x"></i>
                    <span className=' text-4xl text-white font-bold font-["Poppins"] ml-3'>Find A Location</span>
                </div>

                <div className="locationDropdowns flex flex-col gap-5 items-center">
                    <div className="userCountry ">
                        <p className='text-white font-bold text-2xl mb-4'>Country</p>
                        <select className="userInput w-56 ml-4 px-3 py-1 h-9 bg-white rounded-lg" onChange={(e) => handleCountry(e)}>
                        {countries.map(country => (
                            <option value={country} key={country}>{country}</option>
                        ))}
                        </select>
                    </div>

                    <div className="userProvince">
                        <p className='text-white font-bold text-2xl mb-4'>Province / State </p>
                        <select className="userInput w-56 ml-4 px-3 py-1 h-9 bg-white rounded-lg"  onChange={handleState}>
                            {stateList.map(state => (
                                <option value={state} key={state}>{state}</option>
                            ))}
                        </select>
                    </div>

                    <div className="userCity ">
                        <p className='text-white font-bold text-2xl mb-4'>City</p>
                        <select className="userInput w-56 ml-4 px-3 py-1 h-9 bg-white rounded-lg" >
                            {citiesList.map(city => (
                                <option value={city} key={city}>{city}</option>
                            ))}
                        </select>
                    </div>

                    <div className="userAddress ">
                        <p className='text-white font-bold text-2xl mb-4'>Address</p>
                        <div className="addressInput w-56 ml-4 px-3 py-1 h-9 bg-white rounded-lg" contentEditable></div>
                    </div>
                </div>
            </div>}

            { isLoaded && latitude && longitude && <div className=' absolute right-0 searchLocationContainer w-[30vw] h-[100vh] bg-[#334B49] sm:hidden md:hidden lg:hidden flex flex-col pl-6 pt-12 gap-y-12'>
                <div className="userCountry ">
                    <p className='text-white font-bold text-2xl mb-4'>Country</p>
                    <select className="userInput w-56 ml-4 px-3 py-1 h-9 bg-white rounded-lg" onChange={(e) => handleCountry(e)}>
                       {countries.map(country => (
                        <option value={country} key={country}>{country}</option>
                       ))}
                    </select>
                </div>

                <div className="userProvince">
                    <p className='text-white font-bold text-2xl mb-4'>Province / State </p>
                    <select className="userInput w-56 ml-4 px-3 py-1 h-9 bg-white rounded-lg"  onClick={handleState}>
                        {stateList.map(state => (
                            <option value={state} key={state}>{state}</option>
                        ))}
                    </select>
                </div>

                <div className="userCity ">
                    <p className='text-white font-bold text-2xl mb-4'>City</p>
                    <select className="userInput w-56 ml-4 px-3 py-1 h-9 bg-white rounded-lg" >
                        {citiesList.map(city => (
                            <option value={city} key={city}>{city}</option>
                        ))}
                    </select>
                </div>

                <div className="userAddress ">
                    <p className='text-white font-bold text-2xl mb-4'>Address</p>
                    <div className="addressInput w-56 ml-4 px-3 py-1 h-9 bg-white rounded-lg" contentEditable></div>
                </div>
            </div>}

            

        </div>
     );
}
 
export default MapContainer;