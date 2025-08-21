import * as dao from "./dao.js";

export default function AttemptRoutes(app) {
  app.post("/api/quizzes/:qid/attempts", async (req, res) => {
    const { qid } = req.params;
    const attempt = await dao.createAttempt({ ...req.body, quiz: qid });
    res.json(attempt);
  });

  app.get("/api/attempts", async (req, res) => {
    const attempts = await dao.findAllAttempts();
    res.json(attempts);
  });

  app.get("/api/attempts/:atid", async (req, res) => {
    const attempt = await dao.findAttemptsById(req.params.atid);
    res.json(attempt);
  });

  app.get("/api/quizzes/:qid/attempts", async (req, res) => {
    const { user } = req.query;
    const attempts = await dao.findAttemptsByStudentAndQuiz(
      req.params.qid,
      user
    );
    res.json(attempts);
  });

  app.get("/api/quizzes/:qid/attempts/recent", async (req, res) => {
    const { user } = req.query;
    const attempts = await dao.findMostRecentByStudentAndQuiz(
      req.params.qid,
      user
    );
    res.json(attempts);
  });

  app.get("/api/quizzes/:qid/attempts/using", async (req, res) => {
    const { user } = req.query;
    const attempts = await dao.findBestAttemptByStudentAndQuiz(
      req.params.qid,
      user
    );
    res.json(attempts);
  });

  app.put("/api/attempts/:atid", async (req, res) => {
    const { atid } = req.params;
    const attemptUpdates = req.body;
    const status = await dao.updateAttempt(atid, attemptUpdates);
    res.send(status);
  });

  app.delete("/api/attempts/:atid", async (req, res) => {
    const status = await dao.deleteAttempt(req.params.atid);
    res.send(status);
  });
}
