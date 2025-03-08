import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Login = () => {
  
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    setError("");

    if (!email || !password) {
      setError("Both fields are required");
      return;
    }

    try {
      const response = await fetch("https://recipe-application-r41c.onrender.com/user/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",

        },
        body: JSON.stringify({email, password }),
      });

      const data = await response.json();
      if (response.ok) {
        console.log("Login successful",data);
        localStorage.setItem("token", data.token);
        console.log(data.token)
        alert("login successfull");
        navigate("/");
      } else {
        setError(data.message || "Invalid email or password");
      }
    } catch (err) {
      setError("An error occurred. Please try again.");
      console.error("Error during login:", err);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg w-96">
        <div className="flex justify-center text-3xl mb-4">💬</div>
        <h2 className="text-2xl font-bold text-center">Welcome back!</h2>
        <p className="text-center text-gray-600">We're so excited to see you again!</p>

        {error && <p className="text-red-500 text-center mt-2">{error}</p>}

        <form onSubmit={handleLogin} className="space-y-4 mt-4">
          
          <div>
            <label className="block font-medium">Email Address</label>
            <input
              type="email"
              placeholder="Email Address..."
              className="w-full p-2 border rounded-lg focus:ring focus:ring-blue-300"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div>
            <label className="block font-medium">Password</label>
            <input
              type="password"
              placeholder="Password..."
              className="w-full p-2 border rounded-lg focus:ring focus:ring-blue-300"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <button type="submit" className="w-full bg-[#734060] text-white py-2 rounded-lg hover:bg-[#9333] transition">
            Log In
          </button>
        </form>

        <p className="text-center text-gray-600 mt-4">
          Need an account? <Link to="/register" className="text-[#734060] hover:underline">Register</Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
