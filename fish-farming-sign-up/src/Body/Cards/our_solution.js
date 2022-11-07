import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';

function GroupExample() {
  return (
    <CardGroup>
      <Card>     
        <Card.Body>
          <Card.Title>This is our solution 1</Card.Title>
          <Card.Text>
            Something that we will offer. This includes something basic
          </Card.Text>
          <Card.Img variant="top" src="holder.js/100px160" />
        </Card.Body>
        <Card.Footer>
          <h3> $ 10 / month  </h3>
        </Card.Footer>
      </Card>
      <Card>
        <Card.Body>
          <Card.Title>This is our solution 2</Card.Title>
          <Card.Text>
            Something that we will offer. This includes something extra
          </Card.Text>
          <Card.Img variant="top" src="holder.js/100px160" />
        </Card.Body>
        <Card.Footer>
          <h3> $ 25 / month </h3>
        </Card.Footer>
      </Card>
      <Card>
        <Card.Body>
          <Card.Title>This is our solution 3</Card.Title>
          <Card.Text>
            Something that we will offer. This will be the best solution out there
          </Card.Text>
          <Card.Img variant="top" src="holder.js/100px160" />
        </Card.Body>
        <Card.Footer>
          <h3> $ 40 / month </h3>
        </Card.Footer>
      </Card>
    </CardGroup>
  );
}

export default GroupExample;