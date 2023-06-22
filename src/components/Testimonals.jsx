import React from "react";
import testimonal from "../assets/testimonial.jpg";
import { Carousel } from "@material-tailwind/react";
import { ImQuotesLeft } from "react-icons/im";
import { FaUserCircle } from "react-icons/fa";

const Testimonals = () => {
  return (
    <div name="Testimonals" className=" w-screen h-screen bg-[#ebe2d5] ">
      <div className="grid grid-cols-2">
        {/* image */}
        <div className=" h-full w-full bg-[#ebe2d5]">
          <img src={testimonal} alt="fullstack" className="m-auto mt-[18vh]" />
        </div>
        {/* carousel */}
        <div className="h-[70vh] w-[70vh] bg-[#c0a278] mt-[20vh] ml-10 rounded-xl">
          <Carousel className="rounded-xl text-black">
            <div className=" h-full w-full">
              <div className="m-auto p-5 ">
                <ImQuotesLeft className="text-4xl" />
              </div>
              <div className=" ml-5 mr-5 p-auto text-2xl text-black font-bold">
                <p>
                  This course was short but very informative and very helpful
                  for an aspiring leader like myself. It also helped me
                  understand how to view or understand when I receive feedback.
                  I highly recommend it!!
                </p>
              </div>
              <div className="mt-20 ml-10 flex flex-row">
                <FaUserCircle className="text-4xl" />
                <span className="p-2 font-extrabold text-xl text-white">
                  Aditya <br />
                  FullStack Developer
                </span>
              </div>
            </div>

            <div className=" h-full w-full">
              <div className="m-auto p-5 ">
                <ImQuotesLeft className="text-4xl" />
              </div>
              <div className=" ml-5 mr-5 p-auto text-2xl text-black font-bold">
                <p>
                  Excellent course. I started it being a bit skeptical, just
                  with the intention to go quickly through some video scripts.
                  but I changed my mind. There is so much to learn here
                </p>
              </div>
              <div className="mt-20 ml-10 flex flex-row">
                <FaUserCircle className="text-4xl" />
                <span className="p-2 font-extrabold text-xl text-white">
                  Shubham <br />
                  React Developer
                </span>
              </div>
            </div>
            <div className=" h-full w-full">
              <div className="m-auto p-5 ">
                <ImQuotesLeft className="text-4xl" />
              </div>
              <div className=" ml-5 mr-5 p-auto text-2xl text-black font-bold">
                <p>
                  I enjoyed the course and learned a lot from it. The content is
                  well organised and focused on practical situations. I
                  particularly enjoyed the bits of psychological research shared
                  in the content.
                </p>
              </div>
              <div className="mt-20 ml-10 flex flex-row">
                <FaUserCircle className="text-4xl" />
                <span className="p-2 font-extrabold text-xl text-white">
                  Deepak <br />
                  Graphics Designer
                </span>
              </div>
            </div>
          </Carousel>
        </div>
      </div>
    </div>
  );
};

export default Testimonals;
