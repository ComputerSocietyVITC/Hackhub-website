  'use client';
  import React from 'react';

  const Homepage: React.FC = () => {
    return (
      <div
        className="flex items-center justify-center h-screen w-screen " 
      >
        <div
          className="bg-center bg-no-repeat bg-contain h-[50vh] w-[50vw]" 
          style={{
            backgroundImage: 'url(images/Hackhub_logo.svg)', 
          }}
        />
      </div>
    );
  };

  export default Homepage;
