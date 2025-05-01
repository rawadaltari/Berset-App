import React from 'react';
import { Heart, Ribbon, Syringe, Dna } from 'lucide-react';

function ServiceCard({ icon: Icon, title, description }) {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 flex flex-col items-center text-center  border-b-4 border-[#da4273] ">
      <div className="w-12 h-12 bg-pink-100 rounded-full flex items-center justify-center mb-4">
      {Icon && <Icon className="w-10 h-10 text-pink-500" />}
        
      </div>
      <h3 className="text-lg font-semibold text-gray-800 mb-2">{title}</h3>
      <p className="text-sm text-gray-600 mb-4">{description}</p>
      <button className="text-pink-500 hover:text-pink-600 font-medium">
        View More
      </button>
    </div>
  );
}

export function MedicenCard() {
  const services = [
    {
      icon: Heart,
      title: "فحص صحة الثدي",
      description: "فحوصات وفحوصات منتظمة للحفاظ على صحة الثدي المثلى"
    },
    {
      icon: Ribbon,
      title: "التطعيم ضد فيروس الورم الحليمي البشري",
      description: "الحماية من فيروس الورم الحليمي البشري بالتطعيم الآمن والفعال"
    },
    {
      icon: Syringe,
      title: "فحص صحة عنق الرحم",
      description: "فحص عنق الرحم الشامل وخدمات الرعاية الوقائية"
    },
    {
      icon: Dna,
      title: "فحص",
      description: "الاختبارات الجينية المتقدمة لتقييم مخاطر الإصابة بسرطان الثدي"
    }
  ];

  return (
    <div className="min-h-screen  p-8 mt-30">
        <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">خدماتنا</h2>
      <div className="max-w-6xl mx-auto">
        {/* Hero Section with Ribbon */}
        <div className="relative mb-12">
          <div className="absolute left-0 top-0 w-1/4">
            <div className="w-full h-full bg-purple-200 opacity-50 transform -skew-x-12" />
          </div>
          <img
            src="https://images.unsplash.com/photo-1666214280557-f1b5022eb634?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWd1fHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
            alt="Medical Team"
            className="w-full h-100 object-cover rounded-2xl shadow-lg"
          />
        </div>

        {/* Services Title */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-800">
            عن خدماتنا  <span className="text-[#da4273]">@ سرطان الثدي</span>
          </h2>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 ">
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              icon={service.icon}
              title={service.title}
              description={service.description}
            />
          ))}
        </div>
      </div>
    </div>
  );
}