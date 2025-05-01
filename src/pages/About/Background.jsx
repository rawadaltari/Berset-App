import React from "react";
import img1 from '../../../public/img/99.png'
export default function Background() {
  return (
    <div className="fixed top-0 left-0 w-full h-full pointer-events-none z-0">
      <div className="absolute top-20 left-10 w-32 h-32 bg-pink-100 rounded-full opacity-40" />
      <div className="absolute bottom-20 right-10 w-48 h-48 bg-pink-200 rounded-full opacity-30" />
      <div className="absolute bottom-50 left-10 w-100 h-100   opacity-20" >
        <img src={img1}/>
      </div>
      
      <div className="absolute top-1/2 left-1/4 w-24 h-24 bg-pink-300 rounded-full opacity-20" />
    </div>
  );
}
