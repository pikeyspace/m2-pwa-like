import React from 'react';

const customBtnStyle = {
    width: "40px",
    height: "40px",
    margin: "20px auto",
    backgroundColor: "#ff0000",
    borderRadius: "3px",
}

const CustomLike = () => {
    return (
       <button style={customBtnStyle} className='custom-like-btn' name="customLikeBtn">Like!</button>
    )
}

export default CustomLike;