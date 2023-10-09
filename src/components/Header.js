import React, { useState } from 'react';


export default function Header() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleMode = () => {
    setIsDarkMode(!isDarkMode);
  };
  return (
    
    <header className="py-4 border-b-2 border-b-gray-300 drop-shadow-md fixed top-0 inset-x-0 bg-white">
      <h1 className="font-bold text-3xl uppercase text-center ">
         Blogs
      </h1>
      
     
    </header>


  );
}
