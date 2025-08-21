import { Button, Col, Form, Row } from "react-bootstrap";
import { NavLink, useLocation, useNavigate, useParams } from "react-router";
import { addQuiz } from "./reducer";
import { useDispatch } from "react-redux";
import { useState } from "react";

export default function DetailsEditor() {
  const { cid, qid } = useParams();
  console.log(qid);

  const [quizId, setQuizId] = useState("");
  const [quizDescription, setQuizDescription] = useState("");
  const [quizTitle, setQuizTitle] = useState("");
  const [quizCourse, setQuizCourse] = useState("");
  const [quizType, setQuizType] = useState("");
  const [quizPoints, setQuizPoints] = useState("");
  const [quizAssignmentGroup, setQuizAssignmentGroup] = useState("");
  const [quizShuffleAnswers, setQuizShuffleAnswers] = useState(true);
  const [quizTimeLimit, setQuizTimeLimit] = useState(true);
  const [quizMultipleAttempts, setQuizMultipleAttempts] = useState(true);
  const [quizHowManyAttempts, setQuizHowManyAttempts] = useState("");
  const [quizShowCorrectAnswers, setQuizShowCorrectAnswers] = useState(true);
  const [quizAccessCode, setQuizAccessCode] = useState("");
  const [quizOneQuestionAtATime, setQuizOneQuestionAtATime] = useState(true);
  const [quizWebcamRequired, setQuizWebcamRequired] = useState(true);
  const [quizLockQuestionsAfterAnswering, setQuizLockQuestionsAfterAnswering] =
    useState(true);
  const [quizDue, setQuizDue] = useState("");
  const [quizAvailable, setQuizAvailable] = useState("");
  const [quizUntil, setQuizUntil] = useState("");

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const save = () => {
    dispatch(
      addQuiz({
        _id: quizId,
        description: quizDescription,
        title: quizTitle,
        course: quizCourse,
        type: quizType,
        points: quizPoints,
        assignment_group: quizAssignmentGroup,
        shuffle_answers: quizShuffleAnswers,
        time_limit: quizTimeLimit,
        multiple_attempts: quizMultipleAttempts,
        how_many_attempts: quizHowManyAttempts,
        show_correct_answers: quizShowCorrectAnswers,
        access_code: quizAccessCode,
        one_question_at_a_time: quizOneQuestionAtATime,
        webcam_required: quizWebcamRequired,
        lock_questions_after_answering: quizLockQuestionsAfterAnswering,
        due: quizDue,
        available: quizAvailable,
        until: quizUntil,
      })
    );
    navigate(`/Kambaz/Courses/${cid}/Quizzes`);
  };

  const cancel = () => {
    navigate(`/Kambaz/Courses/${cid}/Quizzes`);
  };

  const { pathname } = useLocation();
  const details = pathname.replace(
    /\/Editor\/questions(?:\/|$)/,
    "/Editor/details"
  );
  const questions = pathname.replace(
    /\/Editor\/details(?:\/|$)/,
    "/Editor/questions"
  );

  return (
    <div id="wd-quizzes-editor">
      <div>
        <ul>
          <li>
            <NavLink className="nav-link" to={details}>
              Details
            </NavLink>
          </li>
          <li>
            <NavLink className="nav-link" to={questions}>
              Questions
            </NavLink>
          </li>
        </ul>
      </div>
      <Form.Group className="mb-3" controlId="wd-name">
        <Form.Label className="fw-bold">Quiz Name</Form.Label>
        <Form.Control
          value={quizTitle}
          onChange={(e) => setQuizTitle(e.target.value)}
        />
      </Form.Group>

      <Form.Group className="mb-4" controlId="wd-description">
        <Form.Control
          as="textarea"
          value={quizDescription}
          onChange={(e) => setQuizDescription(e.target.value)}
          rows={5}
        />
      </Form.Group>

      <Row className="mb-3 align-items-center">
        <Col sm={2}>
          <Form.Label className="mb-0">Quiz Type</Form.Label>
        </Col>
        <Col sm={4}>
          <Form.Select
            value="Graded Quiz"
            onChange={(e) => setQuizType(e.target.value)}
          >
            <option>Graded Quiz</option>
            <option>Practice Quiz</option>
            <option>Graded Survey</option>
            <option>Ungraded Survey</option>
          </Form.Select>
        </Col>
      </Row>

      <Row className="mb-3 align-items-center">
        <Col sm={2}>
          <Form.Label className="mb-0">Assignment Group</Form.Label>
        </Col>
        <Col sm={4}>
          <Form.Select
            value="Quizzes"
            onChange={(e) => setQuizAssignmentGroup(e.target.value)}
          >
            <option>Quizzes</option>
            <option>Exams</option>
            <option>Assignments</option>
            <option>Projects</option>
          </Form.Select>
        </Col>
      </Row>

      <div className="p-3 border mt-2">
        <Form.Group className="mb-3" controlId="wd-submission-type">
          <Form.Label className="fw-bold">Options</Form.Label>
          <div className="p-3 border mt-2">
            <Form.Check
              label="Shuffle Answers"
              id="entry-url"
              defaultChecked
              onChange={(e) => setQuizShuffleAnswers(e.target.checked)}
            />
            <Form.Check
              label="Time Limit"
              id="entry-media"
              defaultChecked
              onChange={(e) => setQuizTimeLimit(e.target.checked)}
            />
            <Form.Check
              label="Multiple Attempts"
              id="entry-media"
              onChange={(e) => setQuizMultipleAttempts(e.target.checked)}
            />
            <Form.Check
              label="Show Correct Answers"
              id="entry-media"
              defaultChecked
              onChange={(e) => setQuizShowCorrectAnswers(e.target.checked)}
            />
            <Form.Check
              label="One Question At A Time"
              id="entry-media"
              defaultChecked
              onChange={(e) => setQuizOneQuestionAtATime(e.target.checked)}
            />
            <Form.Check
              label="Webcam Required"
              id="entry-media"
              onChange={(e) => setQuizWebcamRequired(e.target.checked)}
            />
            <Form.Check
              label="Lock Questions After Answering"
              id="entry-media"
              onChange={(e) =>
                setQuizLockQuestionsAfterAnswering(e.target.checked)
              }
            />
          </div>
        </Form.Group>
      </div>

      <div className="p-3 border mt-2">
        <Form.Group className="mb-3" controlId="wd-submission-type">
          <Row className="mb-3 align-items-center">
            <Col sm={2}>
              <Form.Label className="mb-0">Points</Form.Label>
            </Col>
            <Col sm={4}>
              <Form.Control
                id="wd-points"
                type="number"
                value={quizPoints}
                onChange={(e) => setQuizPoints(e.target.value)}
              />
            </Col>
          </Row>

          <Row className="mb-3 align-items-center">
            <Col sm={2}>
              <Form.Label className="mb-0">How Many Attempts</Form.Label>
            </Col>
            <Col sm={4}>
              <Form.Control
                id="wd-points"
                type="number"
                value={quizHowManyAttempts}
                onChange={(e) => setQuizHowManyAttempts(e.target.value)}
              />
            </Col>
          </Row>

          <Row className="mb-3 align-items-center">
            <Col sm={2}>
              <Form.Label className="mb-0">Access Code</Form.Label>
            </Col>
            <Col sm={4}>
              <Form.Control
                id="wd-points"
                type="number"
                value={quizAccessCode}
                onChange={(e) => setQuizAccessCode(e.target.value)}
              />
            </Col>
          </Row>

          <Row className="mb-3 align-items-center">
            <Col sm={2}>
              <Form.Label className="mb-0">Quiz Id</Form.Label>
            </Col>
            <Col sm={4}>
              <Form.Control
                id="wd-points"
                type="number"
                value={quizId}
                onChange={(e) => setQuizId(e.target.value)}
              />
            </Col>
          </Row>

          <Row className="mb-3 align-items-center">
            <Col sm={2}>
              <Form.Label className="mb-0">Quiz Course</Form.Label>
            </Col>
            <Col sm={4}>
              <Form.Control
                id="wd-points"
                type="number"
                value={quizCourse}
                onChange={(e) => setQuizCourse(e.target.value)}
              />
            </Col>
          </Row>
        </Form.Group>
      </div>

      <div className="p-3 border mt-2">
        <Form.Group className="mb-3" controlId="wd-submission-type">
          <div className="p-3 border mt-2">
            <Form.Group as={Row} className="mb-3">
              <Form.Label column sm={2} className="fw-bold">
                Due
              </Form.Label>
              <Col sm={4}>
                <Form.Control
                  type="datetime-local"
                  value={quizDue}
                  onChange={(e) => setQuizDue(e.target.value)}
                />
              </Col>
            </Form.Group>
            <Form.Group as={Row} className="mb-3">
              <Form.Label column sm={2} className="fw-bold">
                Available
              </Form.Label>
              <Col sm={4}>
                <Form.Control
                  type="datetime-local"
                  value={quizAvailable}
                  onChange={(e) => setQuizAvailable(e.target.value)}
                />
              </Col>
            </Form.Group>
            <Form.Group as={Row} className="mb-3">
              <Form.Label column sm={2} className="fw-bold">
                Until
              </Form.Label>
              <Col sm={4}>
                <Form.Control
                  type="datetime-local"
                  value={quizUntil}
                  onChange={(e) => setQuizUntil(e.target.value)}
                />
              </Col>
            </Form.Group>
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
