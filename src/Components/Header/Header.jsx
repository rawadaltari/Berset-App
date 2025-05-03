import Link from "react-bootstrap/Nav";
import img1 from "../../assets/img/Breast Cancer Predictor.png";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import BtnNav from "../../Compon/BtnNav";
import { useState } from "react";
import { Menu } from 'lucide-react';
const navItems = [
  { id: 1, label: "تواصل معنا ", href: "/Contact" },
  { id: 2, label: " كيفية الاستخدام ", href: "/Tester" },
  { id: 3, label: " معلومات عن المرض ", href: "/About" },
  { id: 5, label: "  فحص ماموغرام", href: "/AnalysisPage" },
  { id: 4, label: " الصفحة الرئيسية", href: "/Homepage" },
  
];

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <header className="w-full">
      <div className="">
        <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
          <div className="flex items-center">
            <Link href="/" className="h-20">
              <img src={img1} className="h-20 w-80 object-contain " />
            </Link>
          </div>

          {navItems.map((ln) => {
            return (
              <Navbar key={ln.id}>
                <Nav  className="hidden md:flex items-center space-x-8 text-2l hover:text-[#da4273]">
                  <Nav.Link  href={ln.href}>
                    {ln.label}
                  </Nav.Link>
                </Nav>
                
              </Navbar>
            );
          })}
          <div className="max-sm:hidden md:flex">
          <BtnNav  title={"تسجيل الدخول"} ln={"/Login"}/>
          </div>
          
          <div className=" md:hidden  flex items-center space-x-4 ">
            
            <button 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="inline-flex  items-center justify-center p-2 rounded-md border-blue-600 text-fuchsia-950 hover:text-pink-600 hover:bg-pink-400 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-fuchsia-500 focus:text-pink-800"
            >
              <Menu size={29} />
            </button>
          </div>
        </div>
      </div>
      
        
      {/* Mobile menu, show/hide based on menu state */}
      {isMenuOpen && (
        <div className="md:hidden">
          <div className="pt-2 pb-3 space-y-1">
          {navItems.map((ln) => {
            return (
              <Navbar key={ln.id}>
                <Nav  className=" items-center space-x-8 text-2l hover:text-[#da4273]">
                  <Nav.Link  href={ln.href}>
                    {ln.label}
                  </Nav.Link>
                </Nav>
              </Navbar>
            );
          })}
          </div>
          <BtnNav className=" flex" title={"تسجيل الدخول"} ln={"/Login"}/>
        </div>
      )}
    </header>
  );
}
