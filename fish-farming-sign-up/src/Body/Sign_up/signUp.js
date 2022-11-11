import "./signUp.css";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';


function SignUp() {
  return (
    <div className="signUp_look">
      <br />
      <h2>Interested in our solutions? Sign up with us</h2>
      <Form>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label><h5>Email address</h5></Form.Label>
          <Form.Control type="email" placeholder="Enter email" />
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>
        <br />
        <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Label><h5>Solutions you are most interested in :</h5></Form.Label>
          <Form.Check type="checkbox" label="Analyse Disolved Oxygen" />
          <Form.Check type="checkbox" label="Measuring the amount of Ammonia in the Water" />
          <Form.Check type="checkbox" label="Tempature Measurement" />
        </Form.Group>

        <br />
        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
        <Form.Label><h5>Anything other features you'd be interested in ?</h5></Form.Label>
        <Form.Control as="textarea" rows={3} />
      </Form.Group>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
      < br />
      < br />
    </div>
  );
}

export default SignUp;