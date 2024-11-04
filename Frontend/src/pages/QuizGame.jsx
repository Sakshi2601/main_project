import React, { useState, useEffect } from "react";

const QuizGame = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [timeLeft, setTimeLeft] = useState(15); // Start with 15 seconds for each question

  const questions = [
    {
      question: "What is the speed limit in a city?",
      options: [
        { answer: "30 km/h", isCorrect: true },
        { answer: "50 km/h", isCorrect: false },
        { answer: "70 km/h", isCorrect: false },
        { answer: "90 km/h", isCorrect: false },
      ],
    },
    {
      question: "What should you do at a red traffic light?",
      options: [
        { answer: "Speed up", isCorrect: false },
        { answer: "Stop", isCorrect: true },
        { answer: "Go if no one is watching", isCorrect: false },
        { answer: "Yield", isCorrect: false },
      ],
    },
    // Add more questions as needed
  ];

  useEffect(() => {
    if (timeLeft === 0) {
      handleNextQuestion();
    }

    // Countdown timer
    const timer = setTimeout(() => {
      setTimeLeft((prevTimeLeft) => (prevTimeLeft > 0 ? prevTimeLeft - 1 : 0));
    }, 1000);

    return () => clearTimeout(timer);
  }, [timeLeft]);

  const handleOptionClick = (isCorrect) => {
    if (isCorrect) {
      setScore(score + 1);
    }
    handleNextQuestion();
  };

  const handleNextQuestion = () => {
    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion);
      setTimeLeft(15); // Reset the timer for the next question
    } else {
      setShowScore(true);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-black p-10">
      <div className="p-6 bg-gradient-to-r from-gray-800 via-gray-900 to-black rounded-lg shadow-md text-center">
        {showScore ? (
          <div>
            <h2 className="text-3xl font-semibold text-white">
              Your Score: {score} / {questions.length}
            </h2>
          </div>
        ) : (
          <div>
            <h2 className="text-3xl font-semibold text-white mb-4">
              {questions[currentQuestion].question}
            </h2>

            {/* Display Timer */}
            <div className="text-2xl text-orange-500 mb-4">
              Time Left: {timeLeft} seconds
            </div>

            <div className="space-y-4">
              {questions[currentQuestion].options.map((option, index) => (
                <button
                  key={index}
                  onClick={() => handleOptionClick(option.isCorrect)}
                  className="w-full p-4 bg-gradient-to-r from-gray-800 to-gray-900 rounded-lg shadow-md text-white hover:bg-gradient-to-br from-orange-500 to-orange-700 transition duration-300"
                >
                  {option.answer}
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default QuizGame;
