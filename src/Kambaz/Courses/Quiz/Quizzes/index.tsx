import { Row, Col, Form, InputGroup, Button, ListGroup } from "react-bootstrap";
import { BsCaretDownFill, BsGripVertical, BsSearch } from "react-icons/bs";
import { Link, useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { BsTrash } from "react-icons/bs";
import * as quizzesClient from "./client";
import { setQuizzes, deleteQuiz } from "./reducer";
import { useEffect } from "react";
import ProtectedFaculty from "../../../Account/ProtectedFaculty";
import LessonControlButtons from "../../Modules/LessonControlButtons";
import ProtectedStudent from "../../../Account/ProtectedStudent";
export default function Quizzes() {
  const { cid } = useParams();
  const quizzes = useSelector((s: any) => s.quizzesReducer?.quizzes || []);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const deleteQuizHandler = async (quizId: string) => {
    await quizzesClient.deleteQuiz(quizId);
    dispatch(deleteQuiz(quizId));
  };

  const fetchQuizzesForCourse = async () => {
    const quizzes = await quizzesClient.getQuizzes(cid!);
    dispatch(setQuizzes(quizzes));
  };
  useEffect(() => {
    fetchQuizzesForCourse();
  }, [cid]);

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
          <ProtectedFaculty>
            <Button
              id="wd-add-quiz"
              variant="danger"
              onClick={() =>
                navigate(`/Kambaz/Courses/${cid}/Quizzes/Editor/details`)
              }
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

        {quizzes.map((quiz: any) => (
          <div key={quiz._id}>
            <ListGroup.Item className="wd-left-border-success p-2">
              <div className="d-flex justify-content-between">
                <div>
                  <BsGripVertical />

                  <Link
                    to={`/Kambaz/Courses/${cid}/Quizzes/${quiz._id}/DetailsScreen`}
                    className="wd-quiz-link fw-bold text-decoration-none text-dark"
                  >
                    {quiz.title}
                  </Link>
                  <br />
                  <small className="text-muted">
                    {quiz.available}| {quiz.due} | {quiz.points}
                  </small>
                </div>
                <ProtectedFaculty>
                  <BsTrash onClick={() => deleteQuizHandler(quiz._id)} />
                  <LessonControlButtons />
                  <Button
                    onClick={() =>
                      navigate(
                        `/Kambaz/Courses/${cid}/Quizzes/${quiz._id}/details`
                      )
                    }
                  >
                    Edit
                  </Button>
                  <Button
                    onClick={() =>
                      navigate(
                        `/Kambaz/Courses/${cid}/Quizzes/${quiz._id}/Preview`
                      )
                    }
                  >
                    Preview
                  </Button>
                </ProtectedFaculty>
                <ProtectedStudent>
                  <Button
                    onClick={() =>
                      navigate(
                        `/Kambaz/Courses/${cid}/Quizzes/${quiz._id}/Active/1`
                      )
                    }
                  >
                    Start
                  </Button>
                </ProtectedStudent>
              </div>
            </ListGroup.Item>
          </div>
        ))}
      </ListGroup>
    </div>
  );
}
