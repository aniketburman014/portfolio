import React from "react";
import { Link } from "@react-email/link";

const Contact = () => {
  return (
    <div className=" py-8 md:py-12 mx-5 md:mx-10 px-4 md:px-5 lg:px-10 xl:px-20">
      <h1 className="text-white text-xl md:text-3xl lg:text-4xl font-semibold mb-4">GET IN TOUCH</h1>
      <p className="text-white text-base md:text-xl mb-8">
        I'm enthusiastic about connecting, listening, and providing assistance wherever I can. Together, let's collaborate and craft something truly remarkable.{" "}
        <Link to="#" onClick={() => window.location = 'mailto:burmananiket14@gmail.com'} className="  cursor-pointer text-lg md:text-2xl">Contact Me</Link>
      </p>
    </div>
  );
};

export default Contact;
