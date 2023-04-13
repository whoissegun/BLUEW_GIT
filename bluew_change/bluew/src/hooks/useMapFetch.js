import { useEffect, useState } from "react";

const useMapFetch = () => {
  const [userLocationFound, setUserLocationFound] = useState(false);
  const [latitude, setLatitude] = useState(null);
  const [longitude, setLongitude] = useState(null);

  // success callback function
  const success = (position) => {
    let latitude = position.coords.latitude;
    let longitude = position.coords.longitude;
    setLatitude(latitude);
    setLongitude(longitude);
    setUserLocationFound(true);
  };

  const options = {
    enableHighAccuracy: true,
    timeout: 15000, // setting maximum length of time for device to return a location to 15 seconds
  };

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(success, null, options);
  }, [latitude,longitude]);

  return {
    latitude,
    longitude,
    userLocationFound,
  };
};

export default useMapFetch;
