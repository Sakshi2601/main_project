import { CheckCircle2 } from "lucide-react";
import { quizOptions } from "../constants";

// For scenario images
import quiz1 from "../assets/law.png";
import quiz2 from "../assets/traffic.png";
import quiz3 from "../assets/ethics.png";
import quiz4 from "../assets/labor.png";

const scenarioOptions = [
  {
    image: quiz1, // Replace with the actual image path
    title: "Crime Scene Investigation",
    desc: "Immerse yourself in a crime scene and uncover the clues to solve the case.",
    features: [
      "Analyze evidence",
      "Interview witnesses",
      "Make critical decisions",
      "Solve the mystery"
    ],
    link: "/scenario1", // Link to the scenario
  },
  {
    image: quiz2, // Replace with the actual image path
    title: "Ethical Dilemma Simulation",
    desc: "Face real-life ethical dilemmas & decisions that affect outcome.",
    features: [
      "Explore moral decisions",
      "Understand consequences",
      "Engage in critical thinking",
      "Reflect on your choices"
    ],
    link: "/scenario2", // Link to the scenario
  },
  {
    image: quiz3, // Replace with the actual image path
    title: "Negotiation Tactics",
    desc: "Learn negotiation tactics through immersive scenarios and role-play.",
    features: [
      "Negotiate with characters",
      "Choose your approach",
      "See results of decisions",
      "Enhance your negotiation skills"
    ],
    link: "/scenario3", // Link to the scenario
  },
  {
    image: quiz4, // Replace with the actual image path
    title: "Crisis Management",
    desc: "Manage crisis situation and make strategic decisions to navigate through.",
    features: [
      "Assess the situation",
      "Deploy resources effectively",
      "Make quick decisions",
      "Learn from the outcomes"
    ],
    link: "/scenario4", // Link to the scenario
  },
];

// Game data
const gameOptions = [
  {
    iframe: (
      <iframe
        src="https://cdn.htmlgames.com/TrafficRacer2/"
        frameBorder="0"
        allowFullScreen
        className="w-full h-64 rounded-lg"
        title="Traffic Jam 3D"
      />
    ),
    title: "Traffic Jam 3D",
  },
  {
    iframe: (
      <iframe
        src="https://cdn.htmlgames.com/HiddenSpotsCity/"
        frameBorder="0"
        allowFullScreen
        className="w-full h-64 rounded-lg"
        title="Find Hidden Objects"
      />
    ),
    title: "Find Hidden Objects",
  },
  {
    iframe: (
      <iframe
        src="https://cdn.htmlgames.com/EscapeRoom-HomeEscape/"
        frameBorder="0"
        allowFullScreen
        className="w-full h-64 rounded-lg"
        title="Game 3"
      />
    ),
    title: "Escape Games",
  },
];

const Quizzes = () => {
  return (
    <div id="quizzes" className="mt-20">

      <div id="games" className="mt-20">
        <h2 className="text-2xl sm:text-5xl lg:text-6xl text-center my-8 tracking-wide text-white">
          3D Games
        </h2>
        <div className="flex flex-wrap justify-center">
          {gameOptions.map((game, index) => (
            <div
              key={index}
              className="w-full sm:w-1/2 lg:w-1/3 p-4 flex justify-center"
            >
              <div className="bg-transparent border border-neutral-700 rounded-lg shadow-lg p-6 w-full">
                {/* Game Iframe */}
                <div className="mb-4">{game.iframe}</div>
                {/* Game Name */}
                <p className="text-lg font-bold text-center text-white">
                  {game.title}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <h2 className="text-2xl sm:text-5xl lg:text-6xl text-center my-8 tracking-wide">
        Our Quizzes
      </h2>
      <div className="flex flex-wrap">
        {quizOptions.map((option, index) => (
          <div key={index} className="w-full sm:w-1/2 lg:w-1/4 p-2">
            <div className="p-10 border border-neutral-700 rounded-xl">
              {/* Add the image with proper sizing */}
              <img
                src={option.image}
                alt={option.title}
                className="w-full h-40 object-cover rounded-lg mb-6"
              />
              <p className="text-3xl mb-4">{option.title}</p>
              <p className="mb-6 text-1xl">{option.desc}</p>
              <ul>
                {option.features.map((feature, index) => (
                  <li key={index} className="mt-4 flex items-center">
                    <CheckCircle2 />
                    <span className="ml-2">{feature}</span>
                  </li>
                ))}
              </ul>
              <a
                href={option.link}
                className="inline-flex justify-center items-center text-center w-full h-12 p-5 mt-8 tracking-tight text-xl hover:bg-orange-900 border border-orange-900 rounded-lg transition duration-200"
              >
                Start Now
              </a>
            </div>
          </div>
        ))}
      </div>

      <div id="scenarios" className="mt-20">
        <h2 className="text-2xl sm:text-5xl lg:text-6xl text-center my-8 tracking-wide">
          Our Scenarios
        </h2>
        <div className="flex flex-wrap">
          {scenarioOptions.map((option, index) => (
            <div key={index} className="w-full sm:w-1/2 lg:w-1/4 p-2">
              <div className="p-10 border border-neutral-700 rounded-xl">
                {/* Add the image with proper sizing */}
                <img
                  src={option.image}
                  alt={option.title}
                  className="w-full h-40 object-cover rounded-lg mb-6"
                />
                <p className="text-3xl mb-4">{option.title}</p>
                <p className="mb-6 text-xl">{option.desc}</p>
                <ul>
                  {option.features.map((feature, index) => (
                    <li key={index} className="mt-4 flex items-center">
                      <CheckCircle2 />
                      <span className="ml-2">{feature}</span>
                    </li>
                  ))}
                </ul>
                <a
                  href={option.link}
                  className="inline-flex justify-center items-center text-center w-full h-12 p-5 mt-8 tracking-tight text-xl hover:bg-orange-900 border border-orange-900 rounded-lg transition duration-200"
                >
                  Play Now
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>

    </div>
  );
};



export default Quizzes;
