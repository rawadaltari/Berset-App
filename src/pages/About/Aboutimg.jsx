import React from 'react'

export default function Aboutimg() {
  return (
    <div className="w-1/2 relative">
    <div className="relative">
      <div className="absolute -top-10 right-0 w-64 h-64 bg-pink-200 rounded-full opacity-20" />
      <div className="absolute top-20 right-20 w-48 h-48 bg-pink-300 rounded-full opacity-30" />
      <img
        src="https://images.unsplash.com/photo-1504813184591-01572f98c85f?auto=format&fit=crop&q=80&w=600"
        alt="Woman portrait"
        className="relative z-10 rounded-full w-72 h-72 object-cover object-center shadow-xl"
      />
      <div className="absolute -bottom-10 -left-10 w-full h-full">
        <svg viewBox="0 0 200 200" className="w-full h-full text-pink-400 opacity-20">
          <path
            fill="currentColor"
            d="M100,20 C120,20 140,40 140,60 C140,80 120,100 100,100 C80,100 60,80 60,60 C60,40 80,20 100,20 Z"
          />
        </svg>
      </div>
    </div>
  </div>
  )
}
