import "./App.css";
import Edu from "./Components/EduContent/Edu";

import Header from "./Components/Header/Header";
import Hero from "./Components/Hero/Hero";
import React, { useEffect, useState } from "react";
import Loader from "./Components/Loader/Loader";
import Footer from "./Components/Footer/Footer";
import { MedicenCard } from "./Components/MedicenCard/MedicenCard";
import WhyBreseat from "./Components/WhyBreseat/WhyBreseat";
import Background from "./pages/About/background";
import Tester from "./pages/Tester/Tester";
function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // محاكاة تحميل البيانات
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3000); // 3 ثواني

    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <Loader />; // عرض الـ Loader إذا كانت حالة التحميل true
  }

  return (
    <>
      <Background />
      <Header />
      <Hero />
      <Edu />
      <MedicenCard />
      <WhyBreseat />
      <Footer />
    </>
  );
}

export default App;
