import React, { useState, useEffect } from 'react';

const ScrollToTop = () => {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 100) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    });
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <button
      className={`fixed bottom-8 right-8 z-50 ${
        showButton ? 'opacity-100' : 'opacity-0'
      } bg-white hover:bg-gray-100 text-[#007559] font-bold py-2 px-3 rounded-full focus:outline-none`}
      onClick={scrollToTop}
    >
      Top
    </button>
  );
};

export default ScrollToTop;
