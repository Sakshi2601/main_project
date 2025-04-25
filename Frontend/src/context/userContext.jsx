import axios from "axios";
import { createContext, useState, useEffect } from "react";

export const UserContext = createContext({});

export function UserContextProvider({ children }) {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const { data } = await axios.get('/profile'); // Ensure correct endpoint
        setUser(data); // Set user if logged in
      } catch (error) {
        console.error("User not logged in:", error);
        setUser(null);
      }
    };

    fetchUser();
  }, []); // Run only on mount

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
}
