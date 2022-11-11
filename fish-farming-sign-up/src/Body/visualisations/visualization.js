import "./visualization.css";
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import histogram from './Picture 6.png';
import timeSeries from './Picture 5.png';
import boxplot from './Picture 7.png';

function VisualizationGroup() {
  return (
    <div className='something_different'>
      <CardGroup>
        <Card>     
          <Card.Body>
            <Card.Title>Histograms</Card.Title>
            <Card.Img variant="top" src={histogram} />
          </Card.Body>
          <Card.Footer>
            <h3> Comparing of differnet factors </h3>
          </Card.Footer>
        </Card>
        <Card>
          <Card.Body>
            <Card.Title>Time Series</Card.Title>
            <Card.Img variant="top" src={timeSeries} />
          </Card.Body>
          <Card.Footer>
            <h3> Useful to see change over time </h3>
          </Card.Footer>
        </Card>
        <Card>
          <Card.Body>
            <Card.Title>Box Plots</Card.Title>
            <Card.Img variant="top" src={boxplot} />
          </Card.Body>
          <Card.Footer>
            <h3> Useful to see the distribution </h3>
          </Card.Footer>
        </Card>
      </CardGroup>
    </div>
  );
}

export default VisualizationGroup;