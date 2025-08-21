import { NavLink, useParams } from "react-router";

export default function Editor() {
  const { cid, qid } = useParams();
  const editor = `/Kambaz/Courses/${cid}/Quizzes/${qid}/Edit`;
  return (
    <div>
      <ul>
        <li>
          <NavLink className="nav-link" to={`${editor}/details`}>
            Details
          </NavLink>
        </li>
        <li>
          <NavLink className="nav-link" to={`${editor}/questions`}>
            Questions
          </NavLink>
        </li>
      </ul>
    </div>
  );
}
