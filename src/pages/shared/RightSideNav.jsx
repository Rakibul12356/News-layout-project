import { FcGoogle } from "react-icons/fc";
import { FaFacebook, FaGithub, FaInstagram, FaTwitter } from "react-icons/fa";
import qZone1 from "../../assets/playground.png"
import qZone2 from "../../assets/swimming.png"
import qZone3 from "../../assets/class.png"
const RightSideNav = () => {
    return (
        <div>
            {/**section-1 login */}
            <div className="p-4 space-y-4 md:space-x-2 mb-6">
                <h2 className="text-2xl font-bold ">LogIn With</h2>
                <button className="btn btn-outline ">
                <FcGoogle />
                   Login with Google
                </button>
                <button className=" btn btn-outline">
                <FaGithub />
                   Login with Google
                </button>
            </div>
              {/**section-2 */}
            <div className=" p-4 md:space-x-2 mb-6">
                <h2 className="text-2xl mb-4 font-bold ">Find Us</h2>
                <a className="p-4 flex gap-2 border  rounded-t-lg text-lg items-center" href=""><FaFacebook></FaFacebook>
                FaceBook</a>
                <a className="p-4 flex gap-2 border   text-lg items-center" href=""><FaTwitter></FaTwitter>
                Twitter</a>
                <a className="p-4 flex gap-2 border  rounded-b-lg text-lg items-center" href=""><FaInstagram></FaInstagram>
                Instagram</a>
            </div>
               {/**section-3 Q-zone */}
               <div className="p-4 space-y-4 md:space-x-2 mb-6">
                <h2 className="text-2xl font-bold ">Q-Zone</h2>
                <img src={qZone2} alt="" />
                <img src={qZone1} alt="" />
                <img src={qZone3} alt="" />
                
            </div>
        </div>
    );
};

export default RightSideNav;