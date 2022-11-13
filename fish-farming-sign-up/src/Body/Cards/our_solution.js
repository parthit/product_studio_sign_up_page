import "./our_solution.css";
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import disolvedO2 from './disolvedO2.jpeg';
import ammonia from './ammonia.webp';
import temperature from './temperature.jpeg';

function GroupExample() {
  return (
    <div className='something'>
      <CardGroup>
        <Card>     
          <Card.Body>
            <Card.Title>Analyse Disolved Oxygen</Card.Title>
            <Card.Text>
              Using state of the art sensors, we provide you insights
              about how dissolved oxygen affects your fish's welfare, send you alerts
              when it's too low / high and give you predictive
              analysis about it.
            </Card.Text>
            <Card.Img variant="top" src={disolvedO2} />
          </Card.Body>
          <Card.Footer>
            <h3> $ 20 / month  </h3>
          </Card.Footer>
        </Card>
        <Card>
          <Card.Body>
            <Card.Title>Measuring the amount of Ammonia in the Water</Card.Title>
            <Card.Text>
              Using your available sensors or our propreitary sensors, we 
              aim to use Ammonia as variable that we test for. We can see what 
              effect is has on your fish, send you alerts when it goes above or below a certain level
              and provide predictive analysis about it
            </Card.Text>
            <br />
            <br />
            <Card.Img variant="top" src={ammonia} />
          </Card.Body>
          <Card.Footer>
            <h3> $ 20 / month </h3>
          </Card.Footer>
        </Card>
        <Card>
          <Card.Body>
            <Card.Title>Tempature Measurement</Card.Title>
            <Card.Text>
              Temperature is a basic factor that affects many other variables in the water.
              We can integrate temperature sensors with your facility and visualise 
              the effect is has on fish health and send you updates if anything usual occurs
            </Card.Text>
            <br />
            <br />
            <Card.Img variant="top" src={temperature} />
          </Card.Body>
          <Card.Footer>
            <h3> $ 20 / month </h3>
          </Card.Footer>
        </Card>
      </CardGroup>
    </div>
  );
}

export default GroupExample;