import React from "react";

const vrDesigns = [
  {
    title: "Police Station Visualization",
    desc: "A police station is where police officers work to maintain law and order, help people in need, and investigate crimes to keep the community safe.",
    iframeSrc:
      "https://sketchfab.com/models/dfb6c1fb4cdc465786b6cb51f7bdb837/embed"
  },
  {
    title: "Court Room Visualization",
    desc: "A court is a place where legal cases are heard and decisions are made. It helps resolve disputes, ensure justice, and uphold the law in a fair way.",
    iframeSrc:
      "https://sketchfab.com/models/b6d2b91c652148479400923a2cabb2d1/embed"
  },
  {
    title: "Cyber Cell",
    desc: "A cyber cell is a special unit that handles online crimes, like hacking or fraud, and works to protect people from threats in the digital world.",
    iframeSrc:
      "https://sketchfab.com/models/e117fb60d0a84b8d81806905551bca3d/embed"
  }
];

const storyCards = [
  {
    videoSrc: "https://www.youtube.com/embed/abEDs0J8DhM?si=tu4GNUOcHe--s9iW", // Example video URL
    title: "Stop Child Labour",
    desc: "This story educates about child labour laws, emphasizing that in India, children under 14 cannot engage in labour work, ensuring their right to education and a safe childhood.",
  },
  {
    videoSrc: "https://www.youtube.com/embed/aT61nwd5U-s?si=oHE8Wx-RqwsoaRCS", // Example video URL
    title: "Importance of Traffic Laws",
    desc: "Learn about the significance of following traffic rules to ensure safety on roads and reduce accidents, creating responsible citizens.",
  },
  {
    videoSrc: "https://www.youtube.com/embed/M9ebxrc2Jg4?si=A8lCwi_Xiiqh4OXM", // Example video URL
    title: "Say No to Domestic Violence",
    desc: "This story raises awareness about domestic violence laws in India, highlighting ways to seek help and protect victims from harm.",
  },
  {
    videoSrc: "https://www.youtube.com/embed/ail2b6zcGMA?si=VDGcCoYWSE1WhlZW", // Example video URL
    title: "Respect Public Property",
    desc: "The story educates about respecting and protecting public property, emphasizing its role in community well-being and development.",
  },
  {
    videoSrc: "https://www.youtube.com/embed/4D2F9J7ffW0?si=Bm9tn8vF4WBaLpWd", // Example video URL
    title: "Every Child is Special",
    desc: "Learn about the significance of following traffic rules to ensure safety on roads and reduce accidents, creating responsible citizens.",
  },
];

const Stories = () => {
  return (
    <div id="stories" className="mt-20 px-4">
      {/* Visualisation section */}
      <h2 className="text-2xl sm:text-5xl lg:text-6xl text-center my-8 tracking-wide">
        VR Visualizations
      </h2>
      <div className="flex flex-wrap justify-center">
        {vrDesigns.map((design, index) => (
          <div
            key={index}
            className="w-full sm:w-1/2 lg:w-1/3 p-4 flex"
          >
            <div className="flex-1 p-6 border border-neutral-700 rounded-xl bg-transparent shadow-lg">
              <div className="sketchfab-embed-wrapper mb-4">
                <iframe
                  title={design.title}
                  frameBorder="0"
                  allowFullScreen
                  mozallowfullscreen="true"
                  webkitallowfullscreen="true"
                  allow="autoplay; fullscreen; xr-spatial-tracking"
                  execution-while-out-of-viewport
                  execution-while-not-rendered
                  web-share
                  width="100%"
                  height="250"
                  src={design.iframeSrc}
                ></iframe>
              </div>
              <p className="text-2xl mb-2 text-white">{design.title}</p>
              <p className="text-md text-gray-300">{design.desc}</p>
            </div>
          </div>
        ))}
      </div>
      {/* Visualsation ends */}

      {/* Stories section */}
      <h2 className="text-2xl sm:text-5xl lg:text-6xl text-center my-8 tracking-wide">
        Educational Stories
      </h2>
      <div className="flex flex-wrap justify-center">
        {storyCards.map((story, index) => (
          <div
            key={index}
            className="w-full sm:w-1/2 lg:w-1/3 p-4 flex"
          >
            <div className="flex-1 p-6 border border-neutral-700 rounded-xl bg-transparent shadow-lg">
              <div className="mb-4">
                <iframe
                  title={story.title}
                  src={story.videoSrc}
                  frameBorder="0"
                  allowFullScreen
                  width="100%"
                  height="250"
                  className="rounded-lg"
                ></iframe>
              </div>
              <p className="text-2xl mb-2 text-white">{story.title}</p>
              <p className="text-md text-gray-300">{story.desc}</p>
            </div>
          </div>
        ))}
      </div>
      {/* Stories ends */}
    </div>
  );
};

export default Stories;
