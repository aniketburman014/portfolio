import React from 'react';
import weatherProject from '../../images/weather.jpeg'
import heartProject from '../../images/HeartDisease.jpeg'
import voiceProject from '../../images/voiceDetection.jpeg'
import CardComponent from './card';
const Project = () => {
  return (
    <div className=" py-8 md:py-20 mx-5 md:mx-10 px-4 md:px-5 lg:px-10 xl:px-20">
    
    <h1 className='text-white text-xl md:text-3xl lg:text-4xl font-semibold mb-4'> Project & Research</h1>
      <div className='flex flex-wrap justify-center'>
      

      <div className='w-80 mb-5 mr-10 p-5 bg-[#03346E] rounded-lg relative'><img src={voiceProject} alt='img' className='h-40 w-80 rounded-lg '></img><p className='absolute  left-8 top-6 text-l'>Weather Website</p><i class="fa-solid fa-arrow-up-right-from-square absolute right-7 top-7"></i><div><p className='text-[#E2E2B6]'>This innovative web application is designed to provide users with a seamless and intuitive podcast streaming experience, complete with advanced search functionality and popular podcast displays.This project serves as a testament to my proficiency in ReactJs, Node Js, and MongoDB.</p></div></div>

      <div className='w-80 mb-5 mr-10 p-5 bg-[#03346E] rounded-lg relative '><img src={heartProject} alt='img' className='h-40 w-80 rounded-lg '></img><p className='absolute  left-8 top-6 text-l'>Weather Website</p><i class="fa-solid fa-arrow-up-right-from-square absolute right-7 top-7"></i><div><p className='text-[#E2E2B6]'>This innovative web application is designed to provide users with a seamless and intuitive podcast streaming experience, complete with advanced search functionality and popular podcast displays.This project serves as a testament to my proficiency in ReactJs, Node Js, and MongoDB.</p></div></div>

      <div className='w-80 mb-5 mr-10 p-5 bg-[#03346E] rounded-lg relative'><img src={heartProject} alt='img' className='h-40 w-80 rounded-lg '></img><p className='absolute  left-8 top-6 text-l'>Weather Website</p><i class="fa-solid fa-arrow-up-right-from-square absolute right-7 top-7"></i><div><p className='text-[#E2E2B6]'>This innovative web application is designed to provide users with a seamless and intuitive podcast streaming experience, complete with advanced search functionality and popular podcast displays.This project serves as a testament to my proficiency in ReactJs, Node Js, and MongoDB.</p></div></div>
      </div>
    </div>
  );
}

export default Project;
