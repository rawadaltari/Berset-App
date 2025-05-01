
import React from 'react';
import { Search, ChevronDown } from 'lucide-react';
export default function Article() {
    const articles = [
        {
          id: 1,
          title: 'وضع خطة علاج سرطان الثدي',
          image: 'https://images.unsplash.com/photo-1576765608535-5f04d1e3f289?auto=format&fit=crop&q=80&w=800',
          readMore: 'اقرأ المزيد'
        },
        {
          id: 2,
          title: 'الكشف المبكر عن سرطان الثدي',
          image: 'https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&q=80&w=800',
          readMore: 'اقرأ المزيد'
        },
        {
          id: 3,
          title: 'كيفية الفحص الذاتي لسرطان الثدي',
          image: 'https://images.unsplash.com/photo-1631815589968-fdb09a223b1e?auto=format&fit=crop&q=80&w=800',
          readMore: 'اقرأ المزيد'
        },
        {
          id: 4,
          title: 'كيفية الفحص الذاتي لسرطان الثدي',
          image: 'https://images.unsplash.com/photo-1631815589968-fdb09a223b1e?auto=format&fit=crop&q=80&w=800',
          readMore: 'اقرأ المزيد'
        },
        {
          id: 5,
          title: 'كيفية الفحص الذاتي لسرطان الثدي',
          image: 'https://images.unsplash.com/photo-1631815589968-fdb09a223b1e?auto=format&fit=crop&q=80&w=800',
          readMore: 'اقرأ المزيد'
        },
        {
          id: 6,
          title: 'كيفية الفحص الذاتي لسرطان الثدي',
          image: 'https://images.unsplash.com/photo-1631815589968-fdb09a223b1e?auto=format&fit=crop&q=80&w=800',
          readMore: 'اقرأ المزيد'
        }
      ];
  return (
    <div dir="rtl" className="min-h-screen  mt-30">
   
   

    {/* Main Content */}
    <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
    <h1 className="text-3xl text-pink-800 font-bold">بعض مقالات سرطان الثدي</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-15">
        
        {articles.map((article) => (
          <div key={article.id} className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300">
            <img
              src={article.image}
              alt={article.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                {article.title}
              </h3>
              <div className="flex justify-end">
                <button className="text-pink-600 hover:text-pink-700 font-medium">
                  {article.readMore}
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </main>
  </div>
  )
}
