import React from 'react'
import { HeroSection } from './HeroSection'
import { ContentSection } from './ContentSection'
import ImageSection from './ImageSection'
import { Users } from 'lucide-react';
export default function Awer() {
  return (
    <div className="min-h-screen bg-gray-50 p-6 text-right" dir="rtl">
      <div className="max-w-4xl mx-auto space-y-8">
        <HeroSection
          title="بعض نصائح لسرطان الثدي"
          imageUrl="/public/img/65.png"
          imageAlt="أيدي متشابكة تظهر الوحدة والتعاون"
          
        />

        <div className="bg-white rounded-xl p-8 shadow-lg space-y-6">
          <ContentSection
            title="القيادة على مدى جديد"
            content="نحن نؤمن بالقوة المشتركة بين جميع أفراد المؤسسة سنسعى دائماً إلى إيجاد الحلول المثلى لتحقيق أهدافنا في تطوير المشروعين. نقوم بتطوير قدرات الموظفين لتحقيق أعلى مستوى من الكفاءة."
            icon={Users}
          />

          <ContentSection
            title="التجربة السريرية"
            content="عملية تطوير مستمرة تهدف إلى تحسين أداء الفريق المسلم. تشمل بعض الخطوات الأساسية للتطوير من منهجيات التخطيط والتنفيذ والمتابعة. تتيح لك تجربة وخبرة تمكنك من فهم التوجيه و الإرشاد وتركز على تنمية المهارات."
          />

          <ContentSection
            title="تقديم التطوير الذاتي"
            content="نركز على تطوير مهارات القيادة والأساليب والأدوات سنسعى دائماً إلى تحقيق أهدافنا. نقوم بتطوير قدرات المؤسسة وتحديد مستوى الأداء وتحليل نتائجها. في نهاية المطاف نحتاج إلى تقييم النتائج وإجراء التعديلات اللازمة من أجل تحسين الأداء في الوقت المناسب من ذلك."
          />

          <ContentSection
            title="التحدي الذاتي"
            content="تجمع القيادة والإدارة والتخطيط الذي تتبع مسارها المديرين من خلال جمع خبراتهم الذاتية التي من شأنها التطوير. في نهاية المطاف نحتاج إلى تقييم النتائج وإجراء التعديلات. والتأكد من تحقيق عمليات تحسين مستمرة من خلال متابعة تنفيذها."
          />

          <ImageSection
            title="ممارسة التمارين الرياضية"
            imageUrl="https://images.unsplash.com/photo-1517836357463-d25dfeac3438?auto=format&fit=crop&q=80"
            imageAlt="تمارين رياضية جماعية"
          />
        </div>
      </div>
    </div>
  )
}
