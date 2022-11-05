import { Container,Card, Row, Col } from "react-bootstrap";
import duneImage from "../assets/images/superhero/antman.jpg";
import everythingImage from "../assets/images/superhero/avenger.jpg";
import infiniteImage from "../assets/images/superhero/batman.jpg";
import jokerImage from "../assets/images/superhero/robinhood.jpg";
import lightyearImage from "../assets/images/superhero/spiderman-cover.jpg";
import morbiusImage from "../assets/images/superhero/superman.jpg";


const Superhero = () => {
  return (
    <div>
      <Container>
        <br />
        <h3 className="text-white" id="superhero">SUPERHERO MOVIE </h3>
        <Row>
          <Col md={4}>
            <Card className="text-white bg-dark mt-4 movieImage">
              <Card.Img src={duneImage} alt="Dune Movie" className="images" />
              <div className="p-2 m-1">
                <Card.Title className="text-center">Dune Movie</Card.Title>
                <Card.Text className="text-left">
                  This is a wider card with supporting text below as a natural
                  lead-in to additional content.
                </Card.Text>
                <Card.Text className="text-left">
                  Last updated 3 mins ago
                </Card.Text>
              </div>
            </Card>
          </Col>
          <Col md={4}>
            <Card className="text-white bg-dark mt-4 ">
              <Card.Img src={everythingImage} alt="Everything Movie" className="images"/>
              <div className="p-2 m-1">
                <Card.Title className="text-center">Dune Movie</Card.Title>
                <Card.Text className="text-left">
                  This is a wider card with supporting text below as a natural
                  lead-in to additional content.
                </Card.Text>
                <Card.Text className="text-left">
                  Last updated 3 mins ago
                </Card.Text>
              </div>
            </Card>
          </Col>
          <Col md={4}>
            <Card className="text-white bg-dark mt-4 movieImage">
              <Card.Img src={infiniteImage} alt="Infinite Movie" className="images"  />
              <div className="p-2 m-1">
                <Card.Title className="text-center">Dune Movie</Card.Title>
                <Card.Text className="text-left">
                  This is a wider card with supporting text below as a natural
                  lead-in to additional content.
                </Card.Text>
                <Card.Text className="text-left">
                  Last updated 3 mins ago
                </Card.Text>
              </div>
            </Card>
          </Col>
          <Col md={4}>
            <Card className="text-white bg-dark mt-4 movieImage">
              <Card.Img src={jokerImage} alt="Infinite Movie" className="images"  />
              <div className="p-2 m-1">
                <Card.Title className="text-center">Dune Movie</Card.Title>
                <Card.Text className="text-left">
                  This is a wider card with supporting text below as a natural
                  lead-in to additional content.
                </Card.Text>
                <Card.Text className="text-left">
                  Last updated 3 mins ago
                </Card.Text>
              </div>
            </Card>
          </Col>
          <Col md={4}>
            <Card className="text-white bg-dark mt-4 movieImage">
              <Card.Img src={lightyearImage} alt="Infinite Movie" className="images"  />
              <div className="p-2 m-1">
                <Card.Title className="text-center">Dune Movie</Card.Title>
                <Card.Text className="text-left">
                  This is a wider card with supporting text below as a natural
                  lead-in to additional content.
                </Card.Text>
                <Card.Text className="text-left">
                  Last updated 3 mins ago
                </Card.Text>
              </div>
            </Card>
          </Col>
          <Col md={4}>
            <Card className="text-white bg-dark mt-4 movieImage">
              <Card.Img src={morbiusImage} alt="Infinite Movie" className="images"  />
              <div className="p-2 m-1">
                <Card.Title className="text-center">Dune Movie</Card.Title>
                <Card.Text className="text-left">
                  This is a wider card with supporting text below as a natural
                  lead-in to additional content.
                </Card.Text>
                <Card.Text className="text-left">
                  Last updated 3 mins ago
                </Card.Text>
              </div>
            </Card>
          </Col>
        </Row>
      </Container>

      
    </div>
  );
};

export default Superhero;
