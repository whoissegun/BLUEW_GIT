import useLocationDropdownList from './useLocationDropdownList';
import PhoneInput, {formatPhoneNumberIntl,isValidPhoneNumber,isPossiblePhoneNumber} from 'react-phone-number-input';
import 'react-phone-number-input/style.css';
import { useState } from 'react';
const UserAddLocation = () => {
    
    const [value,setValue] = useState();
    const { countries =[], handleCountry, stateList,citiesList,handleState,errorOccurred } = useLocationDropdownList();
    const [selectedWaterTypeOption, setSelectedWaterTypeOption] = useState('');

    const handleOptionChange = (event) => {
        setSelectedWaterTypeOption(event.target.value);
    };

    const waterTypes = [
        {type:'Chilled Tap Water',id:1},
        {type:'Room Temperature Tap Water',id:2},
        {type:'Chilled Fountain',id:3},
        {type:'Room Temperature Fountain',id:4}
    ]
    
    return ( 
        <form className={` userAddLocation relative w-full h-[180vh] sm:h-[150vh] ${errorOccurred?'py-0':'py-6'} flex flex-col items-center`} method="POST">
            <div className="header sm:w-[90%] sm:ml-3 md:w-[78%] lg:w-[78%] md:ml-7  ">
                <h1 className=" font-['Poppins'] text-4xl  ">Add water bottle refill locations to this map - <span className=" text-sky-600"> it's free! </span></h1>
            </div>
            <div className="subheader mt-3 sm:w-[75%] ">
                <h1 className="text-red-500 text-lg">We won't share or publish your contact name or email address.</h1>
            </div>
            <div className="location-info h-[40vh] sm:h-[30vh] mt-5 information ">
                <div className="location-name flex flex-col gap-3">
                    <label htmlFor="locationName" className="font-bold text-lg">Location Name</label>
                    <input type="text" id="locationName" className="w-[91%]" placeholder="Type The Name Of The Location" />
                </div>

                <div className="location-address">
                    <p className="font-bold text-lg mb-3">Location Address</p>
                    <div className="country-state-city flex gap-x-3 ml-5 sm:ml-3 ">
                        <select name="country" id="country" className=' w-[30%] 'onChange={(e) => handleCountry(e)} defaultValue="Country">
                            <option disabled value="Country">Country</option>
                            {countries.map(country => (
                                <option value={country} key={country}>{country}</option>
                            ))}
                        </select>

                        <select name="province/state" id="province/state" className=' w-[30%] 'onChange={handleState} defaultValue="State">
                            <option  disabled value="State">State</option>
                            {stateList.map(state => (
                                <option value={state} key={state}>{state}</option>
                            ))}
                        </select>

                        <select className="w-[30%]" defaultValue="City" >
                        <option disabled value="City">City</option>
                            {citiesList.map(city => (
                                <option value={city} key={city}>{city}</option>
                            ))}
                        </select>
                    </div>

                    <div className="street-address mt-5">
                        <input type="text" className='w-[95%]' placeholder='Street Address' />
                    </div>
                </div>
            </div>

            <div className="contact-info  h-[68vh] sm:h-[52vh] mt-5 information">
                <div className="contact-name flex flex-col gap-3">
                    <label htmlFor="contactName" className="font-bold text-lg">Contact Name</label>
                    <input type="text" id="contactName" className="w-[91%]" placeholder="Contact Name" />
                </div>

                <div className="contact-phone flex flex-col gap-3">
                    <label htmlFor="contactPhone" className="font-bold text-lg">Contact Phone</label>
                    <PhoneInput value={value} className=" w-[93%] ml-5 px-3 " defaultCountry='CA' onChange={(value) => setValue(value) } />
                    {value && isPossiblePhoneNumber(value) && isValidPhoneNumber(value) ? <p className=' text-green-500 ml-24'>Valid Number</p> : <p className=' text-red-500 ml-24'>Invalid Number</p> }
                </div>

                <div className="contact-email flex flex-col gap-3">
                    <label htmlFor="contactEmail" className="font-bold text-lg">Contact Email</label>
                    <input type="email" id="contactEmail" className="w-[91%]" placeholder="Contact Email" />
                </div>

                <div className="contact-website flex flex-col gap-3">
                    <label htmlFor="contactWebsite" className="font-bold text-lg">Contact Website</label>
                    <input type="text" id="contactWebsite" className="w-[91%]" placeholder="Contact Website" />
                </div>
            </div>

            <div className="water-info information  h-[30vh] sm:h-[25vh] mt-5">
                <div className="waterType flex flex-col gap-3">
                    <h1 className='font-bold text-lg'>Type Of Water</h1>
                    <select name="waterType" id="waterType" className='w-[91%] ml-5' defaultValue="Select The Type Of Water">
                        <option  disabled value="Select The Type Of Water">Select The Type Of Water</option>
                        {waterTypes.map(type => (
                            <option value={type.type} key={type.id}>{type.type}</option>
                        ))}
                    </select>
                </div>

                <div className="accessWater flex flex-col gap-3">
                    <label htmlFor="accessWater" className="font-bold text-lg">How To Access Water</label>
                    <input type="text" name="accessWater" id="accessWater" placeholder='How Can People Access The Water' className='w-[91%]' />
                </div>
            </div>

            <button type="submit" className='w-[80%]   bg-sky-600 mt-10 text-white font-semibold p-4 rounded-md text-lg'>Submit</button>
        </form>
     );
}
 
export default UserAddLocation;