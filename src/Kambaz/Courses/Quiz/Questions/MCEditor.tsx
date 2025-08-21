import { Button, Form } from "react-bootstrap";
import { useLocation, useNavigate } from "react-router";

export default function MCEditor() {
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
        <Form.Control />
      </Form.Group>

      <Form.Group className="mb-3" controlId="wd-name">
        <Form.Label className="fw-bold">Points</Form.Label>
        <Form.Control />
      </Form.Group>

      <Form.Group className="mb-3" controlId="wd-name">
        <Form.Label className="fw-bold">Questions</Form.Label>
        <Form.Control />
      </Form.Group>

      <Form.Group className="mb-3" controlId="wd-name">
        <Form.Label className="fw-bold">Answer</Form.Label>
        <Form.Control />
      </Form.Group>

      <div className="d-flex justify-content-end">
        <Button variant="secondary" className="me-2">
          Cancel
        </Button>
        <Button variant="danger">Save</Button>
      </div>
    </div>
  );
}
