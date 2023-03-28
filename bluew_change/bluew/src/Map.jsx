import {GoogleMap,useLoadScript,Marker} from '@react-google-maps/api'
const Map = ({center,zoom}) => {
    return ( 
        <GoogleMap zoom={zoom} center={center} mapContainerClassName=" w-[70vw] sm:w-[100vw] md:w-[100vw] h-[100vh] lg:w-[100vw]">
        </GoogleMap>
     );
}
 
export default Map;