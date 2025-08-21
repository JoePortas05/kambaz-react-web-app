import * as dao from "./dao.js";

export default function QuizRoutes(app) {
  app.post("/api/courses/:cid/quizzes", async (req, res) => {
    const { cid } = req.params;
    const quiz = await dao.createQuiz({ ...req.body, course: cid });
    res.json(quiz);
  });

  app.get("/api/quizzes", async (req, res) => {
    const quizzes = await dao.findAllQuizzes();
    res.json(quizzes);
  });

  app.get("/api/quizzes/:qid", async (req, res) => {
    const quiz = await dao.findQuizById(req.params.qid);
    res.json(quiz);
  });

  app.get("/api/courses/:cid/quizzes", async (req, res) => {
    const quiz = await dao.findQuizzesByCourse(req.params.cid);
    res.json(quiz);
  });

  app.put("/api/quizzes/:qid", async (req, res) => {
    const { qid } = req.params;
    const quizUpdates = req.body;
    const status = await dao.updateQuiz(qid, quizUpdates);
    res.send(status);
  });

  app.delete("/api/quizzes/:qid", async (req, res) => {
    const status = await dao.deleteQuiz(req.params.qid);
    res.send(status);
  });
}
