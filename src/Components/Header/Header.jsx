import Link from "react-bootstrap/Nav";
import img1 from "../../assets/img/Breast Cancer Predictor.png";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import BtnNav from "../../Compon/BtnNav";
const navItems = [
  { id: 1, label: "تواصل معنا ", href: "/Contact" },
  { id: 2, label: " كيفية الاستخدام ", href: "/Tester" },
  { id: 3, label: " معلومات عن المرض ", href: "/About" },
  { id: 4, label: " الصفحة الرئيسية", href: "/Homepage" },
];

export default function Header() {
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

          <div className="flex items-center space-x-4">
            <BtnNav title="تسجيل الدخول" ln="/Login" />
          </div>
        </div>
      </div>
    </header>
  );
}
