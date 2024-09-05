import { CiFacebook } from "react-icons/ci";
import { FaInstagram } from "react-icons/fa";
import { CiTwitter } from "react-icons/ci";
import { BsWhatsapp } from "react-icons/bs";




const Footer = () => {
    return (
        <div className='p-5 md:mx-20 mt-20'>
            <div className='text-center'>
                <h1 className=' font-bold font-serif mt-5 mb-2 title'>CONTACT US</h1>

                <hr className="border-black border-2 w-80 mx-auto" />
                <h2 className='mt-10'>You can make a reservation any time online or by calling (000) 111 2222 during  <br />our opening hours.</h2>
            </div>

            <div className='mt-10'>
                <div>

                    {/* <div className='text-center'>
                        <p>Book Your Table</p>
                        <h1 className='font-bold font-serif mt-5 titleAdd text-3xl'>Make Reservation </h1>
                        <hr />
                        <p className='text-sm mt-10'>You can make a reservation any time online or by calling (000) 111 2222 during our opening hours.</p>
                    </div> */}

                    {/* Form  */}
                    <div className=" flex justify-evenly items-center mt-16">
                        <div className="w-full max-w-full">
                            <form className=" rounded pb-8 mb-4">

                                <div className="grid grid-cols-3 gap-5 mb-4">
                                    <div>
                                        <label className="block text-gray-600 ml-5">Name*</label>
                                        <input
                                            className="shadow border rounded-full w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                            id="name"
                                            type="text"
                                        // placeholder="Enter your name"

                                        />
                                    </div>

                                    <div>
                                        <label className="block text-gray-600 ml-5">Email*</label>
                                        <input
                                            className=" shadow border rounded-full w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                            id="email"
                                            type="email"
                                        // placeholder="Enter your email"
                                        />
                                    </div>

                                    <div>
                                        <label className="block text-gray-600 ml-5">Phone*</label>
                                        <input
                                            className=" shadow border rounded-full w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                            id="email"
                                            type="email"
                                        // placeholder="Enter your Phone Number"
                                        />
                                    </div>
                                </div>

                                <div className='grid grid-cols-3 gap-5 mb-5'>
                                    <div>
                                        <label className="block text-gray-600 ml-5">Seat*</label>
                                        <input
                                            type="text"
                                            name="seat"
                                            className="mt-1 block w-full py-2 px-3 border rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500"
                                        // placeholder="Enter your seat number"
                                        />
                                    </div>

                                    <div>
                                        <label className="block text-gray-600 ml-5">Date</label>
                                        <input
                                            type="date"
                                            name="date"

                                            className="mt-1 block w-full py-2 px-3 border rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500"
                                        />
                                    </div>

                                    <div>
                                        <label className="block text-gray-600 ml-5">Time</label>
                                        <input
                                            type="time"
                                            name="time"

                                            className="mt-1 block w-full py-2 px-3 border rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500"
                                        />
                                    </div>
                                </div>

                                <div className="mb-6">

                                    <label className="block text-gray-600 ml-5">Special Requests</label>
                                    <textarea
                                        className="shadow border rounded-xl w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                        id="message"
                                        rows="4"
                                    // placeholder="Enter your message"
                                    />
                                </div>

                                <div className="text-center">
                                    <button
                                        className=" border border-slate-500 bg-white hover:bg-slate-600 text-black font-bold py-2 px-4  focus:outline-none focus:shadow-outline rounded-xl"
                                        type="submit"
                                    >
                                        Book Now
                                    </button>

                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>

            <div className='md:flex justify-evenly items-center'>
                <div className='text-center'>
                    <h1 className=' font-extrabold text-2xl my-5 titleAdd'>RESERVATION:</h1>
                    <a className='text-sm' href="">molly_paradise</a> <br />
                    <a className='text-sm' href="">contact@example.com</a> <br />
                    <a className='text-sm' href="">+38(050)000-00-00</a>
                </div>

                <div className='text-center'>
                    <h1 className='font-bold text-2xl titleAdd my-5'>ADDRESS:</h1>
                    <p className='text-sm my-1'>40 Park Ave, Brooklyn, New York, 70250 </p>
                    <p className='text-sm'>30 George V St, Suite 1, Paris, 33333</p>
                </div>

                <div className='text-center'>
                    <h1 className='font-bold titleAdd  my-5 text-2xl'>OPEN HOURS:</h1>
                    <p className='text-sm'>Monday - Friday: 10 AM - 11 PM <br /> Saturday - Sunday: 9 AM - 1 PM</p>
                </div>
            </div>


            {/* icons */}
            <div className="flex justify-center gap-10 mt-10">
                <CiFacebook className="text-3xl" />
                <FaInstagram className="text-3xl" />
                <CiTwitter className="text-4xl" />
                <BsWhatsapp className="text-3xl" />
            </div>
            <p className="text-center my-5 ">2024 © Dina . Designed by <span className="text-orange-500">MAHAMUDHUL HASAN</span></p>
        </div>
    );
};

export default Footer;