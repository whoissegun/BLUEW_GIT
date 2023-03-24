import { useEffect,useState } from "react"

const useMapFetch = () => {
    const [userLocationFound,setUserLocationFound]  = useState(false);
    const [latitude, setLatitude] = useState(null);
    const [longitude, setLongitude] = useState(null);

    //success callback function
    const success = (position) => {
        let latitude = position.coords.latitude;
        let longitude = position.coords.longitude;
        setLatitude(latitude);
        setLongitude(longitude);
        setUserLocationFound(true);
        
        
    }
    
    const options = {
        enableHighAccuracy: true,
        timeout: 15000, //setting maximum length of time for device to return a location to 15 seconds
      };
    
    window.initMap = function () {
        if (latitude && longitude){ //checking lat and long are not null
            var options = {
            zoom: 14,
            center: { lat: latitude, lng: longitude },
            };
            var map = new google.maps.Map(document.getElementById("map"), options);
        }
    }

    useEffect(() => {
            navigator.geolocation.getCurrentPosition(success,null,options)
            
        
            function loadGoogleMapsScript(callback) {
                const script = document.getElementsByTagName("script")[0];
                script.src = "https://maps.googleapis.com/maps/api/js?key=AIzaSyBFBQV845lfzUCXEHkQO4BT_iIT3fAKDtw&callback=" + callback + "&v=weekly";
                script.defer = true;
              }
            
            loadGoogleMapsScript('initMap')
        
        }
    
    ,[longitude,latitude])

    return;
    
}

export default useMapFetch;