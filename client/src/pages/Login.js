import { useState } from "react";
import axios from "axios";
import "../style/login.css";

const Login = () => {
  const [register, setRegister] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [submitText, setSubmitText] = useState("Login");

  const changeRegister = () => {
    setRegister(!register);
    setSubmitText(register ? "Login" : "Submit");
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (register && password !== confirmPassword) {
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
            changeRegister();
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

  return (
    <div className="main-pad">
      <div className="content-wrapper">
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="usernameInput">Username</label>
            <div>
              <input
                type="username"
                id="usernameInput"
                placeholder="Username"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
          </div>
          <div>
            <label htmlFor="emailInput">Email</label>
            <div>
              <input
                type="email"
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
                  id="confirmPasswordInput"
                  placeholder="Confirm Password"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                />
              </div>
            </div>
          )}
          <div className="flex-wrapper">
            <button type="button" onClick={changeRegister}>
              {register ? "Sign in." : "Sign Up"}
            </button>
            <button type="submit">{submitText}</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
