const Navbar = ({subMenuToggle,showSubMenu}) => {
    return ( 
        <>
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.3.0/css/all.min.css" />
            <link href="https://fonts.googleapis.com/css2?family=Poppins&family=Roboto&display=swap" rel="stylesheet" />

            {!showSubMenu && <div className="navbar z-20 absolute top-5 left-5 w-[97%] sm:w-[95%] flex">
                
                <div className="company-name">
                    <h1 className="text-white font-extrabold text-3xl ">BLUE W</h1>
                </div>
                
                <div className="navItems">
                    <ul className="flex text-white gap-9">
                        <li><a href="#" className="navItem">About Us</a></li>
                        <li><a href="#" className="navItem">Our Partners</a></li>
                        <li><a href="#" className="navItem">Locations</a></li>
                    </ul>
                </div>    
            </div>}
            {!showSubMenu && <div className="hamMenu" onClick={subMenuToggle}>
                <i className="fa-solid fa-bars fa-2x text-white"></i>
            </div>}
            {showSubMenu && <div className="subMenu flex">
                
                <div className="company-name absolute top-5 left-5">
                    <h1 className="text-white font-extrabold text-3xl ">BLUE W</h1>
                </div> 

                <div className="closeIcon absolute right-3 top-4" onClick={subMenuToggle}>
                    <i className="fa-sharp fa-solid fa-xmark fa-3x"></i>
                </div>

                <ul className="flex flex-col gap-9 text-white text-2xl">
                    <li><a href="#" className="navItem">About Us</a></li>
                    <li><a href="#" className="navItem">Our Partners</a></li>
                    <li><a href="#" className="navItem">Locations</a></li>
                </ul>   
            </div>}
        </>
     );
}
 
export default Navbar;