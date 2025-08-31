import { useState } from "react";
import { BiMessage } from "react-icons/bi";
import Inputs from "./Inputs";
import { FaLock } from "react-icons/fa";
import { useNavigate } from "react-router-dom"; // ✅ import useNavigate

function LoginInput() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const navigate = useNavigate(); // ✅ initialize navigate

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setError("");
    setSuccess("");

    // get saved user from localStorage
    const savedUser = JSON.parse(localStorage.getItem("user"));

    if (!savedUser) {
      setError("❌ No account found. Please sign up first.");
      return;
    }

    // check credentials
    if (
      formData.email === savedUser.email &&
      formData.password === savedUser.password
    ) {
      setSuccess("✅ Login successful!");
      setFormData({ email: "", password: "" });

      // ✅ redirect user to homepage after login
      setTimeout(() => {
        navigate("/"); // Home route
      }, 1000);
    } else {
      setError("❌ Invalid email or password.");
    }
  };

  return (
    <div className="flex items-center justify-center">
      <form
        onSubmit={handleSubmit}
        className="pt-9 flex flex-col gap-3 w-[264px]"
      >
        <Inputs
          type="email"
          placeholder="Your Email"
          icon={<BiMessage />}
          value={formData.email}
          onChange={handleChange}
          name="email"
        />
        <Inputs
          type="password"
          placeholder="Password"
          icon={<FaLock />}
          value={formData.password}
          onChange={handleChange}
          name="password"
        />

        {/* UI message */}
        {error && <p className="text-red-500 text-sm">{error}</p>}
        {success && <p className="text-green-500 text-sm">{success}</p>}

        <button
          type="submit"
          className="mt-4 bg-primary text-white py-2 rounded-md"
        >
          Login
        </button>
      </form>
    </div>
  );
}

export default LoginInput;
