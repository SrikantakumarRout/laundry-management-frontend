import "./Login.css";
import axios from "axios";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import errorMessages from "../utils/errorMessages";
const Login = () => {
  var validate = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  const [Email, setEmail] = useState("");
  const [Password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [eye, seteye] = useState(true);
  const [password, setpassword] = useState("password");
  const [type, settype] = useState(false);
  let navigate = useNavigate();

  const Login = () => {
    var validate = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (Email === "") {
      alert(errorMessages.ENTER_EMAIL);
    } else if (!validate.test(Email)) {
      alert(errorMessages.EMAIL_IN_CORRECT_FORMAT);
    } else if (Password == "") {
      alert(errorMessages.ENTER_PASSWORD);
    } else if (Password.length <= 7) {
      alert(errorMessages.WRONG_PASSWORD);
    } else {
      axios
        .post("/reg/login", {
          userEmail: Email,
          userPassword: Password,
        })
        .then((response) => {
          if (response.data.error) {
            alert(response.data.error);
          } else {
            localStorage.setItem("userToken", response.data);
            navigate("/Home");
          }
        })
        .catch((error) => {
          console.log(error);
        });
    }
  };

  
  const Eye = () => {
    if (password == "password") {
      setpassword("text");

      seteye(false);
      settype(true);
    } else {
      setpassword("password");

      seteye(true);
      settype(false);
    }
  };

  return (
    <div>
      <section className="vh-100" style={{ backgroundColor: "#eee" }}>
        <div className="container h-100">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col-lg-12 col-xl-11">
              <div className="card text-black" style={{ borderRadius: "25px" }}>
                <div className="card-body p-md-5">
                  <div className="row justify-content-center">
                    <div className="col-md-10 col-lg-6 col-xl-5 order-2 order-lg-1">
                      <p className="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">
                        LogIn Page
                      </p>
                      <form className="mx-1 mx-md-4">
                        <div className="d-flex flex-row align-items-center mb-4">
                          <i
                            className="fas fa-envelope fa-lg me-3 fa-fw"
                            style={{ marginTop: "1.8em" }}
                          />
                          <div className="form-outline flex-fill mb-0">
                          <label
                              className="form-label"
                              htmlFor="form3Example3c"
                            >
                              Your Email
                            </label>
                            <input
                              onChange={(e) => {
                                setEmail(e.target.value);
                              }}
                              type="email"
                              id="form3Example3c"
                              className="form-control"
                              placeholder="Enter Your Email"
                            />
                         
                          </div>
                        </div>
                        <div className="d-flex flex-row align-items-center mb-4">
                          <i
                            className="fas fa-lock fa-lg me-3 fa-fw"
                            style={{ marginTop: "1.5em" }}
                          />
                          <div className="form-outline flex-fill mb-0">
                          <label
                              className="form-label"
                              htmlFor="form3Example4c"
                            >
                              Password
                            </label>
                            <input
                              onChange={(e) => {
                                setPassword(e.target.value);
                              }}
                              type={password}
                              id="form3Example4c"
                              className="form-control"
                              placeholder="Enter Your Password"
                            />
                         
                          </div>
                          <i
                              onClick={Eye}
                              className={`fa ${
                                eye ? "fa-eye-slash" : "fa-eye"
                              }`}
                              style={{ marginTop: "1.9em", marginLeft: "-2em" }}
                            ></i>
                        </div>

                        <div className="d-flex justify-content-center mx-4 mb-3 mb-lg-4">
                          <button
                            onClick={Login}
                            type="button"
                            className="btn btn-primary btn-lg"
                            style={{ width: `20em`, marginLeft: "20px" }}
                          >
                            LogIn
                          </button>
                        
                        </div>
                        <div  style={{marginBottom:'1em',}}>
                        <Link
                              to={"/ForgetPassword"}
                              style={{ textDecoration: "none",marginBottom:'1em !important' }}
                            >
                              {" "}
                            Forget Password ?
                            </Link>
                            </div>
                        <div
                          className="d-flex flex-row align-items-center mb-4"
                          style={{ marginLeft: "4em" }}
                        >
                          <label
                            className="form-label"
                            htmlFor="form3Example4c"
                          >
                            Don't have account ?
                            <Link
                              to={"/register"}
                              style={{ textDecoration: "none" }}
                            >
                              {" "}
                              Register Here
                            </Link>
                          </label>
                        </div>
                      </form>
                    </div>
                    <div className="col-md-10 col-lg-6 col-xl-7 d-flex align-items-center order-1 order-lg-2">
                      <img
                        src="https://img.freepik.com/free-vector/placeholder-concept-illustration_114360-4727.jpg?w=996&t=st=1684264072~exp=1684264672~hmac=514297ed9137f2fd50178d3984274f6342421b472398fb0b8d72528d200942ed"
                        className="img-fluid"
                        alt="Sample image"
                        style={{height:'90%'}}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Login;
