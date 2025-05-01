
import { Play } from "lucide-react";
export default function Vediosection() {
    const videos = [
        {
          id: 1,
          title: "كيفية الحجز في مستشفى بهية",
          Image: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?w=800&auto=format&fit=crop&q=60",
          videoUrl: "https://www.youtube.com/watch?v=example1"
        },
        {
          id: 2,
          title: "الفحص الذاتي",
          Image: "https://images.unsplash.com/photo-1576765608535-5f04d1e3f289?w=800&auto=format&fit=crop&q=60",
          videoUrl: "https://www.youtube.com/watch?v=example2"
        },
        {
          id: 3,
          title: "الآثار الجانبية للعلاج",
          Image: "https://th.bing.com/th/id/OIP.6MbF2g04naOakZRNSGThgAAAAA?w=220&h=137&c=7&r=0&o=5&dpr=1.3&pid=1.7",
          videoUrl: "https://www.youtube.com/watch?v=example3"
        },
        {
          id: 4,
          title: "معلومات طبية حول العلاج الطبيعي",
          Image: "https://images.unsplash.com/photo-1628595351029-c2bf17511435?w=800&auto=format&fit=crop&q=60",
          videoUrl: "https://www.youtube.com/watch?v=example4"
        },
        {
          id: 5,
          title: "اعرفي أكثر عن فحص الماموجرام",
          Image: "https://th.bing.com/th/id/OIP.dNWufqF0gq34UB2gcCnoeAHaEK?w=308&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7",
          videoUrl: "https://www.youtube.com/watch?v=example5"
        },
        {
          id: 6,
          title: "  نصائح حول التغذية لمرضى سرطان الثدي  ",
          Image: "https://th.bing.com/th/id/OIP.uc4jSF7B-abRPvnbrw5Z_AHaEP?w=283&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7",
          videoUrl: "https://www.youtube.com/watch?v=example5"
        }
      ];

  return (
    <div className="min-h-screen bg-pink-50 py-12 px-4 sm:px-6 lg:px-8">
    <div className="max-w-7xl mx-auto">
      <h1 className="text-4xl font-bold text-center text-pink-800 mb-12" style={{ direction: 'rtl' }}>
        فيديوهات توعوية عن سرطان الثدي
      </h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {videos.map((video) => (
          <div 
            key={video.id} 
            className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
          >
            <div className="relative">
              <img 
                src={video.Image} 
                alt={video.title}
                className="w-full h-48 object-cover"
              />
              <div className="absolute inset-0  bg-opacity-40 flex items-center justify-center">
                <button 
                  className="bg-pink-600 text-white p-4 rounded-full hover:bg-pink-700 transition-colors duration-300"
                  onClick={() => window.open(video.videoUrl, '_blank')}
                >
                  <Play size={24} />
                </button>
              </div>
            </div>
            
            <div className="p-4">
              <h3 className="text-xl font-semibold text-gray-800 text-right">
                {video.title}
              </h3>
            </div>
            
            <div className="px-4 pb-4">
              <div className="flex items-center justify-end space-x-2 text-pink-600">
                <span className="text-sm">مشاهدة الفيديو</span>
                <Play size={16} />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </div>
  );
}
