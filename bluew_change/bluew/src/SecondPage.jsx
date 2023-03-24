const SecondPage = ({smallAboutDetails}) => {
    return ( 
        <div className="secondpage bg-gray-200 relative h-fit pb-8">
            <link href="https://fonts.googleapis.com/css2?family=Montserrat&family=Nunito+Sans&family=Poppins&display=swap" rel="stylesheet" />
            <div className="learn-header ml-7 top-10 relative">
                <h2 className=' text-4xl font-bold text-[#00305F] '><a href="/">Learn About Us</a> </h2>
                <div className="learn-underline w-[28%] md:w-[45%] sm:w-[80%] h-3 bg-[#33918C]">

                </div>
            </div>
            <div className="cards flex gap-14 md:gap-8 sm:flex-col sm:gap-6 hover:cursor-pointer overflow-x-auto">
                {smallAboutDetails.map((item) => (
                    <div className="card flex flex-col mt-20 ml-20 sm:ml-8 hover:shadow-cardBoxShadow transition-all duration-300 h-fit" key={item.id}>
                        <img src={item.image} alt=""  className=' w-72 h-52 rounded-tl-md rounded-tr-md'/>
                        <div className="text bg-white w-72 rounded-bl-md rounded-br-md p-6">
                            <h1 className='relative font-semibold text-xl mb-2 hover:underline transition-all duration-300 ease-in-out'><a>{item.title}</a>
                            </h1>
                            <p className='font-["Poppins"]'> {item.description}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
     );
}
 
export default SecondPage;