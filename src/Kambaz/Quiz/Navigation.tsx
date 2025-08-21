import { Navigate, Route, Routes } from "react-router-dom";
import Quizzes from ".";
import Details from "./Quizzes/Details";
import Editor from "./Editor";
import DetailsEditor from "./Quizzes/DetailsEditor";
import QuestionsEditor from "./Questions/QuestionsEditor";
import Preview from "./Quizzes/Preview";

export default function Navigation() {
  return (
    <Routes>
      <Route path="/" element={<Quizzes />} />
      <Route path=":qid" element={<Details />} />
      <Route path=":qid/Preview" element={<Preview />} />
      <Route path=":qid/Editor/*" element={<Editor />}>
        <Route path="" element={<Navigate to="details" />} />
        <Route path="details" element={<DetailsEditor />} />
        <Route path="questions" element={<QuestionsEditor />} />
      </Route>
      <Route path="Editor" element={<Editor />}>
        <Route path="" element={<DetailsEditor />} />
      </Route>
    </Routes>
  );
}
