import React from "react";
import { Link } from "react-router-dom";

const LandingPage = () => {
  return (
    <div className="flex items-center justify-center h-screen gap-2">
      <Link to="/login">
        <button className="bg-sky-500 hover:bg-sky-600 rounded-lg px-3 py-2">
          Login
        </button>
      </Link>

      <Link to="/register">
        <button className="bg-sky-500 hover:bg-sky-600 rounded-lg px-3 py-2">
          Register
        </button>
      </Link>
    </div>
  );
};

export default LandingPage;
