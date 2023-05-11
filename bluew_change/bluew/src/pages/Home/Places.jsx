import { useState } from "react";
import usePlacesAutocomplete,{getLatLng, getGeocode} from "use-places-autocomplete";
const Places = ({setOffice}) => {
    
    const {ready, value, setValue, suggestions: {status,data},clearSuggestions} = usePlacesAutocomplete({initialValue:""});
    
    
    
    const handleSelect = async (val) => {
        setValue(val, false);
        clearSuggestions();
        
      
        try {
          const results = await getGeocode({ address: val });
      
          if (results && results.length > 0) {
            const { lat, lng } = await getLatLng(results[0]);
            
      
            if (lat && lng) {
              console.log(lat,lng);
              setOffice({ lat, lng });
            } else {
              console.error("Error: Unable to get latitude and longitude.");
            }
          } else {
            console.error("Error: Geocode results are empty.");
          }
        } catch (error) {
          console.error("Error while fetching geocode and latLng:", error);
        }
      };
      
      

    return ( 
        <>
            <h1 className=" text-white text-3xl font-['Poppins'] font-bold">Find Nearest Water Locations</h1>

            <div className="find flex flex-col gap-0" >
                <input type="text"  value={value} onChange={e => setValue(e.target.value)} className="w-[80%] h-9 px-3 rounded-md font-['Poppins']" placeholder="Type A Location"  />

                <div className="suggestions w-fit h-fit bg-white   mt-2 ">
                    {status === "OK" && data.map(({place_id,description}) => 
                        <div value={description} key={place_id} className=" cursor-pointer hover:bg-gray-200 mx-3 my-2"  onClick={() => handleSelect(description)}>{description}</div>
                    )}
                </div>
            </div>
        </>
     );
}
 
export default Places;