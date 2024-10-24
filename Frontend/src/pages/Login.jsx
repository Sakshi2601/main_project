import { useState } from "react";
import axios from "axios";
import { toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import workImage from '../assets/work.jpeg'; // Make sure this path is correct

const Login = () => {
  const navigate = useNavigate();

  const [data, setData] = useState({
    email: '',
    password: '',
  });

  const loginUser = async (e) => {
    e.preventDefault();
    const { email, password } = data;
    try {
      const { data: resData } = await axios.post('/login', { email, password });
      if (resData.error) {
        toast.error(resData.error);
      } else {
        setData({ email: '', password: '' });
        navigate('/');
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="min-h-screen bg-black flex items-center justify-center">
      <div className="w-full max-w-md p-8 space-y-8 bg-neutral-900 border border-neutral-700 rounded-xl shadow-lg">
        <div className="flex justify-center">
          <img src={workImage} alt="Work" className="w-56 h-56 rounded-full object-cover mb-4" />
        </div>
        <h2 className="text-center text-4xl font-bold text-orange-500 mb-5">
          Login
        </h2>
        <form className="space-y-6" onSubmit={loginUser}>
          <div className="space-y-4">
            <div>
              <label htmlFor="email" className="sr-only">Email</label>
              <input 
                id="email" 
                name="email" 
                type="email" 
                required 
                className="appearance-none rounded-md relative block w-full px-4 py-3 border border-neutral-600 placeholder-gray-400 text-white bg-black focus:outline-none focus:ring-orange-500 focus:border-orange-500 sm:text-sm" 
                placeholder="Enter Email"
                value={data.email}
                onChange={(e) => setData({ ...data, email: e.target.value })}
              />
            </div>
            <div>
              <label htmlFor="password" className="sr-only">Password</label>
              <input 
                id="password" 
                name="password" 
                type="password" 
                required 
                className="appearance-none rounded-md relative block w-full px-4 py-3 border border-neutral-600 placeholder-gray-400 text-white bg-black focus:outline-none focus:ring-orange-500 focus:border-orange-500 sm:text-sm" 
                placeholder="Enter Password"
                value={data.password}
                onChange={(e) => setData({ ...data, password: e.target.value })}
              />
            </div>
          </div>

          <div>
            <button 
              type="submit" 
              className="w-full flex justify-center py-3 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-orange-600 hover:bg-orange-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500"
            >
              Login
            </button>
            
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;