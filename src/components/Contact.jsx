import React from "react";
import Logo from "../assets/logo.png";
import {
  BsFacebook,
  BsInstagram,
  BsLinkedin,
  BsTwitter,
  BsFillTelephoneFill,
} from "react-icons/bs";
import {
  MdOutlineLocationOn,
  MdArrowForwardIos,
  MdOutlineMail,
} from "react-icons/md";

const Contact = () => {
  return (
    <div
      name="Contact"
      className=" absolute w-screen h-screen bg-[#6c5535]  text-white"
    >
      <div className="mt-24">
        <div className="grid grid-cols-3 gap-2">
          {/* grid1 */}

          <div>
            <img
              src={Logo}
              alt="logo"
              style={{ height: "50px" }}
              className="ml-12"
            />
            <p
              className="m-4  p-3  text-2xl text-black"
              style={{ fontWeight: "1000" }}
            >
              We offers a range of courses online, in the workplace and in the
              classroom. Download our course guide and view our online training
              calendar to find local courses and build your skillset to increase
              your job prospects today!
            </p>
            <div className="flex flex-row items-center justify-evenly">
              <BsFacebook className="h-[5vh] w-[5vh] hover:scale-50 duration-500" />
              <BsLinkedin className="h-[5vh] w-[5vh] hover:scale-50 duration-500" />
              <BsInstagram className="h-[5vh] w-[5vh] hover:scale-50  duration-500" />
              <BsTwitter className="h-[5vh] w-[5vh] hover:scale-50 duration-500" />
            </div>
          </div>
          {/* grid2 */}
          <div>
            <p className="text-4xl font-bold">Explore</p>
            <ul className="justify-between text-3xl ">
              <li className="flex flex-row m-4 hover:scale-90 duration-200 hover:text-blue-300">
                <MdArrowForwardIos />
                About us
              </li>
              <li className="flex flex-row m-4 hover:scale-90 duration-200 hover:text-blue-300">
                <MdArrowForwardIos />
                Blog & News
              </li>
              <li className="flex flex-row m-4 hover:scale-90 duration-200 hover:text-blue-300">
                <MdArrowForwardIos />
                Upcoming Events
              </li>
              <li className="flex flex-row m-4 hover:scale-90 duration-200 hover:text-blue-300">
                <MdArrowForwardIos />
                Testimonial
              </li>
              <li className="flex flex-row m-4 hover:scale-90 duration-200 hover:text-blue-300">
                <MdArrowForwardIos />
                Privacy Policy
              </li>
            </ul>
          </div>
          {/* grid3 */}
          <div className="mr-12 text-3xl">
            <p className="text-4xl font-bold">Contact Info</p>
            <div className="flex  flex-row justify-between m-4  hover:scale-90 duration-200 hover:text-blue-300">
              <MdOutlineLocationOn />{" "}
              <span>
                ----------------
                <br />
                ---------------
              </span>
            </div>
            <div className="flex  flex-row justify-between m-5  hover:scale-90 duration-200 hover:text-blue-300">
              <BsFillTelephoneFill />
              <span>+9121213124124</span>
            </div>
            <div className="flex  flex-row justify-between m-6  hover:scale-90 duration-200 hover:text-blue-300">
              <MdOutlineMail />
              <span>abc@gmail.com</span>
            </div>
          </div>
        </div>
      </div>
      <div className="hidden"></div>
    </div>
  );
};

export default Contact;
