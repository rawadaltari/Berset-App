import { useState } from 'react';
import { cn } from '../../lib/utils';
import { predictSeverity } from '../../utils/predictionModel';
import Header from '../../Components/Header/Header';
import Footer from '../../Components/Footer/footer';
import Background from '../About/Background';
import './Tester.css'
const initialValues = {
  age: 45,
  tumorSize: 3,
  tumorShape: 1,
  marginalAdhesion: 1,
  epithelialSize: 2,
  bareNuclei: 1,
  blandChromatin: 2,
  normalNucleoli: 1,
  mitoses: 1,
};

export default function Tester() {
  const [values, setValues] = useState(initialValues);
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);
  const [activeField, setActiveField] = useState(null);

  const fields = [
    { id: 'age', label: 'العمر', min: 20, max: 90, step: 1, description: 'عمر المريض بالسنوات' },
    { id: 'tumorSize', label: 'حجم الورم', min: 1, max: 10, step: 1, description: 'حجم الورم بالملم (مقياس 1-10)' },
    { id: 'tumorShape', label: 'شكل الورم', min: 1, max: 10, step: 1, description: 'عدم انتظام شكل الخلية (مقياس 1-10)' },
    { id: 'marginalAdhesion', label: 'الالتصاق الهامشي', min: 1, max: 10, step: 1, description: 'ميل خلايا الورم للالتصاق (مقياس 1-10)' },
    { id: 'epithelialSize', label: 'حجم الخلايا الظهارية', min: 1, max: 10, step: 1, description: 'توحيد حجم الخلايا الظهارية (مقياس 1-10)' },
    { id: 'bareNuclei', label: 'الأنوية العارية', min: 1, max: 10, step: 1, description: 'نقص الأنوية في الخلايا (مقياس 1-10)' },
    { id: 'blandChromatin', label: 'الكروماتين المعتدل', min: 1, max: 10, step: 1, description: 'توحيد الكروماتين (مقياس 1-10)' },
    { id: 'normalNucleoli', label: 'النويات الطبيعية', min: 1, max: 10, step: 1, description: 'حجم النوية/البروز (مقياس 1-10)' },
    { id: 'mitoses', label: 'الانقسامات', min: 1, max: 10, step: 1, description: 'معدل انقسام الخلايا (مقياس 1-10)' },
  ];

  const handleChange = (id, value) => {
    setValues(prev => ({ ...prev, [id]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    
    // Simulate API call
    try {
      setTimeout(() => {
        const result = predictSeverity(values);
        setResult(result);
        setLoading(false);
      }, 1500);
    } catch (error) {
      console.error('Prediction error:', error);
      setLoading(false);
    }
  };

  const handleReset = () => {
    setValues(initialValues);
    setResult(null);
  };
  return (
    <>
    <Header/>
     <section dir='rtl' id="predict" className="py-16 md:py-24 relative">
      <div className="absolute inset-0 lavender-gradient-bg z-0"></div>
      
      <div className="section-container relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-pink-800">
            التنبؤ بشدة سرطان الثدي
          </h2>
          <p className="text-lg text-foreground/80 mt-5">
            أدخل بيانات المريض للحصول على تنبؤ فوري. تستخدم هذه الأداة خوارزميات متقدمة لتحليل البيانات الطبية والتنبؤ باحتمالية الخباثة.
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto glass-panel p-6 md:p-8 lg:p-10">
          <form onSubmit={handleSubmit} className="space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 ">
              {fields.map((field) => (
                <div 
                  key={field.id} 
                  className={cn(
                    "relative card-hover p-4 rounded-xl transition-all duration-300 border-2 border-[#da4273]",
                    activeField === field.id ? "bg-pink-50/50" : "bg-white/50"
                  )}
                  onFocus={() => setActiveField(field.id)}
                  onBlur={() => setActiveField(null)}
                >
                  <label 
                    htmlFor={field.id} 
                    className="block text-sm font-medium text-foreground/90 mb-1"
                  >
                    {field.label}
                  </label>
                  
                  <div className="flex items-center space-x-3">
                    <input
                      type="range"
                      id={field.id}
                      min={field.min}
                      max={field.max}
                      step={field.step}
                      value={values[field.id]}
                      onChange={(e) => handleChange(field.id, parseFloat(e.target.value))}
                      className="flex-1 h-2 bg-pink-100 rounded-lg appearance-none cursor-pointer"
                    />
                    
                    <span className="w-10 h-10 flex items-center justify-center rounded-full bg-pink-100 text-pink-700 font-medium">
                      {values[field.id]}
                    </span>
                  </div>
                  
                  <p className="mt-1 text-xs text-foreground/60">{field.description}</p>
                </div>
              ))}
            </div>
           
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
              <button
                type="submit"
                disabled={loading}
                className="btn-primary font-bold bg-pink-500 p-2 rounded-sm border-2 border-dashed flex items-center justify-center min-w-40 text-white"
              >
                {loading ? (
                  <>
                    <svg className="animate-spin dots_border -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    جاري المعالجة...
                  </>
                ) : "الحصول على التنبؤ"}
              </button>
              
              <button
                type="button"
                onClick={handleReset}
                className="btn-secondary bg-pink-500 p-2 rounded-sm border-2 border-dashed text-white font-bold "
              >
                إعادة ضبط
              </button>
            </div>
          </form>
          
          {result !== null && (
            <div className="mt-8 p-6 rounded-xl bg-white shadow-soft animate-fade-in">
              <h3 className="text-xl font-medium mb-2">نتيجة التنبؤ</h3>
              <div className="flex items-center">
                <div className="w-full bg-gray-200 rounded-full h-4 mr-2">
                  <div 
                    className={cn(
                      "h-4 rounded-full",
                      result > 0.7 ? "bg-red-500" : result > 0.4 ? "bg-yellow-500" : "bg-green-500"
                    )}
                    style={{ width: `${result * 100}%` }}
                  ></div>
                </div>
                <span className="text-sm font-medium">{Math.round(result * 100)}%</span>
              </div>
              
              <div className="mt-4 text-sm">
                <p className="text-foreground/80">
                  {result > 0.7 ? (
                    <span className="text-red-600 font-medium">مخاطر عالية. يوصى بالاستشارة الفورية.</span>
                  ) : result > 0.4 ? (
                    <span className="text-yellow-600 font-medium">مخاطر متوسطة. يوصى بالمتابعة.</span>
                  ) : (
                    <span className="text-green-600 font-medium">مخاطر منخفضة. ينصح بالفحوصات المنتظمة.</span>
                  )}
                </p>
                <p className="mt-2 text-xs text-foreground/60">
 هذا ليس تشخيصاً طبياً. استشر دائماً مع متخصصي الرعاية الصحية.
                </p>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
    <Footer/>
    <Background/>
    </>
   
  )
}
