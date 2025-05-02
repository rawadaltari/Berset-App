import React from 'react'

export default function WhyBreseat() {
  return (
    <div dir='rtl' className="container mx-auto px-4 py-16 max-w-6xl mt-20">
    <div className="flex flex-col md:flex-row items-center gap-12">
      <div className="flex-1 space-y-6">
        <h2 className="text-4xl font-bold">
          لماذا <span className="text-[#da4273]">نحن؟</span>
        </h2>
        
        <p className="text-gray-600 leading-relaxed">
        بسبب التزامنا بتوفير فحوصات دقيقة وموثوقة، بالإضافة إلى التركيز على التوعية بأهمية الكشف المبكر. نحن نقدم خدمات متكاملة تشمل الدعم النفسي والمعلومات الطبية اللازمة لتعزيز الوعي والوقاية.
        </p>
       

        
        <div className="text-gray-600 leading-relaxed">
          
          <ul ><span className="font-bold text-[#da4273]">تكنولوجيا متقدمة</span>
            <li>نستخدم أحدث التقنيات في الفحص، مثل الماموغرام والتصوير بالموجات فوق الصوتية</li>
          </ul>
          <ul ><span className="font-bold text-[#da4273]">فريق طبي متخصص</span>
            <li>    يتكون فريقنا من أطباء ومختصين ذوي خبرة عالية في مجال سرطان الثدي</li>
          </ul>
        
          
        </div>
        
      </div>
      
      <div className="flex-1 relative">
        <div className="bg-pink-100 rounded-full w-[500px] h-[500px] absolute -z-10 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"></div>
        <div className="grid grid-cols-2 gap-4 relative ">
          <img 
            src="https://images.unsplash.com/photo-1527613426441-4da17471b66d?auto=format&fit=crop&q=80"
            alt="Medical professional"
            className="rounded-lg shadow-md w-full h-48 object-cover"
          />
          <img 
            src="https://images.unsplash.com/photo-1582750433449-648ed127bb54?auto=format&fit=crop&q=80"
            alt="Healthcare worker"
            className="rounded-lg shadow-md w-full h-48 object-cover"
          />
          <img 
            src="https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&q=80"
            alt="Doctor"
            className="rounded-lg shadow-md w-full h-48 object-cover"
          />
          <img 
            src="https://images.unsplash.com/photo-1551601651-2a8555f1a136?auto=format&fit=crop&q=80"
            alt="Medical team"
            className="rounded-lg shadow-md w-full h-48 object-cover"
          />
        </div>
      </div>
    </div>
  </div>
  )
}
