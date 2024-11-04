import { useContext, useState, useEffect } from "react";
import { UserContext } from "../../context/userContext";
import axios from "axios";

const Profile = () => {
  const { user, setUser } = useContext(UserContext);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    dateOfBirth: "",
    interests: [],
    about: "",
    profilePicture: "",
  });

  const [imagePreview, setImagePreview] = useState(null);

  // Fetch user details from backend when component loads
  useEffect(() => {
    const fetchUserProfile = async () => {
      try {
        const { data } = await axios.get("/profile", { withCredentials: true });
        setUser(data); // Store user data in context
        setFormData({
          name: data.name || "",
          email: data.email || "",
          dateOfBirth: data.dateOfBirth ? data.dateOfBirth.split("T")[0] : "",
          interests: data.interests || [],
          about: data.about || "",
          profilePicture: data.profilePicture || "",
        });
        if (data.profilePicture) {
          setImagePreview(data.profilePicture); // Show the existing profile picture
        }
      } catch (error) {
        console.error("Error fetching profile data", error);
      }
    };
    
    fetchUserProfile();
  }, [setUser]);

  // Handle form input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  // Handle file changes for profile picture
  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setFormData((prevData) => ({
      ...prevData,
      profilePicture: file,
    }));
    setImagePreview(URL.createObjectURL(file));
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const formDataToSend = new FormData();
      formDataToSend.append("name", formData.name);
      formDataToSend.append("dateOfBirth", formData.dateOfBirth);
      formDataToSend.append("interests", formData.interests);
      formDataToSend.append("about", formData.about);
      if (formData.profilePicture instanceof File) {
        formDataToSend.append("profilePicture", formData.profilePicture);
      }

      const { data } = await axios.put("/profile", formDataToSend, {
        headers: { "Content-Type": "multipart/form-data" },
        withCredentials: true,
      });

      setUser(data); // Update the user context with new profile data
      alert("Profile updated successfully!");
    } catch (error) {
      console.error("Error updating profile", error);
    }
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gray-900">
      <div className="w-full max-w-3xl p-8 bg-gradient-to-r from-gray-800 to-black rounded-lg shadow-lg">
        <div className="flex justify-center">
          <div className="relative">
            <img
              src={imagePreview || "/default-profile.png"} // Use imagePreview for preview
              alt="Profile"
              className="w-32 h-32 rounded-full object-cover border-4 border-orange-500 shadow-md"
            />
          </div>
        </div>
        <form onSubmit={handleSubmit} className="mt-6 space-y-6">
          <div className="flex flex-col items-center space-y-2">
            <div className="text-white text-xl">{formData.name}</div>
            <div className="text-gray-400">{formData.email}</div>
          </div>
          <div className="space-y-4">
            <div>
              <label className="block text-sm text-gray-300">About:</label>
              <textarea
                name="about"
                value={formData.about}
                onChange={handleInputChange}
                className="w-full p-2 mt-1 bg-gray-800 border border-gray-600 rounded-md text-white"
              />
            </div>
            <div>
              <label className="block text-sm text-gray-300">Interests:</label>
              <select
                name="interests"
                multiple
                value={formData.interests}
                onChange={(e) =>
                  setFormData((prevData) => ({
                    ...prevData,
                    interests: [...e.target.selectedOptions].map(
                      (option) => option.value
                    ),
                  }))
                }
                className="w-full p-2 mt-1 bg-gray-800 border border-gray-600 rounded-md text-white"
              >
                <option value="Basic Societal Laws">Basic Societal Laws</option>
                <option value="All Constitutional Laws">
                  All Constitutional Laws
                </option>
                <option value="Judiciary">Judiciary</option>
                <option value="Offences and Punishment under IPC">
                  Offences and Punishment under IPC
                </option>
                <option value="BNS">BNS</option>
              </select>
            </div>
            <div>
              <label className="block text-sm text-gray-300">Date of Birth:</label>
              <input
                type="date"
                name="dateOfBirth"
                value={formData.dateOfBirth}
                onChange={handleInputChange}
                className="w-full p-2 mt-1 bg-gray-800 border border-gray-600 rounded-md text-white"
              />
            </div>
            <div>
              <label className="block text-sm text-gray-300">Profile Picture:</label>
              <input
                type="file"
                name="profilePicture"
                accept="image/png, image/jpeg"
                onChange={handleFileChange}
                className="w-full p-2 mt-1 bg-gray-800 border border-gray-600 rounded-md text-white"
              />
            </div>
          </div>
          <button
            type="submit"
            className="w-full py-3 mt-6 bg-gradient-to-r from-orange-500 to-orange-700 text-white rounded-md shadow-md hover:from-orange-600 hover:to-orange-800"
          >
            Update Profile
          </button>
        </form>
      </div>
    </div>
  );
};

export default Profile;
