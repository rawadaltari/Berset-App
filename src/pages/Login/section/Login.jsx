import Footer from "../../../Components/Footer/Footer";
import Header from "../../../Components/Header/Header";
import { Col, Container, Row } from "react-bootstrap";
import img1 from '../../../../public/img/41.jpg'
import Form from "../Form/Form";
import './Login.css'
export default function Login() {
  return (
    <>
   <Header/>
   <Container>
        <Row className="container mx-auto px-4 py-16 max-w-6xl mt-20 lg:flex cart" >
          <Col xs={10} md={6} className="flex flex-col md:flex-row items-center gap-12">
            <img src={img1} />
          </Col>
          <Col xs={10} md={6} className="flex-1 relative">
          <Form/>
          </Col>
        </Row>
      </Container>
    
    <Footer/>
    </>
  );
}
