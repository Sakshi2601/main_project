import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import axios from 'axios';
import {Toaster} from 'react-hot-toast';
import { UserContextProvider } from "../context/userContext";
import Profile from "./pages/Profile";
import Quiz from "./pages/Quiz";
import Mentor from "./pages/Mentor";
import QuizGame from "./pages/QuizGame";
import Stories from "./pages/Stories";

axios.defaults.baseURL = 'http://localhost:8000';
axios.defaults.withCredentials = true

const App = () => {
  return (
    <UserContextProvider>
      <Navbar />
      <Toaster position="bottom-right" toastOptions={{duration: 2000}} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/quiz" element={<Quiz />} />
        <Route path="/mentor" element={<Mentor />} />
        <Route path="/quizgame" element={<QuizGame />} />
        <Route path="/stories" element={<Stories />} />
      </Routes>
      <Footer />
    </UserContextProvider>
  );
};

export default App;
