import useLocationDropDownList from '../Home/hooks/useLocationDropdownList.js';
import person from '../../assets/person-using-phone.jpg'
import { useState } from 'react';
import PhoneInput, {formatPhoneNumberIntl,isValidPhoneNumber,isPossiblePhoneNumber} from 'react-phone-number-input';
import 'react-phone-number-input/style.css';

const ProposalForm = () => {

    const checkMarksText = [
        {text:'Comprehensive Water Refill Database',id:1},
        {text:'Customized Solutions',id:2},
        {text:'Positive Branding and Reputation',id:3},
        {text:'Public Health and Wellness',id:4},
    ]

    const [phone,setPhone] = useState();
    const { countries =[], handleCountry, stateList,citiesList,handleState} = useLocationDropDownList();

    return ( 
        <div className=" grid grid-cols-2 px-4 py-10">
            <div className="benefits">
                <div className="header flex relative gap-7">
                    <div className="header-text relative">
                        <h1 className="text-[#00305F] font-semibold font-['Roboto'] text-3xl ">JOIN US TODAY</h1>
                        <div className="header-text-underline h-4 w-56  bg-[#33918C] absolute rounded-md top-3 opacity-60 -skew-y-1 "></div>
                    </div>
                    <div className="header-underline bg-gray-300 h-1 w-32 my-5"></div>
                </div>

                <img src={person} alt="" className=' w-[75%] my-6 rounded-2xl' />

                <div className="subtext w-[80%] font-['Poppins']">
                    <p>Are you looking to make your municipality more eco-friendly and promote sustainable water consumption? Look no further! Blue W is here to help you make a difference by offering convenient access to our vast network of water refill locations, as well as a range of additional services designed to enhance your community's green initiatives.</p>
                </div>

                <div className="checkmarks grid grid-cols-2 grid-rows-2 mt-6  gap-y-3 ">
                    { checkMarksText.map( item => (
                    <div className="checkmark rounded-full p-2  bg-gray-200 flex gap-2 w-[80%]" key={item.id}>
                        <div className="circle rounded-full bg-green-700 py-3 px-3 h-11 w-11 ">
                            <i className="fa-solid fa-check text-xl text-white "></i>
                        </div>

                        <div className="checkmark-text font-medium w-[68%] mb-1">
                            <p>{item.text}</p>
                        </div>
                    </div>))}
                </div>
            </div>

            <form action="" className=' ml-8'>
                <div className="header-text relative">
                    <h1 className="text-[#00305F] font-semibold font-['Roboto'] text-3xl ">Be a Sponsor</h1>
                    <div className="underline-text w-24 h-2 bg-[#33918C]"></div>
                    <h1 className=' text-xl fonst-semibold font-["Poppins"] text-slate-600 mt-5'>Genereate A Proposal</h1>
                </div>

                <div className="inputs flex flex-col gap-9 mt-10">
                    <div className="name-input flex flex-col gap-2">
                        <label htmlFor="name" className=' font-["Poppins"] font-semibold'>Name *</label>
                        <input type="text" id='name' className=' w-[70%] bg-gray-200 rounded-sm px-3 h-7' required placeholder='Example: John Doe' />
                    </div>
               
                    <div className="email-input flex flex-col gap-2">
                        <label htmlFor="email" className=' font-["Poppins"] font-semibold'>Work Email *</label>
                        <input type="email" id='email' className=' w-[70%] bg-gray-200 rounded-sm px-3 h-7' required placeholder='Example: johndoe@work.com' />
                    </div>

                    
                    <div className="position-input flex flex-col gap-2">
                        <label htmlFor="position" className=' font-["Poppins"] font-semibold'>Position *</label>
                        <input type="text" id='position' className=' w-[70%] bg-gray-200 rounded-sm px-3 h-7' required placeholder='Example: Director Of Engineering' />
                    </div>

                    <div className="phoneNumber-input flex flex-col gap-2">
                        <label htmlFor="phoneNumber" className=' font-["Poppins"] font-semibold'>Work Phone *</label>
                        <PhoneInput value={phone} className="w-[70%] " defaultCountry='CA' onChange={(phone) => setPhone(phone) }  />
                        {phone && isPossiblePhoneNumber(phone) && isValidPhoneNumber(phone) ? <p className=' text-green-500 ml-24'>Valid Number</p> : <p className=' text-red-500 ml-24'>Invalid Number</p> }
                    </div>                  
                    
                    <div className="country-state-city flex gap-x-3  sm:ml-3  ">
                        <select name="country" id="country" className=' w-[22%] bg-gray-200 rounded-sm 'onChange={(e) => handleCountry(e)} defaultValue="Country" required>
                            <option disabled value="Country">Country</option>
                            {countries.map(country => (
                                <option value={country} key={country}>{country}</option>
                            ))}
                        </select>

                        <select name="province/state" id="province/state" className=' w-[22%] bg-gray-200 rounded-sm 'onChange={handleState} defaultValue="State"  required>
                            <option  disabled value="State">State</option>
                            {stateList.map(state => (
                                <option value={state} key={state}>{state}</option>
                            ))}
                        </select>

                        <select className="w-[22%] bg-gray-200 rounded-sm" defaultValue="City" required >
                        <option disabled value="City">City</option>
                            {citiesList.map(city => (
                                <option value={city} key={city}>{city}</option>
                            ))}
                        </select>
                    </div>
                    
                </div>

                <button type="submit" className=' w-[70%] bg-[#33918C] text-white text-xl text-center mt-12 rounded-md py-3'>Submit</button>
            </form>
            <div className="lol w-1 h-[130vh] bg-gray-200 absolute top-16 left-[50%] rounded-md"></div>
        </div>
     );
}
 
export default ProposalForm;