import { useState } from "react";
import "./Edu.css";

export default function Edu() {
  const riskFactors = [
    {
      id: 1,
      factor: "التاريخ العائلي",
      description: "وجود قريب من الدرجة الأولى مصاب بسرطان الثدي.",
    },
    {
      id: 2,
      factor: "العمر",
      description: "تزداد المخاطر مع تقدم العمر، خاصة بعد سن الخمسين.",
    },
    {
      id: 3,
      factor: "الطفرات الجينية",
      description: "طفرات الجينات BRCA1 و BRCA2 تزيد من المخاطر بشكل كبير.",
    },
    {
      id: 4,
      factor: "التاريخ الشخصي",
      description: "سرطان الثدي السابق أو بعض أمراض الثدي غير السرطانية.",
    },
    {
      id: 5,
      factor: "التعرض للإشعاع",
      description: "العلاج الإشعاعي السابق لمنطقة الصدر.",
    },
    {
      id: 6,
      factor: "العلاج الهرموني",
      description: "الاستخدام طويل الأمد للعلاج البديل بالهرمونات.",
    },
  ];

  const preventionMethods = [
    {
      id: 1,
      method: "الفحص المنتظم",
      description: "تصوير الثدي السنوي للنساء فوق سن 40.",
    },
    {
      id: 2,
      method: "نمط حياة صحي",
      description: "الحفاظ على وزن صحي وممارسة الرياضة بانتظام.",
    },
    { id: 3, method: "الحد من الكحول", description: "تقليل استهلاك الكحول." },
    {
      id: 4,
      method: "الرضاعة الطبيعية",
      description: "قد توفر بعض التأثيرات الوقائية.",
    },
    {
      id: 5,
      method: "تجنب العلاج الهرموني",
      description: "ناقش البدائل مع طبيبك.",
    },
  ];

  const commonSymptoms = [
    {
      id: 1,
      symptom: "كتلة في الثدي",
      description: "كتلة جديدة أو تسمك في الثدي أو الإبط.",
    },
    {
      id: 2,
      symptom: "تغيرات في الحجم/الشكل",
      description: "تغيرات في حجم أو شكل أو مظهر الثدي.",
    },
    {
      id: 3,
      symptom: "تغيرات الجلد",
      description: "تنقير أو احمرار أو نقر في جلد الثدي.",
    },
    {
      id: 4,
      symptom: "تغيرات الحلمة",
      description: "انقلاب أو إفرازات من الحلمة.",
    },
    { id: 5, symptom: "تقشر الجلد", description: "تقشر أو تقشير جلد الحلمة." },
  ];
  const [activeTab, setActiveTab] = useState("risk");
  const TabContent = ({ activeTab }) => {
    if (activeTab === "risk") {
      return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-right  ">
          {riskFactors.map((risk) => {
            return (
              <div key={risk.id} className="p-4  rounded-lg">
                <h2 className="text font-bold mb-2">{risk.factor}</h2>
                <p className="text-gray-600">{risk.description}</p>
              </div>
            );
          })}
        </div>
      );
    } else if (activeTab === "prevention") {
      return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-right">
          {preventionMethods.map((prevent) => {
            return (
              <div key={prevent.id} className="p-4 borderRight rounded-lg ">
                <h2 className="text-pink-500 font-bold mb-2">
                  {" "}
                  {prevent.method}{" "}
                </h2>
                <p className="text-gray-600"> {prevent.description}</p>
              </div>
            );
          })}
        </div>
      );
    } else if (activeTab === "symptoms") {
      return (
        <div className="grid  grid-cols-1 md:grid-cols-2 gap-4 text-right">
          {commonSymptoms.map((commom) => {
            return (
              <div key={commom.id} className="p-4 borderRight rounded-lg">
                <h2 className="text-pink-500 font-bold mb-2">
                  {" "}
                  {commom.symptom}{" "}
                </h2>
                <p className="text-gray-600"> {commom.description}</p>
              </div>
            );
          })}
        </div>
      );
    }
    return null;
  };
  return (
    <section className="gradent-section">
      <div className=" mt-50 mx-auto p-4  ">
        <div className="text-center  mb-8">
          <h1 className="text-3xl font-bold mb-2">ماهو سرطان الثدي ؟</h1>
          <p className="text-gray-600">
            تعرف على عوامل الخطر وطرق الوقاية والأعراض الشائعة للبقاء على اطلاع
            واستباقي بشأن صحة الثدي.
          </p>
        </div>
        <div className="bg-white rounded-lg shadow-lg p-6 ">
          <div className="flex justify-center mb-6 ">
            <button
              className={`px-4 py-2 rounded-full mx-2  ${
                activeTab === "risk"
                  ? "bg-[#ff135a] text-white"
                  : "bg-gray-200 text-gray-600"
              }`}
              onClick={() => setActiveTab("risk")}
            >
              عوامل الخطر
            </button>
            <button
              className={`px-4 py-2 rounded-full mx-2 ${
                activeTab === "prevention"
                  ? "bg-[#ff135a]  text-white"
                  : "bg-gray-200 text-gray-600"
              }`}
              onClick={() => setActiveTab("prevention")}
            >
              الوقاية
            </button>
            <button
              className={`px-4 py-2 rounded-full mx-2 ${
                activeTab === "symptoms"
                  ? "bg-[#ff135a]  text-white"
                  : "bg-gray-200 text-gray-600"
              }`}
              onClick={() => setActiveTab("symptoms")}
            >
              الأعراض
            </button>
          </div>
          <TabContent activeTab={activeTab}  />
        </div>
      </div>
    </section>
  );
}
