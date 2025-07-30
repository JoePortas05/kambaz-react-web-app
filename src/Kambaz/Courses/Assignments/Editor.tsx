import { Button, Col, Form, Row } from "react-bootstrap";
import db from "../../Database";
import { useNavigate, useParams } from "react-router";
import { addAssignment } from "./reducer";
import { useDispatch } from "react-redux";
import { useState } from "react";

export default function AssignmentEditor() {
  const { cid, aid } = useParams();

  const [assignmentId, setAssignmentId] = useState("");
  const [assignmentTitle, setAssignmentTitle] = useState("");
  const [assignmentDescription, setAssignmentDescription] = useState("");
  const [assignmentPoints, setAssignmentPoints] = useState("");
  const [assignmentAvailable, setAssignmentAvailable] = useState("");
  const [assignmentDue, setAssignmentDue] = useState("");
  const [assignmentModules, setAssignmentModules] = useState("");
  const [assignmentCourse, setAssignmentCourse] = useState("");
  const dispatch = useDispatch();
  console.log("CID:", cid);
  console.log("AID:", aid);
  console.log("Assignments DB:", db.assignments);
  const navigate = useNavigate();

  const save = () => {
    dispatch(
      addAssignment({
        title: assignmentTitle,
        description: assignmentDescription,
        points: assignmentPoints,
        available: assignmentAvailable,
        due: assignmentDue,
        modules: assignmentModules,
        course: cid,
      })
    );
    navigate(`/Kambaz/Courses/${cid}/Assignments`);
  };

  const cancel = () => {
    navigate(`/Kambaz/Courses/${cid}/Assignments`);
  };

  return (
    <div id="wd-assignments-editor">
      <Form.Group className="mb-3" controlId="wd-name">
        <Form.Label className="fw-bold">Assignment Name</Form.Label>
        <Form.Control
          value={assignmentTitle}
          onChange={(e) => setAssignmentTitle(e.target.value)}
        />
      </Form.Group>

      <Form.Group className="mb-4" controlId="wd-description">
        <Form.Control
          as="textarea"
          value={assignmentDescription}
          onChange={(e) => setAssignmentDescription(e.target.value)}
          rows={5}
        />
      </Form.Group>

      <Form.Group className="mb-3" controlId="wd-name">
        <Form.Label className="fw-bold">Assignment ID</Form.Label>
        <Form.Control
          value={assignmentId}
          onChange={(e) => setAssignmentId(e.target.value)}
        />
      </Form.Group>

      <Form.Group className="mb-3" controlId="wd-name">
        <Form.Label className="fw-bold">Assignment Course</Form.Label>
        <Form.Control
          value={assignmentCourse}
          onChange={(e) => setAssignmentCourse(e.target.value)}
        />
      </Form.Group>

      <Form.Group className="mb-3" controlId="wd-name">
        <Form.Label className="fw-bold">Assignment Modules</Form.Label>
        <Form.Control
          value={assignmentModules}
          onChange={(e) => setAssignmentModules(e.target.value)}
        />
      </Form.Group>

      <Row className="mb-3 align-items-center">
        <Col sm={2}>
          <Form.Label className="mb-0">Points</Form.Label>
        </Col>
        <Col sm={4}>
          <Form.Control
            id="wd-points"
            type="number"
            value={assignmentPoints}
            onChange={(e) => setAssignmentPoints(e.target.value)}
          />
        </Col>
      </Row>

      <Row className="mb-3 align-items-center">
        <Col sm={2}>
          <Form.Label className="mb-0">Assignment Group</Form.Label>
        </Col>
        <Col sm={4}>
          <Form.Select value="ASSIGNMENTS">
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
          <Form.Select value="Percentage">
            <option>Percentage</option>
            <option>Number</option>
            <option>Points</option>
          </Form.Select>
        </Col>
      </Row>

      <div className="p-3 border mt-2">
        <Form.Group className="mb-3" controlId="wd-submission-type">
          <Form.Label className="fw-bold">Submission Type</Form.Label>
          <Form.Select value="Online">
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
          <Form.Select value="Everyone">
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
                  value={assignmentDue}
                  onChange={(e) => setAssignmentDue(e.target.value)}
                />
              </Col>
            </Form.Group>
            <Row className="mb-4">
              <Col sm={3}>
                <Form.Label className="fw-bold">Available from</Form.Label>
                <Form.Control
                  type="date"
                  value={assignmentAvailable}
                  onChange={(e) => setAssignmentAvailable(e.target.value)}
                />
              </Col>
              <Col sm={3}>
                <Form.Label className="fw-bold">Until</Form.Label>
                <Form.Control type="date" />
              </Col>
            </Row>
          </div>
        </Form.Group>

        <div className="d-flex justify-content-end">
          <Button variant="secondary" className="me-2" onClick={cancel}>
            Cancel
          </Button>
          <Button variant="danger" onClick={save}>
            Save
          </Button>
        </div>
      </div>
    </div>
  );
}
