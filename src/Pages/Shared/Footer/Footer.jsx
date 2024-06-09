import moment from "moment";
import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa6";

const Footer = () => {
    return (
        <footer>
            <div className="lg:flex">
                <div className="lg:w-[50%] p-10 bg-[#1F2937] text-neutral-content flex flex-col justify-center items-center">
                    <h6 className="text-xl font-medium mb-6">CONTACT US</h6>
                    <div className="flex flex-col items-center text-base leading-6">
                        <p>123 ABS Street, Uni 21, Bangladesh</p>
                        <p>+88 123456789</p>
                        <p>Mon - Fri: 08:00 - 22:00</p>
                        <p>Sat - Sun: 10:00 - 23:00</p>
                    </div>
                </div>
                <div className="lg:w-[50%] p-10 bg-[#111827] text-neutral-content  flex justify-center">
                    <nav className="flex flex-col items-center">
                        <h6 className="text-xl font-medium mb-6">Follow US</h6>
                        <p className="text-base mb-8">Join us on social media</p>
                        <div className="flex gap-4 items-center">
                            <FaFacebookF className="w-6 h-6" />
                            <FaInstagram className="w-6 h-6" />
                            <FaTwitter className="w-6 h-6" />
                        </div>
                    </nav>
                </div>
            </div>
            <div className="footer footer-center p-4 bg-black text-white">
                <aside>
                    <p className="text-xs font-medium opacity-80">Copyright © <span>{moment().format("dddd, MMMM D, YYYY")}</span> - All right reserved.</p>
                </aside>
            </div>
        </footer>
    );
};

export default Footer;