import { useContext } from "react";
import video1 from "../assets/video1.mp4";
import video2 from "../assets/video2.mp4";
import { UserContext } from "../../context/userContext";
import { Link } from "react-router-dom";


const HeroSection = () => {
  const {user} = useContext(UserContext)
  return (

    <div id="main" className="flex flex-col items-center mt-6 lg:mt-20">

      <div>
        {!!user && (<h1>Welcome {user.name} !</h1>)}
      </div>

      <h1 className="text-4xl sm:text-6xl lg:text-7xl text-center tracking-wide">
        Gamified Platform for Law
        <span className="bg-gradient-to-r from-orange-500 to-red-800 text-transparent bg-clip-text">
          {" "}
          Awareness Using VR
        </span>
      </h1>
      <p className="mt-10 text-lg text-center text-neutral-500 max-w-4xl">
        Empower your creativity and bring your knowledge ideas to life with our
        intuitive law awareness platform. Get started today and turn your imagination
        into immersive reality!
      </p>
      <div className="flex justify-center my-10">
        <Link to='/login'>
        <a
          href="#"
          className="bg-gradient-to-r from-orange-500 to-orange-800 py-3 px-4 mx-3 rounded-md"
        >
          Start for free
        </a>
        </Link>
        <a href="#services" className="py-3 px-4 mx-3 rounded-md border">
          Explore
        </a>
      </div>
      <div className="flex mt-10 justify-center">
        <video
          autoPlay
          loop
          muted
          className="rounded-lg w-1/2 border border-orange-700 shadow-sm shadow-orange-400 mx-2 my-4"
        >
          <source src={video1} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <video
          autoPlay
          loop
          muted
          className="rounded-lg w-1/2 border border-orange-700 shadow-sm shadow-orange-400 mx-2 my-4"
        >
          <source src={video2} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
    </div>
  );
};

export default HeroSection;