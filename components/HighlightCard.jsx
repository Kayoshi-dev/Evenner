import Card from "react-bootstrap/Card";
import Link from "next/link";

function HighlightCard(props) {
  return (
    <Link href='/' passHref={true}>
      <a>
        <Card
          onClick={() => console.log("yo")}
          className='text-white highlight-card mb-3'
        >
          <Card.Img
            src='https://images.unsplash.com/photo-1635346205962-93e2bab0c5e5?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1742&q=80'
            alt='Card image'
          />
          <Card.ImgOverlay>
            <Card.Title>Card title</Card.Title>
            <Card.Text>
              This is a wider card with supporting text below as a natural
              lead-in to additional content. This content is a little bit
              longer.
            </Card.Text>
            <Card.Text>Last updated 3 mins ago</Card.Text>
          </Card.ImgOverlay>
        </Card>
      </a>
    </Link>
  );
}

export default HighlightCard;
