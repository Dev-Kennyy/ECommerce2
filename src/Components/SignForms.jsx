import { useState } from "react";
import { BiMessage, BiUser } from "react-icons/bi";
import { FaLock } from "react-icons/fa";
import Inputs from "./Inputs";
import { useNavigate } from "react-router-dom";

function SignForms() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

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

    // Validation
    if (formData.password !== formData.confirmPassword) {
      setError("Passwords do not match ❌");
      return;
    }

    // Save user to localStorage
    const userData = {
      fullName: formData.fullName,
      email: formData.email,
      password: formData.password,
    };

    localStorage.setItem("user", JSON.stringify(userData));

    setSuccess("✅ Account created successfully!");

    // Reset form
    setFormData({
      fullName: "",
      email: "",
      password: "",
      confirmPassword: "",
    });

    // Redirect to homepage
    navigate("/");
  };

  return (
    <div className="flex items-center justify-center">
      <form
        onSubmit={handleSubmit}
        className="pt-9 flex flex-col gap-3 w-[264px]"
      >
        <Inputs
          type="text"
          placeholder="Full Name"
          icon={<BiUser />}
          value={formData.fullName}
          onChange={handleChange}
          name="fullName"
        />
        <Inputs
          type="email"
          placeholder="Your Mail"
          icon={<BiMessage />}
          value={formData.email}
          onChange={handleChange}
          name="email"
        />
        <Inputs
          type="password"
          placeholder="Your Password"
          icon={<FaLock />}
          value={formData.password}
          onChange={handleChange}
          name="password"
        />
        <Inputs
          type="password"
          placeholder="Password Again"
          icon={<FaLock />}
          value={formData.confirmPassword}
          onChange={handleChange}
          name="confirmPassword"
        />

        {/* Error or Success message */}
        {error && <p className="text-red-500 text-sm">{error}</p>}
        {success && <p className="text-green-500 text-sm">{success}</p>}

        <button
          type="submit"
          className="mt-4 bg-primary text-white py-2 rounded-md"
        >
          Sign Up
        </button>
      </form>
    </div>
  );
}

export default SignForms;
