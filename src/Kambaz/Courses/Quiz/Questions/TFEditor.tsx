import { Button, Col, Form, Row } from "react-bootstrap";
import { useNavigate } from "react-router";
import { useLocation } from "react-router";

export default function TFEditor() {
  const { pathname } = useLocation();

  const navigate = useNavigate();

  const handle = (str: string) => {
    navigate(pathname.replace(/(mc|tf|bl)$/, str) || `${pathname}/${str}`);
  };

  return (
    <div>
      <Form.Select onChange={(e) => handle(e.target.value)}>
        <option value="mc">mc</option>
        <option value="tf">tf</option>
        <option value="bl">bl</option>
      </Form.Select>

      <Form.Group className="mb-3" controlId="wd-name">
        <Form.Label className="fw-bold">Question Title</Form.Label>
      </Form.Group>

      <Form.Group className="mb-3" controlId="wd-name">
        <Form.Label className="fw-bold">Points</Form.Label>
      </Form.Group>

      <Form.Group className="mb-3" controlId="wd-name">
        <Form.Label className="fw-bold">Question</Form.Label>
      </Form.Group>

      <Row className="mb-3 align-items-center">
        <Col sm={2}>
          <Form.Label className="mb-0">Answer</Form.Label>
        </Col>
        <Col sm={4}>
          <div>
            <Form.Check type="radio" label="True" value="true" />
            <Form.Check type="radio" label="False" value="false" />
          </div>
        </Col>
      </Row>

      <div className="d-flex justify-content-end">
        <Button variant="secondary" className="me-2">
          Cancel
        </Button>
        <Button variant="danger">Save</Button>
      </div>
    </div>
  );
}
