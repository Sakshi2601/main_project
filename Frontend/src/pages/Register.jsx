import axios from "axios";
import { useState } from "react";
import { toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const navigate = useNavigate();
  const [data, setData] = useState({
    name: '',
    email: '',
    password: '',
  });

  const registerUser = async (e) => {
    e.preventDefault();
    const { name, email, password } = data;
    try {
      const { data: resData } = await axios.post('/register', { name, email, password });
      if (resData.error) {
        toast.error(resData.error);
      } else {
        setData({ name: '', email: '', password: '' });
        toast.success('Registration Successful. Welcome!');
        navigate('/login');
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="min-h-screen bg-black flex items-center justify-center">
      <div className="w-full max-w-md p-10 space-y-10 bg-neutral-900 border border-neutral-700 rounded-xl shadow-lg">
        <h2 className="text-center text-5xl font-bold text-orange-500">
          Register
        </h2>
        <form className="mt-8 space-y-6" onSubmit={registerUser}>
          <div className="rounded-md shadow-sm -space-y-px space-y-12">
            <div>
              <label htmlFor="name" className="sr-only">Name</label>
              <input 
                id="name" 
                name="name" 
                type="text" 
                required 
                className="appearance-none rounded-md relative block w-full px-4 py-3 border border-neutral-600 placeholder-gray-400 text-white bg-black focus:outline-none focus:ring-orange-500 focus:border-orange-500 sm:text-sm mb-4"
                placeholder="Enter Name"
                value={data.name}
                onChange={(e) => setData({ ...data, name: e.target.value })}
              />
            </div>
            <div>
              <label htmlFor="email" className="sr-only">Email</label>
              <input 
                id="email" 
                name="email" 
                type="email" 
                required 
                className="appearance-none rounded-md relative block w-full px-4 py-3 border border-neutral-600 placeholder-gray-400 text-white bg-black focus:outline-none focus:ring-orange-500 focus:border-orange-500 sm:text-sm mb-4"
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
                className="appearance-none rounded-md relative block w-full px-4 py-3 border border-neutral-600 placeholder-gray-400 text-white bg-black focus:outline-none focus:ring-orange-500 focus:border-orange-500 sm:text-sm mb-12"
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
              Register
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Register;
