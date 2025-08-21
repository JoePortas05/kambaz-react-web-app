import CourseNavigation from "./Navigation";
import { Navigate, Route, Routes, useParams, useLocation } from "react-router";
import Modules from "./Modules";
import Home from "./Home";
import AssignmentEditor from "./Assignments/Editor";
import Assignments from "./Assignments";
import { FaAlignJustify } from "react-icons/fa";
import PeopleTable from "./People/Table";
import Quizzes from "./Quiz/Quizzes";
import DetailsEditor from "./Quiz/Quizzes/DetailsEditor";
import QuestionsEditor from "./Quiz/Questions/QuestionsEditor";
import Preview from "./Quiz/Quizzes/Preview";
import Take from "./Quiz/Quizzes/Take";
import Details from "./Quiz/Quizzes/Details";
import MCEditor from "./Quiz/Questions/MCEditor";
import TFEditor from "./Quiz/Questions/TFEditor";
import BlankEditor from "./Quiz/Questions/BlankEditor";

export default function Courses({ courses }: { courses: any[] }) {
  const { cid } = useParams();
  const course = courses.find((course) => course._id === cid);
  const { pathname } = useLocation();
  return (
    <div id="wd-courses">
      <h2 className="text-danger">
        <FaAlignJustify className="me-4 fs-4 mb-1" />
        {course && course.name} &gt; {pathname.split("/")[4]}
      </h2>{" "}
      <hr />
      <div className="d-flex">
        <div className="d-none d-md-block">
          <CourseNavigation />
        </div>
        <div className="flex-fill">
          <Routes>
            <Route path="/" element={<Navigate to="Home" />} />
            <Route path="Home" element={<Home />} />
            <Route path="Modules" element={<Modules />} />
            <Route path="Assignments" element={<Assignments />} />
            <Route path="Assignments/:aid" element={<AssignmentEditor />} />
            <Route path="People" element={<PeopleTable />} />
            <Route path="Quizzes" element={<Quizzes />} />
            <Route path="Quizzes/:qid/DetailsScreen" element={<Details />} />
            <Route path="Quizzes/:qid/details" element={<DetailsEditor />} />
            <Route
              path="Quizzes/:qid/questions"
              element={<QuestionsEditor />}
            />
            <Route path="Quizzes/:qid/questions/mc" element={<MCEditor />} />
            <Route path="Quizzes/:qid/questions/tf" element={<TFEditor />} />
            <Route path="Quizzes/:qid/questions/bl" element={<BlankEditor />} />
            <Route path="Quizzes/:qid/details" element={<DetailsEditor />} />
            <Route
              path="Quizzes/:qid/questions"
              element={<QuestionsEditor />}
            />
            <Route path="Quizzes/:qid/questions/mc" element={<MCEditor />} />
            <Route path="Quizzes/:qid/questions/tf" element={<TFEditor />} />
            <Route path="Quizzes/:qid/questions/bl" element={<BlankEditor />} />
            <Route path="Quizzes/:qid/preview" element={<Preview />} />
            <Route path="Quizzes/:qid/take" element={<Take />} />
          </Routes>
        </div>
      </div>
    </div>
  );
}
