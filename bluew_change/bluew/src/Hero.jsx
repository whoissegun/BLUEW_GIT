import './App.css'
import phoneMap from './assets/new-map-img.png'
import bottle from './assets/bottle.png'
import { useRef,useEffect } from 'react'

const Hero = ({showObserverElements,setShowObserverElements }) => {
    
    const mainTitleRef = useRef();
    const findLocationsRef = useRef();
    const learnMoreRef = useRef();
    useEffect(() => {
        const timer = setTimeout(() => {
          
          const observer = new IntersectionObserver(
            (entries) => {
              entries.forEach((entry) => {
                if (entry.isIntersecting) {
                  const target = entry.target;
                  if (target === mainTitleRef.current) {
                    setShowObserverElements(true);
                  } else if (target === findLocationsRef.current) {
                    setShowObserverElements(true);
                  } else if (target === learnMoreRef.current) {
                    setShowObserverElements(true);
                  }
                }
              });
            },
            { threshold: 0.1 }
          );
      
          if (mainTitleRef.current) {
            observer.observe(mainTitleRef.current);
          }
          if (findLocationsRef.current) {
            observer.observe(findLocationsRef.current);
          }
          if (learnMoreRef.current) {
            observer.observe(learnMoreRef.current);
          }
      
          // Cleanup function
          return () => {
            clearTimeout(timer);
            observer.disconnect();
          };
        }, 5000);
      }, []); // Empty dependency array ensures the effect runs only once, when the component mounts
      

    return ( 
        <div className='hero'>
            <div className="hero-title text-white relative top-[30%] sm:top-[20%] left-[2%]">
                {showObserverElements && <div className={`main-title font-bold w-[50%] md:w-[65%] mb-[2%] sm:w-[90%] sm:text-center  transition-all duration-[2000] ease-in ${showObserverElements? 'active opacity-100':'opacity-0'} `} ref={mainTitleRef}>
                    <h1 className="text-5xl sm:text-3xl font-['Poppins']">Finding Clean Water Should Never Be A Hassle</h1>
                </div>}
                <div className="subtitle font-semibold w-[30%] md:w-[50%] sm:w-[90%] sm:text-center text-[#E0EEEC]">
                    <h3 className="text-3xl sm:text-xl font-['Roboto']">Get Access To Clean Water All Around You</h3>
                </div>

                {showObserverElements &&<div className="buttons mt-[3%] sm:mt-[10%] sm:ml-[10%] flex gap-4" ref={findLocationsRef}>
                    <button type="button" className={`find-locations rounded-md bg-[#3A4856] text-white w-fit p-2 font-['Poppins'] font-medium hover:opacity-95 text-xl ${showObserverElements? 'translate-x-0':'translate-x-[-100%]'} `}>
                        <span>Find Locations</span>
                    </button>

                    <button type="button" className={`find-locations rounded-md bg-[white] text-black w-fit p-2 font-['Poppins'] font-medium hover:opacity-95 text-xl ${showObserverElements? 'translate-x-0':'translate-x-[-100%]'} transition-all duration-1000 ease-in-out`} >
                        <span>Learn More</span>
                    </button>
                </div>}
            </div>
            <div className="water-images">
                <img src={phoneMap} alt="" className='heroImg absolute right-[10%] sm:right-[23%] bottom-[5%] lg:right-[3%] lg:bottom-[10%] skew-x-[-8deg] w-[35%] lg:w-[50%] sm:w-[65%] sm:bottom-[3%] translate-x-0 transition-all duration-1000' />
                <img src={bottle} alt="" className='heroImg absolute right-[8%] bottom-[5%] lg:right-[3%] sm:right-[15%] lg:bottom-[10%] w-[15%] lg:w-[20%] sm:w-[35%] sm:bottom-[3%] translate-x-0 transition-all duration-1000'/>
            </div>
        </div>
     );
}
 
export default Hero;