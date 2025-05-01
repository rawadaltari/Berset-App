import React from 'react'

export default function AboutContent() {
  return (
    <div className="w-1/2 about">
    <h1 className="text-5xl font-bold text-pink-800 mb-4">
       سرطان الثدي
    </h1>
    <h2 className="text-3xl font-semibold text-pink-600 mb-6">
      التوعية حياة 
    </h2>
    <p className="text-pink-700 mb-8 leading-relaxed"> في عام 2022، شُخصت إصابة 2.3 مليون امرأة بسرطان الثدي وسُجلت 000 670 حالة وفاة بسببه في العالم. ويحدث سرطان الثدي في كل بلد من بلدان العالم بين النساء من كل الأعمار بعد سن البلوغ ولكن بمعدلات متزايدة في مراحل متأخرة من الحياة
    </p>
    <button className="bg-pink-500 text-white px-8 py-3 rounded-full
      hover:bg-pink-600 transition-colors font-medium">
       أقرا المزيد
    </button>
  </div>
  )
}
