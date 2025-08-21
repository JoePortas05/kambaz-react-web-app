import { Button } from "react-bootstrap";
import { NavLink, useLocation, useNavigate } from "react-router";

export default function QuestionsEditor() {
  const { pathname } = useLocation();
  const details = pathname.replace(
    /\/Editor\/questions(?:\/|$)/,
    "/Editor/details"
  );
  const questions = pathname.replace(
    /\/Editor\/details(?:\/|$)/,
    "/Editor/questions"
  );

  const navigate = useNavigate();

  const handle = () => {
    navigate(`${pathname}/mc`);
  };

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
      <div>
        <Button onClick={handle}>+ New Question</Button>
      </div>
    </div>
  );
}
