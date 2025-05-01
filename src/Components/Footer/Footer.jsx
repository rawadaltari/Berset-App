
import img1 from "../../assets/img/Breast Cancer Predictor.png";
import Social from "./Social/Social";


export default function Footer() {
  return (
    <footer dir="rtl" className="bg-white/80 backdrop-blur-sm border-t border-pink-100 mt-50">
    <div className="section-container py-12">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
        <div className="md:col-span-2">
          <div className="flex items-center space-x-2 mb-4">
            <div className="w-40 h-20 rounded-full  ">
            <img src={img1} className="h-20 w-80 object-contain imgfoter " />
            
            </div>
            <Social/>
          </div>
          
          <p className="text-foreground/70 mb-4 max-w-md">
            مهمتنا هي توفير أدوات يمكن الوصول إليها تساعد في الكشف المبكر وفهم سرطان الثدي، مما يمكّن الأفراد من السيطرة على صحتهم.
          </p>
          
          <div className="flex space-x-4">
          
          </div>
        </div>
        
        <div>
          <h3 className="font-medium text-lg mb-4">روابط سريعة</h3>
          <ul className="space-y-2">
            <li><a href="/" className="text-foreground/70 hover:text-primary transition-colors">الرئيسية</a></li>
            <li><a href="/About" className="text-foreground/70 hover:text-primary transition-colors">معلومات عن المرض</a></li>
            <li><a href="/Contact" className="text-foreground/70 hover:text-primary transition-colors">تواصل معنا </a></li>
            <li><a href="#education" className="text-foreground/70 hover:text-primary transition-colors">كيفية الاستخدام</a></li>
            <li><a href="/Login" className="text-foreground/70 hover:text-primary transition-colors">سجل الأن </a></li>
          </ul>
        </div>
        
        <div>
          <h3 className="font-medium text-lg mb-4">المصادر</h3>
          <ul className="space-y-2">
            <li><a href="#" className="text-foreground/70 hover:text-primary transition-colors">الجمعية الأمريكية للسرطان</a></li>
            <li><a href="#" className="text-foreground/70 hover:text-primary transition-colors">المعهد الوطني للسرطان</a></li>
            <li><a href="#" className="text-foreground/70 hover:text-primary transition-colors">سوزان ج. كومين</a></li>
            <li><a href="#" className="text-foreground/70 hover:text-primary transition-colors">سرطان الثدي الآن</a></li>
            <li><a href="#" className="text-foreground/70 hover:text-primary transition-colors">الاتصال بالدعم</a></li>
          </ul>
        </div>
      </div>
      
      <div className="border-t border-pink-100 mt-8 pt-8 text-center text-foreground/60 text-sm">
        <p>© {"25"} الرعاية التنبؤية. جميع الحقوق محفوظة.</p>
        <p className="mt-2">هذه الأداة هي لأغراض تعليمية فقط ولا ينبغي أن تحل محل المشورة الطبية المهنية.</p>
      </div>
    </div>
  </footer>
  )
}
