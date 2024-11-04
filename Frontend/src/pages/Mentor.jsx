import React from "react";
import user1 from "../assets/profile-pictures/user1.jpg";
import user2 from "../assets/profile-pictures/user2.jpg";

import chat from "../assets/chatbot.png";
import phone from "../assets/phone.png";
import user from "../assets/user.png";

const Mentor = () => {
  const emergencyNumbers = [
    { name: "Ambulance", number: "1122" },
    { name: "Traffic Police", number: "1915" },
    { name: "Mobile Phones", number: "112" },
    { name: "Tourist Police", number: "1422" },
    { name: "National Highways & Motorway Police", number: "130" },
    { name: "Child Protection & Welfare Bureau", number: "1121" },
    { name: "Police", number: "999" },
    { name: "Ambulance", number: "997" },
    { name: "Fire", number: "998" },
    { name: "Traffic Police", number: "993" },
  ];

  const testimonials = [
    {
      text: "I provide expert mentoring service in navigating legal matters.",
      user: "John Doe",
      company: "Law Firm",
      image: user1,
    },
    {
      text: "I am professional legal consultant for Women and Child Welfare firms.",
      user: "Jane Smith",
      company: "Cosultant",
      image: user2,
    },
    // Add more testimonials if needed
  ];

  return (
    <div className="p-10">
      {/* AI Chatbot Section */}
      <div className="flex flex-col items-center mb-10">
        <div className="p-8 bg-neutral-900 rounded-md p-6 text-md border border-neutral-800 text-center">
          <div className="flex items-center justify-center space-x-4">
            <img src={chat} alt="AI Chatbot" className="w-16 h-16" /> {/* Adjust the size as needed */}
            <div>
              <h2 className="text-3xl font-semibold">AI Chatbot</h2>
              <p>Get instant answers from our AI chatbot.</p>
              <a
                href="/chatbot"
                className="inline-block mt-4 bg-gradient-to-r from-orange-400 to-orange-600 text-white py-2 px-4 rounded-lg hover:bg-orange-500"
              >
                Talk to Chatbot
              </a>
            </div>
          </div>
        </div>
      </div>


      {/* Emergency Numbers Section */}
      <h2 className="text-2xl sm:text-4xl lg:text-4xl text-center my-10 lg:my-20">Emergency Numbers</h2>
      <div className="flex flex-wrap">
        {emergencyNumbers.map((item, index) => (
          <div key={index} className="w-full sm:w-1/2 lg:w-1/3 p-2">
            <div className="bg-neutral-900 rounded-md p-6 text-md border border-neutral-800">
              <div className="flex items-center space-x-4">
                <img src={phone} alt={item.name} className="w-12 h-12" /> {/* Phone icon */}
                <div>
                  <p className="text-xl">{item.name}</p>
                  <a
                    href={`tel:${item.number}`}
                    className="text-lg text-blue-500 hover:underline"
                  >
                    {item.number}
                  </a>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Contact Mentor Section */}
      <h2 className="text-2xl sm:text-4xl lg:text-4xl text-center my-10 lg:my-20">
          Meet Mentors
      </h2>
      <div className="bg-neutral-900 rounded-md p-6 text-md border border-neutral-800 text-center">
        <img src={user} alt="Contact Mentor" className="w-16 h-16 mx-auto mb-4" /> {/* Mentor icon */}
        <p className="text-xl mb-4">Need personalized guidance from our mentors?</p>
        <a
          href="/contact-mentor"
          className="text-lg bg-orange-500 text-white py-2 px-4 rounded-lg hover:bg-orange-600"
        >
          Contact Mentor
        </a>
      </div>

      {/* Testimonials Section */}
      <div id="testimonial" className="mt-20 tracking-wide">
        <div className="flex flex-wrap justify-center">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="w-full sm:w-1/2 lg:w-1/3 px-4 py-2">
              <div className="bg-neutral-900 rounded-md p-6 text-md border border-neutral-800 font-thin">
                <p>{testimonial.text}</p>
                <div className="flex mt-8 items-start">
                  <img
                    className="w-12 h-12 mr-6 rounded-full border border-neutral-300"
                    src={testimonial.image}
                    alt={testimonial.user}
                  />
                  <div>
                    <h6>{testimonial.user}</h6>
                    <span className="text-sm font-normal italic text-neutral-600">
                      {testimonial.company}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Mentor;
