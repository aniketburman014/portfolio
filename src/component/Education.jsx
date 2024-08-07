
import React from "react";

const Education = () => {
  return (
    <div className=" py-8 md:py-20 mx-5 md:mx-10 px-4 md:px-5 lg:px-10 xl:px-20">
      <h1 className="text-white text-xl md:text-3xl lg:text-4xl font-semibold mb-4">EDUCATION</h1>
      <div className="bg-gray-600 p-4 rounded-lg">
        <h2 className="text-white text-lg font-semibold mb-2">High School</h2>
        <p className="text-white">DAV Public School, Year of Completion: 2021</p>
      </div>
      <div className="bg-gray-600 p-4 rounded-lg mt-4">
        <h2 className="text-white text-lg font-semibold mb-2">Graduation</h2>
        <p className="text-white">KIIT University, Years: 2021 - 2025</p>
      </div>
    </div>
  );
};

export default Education;
