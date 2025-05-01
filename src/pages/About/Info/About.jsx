import Footer from "../../../Components/Footer/footer";
import Header from "../../../Components/Header/Header";
import AboutContent from "../AboutContent";
import Aboutimg from "../Aboutimg";
import Article from "../Article/Article";
import Awer from "../Awerness/Awer";
import Background from "../Background";
import Vediosection from "../VedioCard/Vediosection";
import './About.css'
export default function About() {
  return (
    <>
      <Header />
      <div dir="rtl" className=" bg-pink-50 mt-20 ">
        <main className="max-w-7xl mx-auto px-6 py-16">
          <div className="flex items-center justify-between about">
            <AboutContent />
            <Aboutimg  />
          </div>
        </main>

        <Background />
        <Article/>
        <Vediosection/>
        <Awer/>
      </div>
      <Footer />
    </>
  );
}
