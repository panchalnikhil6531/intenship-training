import React, { useState } from "react";

function Register() {

  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    mobile: ""
  });

  const [error, setError] = useState({});

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    let newError = {};

    if (formData.username === "") {
      newError.username = "Username is required";
    }

    if (formData.email === "") {
      newError.email = "Email is required";
    }

    if (formData.password === "") {
      newError.password = "Password is required";
    }

    if (formData.mobile === "") {
      newError.mobile = "Mobile is required";
    }

    setError(newError);

    if (Object.keys(newError).length === 0) {
      alert("Form Submitted");
    }
  };

  return (
    <div>

      <form onSubmit={handleSubmit}>

        <h1>Registration Form</h1>

        <input
          type="text"
          name="username"
          placeholder="Enter Username"
          onChange={handleChange}
        />
        <p style={{ color: "red" }}>{error.username}</p>

        <input
          type="email"
          name="email"
          placeholder="Enter Email"
          onChange={handleChange}
        />
        <p style={{ color: "red" }}>{error.email}</p>

        <input
          type="password"
          name="password"
          placeholder="Enter Password"
          onChange={handleChange}
        />
        <p style={{ color: "red" }}>{error.password}</p>

        <input
          type="number"
          name="mobile"
          placeholder="Enter Mobile Number"
          onChange={handleChange}
        />
        <p style={{ color: "red" }}>{error.mobile}</p>

        <button type="submit">Submit</button>

      </form>

    </div>
  );
}

export default Register;