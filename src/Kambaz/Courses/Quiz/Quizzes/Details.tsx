import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";

export default function Details() {
  const { qid } = useParams();
  const { quizzes } = useSelector((state: any) => state.quizzesReducer);
  const quiz = quizzes.find((q: any) => q._id === qid);

  return (
    <div id="wd-quizzes">
      <div>Quiz Type {quiz.type}</div>
      <div>Points {quiz.points}</div>
      <div>Assignment Group {quiz.assignmentGroup}</div>
      <div>Shuffle Answers {quiz.shuffleAnswers}</div>
      <div>Time Limit {quiz.timeLimit}</div>
      <div>Multiple Attempts {quiz.multipleAttempts}</div>
      <div>View Responses {quiz.viewResponses}</div>
      <div>Show Correct Answers {quiz.showCorrectAnswers}</div>
      <div>One Question at a Time {quiz.oneQuestionAtATime}</div>
      <div>
        Require Respondus LockDown Browser {quiz.requireLockDownBrowser}
      </div>
      <div>Required to View Quiz Results {quiz.requireViewResults}</div>
      <div>Webcam Required {quiz.webcamRequired}</div>
      <div>Lock Questions After Answering {quiz.lockAfterAnswering}</div>
      <div>Due {quiz.due}</div>
      <div>From {quiz.from}</div>
      <div>Until {quiz.type}</div>
    </div>
  );
}
