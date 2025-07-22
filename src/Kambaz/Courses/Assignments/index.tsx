import { Row, Col, Form, InputGroup, Button, ListGroup } from "react-bootstrap";
import { BsCaretDownFill, BsGripVertical, BsSearch } from "react-icons/bs";
import { Link, useParams } from "react-router";
import ModuleControlButtons from "../Modules/ModuleControlButtons";
import LessonControlButtons from "../Modules/LessonControlButtons";
import db from "../../Database";

export default function Assignments() {
  const { cid } = useParams();
  console.log("CID is:", cid);
  console.log("Assignments:", db.assignments);

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
          <Button id="wd-add-assignment" variant="danger">
            + Assignment
          </Button>
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
            <ModuleControlButtons />
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
                      to="123"
                      className="wd-assignment-link fw-bold text-decoration-none text-dark"
                    >
                      {assignment.title}
                    </Link>
                    <br />
                    <small className="text-muted">
                      Multiple Modules | Not available until July 9 12:00 AM |
                      Due July 11 11:59 PM | 100 pts
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
