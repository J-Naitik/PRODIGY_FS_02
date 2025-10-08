import React, { useState } from "react";

const AdminLogin = ({ onLogin }) => {
  const [isRegistering, setIsRegistering] = useState(false);
  const [credentials, setCredentials] = useState({ username: "", password: "" });
  const [registeredAdmins, setRegisteredAdmins] = useState([
    { username: "admin", password: "1234" }, // default admin
  ]);
  const [error, setError] = useState("");
  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setError("");
    setMessage("");

    if (isRegistering) {
      // Check if username already exists
      const exists = registeredAdmins.some(
        (admin) => admin.username === credentials.username
      );
      if (exists) {
        setError("Username already exists");
        return;
      }

      // Add new admin
      setRegisteredAdmins([...registeredAdmins, credentials]);
      setMessage("Registration successful! You can now log in.");
      setIsRegistering(false);
      setCredentials({ username: "", password: "" });
    } else {
      // Login mode
      const match = registeredAdmins.find(
        (admin) =>
          admin.username === credentials.username &&
          admin.password === credentials.password
      );
      if (match) {
        onLogin();
      } else {
        setError("Invalid username or password");
      }
    }
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        background: "#f3f4f6",
      }}
    >
      <form
        onSubmit={handleSubmit}
        style={{
          background: "#fff",
          padding: "25px",
          borderRadius: "12px",
          boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
          width: "320px",
        }}
      >
        <h2 style={{ marginBottom: "15px", textAlign: "center" }}>
          {isRegistering ? "Admin Register" : "Admin Login"}
        </h2>

        {error && <p style={{ color: "red", fontSize: "0.9rem" }}>{error}</p>}
        {message && <p style={{ color: "green", fontSize: "0.9rem" }}>{message}</p>}

        <input
          type="text"
          name="username"
          placeholder="Username"
          value={credentials.username}
          onChange={handleChange}
          required
          style={{
            width: "100%",
            padding: "10px",
            marginBottom: "10px",
            borderRadius: "8px",
            border: "1px solid #ccc",
          }}
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={credentials.password}
          onChange={handleChange}
          required
          style={{
            width: "100%",
            padding: "10px",
            marginBottom: "10px",
            borderRadius: "8px",
            border: "1px solid #ccc",
          }}
        />
        <button
          type="submit"
          style={{
            width: "100%",
            padding: "10px",
            borderRadius: "8px",
            border: "none",
            background: "#2563eb",
            color: "#fff",
            cursor: "pointer",
            marginBottom: "10px",
          }}
        >
          {isRegistering ? "Register" : "Login"}
        </button>

        <p style={{ textAlign: "center", fontSize: "0.9rem" }}>
          {isRegistering ? (
            <>
              Already have an account?{" "}
              <span
                style={{ color: "#2563eb", cursor: "pointer" }}
                onClick={() => {
                  setIsRegistering(false);
                  setError("");
                  setMessage("");
                }}
              >
                Login here
              </span>
            </>
          ) : (
            <>
              Don’t have an account?{" "}
              <span
                style={{ color: "#2563eb", cursor: "pointer" }}
                onClick={() => {
                  setIsRegistering(true);
                  setError("");
                  setMessage("");
                }}
              >
                Register here
              </span>
            </>
          )}
        </p>
      </form>
    </div>
  );
};

export default AdminLogin;
