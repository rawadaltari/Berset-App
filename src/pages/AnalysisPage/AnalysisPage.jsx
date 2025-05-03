import React, { useState } from 'react';
import { FileWarning } from 'lucide-react';
import Header from '../../Components/Header/Header';
import Footer from '../../Components/Footer/Footer';
import ImageUploader from '../../Components/AnalysisPageCompon/ImageUploader';
import PatientInfo from '../../Components/AnalysisPageCompon/PatientInfo';
import ImageViewer from '../../Components/AnalysisPageCompon/ImageViewer';
import AnalysisResults from '../../Components/AnalysisPageCompon/AnalysisResults';
import { enhanceImage, analyzeImage } from '../../utils/analysisService';
import Background from '../About/Background';

const AnalysisPage = () => {
  const [uploadedImage, setUploadedImage] = useState(null);
  const [enhancedImage, setEnhancedImage] = useState(null);
  const [patientData, setPatientData] = useState(null);
  const [analysisResults, setAnalysisResults] = useState(null);
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [currentStep, setCurrentStep] = useState(1);

  const handleImageUpload = (file) => {
    const imageUrl = URL.createObjectURL(file);
    setUploadedImage(imageUrl);
    setCurrentStep(2);
  };

  const handlePatientInfoSave = (patient) => {
    setPatientData(patient);
    setCurrentStep(3);
  };

  const startAnalysis = async () => {
    if (!uploadedImage || !patientData) return;
    
    setIsAnalyzing(true);
    
    try {
      const enhanced = await enhanceImage(uploadedImage);
      setEnhancedImage(enhanced);
      
      const results = await analyzeImage(uploadedImage, patientData.id);
      setAnalysisResults(results);
      setCurrentStep(4);
    } catch (error) {
      console.error('Analysis failed:', error);
    } finally {
      setIsAnalyzing(false);
    }
  };

  return (
    <div  className="min-h-screen flex flex-col ">
      <Header  />
      <Background/>
      <main dir='rtl' className="flex-grow container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold text-pink-800 mb-6">تحليل صور الثدي الشعاعية</h1>
        
        <div className="flex flex-col lg:flex-row gap-8">
          <div className="w-full lg:w-2/3">
            {currentStep >= 1 && (
              <div className="mb-8">
                <h2 className="text-xl font-semibold text-gray-800 mb-4">
                  الخطوة 1: رفع صورة الثدي الشعاعية
                </h2>
                <ImageUploader onImageUpload={handleImageUpload} />
              </div>
            )}
            
            {currentStep >= 2 && patientData === null && (
              <div>
                <h2 className="text-xl font-semibold text-gray-800 mb-4">
                  الخطوة 2: إدخال معلومات المريضة
                </h2>
                <PatientInfo onSave={handlePatientInfoSave} />
              </div>
            )}
            
            {currentStep >= 3 && enhancedImage === null && !isAnalyzing && (
              <div className="bg-white rounded-lg shadow-md p-6 mb-6">
                <h2 className="text-xl font-semibold text-gray-800 mb-4">
                  الخطوة 3: بدء التحليل
                </h2>
                <p className="text-gray-600 mb-4">
                  انقر على الزر أدناه لبدء عملية تحسين الصورة والتحليل بالذكاء الاصطناعي.
                </p>
                <button
                  onClick={startAnalysis}
                  className="bg-pink-800 text-white py-2 px-6 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-colors"
                >
                  بدء التحليل
                </button>
              </div>
            )}
            
            {(isAnalyzing || enhancedImage) && (
              <div className="mb-8">
                <h2 className="text-xl font-semibold text-gray-800 mb-4">
                  {isAnalyzing ? "جاري التحليل..." : "الخطوة 4: نتائج التحليل"}
                </h2>
                {enhancedImage && uploadedImage && (
                  <ImageViewer 
                    originalImage={uploadedImage} 
                    enhancedImage={enhancedImage} 
                  />
                )}
              </div>
            )}
          </div>
          
          <div className="w-full lg:w-1/3">
            {patientData && (
              <div className="bg-white rounded-lg shadow-md p-6 mb-6">
                <h3 className="text-lg font-medium text-gray-800 mb-3">ملخص المريضة</h3>
                <div className="space-y-2">
                  <p className="text-gray-700">
                    <span className="font-medium">الاسم:</span> {patientData.name}
                  </p>
                  <p className="text-gray-700">
                    <span className="font-medium">العمر:</span> {patientData.age}
                  </p>
                  <p className="text-gray-700">
                    <span className="font-medium">تاريخ الفحص:</span> {new Date(patientData.date).toLocaleDateString('ar-SA')}
                  </p>
                </div>
              </div>
            )}
            
            {(isAnalyzing || analysisResults) && (
              <AnalysisResults results={analysisResults} isLoading={isAnalyzing} />
            )}
            
            {!uploadedImage && (
              <div className="bg-pink-200 border border-blue-200 rounded-lg p-6">
                <div className="flex items-start">
                  <FileWarning className="h-6 w-6 text-fuchsia-950 ml-3 flex-shrink-0 mt-0.5" />
                  <div>
                    <h3 className="text-lg font-medium text-pink-800 mb-2">
                      حول هذه الأداة
                    </h3>
                    <p className="text-pink-800 text-sm mb-3">
                      تستخدم أداة تحليل صور الثدي الشعاعية خوارزميات الذكاء الاصطناعي المتقدمة لـ:
                    </p>
                    <ul className="text-sm text-pink-700 space-y-1 list-disc pr-5">
                      <li>تحسين جودة الصورة للرؤية الأفضل</li>
                      <li>اكتشاف التشوهات المحتملة والتكلسات</li>
                      <li>تقديم تقييم المخاطر بناءً على تحليل الصورة</li>
                      <li>إنشاء تقارير طبية شاملة</li>
                    </ul>
                    <div className="mt-4 text-xs text-pink-600">
                      <p>
                        ملاحظة: هذه الأداة مصممة لمساعدة الأخصائيين الطبيين ولا
                        ينبغي أن تحل محل التشخيص الطبي المناسب.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default AnalysisPage;
