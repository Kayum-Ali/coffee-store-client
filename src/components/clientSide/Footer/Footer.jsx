
import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram, FaLocationDot } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa6";
import { IoIosCall } from "react-icons/io";
import { MdEmail } from "react-icons/md";



const Footer = () => {
    return (
        <div className="bg-[url('https://res.cloudinary.com/dqescabbl/image/upload/v1726381638/13_qufk8y.jpg')] bg-center py-14">
            <div className="container mx-auto flex flex-col lg:flex-row items-center px-5 lg:px-0 text-center lg:text-start md:text-start">
                <div className="lg:flex-1 space-y-4">
                    <img className="w-16 mx-auto lg:mx-0 md:mx-0" src="https://res.cloudinary.com/dqescabbl/image/upload/v1726366533/logo1_griwfg.png" alt="" />
                    <h2 className="text-[#331A15] text-3xl  font-bold">Espresso Emporium</h2>
                    <p className="raleway opacity-90">Always ready to be your friend. Come & Contact with us to share your memorable moments, to share with your best companion.</p>
                    <div className="flex *:text-[#331A15] text-2xl gap-3 justify-center lg:justify-start md:justify-start">
                        <FaFacebook></FaFacebook>
                        <FaTwitter></FaTwitter>
                        <FaInstagram></FaInstagram>
                        <FaLinkedin></FaLinkedin>
                         
                    </div>
                    <h2 className="text-[#331A15] font-bold text-2xl">Get in Touch</h2>
                    <div className="text-[#331A15] space-y-2 ">
                         <div className="flex items-center gap-2  justify-center lg:justify-start md:justify-start">
                             <IoIosCall />
                             <p>+88 01533 333 333</p>
                         </div>
                         <div  className="flex items-center gap-2 justify-center lg:justify-start md:justify-start">
                             <MdEmail />
                             <p>info@gmail.com</p>
                         </div>
                         <div  className="flex items-center gap-2 justify-center lg:justify-start md:justify-start">
                         <FaLocationDot />
                             <p>72, Wall street, King Road, Dhaka</p>
                         </div>
                    </div>
                </div>

                {/* footer form */}
                <div className="lg:flex-1 w-full lg:w-auto mt-14">
                    <h2 className="text-[#331A15] text-3xl font-bold">Connect with Us</h2>
                    <div className="space-y-3 mt-2">
                         <div className="">
                            <input className="outline-none px-3 py-2.5 bg-white rounded-md lg:w-4/5 w-full" type="text" placeholder="Name" />
                         </div>
                         <div>
                            <input className="outline-none px-3 py-2.5 bg-white rounded-md lg:w-4/5 w-full" type="email" placeholder="Email" />
                         </div>
                         
                         <div>
                            <textarea className="outline-none px-3 py-2.5 bg-white rounded-md lg:w-4/5 w-full " name="" placeholder="Message" id=""></textarea>
                         </div>
                          <button className="border-2 border-[#63514D] px-5 py-2.5 rounded-[60px]">Send Message</button>
                    </div>
                </div>
            </div>
            
        </div>
    );
};

export default Footer;