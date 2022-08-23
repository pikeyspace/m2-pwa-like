import React from 'react';

const customBtnStyle = {
    with: "40px",
    borderRadius: "3px",
    height: "40px",
    backgroundColor: "#ff0000",
}

const CustomLike = () => {
    return (
       <button style={customBtnStyle} className='custom-like-btn' name="customLikeBtn">Like</button>
    )
}

export default CustomLike;