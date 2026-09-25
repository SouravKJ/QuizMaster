const express = require("express");
const QuizAttempt = require("../models/QuizAttempt");

const router = express.Router();

router.get("/attempt/:attemptId", async (req, res) => {
  try {
    const { attemptId } = req.params;

    // Get ONE quiz attempt
    const attempt = await QuizAttempt.findById(attemptId).populate(
      "questions.question"
    );

    // If attempt doesn't exist
    if (!attempt) {
      return res.status(404).json({
        success: false,
        message: "Quiz attempt not found",
        performance: [],
      });
    }

    // Store topic-wise statistics
    const topicStats = {};

    // Loop through questions of THIS attempt only
    attempt.questions.forEach((item) => {
      if (!item.question) {
        return;
      }

      const topic = item.question.topic;

      if (!topicStats[topic]) {
        topicStats[topic] = {
          topic: topic,
          attempted: 0,
          correct: 0,
        };
      }

      topicStats[topic].attempted += 1;

      if (item.isCorrect) {
        topicStats[topic].correct += 1;
      }
    });

    // Calculate performance
    const performance = Object.values(topicStats).map((item) => {
      const accuracy =
        item.attempted > 0
          ? Math.round((item.correct / item.attempted) * 100)
          : 0;

      let level;

      if (accuracy >= 80) {
        level = "Strong";
      } else if (accuracy >= 50) {
        level = "Moderate";
      } else {
        level = "Weak";
      }

      return {
        topic: item.topic,
        attempted: item.attempted,
        correct: item.correct,
        accuracy: accuracy,
        level: level,
      };
    });

    // Weakest topic first
    performance.sort((a, b) => a.accuracy - b.accuracy);

    // Send result
    res.status(200).json({
      success: true,
      attemptId: attempt._id,
      score: attempt.score,
      totalQuestions: attempt.totalQuestions,
      percentage: attempt.percentage,
      performance: performance,
    });
  } catch (err) {
    console.error("Performance error:", err);

    res.status(500).json({
      success: false,
      message: "Failed to calculate performance",
      error: err.message,
    });
  }
});

router.get("/subtopic/:attemptId", async (req, res) => {
  try {
    const { attemptId } = req.params;

    // Get ONE quiz attempt
    const attempt = await QuizAttempt.findById(attemptId).populate(
      "questions.question"
    );

    // If attempt doesn't exist
    if (!attempt) {
      return res.status(404).json({
        success: false,
        message: "Quiz attempt not found",
        performance: [],
      });
    }

    // Store subtopic-wise statistics
    const subtopicStats = {};

    // Loop through questions of THIS attempt only
    attempt.questions.forEach((item) => {
      if (!item.question) {
        return;
      }

      const subtopic = item.question.subtopic;
      const topic = item.question.topic;

      const key = `${topic} - ${subtopic}`;

      if (!subtopicStats[key]) {
        subtopicStats[key] = {
          topic: topic,
          subtopic: subtopic,
          attempted: 0,
          correct: 0,
        };
      }

      subtopicStats[key].attempted += 1;

      if (item.isCorrect) {
        subtopicStats[key].correct += 1;
      }
    });

    // Calculate performance
    const performance = Object.values(subtopicStats).map((item) => {
      const accuracy =
        item.attempted > 0
          ? Math.round((item.correct / item.attempted) * 100)
          : 0;

      let level;

      if (accuracy >= 80) {
        level = "Strong";
      } else if (accuracy >= 50) {
        level = "Moderate";
      } else {
        level = "Weak";
      }

      return {
        topic: item.topic,
        subtopic: item.subtopic,
        attempted: item.attempted,
        correct: item.correct,
        accuracy: accuracy,
        level: level,
      };
    });

    // Weakest subtopic first
    performance.sort((a, b) => a.accuracy - b.accuracy);

    // Send result
    res.status(200).json({
      success: true,
      attemptId: attempt._id,
      score: attempt.score,
      totalQuestions: attempt.totalQuestions,
      percentage: attempt.percentage,
      performance: performance,
    });
  } catch (err) {
    console.error("Subtopic performance error:", err);

    res.status(500).json({
      success: false,
      message: "Failed to calculate subtopic performance",
      error: err.message,
    });
  }
});

module.exports = router;