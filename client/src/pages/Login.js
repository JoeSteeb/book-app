import { useState } from "react";
import axios from "axios";

const Login = () => {
  const [register, setRegister] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [submitText, setSubmitText] = useState("Login");

  const handleSubmit = (event) => {
    event.preventDefault();
    if (confirmPassword && password !== confirmPassword) {
      console.log("Passwords Must Match");
      return;
    }

    if (register) {
      console.log("Registering:", { email, password, confirmPassword });
      axios
        .post("http://localhost:4000/auth/login", {
          email,
          password,
        })
        .then(
          (response) => {
            console.log(response);
          },
          (error) => {
            console.log(error);
          }
        );
    } else {
      console.log("Logging in:", { email, password });
      axios
        .post("http://localhost:4000/auth/login", {
          email,
          password,
        })
        .then(
          (response) => {
            console.log(response);
          },
          (error) => {
            console.log(error);
          }
        );
    }
  };

  const changeRegister = () => {
    setRegister(!register);
    setSubmitText(register ? "Login" : "Submit");
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="emailInput">Email</label>
        <div>
          <input
            type="email"
            className="form-control"
            id="emailInput"
            placeholder="name@example.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
      </div>
      <div>
        <label htmlFor="passwordInput">Password</label>
        <div>
          <input
            type="password"
            className="form-control"
            id="passwordInput"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
      </div>
      {register && (
        <div>
          <label htmlFor="confirmPasswordInput">Confirm Password</label>
          <div>
            <input
              type="password"
              className="form-control"
              id="confirmPasswordInput"
              placeholder="Confirm Password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
          </div>
        </div>
      )}
      <button type="submit">{submitText}</button>
      <button type="button" onClick={changeRegister}>
        {register ? "Already a user? Sign in." : "Sign Up"}
      </button>
    </form>
  );
};

export default Login;
