import { Button, Col, Form, Row } from "react-bootstrap";

export default function AssignmentEditor() {
  return (
    <div id="wd-assignments-editor">
      <Form.Group className="mb-3" controlId="wd-name">
        <Form.Label className="fw-bold">Assignment Name</Form.Label>
        <Form.Control defaultValue="A1" />
      </Form.Group>

      <Form.Group className="mb-4" controlId="wd-description">
        <Form.Control as="textarea" defaultValue="Desc" rows={5} />
      </Form.Group>

      <Row className="mb-3 align-items-center">
        <Col sm={2}>
          <Form.Label className="mb-0">Points</Form.Label>
        </Col>
        <Col sm={4}>
          <Form.Control id="wd-points" type="number" defaultValue={100} />
        </Col>
      </Row>

      <Row className="mb-3 align-items-center">
        <Col sm={2}>
          <Form.Label className="mb-0">Assignment Group</Form.Label>
        </Col>
        <Col sm={4}>
          <Form.Select defaultValue="ASSIGNMENTS">
            <option>ASSIGNMENTS</option>
            <option>EXAMS</option>
          </Form.Select>
        </Col>
      </Row>

      <Row className="mb-3 align-items-center">
        <Col sm={2}>
          <Form.Label className="mb-0">Display as</Form.Label>
        </Col>
        <Col sm={4}>
          <Form.Select defaultValue="Percentage">
            <option>Percentage</option>
            <option>Number</option>
            <option>Points</option>
          </Form.Select>
        </Col>
      </Row>

      <div className="p-3 border mt-2">
        <Form.Group className="mb-3" controlId="wd-submission-type">
          <Form.Label className="fw-bold">Submission Type</Form.Label>
          <Form.Select defaultValue="Online">
            <option>Online</option>
            <option>Physical</option>
            <option>None</option>
          </Form.Select>

          <div className="p-3 border mt-2">
            <Form.Label className="fw-bold">Online Entry Options</Form.Label>
            <Form.Check label="Text Entry" id="entry-text" />
            <Form.Check label="Website URL" id="entry-url" defaultChecked />
            <Form.Check label="Media Recordings" id="entry-media" />
            <Form.Check label="Student Annotation" id="entry-annot" />
            <Form.Check label="File Uploads" id="entry-file" />
          </div>
        </Form.Group>
      </div>

      <div className="p-3 border mt-2">
        <Form.Group className="mb-3" controlId="wd-submission-type">
          <Form.Label className="fw-bold">Assign</Form.Label>
          <Form.Select defaultValue="Everyone">
            <option>Everyone</option>
            <option>Choose Students</option>
            <option>None</option>
          </Form.Select>

          <div className="p-3 border mt-2">
            <Form.Group as={Row} className="mb-3">
              <Form.Label column sm={2} className="fw-bold">
                Due
              </Form.Label>
              <Col sm={4}>
                <Form.Control
                  type="datetime-local"
                  defaultValue="2025-07-13T23:59"
                />
              </Col>
            </Form.Group>
            <Row className="mb-4">
              <Col sm={3}>
                <Form.Label className="fw-bold">Available from</Form.Label>
                <Form.Control type="date" defaultValue="2025-07-06" />
              </Col>
              <Col sm={3}>
                <Form.Label className="fw-bold">Until</Form.Label>
                <Form.Control type="date" />
              </Col>
            </Row>
          </div>
        </Form.Group>

        <div className="d-flex justify-content-end">
          <Button variant="secondary" className="me-2">
            Cancel
          </Button>
          <Button variant="danger">Save</Button>
        </div>
      </div>
    </div>
  );
}
