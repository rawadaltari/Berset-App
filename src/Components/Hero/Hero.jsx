import { Col, Container, Image, Row } from "react-bootstrap";
import "./Hero.css";
import BtnNav from "../../Compon/BtnNav";
import img1 from "../../../public/img/41.jpg";

export default function Hero() {
  return (
    <Container>
      <Row className="hero" style={{ marginTop: "100px" }}>
        <Col sm={10} md={6}>
          <Image src={img1}  style={{height:"500px"}}/>
        </Col>
        <Col sm={10} md={6} className="">
          <div className="">
            <div className=" p-5   ">
              <div class="cardtop">
                <div class="loderword">
                  <h1>تنبأ بحالتك الصحية</h1>
                  <div class="words">
                    
                    <span class="word">بثقة</span>
                    <span class="word"> بدقة وامان</span>
                    <span class="word">بأحدث تقنيات</span>
                    <span class="word">بطريقة مبتكرة</span>
                    <span class="word">بأيدي خبيرة</span>
                  </div>
                </div>
              </div>

              <p className=" leading-8 text-gray-600 pt-10">
               ادخل بيانتاك الطبية وأحصل على تقدير مبدئي لمدى خطورة الحالة
              </p>
              <div className="mt-10 flex justify-center">
                <BtnNav title="ابدا الان" ln="/Tester" />
              </div>
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  );
}
