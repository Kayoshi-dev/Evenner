import Head from "next/head";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";
import HighlightCard from "../components/HighlightCard";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";

export default function Home() {
  return (
    <>
      <Container>
        <h3>Prochaine sortie</h3>
        <HighlightCard />

        <h3>Ces évènements pourraient vous intéresser</h3>

        <Row>
          <Col xs={12} md={4}>
            <Card className='text-white h-100'>
              <Card.Img
                src='https://images.unsplash.com/photo-1576944184012-944f0a1ec91b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1742&q=80'
                alt='Card image'
              />
              <Card.ImgOverlay>
                <Card.Title>Card title</Card.Title>
                <Card.Text>Last updated 3 mins ago</Card.Text>
              </Card.ImgOverlay>
            </Card>
          </Col>

          <Col xs={12} md={4}>
            <Card className='text-white h-100'>
              <Card.Img
                src='https://images.unsplash.com/photo-1635425291944-e70310e8510b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2174&q=80'
                alt='Card image'
              />
              <Card.ImgOverlay>
                <Card.Title>Card title</Card.Title>
                <Card.Text>Last updated 3 mins ago</Card.Text>
              </Card.ImgOverlay>
            </Card>
          </Col>

          <Col xs={12} md={4}>
            <Card className='text-white h-100'>
              <Card.Img
                src='https://images.unsplash.com/photo-1608516679567-092f1139f4e8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2670&q=80'
                alt='Card image'
              />
              <Card.ImgOverlay>
                <Card.Title>Card title</Card.Title>
                <Card.Text>Last updated 3 mins ago</Card.Text>
              </Card.ImgOverlay>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
}
