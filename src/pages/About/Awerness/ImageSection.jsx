import React from 'react'

export default function ImageSection({ title, imageUrl, imageAlt }) {
  return (
    <section className="space-y-4">
    <h2 className="text-xl font-bold text-pink-800">{title}</h2>
    <div className="relative h-[400px] rounded-xl overflow-hidden">
      <img
        src={imageUrl}
        alt={imageAlt}
        className="w-full h-full object-cover"
      />
    </div>
  </section>
  )
}
