import { Link, useParams } from "react-router-dom";
import "../styles.css";
export default function CourseNavigation() {
  const { cid } = useParams();
  const links = [
    "Home",
    "Modules",
    "Piazza",
    "Zoom",
    "Assignments",
    "Quizzes",
    "Grades",
    "People",
  ];

  return (
    <div id="wd-courses-navigation" className="wd list-group fs-5 rounded-0">
      {links.map((page) => (
        <Link
          to={`/Kambaz/Courses/${cid}/${page}`}
          id="wd-course-modules-link"
          className="list-group-item text-danger border border-0"
        >
          {" "}
          {page}{" "}
        </Link>
      ))}
    </div>
  );
}
