import { Row, Col, Form, InputGroup, Button, ListGroup } from "react-bootstrap";
import { BsCaretDownFill, BsGripVertical, BsSearch } from "react-icons/bs";
import { Link, useParams } from "react-router";
import LessonControlButtons from "../Modules/LessonControlButtons";
import db from "../../Database";
import ProtectedFaculty from "../../Account/ProtectedFaculty";

export default function Assignments() {
  const { cid } = useParams();

  const assignments = db.assignments;
  return (
    <div id="wd-assignments">
      <Row className="align-items-center mb-3">
        <Col md={4}>
          <InputGroup>
            <InputGroup.Text>
              <BsSearch />
            </InputGroup.Text>
            <Form.Control
              id="wd-search-assignment"
              placeholder="Search for Assignment"
            />
          </InputGroup>
        </Col>
        <Col className="d-flex ms-auto" md="auto">
          <Button
            id="wd-add-assignment-group"
            variant="secondary"
            className="me-2"
          >
            + Group
          </Button>
          <ProtectedFaculty>
            <Button id="wd-add-assignment" variant="danger">
              + Assignment
            </Button>
          </ProtectedFaculty>
        </Col>
      </Row>

      <ListGroup>
        <ListGroup.Item className="wd-left-border-success p-2">
          <div className="d-flex justify-content-between bg-light">
            <div>
              <br />
              <BsGripVertical />
              ASSIGNMENTS
              <BsCaretDownFill />
            </div>
            <span className="badge bg-light text-dark">40% of Total</span>
          </div>
        </ListGroup.Item>

        {assignments
          .filter((assignment) => assignment.course === cid)
          .map((assignment: any) => (
            <div key={assignment._id}>
              <ListGroup.Item className="wd-left-border-success p-2">
                <div className="d-flex justify-content-between">
                  <div>
                    <BsGripVertical />

                    <Link
                      to={assignment._id}
                      className="wd-assignment-link fw-bold text-decoration-none text-dark"
                    >
                      {assignment.title}
                    </Link>
                    <br />
                    <small className="text-muted">
                      {assignment.modules}| {assignment.available}|{" "}
                      {assignment.due} | {assignment.points}
                    </small>
                  </div>
                  <LessonControlButtons />
                </div>
              </ListGroup.Item>
            </div>
          ))}
      </ListGroup>
    </div>
  );
}
