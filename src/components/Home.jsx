import React from "react";
import Img1 from "../assets/about-image-02-2.jpg";
import Img2 from "../assets/image-01-2.png";
import Img3 from "../assets/image-02-2.png";

import { BsClockHistory, BsBookFill } from "react-icons/bs";

const Home = () => {
  return (
    <div className="grid sm:grid-cols-2 grid-cols-1">
      {/* grid 1 */}
      <div name="Home" className="w-full h-screen bg-[#ebe2d5] ">
        {/* Container */}
        <div className="max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full ">
          <p className="text-[#0a192f] text-3xl  font-extrabold">
            EXCELLENCE IN EDUCATION
          </p>
          <h1 className=" text-[#0a192f]  text-4xl sm:text-7xl font-bold ">
            Start Better Learning <br />
            Future From
            <br /> Here
          </h1>
          <h2 className="text-2xl sm:text-3xl  font-bold text-[#3c2155]">
            Empower yourself with the knowledge and skills gained through online
            education! The key to your future!
          </h2>
        </div>
      </div>
      {/* grid 2 */}
      <div className=" bg-[#dda0ad] w-full h-full  lg:grid lg:grid-cols-2 ">
        {/* card1  */}
        <div className="mt-10 p-12 hover:scale-110 duration-500 cursor-pointer">
          <div className="h-[400px] w-[300px] bg-white ">
            <img src={Img1} alt="img1" className="ml-4 p-6  " />
            <p className="font-black text-black text-xl ml-2">
              Data Structures And Algorithms
            </p>
            <div className="flex flex-row justify-center items-center font-bold ">
              <BsClockHistory />
              <p className="text-xl ml-2 mr-8  text-red-800">30 hrs</p>
              <BsBookFill />
              <p className="text-xl ml-2  text-red-800">10 Lessons</p>
            </div>
          </div>
        </div>
        {/* card2 */}
        <div className="mt-16 p-12 hover:scale-110 duration-500 cursor-pointer ">
          <div className="  h-[500px] w-[310px] bg-white">
            <img src={Img2} alt="img2" />
            <img src={Img3} alt="img2" className="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
