import { Link } from 'react-router-dom';
const Navbar = ({subMenuToggle,showSubMenu}) => {
    return ( 
        <>

            {!showSubMenu && <div className="navbar bg-gray-200 w-full h-fit flex px-4 py-3 relative">
                
                <div className="company-name">
                    <h1 className="text-black font-extrabold text-3xl ">BLUE W</h1>
                </div>
                
                <div className="navItems absolute right-5 top-5 ">
                    <ul className="flex text-black gap-9 font-semibold font-['Poppins']">
                        <li><a href="#" className="navItem">About Us</a></li>
                        <li><a href="#" className="navItem">Our Partners</a></li>
                        <li><Link to="/generate-proposal">Get A Proposal</Link></li>
                    </ul>
                </div>    
            </div>}
            {!showSubMenu && <div className="hamMenu" onClick={() =>subMenuToggle()}>
                <i className="fa-solid fa-bars fa-2x text-black"></i>
            </div>}
            {showSubMenu && <div className="subMenu flex">
                
                <div className="company-name absolute top-5 left-5">
                    <h1 className="text-white font-extrabold text-3xl ">BLUE W</h1>
                </div> 

                <div className="closeIcon absolute right-3 top-4" onClick={() =>subMenuToggle()}>
                    <i className="fa-sharp fa-solid fa-xmark fa-3x"></i>
                </div>

                <ul className="flex flex-col gap-9 text-white text-2xl">
                    <li><a href="#" className="navItem">About Us</a></li>
                    <li><a href="#" className="navItem">Our Partners</a></li>
                    <li><Link to="/generate-proposal">Get A Proposal</Link></li>
                </ul>   
            </div>}
        </>
     );
}
 
export default Navbar;