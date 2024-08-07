import React from 'react';

const ResumeButton = () => {
  const handleClick = () => {
    window.location.href = 'https://www.google.com';
  };

  return (
    <div className='my-7 flex justify-center'>
      <button
        onClick={handleClick}
        className="flex items-center justify-center bg-gray-800 px-4 py-2 rounded-full text-white tracking-wider shadow-xl hover:bg-gray-900 hover:scale-105 duration-500 hover:ring-1 font-mono w-full md:w-1/2"
      >
        Resume Link
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="2"
          stroke="currentColor"
          className="ml-2 w-5 h-5 animate-bounce"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M19.5 13.5 12 21m0 0-7.5-7.5M12 21V3"
          />
        </svg>
      </button>
    </div>
  );
};

export default ResumeButton;
