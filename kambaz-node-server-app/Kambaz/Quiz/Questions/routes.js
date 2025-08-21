import * as dao from "./dao.js";

export default function QuestionRoutes(app) {
  app.post("/api/quizzes/:qid/questions", async (req, res) => {
    const { qid } = req.params;
    const question = await dao.createQuestion({ ...req.body, quiz: qid });
    res.json(question);
  });

  app.get("/api/questions", async (req, res) => {
    const questions = await dao.findAllQuestions();
    res.json(questions);
  });

  app.get("/api/questions/:quid", async (req, res) => {
    const question = await dao.findQuestionById(req.params.quid);
    res.json(question);
  });

  app.get("/api/quizzes/:qid/questions", async (req, res) => {
    const quiz = await dao.findQuestionsByQuiz(req.params.qid);
    res.json(quiz);
  });

  app.put("/api/questions/:quid", async (req, res) => {
    const { quid } = req.params;
    const questionUpdates = req.body;
    const status = await dao.updateQuestion(quid, questionUpdates);
    res.send(status);
  });

  app.delete("/api/questions/:quid", async (req, res) => {
    const status = await dao.deleteQuestion(req.params.quid);
    res.send(status);
  });
}
