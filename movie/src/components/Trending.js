import { Container,Card, Row, Col } from "react-bootstrap";
import duneImage from "../assets/images/trending/dune.jpg";
import everythingImage from "../assets/images/trending/everything.jpg";
import infiniteImage from "../assets/images/trending/infinite.jpg";
import jokerImage from "../assets/images/trending/joker.jpg";
import lightyearImage from "../assets/images/trending/lightyear.jpg";
import morbiusImage from "../assets/images/trending/morbius.jpg";


const Trending = () => {
  return (
    <div>
      <Container>
        <br />
        <h3 className="text-white" id="trending">TRENDING MOVIE</h3>
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

export default Trending;
