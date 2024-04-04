import React, { useEffect, useState } from 'react';
import { HiOutlineArrowNarrowRight } from 'react-icons/hi';
import { Link, useNavigate } from 'react-router-dom';

function Success() {
  const [countdown, setCountdown] = useState(5);
  const navigate = useNavigate();

  useEffect(() => {
    const timeoutId = setInterval(() => {
      setCountdown(prevCount => {
        if (prevCount === 1) {
          clearInterval(timeoutId);
          navigate('/');
        }
        return prevCount - 1;
      });
    }, 1000);

    return () => clearInterval(timeoutId); // Cleanup function to clear interval on unmount
  }, [navigate]);

  return (

    <section className="notFound">
      <div className="container" >
        <img src='/sandwich.png'/>
        <h1>This page will automatically redirect in {countdown} seconds.</h1>
     
     <Link to={'/'}> Back to Home
     <HiOutlineArrowNarrowRight/>
     </Link>
      </div>
    </section>
   
  );
}

export default Success;
