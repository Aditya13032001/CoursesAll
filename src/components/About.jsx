import React from "react";
import { MdMobileFriendly, MdOutlineLocationOn } from "react-icons/md";
import {
  BsFillCalendar2WeekFill,
  BsFacebook,
  BsInstagram,
  BsLinkedin,
} from "react-icons/bs";
import { RiNumbersFill } from "react-icons/ri";
import l1 from "../assets/learn1.jpg";
import l2 from "../assets/learn2.jpg";

const About = () => {
  return (
    <div name="About" className="w-full h-screen bg-[#ebe2d5] mt-12">
      <div className="flex flex-col justify-center items-center w-full h-full">
        <div className="max-w-[1000px] w-full sm:grid grid-cols-2 gap-8 px-4">
          <div className="sm:text-left text-4xl font-bold ">
            <p className="text-4xl font-bold inline border-b-4 border-pink-600">
              About Us
            </p>

            <p className="mt-12">
              Creating A Community
              <p>Of Life Long Learners</p>
              <p className="text-xl mt-10 mb-5  text-blue-600 text-left">
                Online learning has become increasingly popular in recent years,
                offering a flexible and convenient way for individuals to pursue
                education and training.
              </p>
              <div className="flex flex-row text-xl text-blue-800 sm:text-center">
                <MdMobileFriendly />
                <p className="ml-3">Learn From Anywhere</p>
                <br />
              </div>
              <div className="flex flex-row text-xl text-blue-800 sm:text-center">
                <BsFillCalendar2WeekFill />
                <p className="ml-3">Flexible Classes</p>
                <br />
              </div>
              <div className="flex flex-row text-xl text-blue-800 sm:text-center">
                <RiNumbersFill />
                <p className="ml-3">
                  9/10 users reported better learning outcomes.
                </p>
                <br />
              </div>
            </p>
          </div>
          <div className=" w-[95vh] h-[70vh]  grid grid-cols-2   cursor-pointer">
            {/* card1 */}

            <div className="mt-10 p-12 ">
              <div className="h-[220px] w-[300px]  hover:scale-110 duration-500 ">
                <img src={l1} alt="learn 1" className="rounded-xl" />
              </div>

              <div className="flex flex-row items-center justify-evenly">
                <BsFacebook className="h-[5vh] w-[5vh] hover:scale-50 duration-500" />
                <BsLinkedin className="h-[5vh] w-[5vh] hover:scale-50 duration-500" />
                <BsInstagram className="h-[5vh] w-[5vh] hover:scale-50  duration-500" />
                <MdOutlineLocationOn className="h-[5vh] w-[5vh] hover:scale-50 duration-500" />
              </div>
            </div>
            {/* card2 */}

            <div className="mt-10 p-12 hover:scale-110 duration-500 ">
              <div className="h-[220px] w-[300px] ">
                <img src={l2} alt="learn2" className="rounded-md" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
