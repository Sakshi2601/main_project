import { Menu, X } from "lucide-react";
import { useState, useEffect } from "react";
import logo from "../assets/logo.png";
import { navItems } from "../constants";
import { Link, useNavigate } from "react-router-dom";
import axios from 'axios';

const Navbar = () => {
  const [mobileDrawerOpen, setMobileDrawerOpen] = useState(false);
  const [user, setUser] = useState(null); // State to hold the logged-in user
  const navigate = useNavigate();

  const toggleNavbar = () => {
    setMobileDrawerOpen(!mobileDrawerOpen);
  };

  // Fetch user data to check if logged in
  useEffect(() => {
    const fetchUserProfile = async () => {
      try {
        const { data } = await axios.get('/profile'); // Fetch profile from backend
        setUser(data);  // Set user if logged in, otherwise it's null
      } catch (error) {
        console.error("Error fetching user profile:", error);
      }
    };
    fetchUserProfile();
  }, []);

  // Handle logout
  const handleLogout = async () => {
    try {
      await axios.post('/logout'); // Logout from backend
      setUser(null);  // Clear user state
      navigate('/');  // Redirect to home or login
    } catch (error) {
      console.error("Error logging out:", error);
    }
  };

  return (
    <nav className="sticky top-0 z-50 py-3 backdrop-blur-lg border-b border-neutral-700/80">
      <div className="container px-4 mx-auto relative lg:text-sm">
        <div className="flex justify-between items-center">
          <div className="flex items-center flex-shrink-0">
            <img className="h-10 w-10 mr-2" src={logo} alt="Logo" />
            <span className="text-xl tracking-tight">
              <a href="/">Gamified Platform For Law Awareness</a>
            </span>
          </div>
          <ul className="hidden lg:flex ml-14 space-x-12">
            {navItems.map((item, index) => (
              <li key={index}>
                <a href={item.href}>{item.label}</a>
              </li>
            ))}
          </ul>
          <div className="hidden lg:flex justify-center space-x-12 items-center">
            {!user ? (
              <>
                <Link to="/login">
                  <a href="#" className="py-2 px-3 border rounded-md">
                    Sign In
                  </a>
                </Link>
                <Link to="/register">
                  <a
                    href="#"
                    className="bg-gradient-to-r from-orange-500 to-orange-800 py-2 px-3 rounded-md"
                  >
                    Create an account
                  </a>
                </Link>
              </>
            ) : (
              <>
                <Link to="/profile">
                  <button className="bg-gradient-to-r from-orange-500 to-orange-800 py-2 px-3 rounded-md">
                    Profile
                  </button>
                </Link>
                <button
                  onClick={handleLogout}
                  className="py-2 px-3 border rounded-md"
                >
                  Logout
                </button>
              </>
            )}
          </div>
          <div className="lg:hidden md:flex flex-col justify-end">
            <button onClick={toggleNavbar}>
              {mobileDrawerOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>
        {mobileDrawerOpen && (
          <div className="fixed right-0 z-20 bg-neutral-900 w-full p-12 flex flex-col justify-center items-center lg:hidden">
            <ul>
              {navItems.map((item, index) => (
                <li key={index} className="py-4">
                  <a href={item.href}>{item.label}</a>
                </li>
              ))}
            </ul>
            <div className="flex space-x-6">
              {!user ? (
                <>
                  <Link to="/login">
                    <a href="" className="py-2 px-3 border rounded-md">
                      Sign In
                    </a>
                  </Link>
                  <Link to="/register">
                    <a
                      href="#"
                      className="py-2 px-3 rounded-md bg-gradient-to-r from-orange-500 to-orange-800"
                    >
                      Create an account
                    </a>
                  </Link>
                </>
              ) : (
                <button
                  onClick={handleLogout}
                  className="py-2 px-3 rounded-md border"
                >
                  Logout
                </button>
              )}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
