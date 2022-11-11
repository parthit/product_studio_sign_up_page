import "./our_solution.css";
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import disolvedO2 from './disolvedO2.jpeg'

function GroupExample() {
  return (
    <div className='something'>
      <CardGroup>
        <Card>     
          <Card.Body>
            <Card.Title>Analyse Disolved Oxygen</Card.Title>
            <Card.Text>
              Using state of the art sensors to analyse 
              dissolved oxyen. We will provide you insights
              about how it affects fish welfare, send you alerts
              when it's too low / high and give you predictive
              analysis about those characteristics.
            </Card.Text>
            <Card.Img variant="top" src={disolvedO2} />
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
    </div>
  );
}

export default GroupExample;