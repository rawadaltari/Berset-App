import React from 'react';
import { AlertCircle, CheckCircle, AlertTriangle, ArrowRight } from 'lucide-react';

const AnalysisResults = ({ results, isLoading }) => {
  if (isLoading) {
    return (
      <div className="border rounded-lg p-6 bg-white shadow-md">
        <div className="flex flex-col items-center justify-center py-10">
          <div className="animate-spin rounded-full h-12 w-12  mb-4"></div>
          <p className="text-gray-700">جاري تحليل الصورة الشعاعية...</p>
          <p className="text-sm text-gray-500 mt-2">قد يستغرق هذا بضع لحظات</p>
        </div>
      </div>
    );
  }

  if (!results) {
    return null;
  }

  const getSeverityIcon = (severity) => {
    switch (severity) {
      case 'low':
        return <CheckCircle className="h-5 w-5 text-green-500" />;
      case 'medium':
        return <AlertTriangle className="h-5 w-5 text-yellow-500" />;
      case 'high':
        return <AlertCircle className="h-5 w-5 text-red-500" />;
      default:
        return <CheckCircle className="h-5 w-5 text-green-500" />;
    }
  };

  const getSeverityClass = (severity) => {
    switch (severity) {
      case 'low':
        return 'bg-green-100 text-green-800 border-green-200';
      case 'medium':
        return 'bg-yellow-100 text-yellow-800 border-yellow-200';
      case 'high':
        return 'bg-red-100 text-red-800 border-red-200';
      default:
        return 'bg-gray-100 text-gray-800 border-gray-200';
    }
  };

  const getSeverityText = (severity) => {
    switch (severity) {
      case 'low':
        return 'منخفض';
      case 'medium':
        return 'متوسط';
      case 'high':
        return 'مرتفع';
      default:
        return 'غير محدد';
    }
  };

  return (
    <div className=" rounded-lg overflow-hidden bg-white shadow-md">
      <div className="bg-pink-600 text-white p-4">
        <h2 className="text-xl font-bold">نتائج التحليل</h2>
        <p className="text-blue-200 text-sm">تم الإكمال في {new Date(results.date).toLocaleString('ar-SA')}</p>
      </div>

      <div className="p-6">
        <h3 className="text-lg font-medium text-gray-800 mb-4">ملخص النتائج</h3>

        <div className="mb-6">
          <div className="flex items-center mb-2">
            <span className="font-medium text-gray-700 ml-2">التقييم العام:</span>
            <span className={`px-3 py-1 rounded-full text-sm ${
              results.overallAssessment.includes('Normal') ? 'bg-green-100 text-green-800' :
              results.overallAssessment.includes('Suspicious') ? 'bg-yellow-100 text-yellow-800' :
              'bg-red-100 text-red-800'
            }`}>
              {results.overallAssessment}
            </span>
          </div>

          <div className="flex items-center">
            <span className="font-medium text-gray-700 ml-2">الإجراء الموصى به:</span>
            <span className="text-blue-800">{results.recommendedAction}</span>
          </div>
        </div>

        <div className="border-t border-gray-200 pt-4">
          <h4 className="font-medium text-gray-700 mb-3">النتائج التفصيلية</h4>

          {results.findings.length === 0 ? (
            <p className="text-green-600 flex items-center">
              <CheckCircle className="h-5 w-5 ml-2" />
              لم يتم اكتشاف أي نتائج مشبوهة
            </p>
          ) : (
            <div className="space-y-4">
              {results.findings.map((finding) => (
                <div 
                  key={finding.id} 
                  className={`border p-4 rounded-lg ${getSeverityClass(finding.severity)}`}
                >
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center">
                      {getSeverityIcon(finding.severity)}
                      <span className="mr-2 font-medium">
                        {finding.location} - مستوى الخطورة {getSeverityText(finding.severity)}
                      </span>
                    </div>
                    <span className="text-sm">
                      نسبة الثقة: {Math.round(finding.confidenceScore * 100)}%
                    </span>
                  </div>
                  <p className="text-sm">{finding.description}</p>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>

      <div className="bg-gray-50 p-4 border-t border-gray-200">
        <button className="flex items-center text-blue-700 hover:text-blue-900 transition-colors">
          <span>إنشاء تقرير طبي مفصل</span>
          <ArrowRight className="h-4 w-4 mr-1" />
        </button>
      </div>
    </div>
  );
};

export default AnalysisResults;
