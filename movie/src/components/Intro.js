import { Container, Row, Col, Button } from "react-bootstrap";

const Intro = () => {
  return (
    <div className="intro">
      <Container className="text-white d-flex justify-content-center align-items-center text-center">
        <Row>
          <Col>
            <div className="Title">Nonton Gratis</div>
            <div className="Title">Gak Pake Karcis</div>
            <div className="introButton mt-4 text-center">
              <Button variant="dark">Yuk Mulai Nonton</Button>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};
export default Intro;
