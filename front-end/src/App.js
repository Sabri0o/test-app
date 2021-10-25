import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import $ from "jquery";

import { Button, Form } from "react-bootstrap";
import { useState } from "react";

function App() {
  const [nickname, setNickname] = useState();
  const [pet, setPet] = useState("Cats");
  const [color, setColor] = useState("#563d7c");
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("Hi there ;)");

  const handleOnSubmit = (e) => {
    e.preventDefault();
    let data = { name: nickname, pet: pet, color: color };
    // console.log(data);
    setLoading(true);
    const API_URL = "http://localhost:3001";
    $.post(API_URL, data, (res) => {
      // console.log(res);
      setLoading(false);
      setMessage(res.message);
    });
  };

  return (
    <div className="App">
      <h1>{message}</h1>
      <Form onSubmit={handleOnSubmit}>
        <Form.Group className="mb-3">
          <Form.Label>Nickname</Form.Label>
          <Form.Control
            id="nickname"
            placeholder="Enter your nickname"
            onChange={(e) => setNickname(e.target.value)}
            required
          />
          <Form.Text>
            Your nickname should contain only letters and a length between 4 and
            8.
          </Form.Text>
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Your favorite color</Form.Label>
          <Form.Control
            type="color"
            id="exampleColorInput"
            defaultValue="#563d7c"
            title="Choose your favorite color"
            onChange={(e) => setColor(e.target.value)}
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>You prefer</Form.Label>
          <Form.Group>
            <Form.Check
              inline
              type="checkbox"
              label="Cats"
              value="Cats"
              checked={pet === "Cats"}
              onChange={(e) => setPet(e.target.value)}
            />
            <span>or</span>
            <Form.Check
              inline
              type="checkbox"
              label="Dogs"
              value="Dogs"
              checked={pet === "Dogs"}
              onChange={(e) => setPet(e.target.value)}
            />
          </Form.Group>
        </Form.Group>

        <Button variant="primary" type="submit" disabled={loading}>
          {loading && (
            <span className="spinner-border spinner-border-sm"></span>
          )}
          <span>Submit</span>
        </Button>
      </Form>
    </div>
  );
}

export default App;
