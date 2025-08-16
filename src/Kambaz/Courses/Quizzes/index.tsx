import { Row, Col, Form, InputGroup, Button, ListGroup } from "react-bootstrap";
import { BsCaretDownFill, BsGripVertical, BsSearch } from "react-icons/bs";
import { Link, useParams } from "react-router";
import LessonControlButtons from "../Modules/LessonControlButtons";
import ProtectedFaculty from "../../Account/ProtectedFaculty";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { BsTrash } from "react-icons/bs";
import { deleteQuiz } from "./reducer";

export default function Quizzes() {
  const { cid } = useParams();
  const { quizzes } = useSelector((state: any) => state.quizzesReducer);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  return (
    <div id="wd-quizzes">
      <Row className="align-items-center mb-3">
        <Col md={4}>
          <InputGroup>
            <InputGroup.Text>
              <BsSearch />
            </InputGroup.Text>
            <Form.Control id="wd-search-quiz" placeholder="Search for Quiz" />
          </InputGroup>
        </Col>
        <Col className="d-flex ms-auto" md="auto">
          <Button id="wd-add-quiz-group" variant="secondary" className="me-2">
            + Group
          </Button>
          <ProtectedFaculty>
            <Button
              id="wd-add-quiz"
              variant="danger"
              onClick={() => navigate(`/Kambaz/Courses/${cid}/Quizzes/Editor`)}
            >
              + Quiz
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
              QUIZZES
              <BsCaretDownFill />
            </div>
            <span className="badge bg-light text-dark">40% of Total</span>
          </div>
        </ListGroup.Item>

        {quizzes
          .filter((quiz: any) => quiz.course === cid)
          .map((quiz: any) => (
            <div key={quiz._id}>
              <ListGroup.Item className="wd-left-border-success p-2">
                <div className="d-flex justify-content-between">
                  <div>
                    <BsGripVertical />

                    <Link
                      to={quiz._id}
                      className="wd-quiz-link fw-bold text-decoration-none text-dark"
                    >
                      {quiz.title}
                    </Link>
                    <br />
                    <small className="text-muted">
                      {quiz.modules}| {quiz.available}| {quiz.due} |{" "}
                      {quiz.points}
                    </small>
                  </div>
                  <BsTrash onClick={() => dispatch(deleteQuiz(quiz._id))} />
                  <LessonControlButtons />
                </div>
              </ListGroup.Item>
            </div>
          ))}
      </ListGroup>
    </div>
  );
}
