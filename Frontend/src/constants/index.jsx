import { BotMessageSquare } from "lucide-react";
import { BatteryCharging } from "lucide-react";
import { Fingerprint } from "lucide-react";
import { ShieldHalf } from "lucide-react";
import { PlugZap } from "lucide-react";
import { GlobeLock } from "lucide-react";

import user1 from "../assets/profile-pictures/user1.jpg";
import user2 from "../assets/profile-pictures/user2.jpg";
import user3 from "../assets/profile-pictures/user3.jpg";
import user4 from "../assets/profile-pictures/user4.jpg";
import user5 from "../assets/profile-pictures/user5.jpg";
import user6 from "../assets/profile-pictures/user6.jpg";

// For quizes images
import quiz1 from "../assets/law.png";
import quiz2 from "../assets/traffic.png";
import quiz3 from "../assets/ethics.png";
import quiz4 from "../assets/labor.png";


export const navItems = [
  { label: "Features", href: "#feature" },
  { label: "Services", href: "#services" },
  { label: "Workflow", href: "#workflow" },
  { label: "Pricing", href: "#price" },
  { label: "Testimonials", href: "#testimonial" },
];

export const testimonials = [
  {
    user: "John Doe",
    company: "Stellar Solutions",
    image: user1,
    text: "I am extremely satisfied with the services provided. The platform is responsive, professional, and delivered results beyond my expectations.",
  },
  {
    user: "Jane Smith",
    company: "Blue Horizon Technologies",
    image: user2,
    text: "I couldn't be happier with the outcome of this project. The platform's creativity and problem-solving skills were instrumental in bringing our vision to life",
  },
  {
    user: "David Johnson",
    company: "Quantum Innovations",
    image: user3,
    text: "Learing with this platform was a pleasure. The attention to detail and commitment to excellence are commendable. I would highly recommend them to anyone looking for top-notch law knowledge.",
  },
  {
    user: "Ronee Brown",
    company: "Fusion Dynamics",
    image: user4,
    text: "Learning with this platform was a game-changer for my life. Their attention to detail and innovative solutions helped us achieve our goals faster than we thought possible.",
  },
  {
    user: "Michael Wilson",
    company: "Visionary Creations",
    image: user5,
    text: "I am amazed by the level of professionalism and dedication shown by the project. They were able to exceed our expectations and deliver outstanding results.",
  },
  {
    user: "Emily Davis",
    company: "Synergy Systems",
    image: user6,
    text: "The team went above and beyond to ensure this platform was a success. Their expertise and dedication are unmatched. I look forward to learning with them again in the future.",
  },
];

export const features = [
  {
    icon: <BotMessageSquare />,
    text: "Immersive VR Games",
    description:
      "Play interactive games that teach legal concepts through real-life scenarios.",
  },
  {
    icon: <Fingerprint />,
    text: "Interactive VR Stories",
    description:
      "Experience stories that illustrate legal principles in engaging, immersive formats.",
  },
  {
    icon: <ShieldHalf />,
    text: "AI Chatbot Mentor",
    description:
      "An AI chatbot offers real-time legal guidance and mentorship throughout the platform.",
  },
  {
    icon: <BatteryCharging />,
    text: "User Profiles",
    description:
      "Track progress with personal profiles showing completed games, stories, and achievements.",
  },
  {
    icon: <PlugZap />,
    text: "Gamification and Rewards",
    description:
      "Earn points, badges, and certificates for completing challenges and learning legal topics.",
  },
  {
    icon: <GlobeLock />,
    text: "Responsive Design",
    description:
      "Accessible on any device, with or without VR headsets, ensuring ease of use for all.",
  },
];

export const checklistItems = [
  {
    title: "Mentorship Program",
    description:
      "Connect with legal experts for personalized guidance and career advice.",
  },
  {
    title: "Interactive Quizzes",
    description:
      "Test your legal knowledge with fun quizzes after completing games and stories.",
  },
  {
    title: "Responsive Design",
    description:
      "Accessible on any device, with or without VR headsets, ensuring ease of use for all.",
  },
  {
    title: "Gamification and Rewards",
    description:
      "Earn points, badges, and certificates for completing challenges and learning legal topics.",
  }
];

export const pricingOptions = [
  {
    title: "Free",
    price: "$0",
    features: [
      "Access to Ethics Stories",
      "VR Basic Games",
      "AI Chatbot",
    ],
  },
  {
    title: "Pro",
    price: "$10",
    features: [
      "Access to Laws Stories",
      "All VR Games",
      "AI Chatbot",
    ],
  },
  {
    title: "Premium",
    price: "$25",
    features: [
      "Access to Ethics and Laws Stories",
      "All VR Games",
      "AI Chatbot and Mentorship",
    ],
  },
];

export const serviceOptions = [
  {
    title: "VR Games",
    desc: "Learn and play with immersive games",
    features: [
      "Traffic Games",
      "Scenario based Games",
      "Law Quizzes",
    ],
    link: "/quiz", // Add your custom link here
  },
  {
    title: "3D Cases",
    desc: "Learn with immersive stories",
    features: [
      "Immersive Stories",
      "3D Visualizations",
      "Law and Ethics Awareness",
    ],
    link: "stories", // Add your custom link here
  },
  {
    title: "Mentoring",
    desc: "Take guidance from mentors and AI chatbots",
    features: [
      "AI Powered Chatbots",
      "Guidance from Mentors",
      "Access to Emergency calls",
    ],
    link: "/mentor", // Add your custom link for Mentoring
  },
];

export const quizOptions = [
  {
    title: "Law and Crimes Quiz",
    desc: "Test your knowledge on laws and regulations in Indian Penal Code",
    features: [
      "Multiple choice questions",
      "Time-bound quizzes",
      "Score tracking",
    ],
    image: quiz1, // Path to your image
    link: "/pages/law-quiz.jsx",
  },
  {
    title: "Traffic Safety Rules Quiz",
    desc: "Check your awareness of traffic rules with examples and conditions",
    features: [
      "Interactive questions",
      "Scenario-based situations",
      "Real-time feedback",
    ],
    image: quiz2, // Path to your image
    link: "/quizgame",
  },
  {
    title: "Ethics and Laws Quiz",
    desc: "Challenge your understanding of ethical practices",
    features: [
      "Thought-provoking questions",
      "Real-world examples",
      "Scored at the end",
    ],
    image: quiz3, // Path to your image
    link: "/pages/ethics-quiz.jsx",
  },
  {
    title: "Child Labouring Quiz",
    desc: "Challenge your understanding of Child Labour",
    features: [
      "Thought-provoking questions",
      "Real-world examples",
      "Scored at the end",
    ],
    image: quiz4, // Path to your image
    link: "/pages/ethics-quiz.jsx",
  },
];



export const resourcesLinks = [
  { href: "#", text: "Getting Started" },
  { href: "#", text: "Documentation" },
  { href: "#", text: "Tutorials" },
  { href: "#", text: "API Reference" },
  { href: "#", text: "Community Forums" },
];

export const platformLinks = [
  { href: "#", text: "Features" },
  { href: "#", text: "Supported Devices" },
  { href: "#", text: "System Requirements" },
  { href: "#", text: "Downloads" },
  { href: "#", text: "Release Notes" },
];

export const communityLinks = [
  { href: "#", text: "Events" },
  { href: "#", text: "Meetups" },
  { href: "#", text: "Conferences" },
  { href: "#", text: "Hackathons" },
  { href: "#", text: "Jobs" },
];
