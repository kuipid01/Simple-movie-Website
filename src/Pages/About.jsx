import React from "react";
import img from "../assets/img.jpeg";
const About = () => {
  return (
    <>
      <div className="header w-full items-center flex flex-col bg-black h-max">
        <h2 className=" p-3 text-center font-bold text-lg w-full bg-gray-600 text-white">
          About Us
        </h2>
        <div className="container__about p-11 w-full flex  flex-col  text-white">
          <div className="why mt-28 flex w-full justify-around items-center">
            <div className="choose mr-4 w-1/3 text-white">
              <h1 className="mb-4 font-bold text-2xl">Why Choose Us</h1>
              <p className=" font-light text-base">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis
                eum laborum asperiores, a nesciunt magnam animi vero cupiditate
                illum ullam consequatur eaque exercitationem praesentium. Esse
                 </p>
            </div>
            <img
              className="w-1/4 object-cover h-[180px] rounded-sm"
              src={img}
              alt=""
            />
          </div>
          <div className="flex p-11 w -full mt-24  ">
            <div className="our_mission flex flex-col w-1/3 mr-4">
              <h2>Our Mission</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsum
                tempore nulla totam, quas culpa cupiditate placeat accusantium
                
              </p>
              <ul>
                <li className=" mb-2 mt-2">Lorem ipsum, dolor sit amet consectetur adipisicing.</li>
                <li className=" mb-2">Lorem ipsum, dolor sit amet consectetur adipisicing.</li>
                <li className=" mb-2">Lorem ipsum, dolor sit amet consectetur adipisicing.</li>
              </ul>
            </div>
            <div className="our_mission flex flex-col w-1/3 mr-4">
              <h2>Our Mission</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsum
                tempore nulla totam, quas culpa cupiditate placeat accusantium
                
              </p>
              <ul>
                <li className=" mb-2 mt-2">Lorem ipsum, dolor sit amet consectetur adipisicing.</li>
                <li className=" mb-2">Lorem ipsum, dolor sit amet consectetur adipisicing.</li>
                <li className=" mb-2">Lorem ipsum, dolor sit amet consectetur adipisicing.</li>
              </ul>
            </div>
            <div className="our_mission flex flex-col w-1/3 ">
              <h2>Our Mission</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsum
                tempore nulla totam, quas culpa cupiditate placeat accusantium
               </p>
              <ul>
                <li className=" mb-2 mt-2">Lorem ipsum, dolor sit amet consectetur adipisicing.</li>
                <li className=" mb-2">Lorem ipsum, dolor sit amet consectetur adipisicing.</li>
                <li className=" mb-2">Lorem ipsum, dolor sit amet consectetur adipisicing.</li>
              </ul>
            </div>
            <div className="our_objectives"></div>
            <div className=" Atributees"></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
