import React from 'react';
import backgroundImage from './like.png';
import { useState } from 'react';


const CustomLike = () => {

    const [isHover, setIsHover] = useState(false);

   const handleMouseEnter = () => {
      setIsHover(true);
   };

   const handleMouseLeave = () => {
      setIsHover(false);
   };

   const customBtnStyle = {
    width: "40px",
    height: "40px",
    margin: "20px auto",
    borderRadius: "3px",
    border: "1px solid #cdcdcd",
    backgroundImage: `url(${backgroundImage})`,
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    transition: "256ms",
    boxShadow: isHover ? "0 0 10px #cdcdcd" : "none",
    };

    const activateLike = () => {
        console.log("You just press 'Like!'");
    };

    return (
       <button 
            style={customBtnStyle}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            className='custom-like-btn' 
            name="customLikeBtn"
            onClick={activateLike}>
        </button>
    )
}

export default CustomLike;