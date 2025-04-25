import React, { useState, useRef } from "react";
import ReactPlayer from "react-player";
import video1 from "../assets/videos/video1.mp4";
import video2 from "../assets/videos/video2.mp4";
import './Game.css';

// Case Data
const caseData = {
  case_id: "crime_scene_01",
  title: "Murder at the Mansion",
  intro_video: video1,
  questions: [
    {
      id: 1,
      pause_time: 3,
      question: "You see a broken vase on the floor. What do you do?",
      options: [
        { text: "Examine for fingerprints", next_video: video2, points: 10, next_question_id: 2 },
        { text: "Ignore it", next_video: video1, points: 0, next_question_id: 3 }
      ]
    },
    {
      id: 2,
      pause_time: 5,
      question: "You find blood stains. What's your next move?",
      options: [
        { text: "Collect sample", next_video: video2, points: 10, next_question_id: 4 },
        { text: "Ask the witness", next_video: video1, points: 5, next_question_id: 5 }
      ]
    },
    {
      id: 3,
      pause_time: 7,
      question: "A suspect runs away. What do you do?",
      options: [
        { text: "Chase him", next_video: video2, points: 10, next_question_id: 4 },
        { text: "Call for backup", next_video: video2, points: 5, next_question_id: 5 }
      ]
    },
    {
      id: 4,
      pause_time: 10,
      question: "You find a suspicious note. What do you do?",
      options: [
        { text: "Check handwriting", next_video: video2, points: 10, next_question_id: 6 },
        { text: "Ignore it", next_video: video2, points: 0, next_question_id: 6 }
      ]
    },
    {
      id: 5,
      pause_time: 12,
      question: "A witness seems nervous. How do you handle it?",
      options: [
        { text: "Press for details", next_video: video2, points: 10, next_question_id: 6 },
        { text: "Let them go", next_video: video2, points: 0, next_question_id: 6 }
      ]
    },
    {
      id: 6,
      pause_time: 15,
      question: "The CCTV footage is blurry. What's your plan?",
      options: [
        { text: "Enhance the footage", next_video: video2, points: 10, next_question_id: null },
        { text: "Check another angle", next_video: video1, points: 5, next_question_id: null }
      ]
    }
  ],
  feedback: [
    {
      min_score: 0,
      max_score: 20,
      message: "You need to improve your detective skills. Pay attention to clues!",
      laws: ["Section 174 CrPC - Police Investigation", "Section 161 CrPC - Witness Examination"]
    },
    {
      min_score: 21,
      max_score: 40,
      message: "Good job! You identified key clues. But there’s room for improvement.",
      laws: ["Section 154 CrPC - FIR Procedure", "Section 27 IEA - Confession & Evidence"]
    },
    {
      min_score: 41,
      max_score: 60,
      message: "Excellent! You solved the case efficiently like a true investigator!",
      laws: ["IPC Section 302 - Murder", "Section 172-174 CrPC - Crime Scene Investigation"]
    }
  ]
};

const Game = () => {
  const [currentVideo, setCurrentVideo] = useState(caseData.intro_video);
  const [playing, setPlaying] = useState(true);
  const [showQuestion, setShowQuestion] = useState(false);
  const [currentQuestion, setCurrentQuestion] = useState(null);
  const [score, setScore] = useState(0);
  const [completed, setCompleted] = useState(false);
  const playerRef = useRef(null);

  // Handle video progress
  const handleProgress = (state) => {
    if (showQuestion) return; // Prevent multiple triggers

    const currentTime = Math.floor(state.playedSeconds);
    const nextQuestion = caseData.questions.find(q => q.pause_time === currentTime);

    if (nextQuestion) {
      setPlaying(false);
      setCurrentQuestion(nextQuestion);
      setShowQuestion(true);
    }
  };

  // Handle response
  const handleResponse = (selectedOption) => {
    setScore(score + selectedOption.points);
    setShowQuestion(false);
    setPlaying(true);
    setCurrentVideo(selectedOption.next_video);

    // Find the next question based on choice
    const nextQuestionId = selectedOption.next_question_id;
    if (nextQuestionId) {
      const nextQuestion = caseData.questions.find(q => q.id === nextQuestionId);
      setCurrentQuestion(nextQuestion);
    } else {
      setCompleted(true); // End game when no more questions
    }
  };

  return (
    <div className="game-container">
      <h1>🔍 {caseData.title}</h1>

      {!completed ? (
        <div className="video-container">
          <ReactPlayer
            ref={playerRef}
            url={currentVideo}
            playing={playing}
            controls={false}
            onProgress={handleProgress}
            width="100%"
            height="100%"
          />

          {showQuestion && (
            <div className="question-overlay">
              <h2>{currentQuestion.question}</h2>
              {currentQuestion.options.map((option, index) => (
                <button key={index} className="option-button" onClick={() => handleResponse(option)}>
                  {option.text}
                </button>
              ))}
            </div>
          )}
        </div>
      ) : (
        <div className="feedback">
          <h2>🕵 Case Completed!</h2>
          {caseData.feedback.map((f) =>
            score >= f.min_score && score <= f.max_score ? (
              <div key={f.min_score}>
                <p>{f.message}</p>
                <h3>⚖ Relevant Laws:</h3>
                <ul>
                  {f.laws.map((law, index) => (
                    <li key={index}>{law}</li>
                  ))}
                </ul>
              </div>
            ) : null
          )}
          <button onClick={() => window.location.reload()} className="back-button">🔄 Play Again</button>
        </div>
      )}
    </div>
  );
};

export default Game;