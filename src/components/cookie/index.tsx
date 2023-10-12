<<<<<<< HEAD
import React, { useEffect, useState } from 'react'
=======
import React, { useState } from 'react'
>>>>>>> 23b0ced42b31b68035025483290df55ee28815dd

export default function CookieComponent() {
  const [accepted, setAccepted] = useState(false);

  const previouslyAccepted = localStorage.getItem('acceptedCookies') === 'true';

  const acceptCookies = () => {
    // Set the 'acceptedCookies' item in localStorage
    localStorage.setItem('acceptedCookies', 'true');
    setAccepted(true);
  };

  const styling = (accepted || previouslyAccepted)
    ? "translate-y-full"
    : ""

  return (
    <div className={`w-full text-primary justify-between flex items-center h-[200px] p-10 fixed bottom-0 z-[100] bg-white duration-1000 ${styling}`}>
      <div className="w-[60%]">
        <h1 className="font-[700]">This website uses cookies</h1>
        <p className="text-sm">
          We use cookies to personalise content and ads, to provide social media features and to analyse our traffic. We also share information about your use of our site with our social media, advertising and analytics partners who may combine it with other information that you’ve provided to them or that they’ve collected from your use of their services.
        </p>
      </div>

      <button onClick={acceptCookies} className="text-main px-10 py-3 rounded-[8px] outline-none border-2 border-[#0E096C] hover:bg-main hover:text-white font-[500] duration-300">
        Accept
      </button>
    </div>
  );
}