import { useEffect, useState } from "react";
import { Form } from "react-bootstrap";
import { useParams } from "react-router-dom";
import * as questionsClient from "../Questions/client";

export default function Preview() {
  const { qid } = useParams();
  const [questions, setQuestions] = useState<any[]>([]);

  useEffect(() => {
    if (!qid) return;
    (async () => {
      const questions = await questionsClient.getQuestions(qid);
      setQuestions(questions);
    })();
  }, [qid]);

  return (
    <div className="p-3">
      <h5 className="mb-3">Preview Quiz</h5>

      {questions.map((q) => (
        <div key={q._id} className="border rounded p-3 mb-3">
          <div className=" mb-1">
            {q.question}* {q.points} pts
          </div>

          {q.type === "Multiple Choice" && (
            <div>
              {q.mcInfo.choices.map((choice: any, idx: number) => (
                <Form.Check
                  key={idx}
                  type="radio"
                  name={`mc-${q._id}`}
                  label={choice.text}
                  className="mb-1"
                />
              ))}
            </div>
          )}

          {q.type === "True Or False" && (
            <div>
              <Form.Check inline type="radio" label="True" />
              <Form.Check inline type="radio" label="False" />
            </div>
          )}

          {q.type === "Fill In The Blank" && (
            <Form.Control placeholder="Your answer" />
          )}
        </div>
      ))}
    </div>
  );
}
