import React from "react";
import ai from "../assets/ai.jpg";
import android from "../assets/android.jpg";
import devops from "../assets/devops.jpg";
import rt from "../assets/react.jpg";
import dm from "../assets/digital.jpg";
import cn from "../assets/cn.jpg";
import full from "../assets/fullstack.jpg";
import node from "../assets/node.jpg";

import { BsClockHistory, BsBook, BsCurrencyDollar } from "react-icons/bs";
import { BiUserCircle } from "react-icons/bi";

const Skills = () => {
  return (
    <div name="Skills" className=" w-screen h-screen bg-[#ebe2d5] ">
      {/* Container */}
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-screen">
        <div>
          <p className="text-4xl  font-bold inline border-b-4 border-pink-600">
            Courses
          </p>
        </div>

        <div className="w-full grid grid-cols-2 sm:grid-cols-4 py-8 gap-4 text-center">
          {/* cards start */}
          <div className="shadow-md shadow-[#beb069] hover:scale-110 duration-500 h-[40vh] text-blue-800">
            <div className="bg-white bg-opacity-60  h-[4vh] w-[14vh] absolute ml-[-1] mt-3 justify-center rounded-r-lg text-black font-extrabold">
              <span className="text-blue-800">Advanced</span>
            </div>
            <img className="w-30 h-30 mx-auto " src={ai} alt="aws-icon" />
            <div className="flex flex-row justify-center items-center font-bold mt-10">
              <BsClockHistory />
              <p className="text-lg ml-2 mr-8  ">15 hrs</p>
              <BsBook />
              <p className="text-lg ml-2  ">10 Lessons</p>
            </div>
            <p className="my-4 text-3xl " style={{ fontWeight: "900" }}>
              AI/ML
            </p>
            <div className="flex flex-row justify-center items-center mt-4 font-bold">
              <BsCurrencyDollar className="ml-2 text-2xl" />
              <span className=" text-sm ml-2  ">30</span>
              <BiUserCircle className="ml-12 text-2xl" />
              <span className=" text-sm ml-2  ">200 Students</span>
            </div>
          </div>

          <div className="shadow-md shadow-[#beb069] hover:scale-110 duration-500 h-[40vh] text-blue-800">
            <div className="bg-white bg-opacity-60  h-[4vh] w-[14vh] absolute ml-[-1] mt-3 justify-center rounded-r-lg text-black font-extrabold">
              <span className="text-blue-800">Intermediate</span>
            </div>
            <img className="w-30 h-30 mx-auto " src={android} alt="aws-icon" />
            <div className="flex flex-row justify-center items-center font-bold mt-4">
              <BsClockHistory />
              <p className="text-sm ml-2 mr-8  ">35 hrs</p>
              <BsBook />
              <p className="text-sm ml-2  ">15 Lessons</p>
            </div>
            <p className="my-4 text-3xl " style={{ fontWeight: "900" }}>
              Android
            </p>
            <div className="flex flex-row justify-center items-center mt-4 font-bold">
              <BsCurrencyDollar className="ml-2 text-2xl" />
              <span className=" text-sm ml-2  ">45</span>
              <BiUserCircle className="ml-12 text-2xl" />
              <span className=" text-sm ml-2  ">110 Students</span>
            </div>
          </div>

          <div className="shadow-md shadow-[#beb069] hover:scale-110 duration-500 h-[40vh]  text-blue-800 ">
            <div className="bg-white bg-opacity-60  h-[4vh] w-[14vh] absolute ml-[-1] mt-3 justify-center rounded-r-lg text-black font-extrabold">
              <span className="text-blue-800">Begineer</span>
            </div>
            <img className="w-30 h-30 mx-auto " src={devops} alt="aws-icon" />
            <div className="flex flex-row justify-center items-center font-bold mt-10">
              <BsClockHistory />
              <p className="text-sm ml-2 mr-8  ">10 hrs</p>
              <BsBook />
              <p className="text-sm ml-2  ">8 Lessons</p>
            </div>
            <p className="my-4 text-3xl " style={{ fontWeight: "900" }}>
              Devops CI/CD
            </p>
            <div className="flex flex-row justify-center items-center mt-4 font-bold">
              <BsCurrencyDollar className="ml-2 text-2xl" />
              <span className=" text-sm ml-2  ">15</span>
              <BiUserCircle className="ml-12 text-2xl" />
              <span className=" text-sm ml-2  ">18 Students</span>
            </div>
          </div>

          <div className="shadow-md shadow-[#beb069] hover:scale-110 duration-500 h-[40vh] text-blue-800 ">
            <div className="bg-white bg-opacity-60  h-[4vh] w-[14vh] absolute ml-[-1] mt-3 justify-center rounded-r-lg text-black font-extrabold">
              <span className="text-blue-800">Advanced</span>
            </div>
            <img className="w-30 h-30 mx-auto " src={full} alt="aws-icon" />
            <div className="flex flex-row justify-center items-center font-bold mt-4">
              <BsClockHistory />
              <p className="text-sm ml-2 mr-8  ">12 hrs</p>
              <BsBook />
              <p className="text-sm ml-2  ">16 Lessons</p>
            </div>
            <p className="my-4 text-3xl " style={{ fontWeight: "900" }}>
              Full Stack
            </p>
            <div className="flex flex-row justify-center items-center mt-4 font-bold">
              <BsCurrencyDollar className="ml-2 text-2xl" />
              <span className=" text-sm ml-2  ">45</span>
              <BiUserCircle className="ml-12 text-2xl" />
              <span className=" text-sm ml-2  ">200 Students</span>
            </div>
          </div>

          <div className="shadow-md shadow-[#beb069] hover:scale-110 duration-500 h-[40vh] text-blue-800 ">
            <div className="bg-white bg-opacity-60  h-[4vh] w-[14vh] absolute ml-[-1] mt-3 justify-center rounded-r-lg text-black font-extrabold">
              <span className="text-blue-800">Begineer</span>
            </div>
            <img className="w-30 h-30 mx-auto " src={cn} alt="aws-icon" />
            <div className="flex flex-row justify-center items-center font-bold mt-4">
              <BsClockHistory />
              <p className="text-sm ml-2 mr-8  ">18 hrs</p>
              <BsBook />
              <p className="text-sm ml-2  ">18 Lessons</p>
            </div>
            <p className="my-4 text-3xl " style={{ fontWeight: "900" }}>
              CN
            </p>
            <div className="flex flex-row justify-center items-center mt-4 font-bold">
              <BsCurrencyDollar className="ml-2 text-2xl" />
              <span className=" text-sm ml-2  ">44</span>
              <BiUserCircle className="ml-12 text-2xl" />
              <span className=" text-sm ml-2  ">114 Students</span>
            </div>
          </div>

          <div className="shadow-md shadow-[#beb069] hover:scale-110 duration-500 h-[40vh] text-blue-800 ">
            <div className="bg-white bg-opacity-60  h-[4vh] w-[14vh] absolute ml-[-1] mt-3 justify-center rounded-r-lg text-black font-extrabold">
              <span className="text-blue-800">Intermediate</span>
            </div>
            <img className="w-30 h-30 mx-auto " src={rt} alt="aws-icon" />
            <div className="flex flex-row justify-center items-center font-bold mt-4">
              <BsClockHistory />
              <p className="text-sm ml-2 mr-8  ">12 hrs</p>
              <BsBook />
              <p className="text-sm ml-2  ">12 Lessons</p>
            </div>
            <p className="my-4 text-3xl " style={{ fontWeight: "900" }}>
              React
            </p>
            <div className="flex flex-row justify-center items-center mt-4 font-bold">
              <BsCurrencyDollar className="ml-2 text-2xl" />
              <span className=" text-sm ml-2  ">33</span>
              <BiUserCircle className="ml-12 text-2xl" />
              <span className=" text-sm ml-2  ">12 Students</span>
            </div>
          </div>

          <div className="shadow-md shadow-[#beb069] hover:scale-110 duration-500 h-[40vh] text-blue-800">
            <div className="bg-white bg-opacity-60  h-[4vh] w-[14vh] absolute ml-[-1] mt-3 justify-center rounded-r-lg text-black font-extrabold">
              <span className="text-blue-800">Begineer</span>
            </div>
            <img className="w-30 h-30 mx-auto " src={node} alt="aws-icon" />
            <div className="flex flex-row justify-center items-center font-bold mt-4">
              <BsClockHistory />
              <p className="text-sm ml-2 mr-8  ">15 hrs</p>
              <BsBook />
              <p className="text-sm ml-2  ">10 Lessons</p>
            </div>
            <p className="my-4 text-3xl " style={{ fontWeight: "900" }}>
              Node
            </p>
            <div className="flex flex-row justify-center items-center mt-4 font-bold">
              <BsCurrencyDollar className="ml-2 text-2xl" />
              <span className=" text-sm ml-2  ">30</span>
              <BiUserCircle className="ml-12 text-2xl" />
              <span className=" text-sm ml-2  ">200 Students</span>
            </div>
          </div>

          <div className="shadow-md shadow-[#beb069] hover:scale-110 duration-500 h-[40vh] text-blue-800 ">
            <div className="bg-white bg-opacity-60  h-[4vh] w-[14vh] absolute ml-[-1] mt-3 justify-center rounded-r-lg text-black font-extrabold">
              <span className="text-blue-800">Begineer</span>
            </div>
            <img className="w-30 h-30 mx-auto " src={dm} alt="aws-icon" />
            <div className="flex flex-row justify-center items-center font-bold mt-10">
              <BsClockHistory />
              <p className="text-sm ml-2 mr-8  ">15 hrs</p>
              <BsBook />
              <p className="text-sm ml-2  ">10 Lessons</p>
            </div>
            <p className="my-4 text-3xl " style={{ fontWeight: "900" }}>
              Digital Marketing
            </p>
            <div className="flex flex-row justify-center items-center font-bold">
              <BsCurrencyDollar className="ml-2 text-2xl" />
              <span className=" text-sm ml-2  ">65</span>
              <BiUserCircle className="ml-12 text-2xl" />
              <span className=" text-sm ml-2  ">67 Students</span>
            </div>
          </div>
          {/* cards end */}
        </div>
      </div>
    </div>
  );
};

export default Skills;
