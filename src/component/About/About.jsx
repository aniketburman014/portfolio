import profilepic from '../../images/profile.png'
import React, { useState, useEffect } from "react";
import SocialIcons from './SocialIcons';
import ResumeButton from './LinkResume';


 

const AboutSection = () => {
  return (
    <div className=" py-10 mt-10 mx-5 md:mx-20 ">
      <div className="container mx-auto px-4 md:px-0">
        <div className="flex flex-wrap justify-center md:justify-between items-center">
        
          <div className="w-full md:w-1/2 px-4 pt-1 mb-4 md:mb-0 justify-center">
            <div className="flex justify-center">
              <img src={profilepic} alt="Profile" className="shadow-md rounded-full w-64 md:w-80" />
            </div>
            
          </div>
          <div className="w-full md:w-1/2 px-4 ">
            <h1 className='text-3xl md:text-5xl  my-10 md:mb-10 text-[#A91D3A]'>Aniket Burman</h1>
            <p className="leading-relaxed text-base md:text-xl mb-8 text-[#eeeeeec8]">
              I am an enthusiastic undergraduate student pursuing a Bachelor of Engineering in Computer Science. With a keen interest in leveraging my skills and knowledge to tackle challenging problems, I am deeply passionate about innovation in the tech industry. Throughout my academic journey, I've had the privilege to engage in diverse projects, honing my expertise across various technologies and programming languages. As I continue my undergraduate studies, I am eager to further develop my skills and contribute meaningfully to the ever-evolving field of computer science.
            </p>
            
            <SocialIcons />
            
            
            <ResumeButton/>
          </div>
          
        </div>
      </div>
      
    </div>
  );
}

export default AboutSection;
