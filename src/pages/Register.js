import axios from "axios";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import errorMessages from "../utils/errorMessages";
const Register = () => {
  const [Name, setName] = useState("");
  const [Email, setEmail] = useState("");
  const [Phone, setPhone] = useState("");
  const [Password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState('');
  const [isError, setIsError] = useState(false);

  const [eye1, seteye1] = useState(true);
 

  const [password1, setpassword1] = useState("password");

  const [type, settype] = useState(false);
  let navigate = useNavigate();

  const Register = () => {
    var mobileValidate =/^(\+\d{1,2}\s)?\(?\d{3}\)?[\s.-]?\d{3}[\s.-]?\d{4}$/;
    var validate = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (Name == '') {
     alert(errorMessages.ENTER_NAME);
    }else if (Email == '') {
     alert(errorMessages.ENTER_EMAIL);
    }else if (!validate.test(Email)) {
    alert(errorMessages.EMAIL_IN_CORRECT_FORMAT);
    }else if(Phone==''){
      alert(errorMessages.ENTER_MOBILE)
    }else if (!mobileValidate.test(Phone)) {
      alert(errorMessages.NUMBER_IN_CORRECT_FORMAT);
      }else if (Password == '') {
     alert(errorMessages.ENTER_PASSWORD);
    } else if (Password.length <= 7) {
     alert(errorMessages.PASSWORD_ALERT_MSG);
    } else {
      axios
        .post("/reg", {
          userName: Name,
          userEmail: Email,
          userPhone: Phone,
          userPassword: Password,
        })
        .then((response) => {
          alert(response.data.message);
          if (response.data.error) {
            alert(response.data.error);
          } else {
           
            navigate("/");
          }
        });
    }
  };
  const Eye1 = () => {
    if (password1 == "password") {
      setpassword1("text");

      seteye1(false);
      settype(true);
    } else {
      setpassword1("password");

      seteye1(true);
      settype(false);
    }
  };
  return (
    <div>
      <form>
        <section className="vh-100" style={{ backgroundColor: "#eee" }}>
          <div className="container h-100">
            <div className="row d-flex justify-content-center align-items-center h-100">
              <div className="col-lg-12 col-xl-11">
                <div
                  className="card text-black"
                  style={{ borderRadius: "25px" }}
                >
                  <div className="card-body p-md-5">
                    <div className="row justify-content-center">
                      <div className="col-md-10 col-lg-6 col-xl-5 order-2 order-lg-1">
                        <p className="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">
                          Sign up
                        </p>
                        <form className="mx-1 mx-md-4">
                          <div className="d-flex flex-row align-items-center mb-4">
                            <i className="fas fa-user fa-lg me-3 fa-fw" style={{marginTop:'1em'}}/>
                            <div className="form-outline flex-fill mb-0">
                            <label
                                className="form-label"
                                htmlFor="form3Example1c"
                              >
                                Your Name
                              </label>
                              <input
                                onChange={(e) => {
                                  setName(e.target.value);
                                }}
                                type="text"
                                id="form3Example1c"
                                className="form-control"
                                placeholder="Enter Your Name"
                              />
                             
                            </div>
                          </div>
                          <div className="d-flex flex-row align-items-center mb-4">
                            <i className="fas fa-envelope fa-lg me-3 fa-fw" style={{marginTop:'1em'}}/>
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
                            <i className="fas fa-lock fa-lg me-3 fa-fw"style={{marginTop:'1em'}} />
                            <div className="form-outline flex-fill mb-0">
                            <label
                                className="form-label"
                                htmlFor="form3Example4c"
                              >
                                Mobile
                              </label>
                              <input
                                onChange={(e) => {
                                  setPhone(e.target.value);
                                }}
                                type="tel"
                                id="form3Example4c"
                                className="form-control"
                                placeholder="Enter Your Mobile"
                              />
                             
                            </div>
                          </div>
                          <div className="d-flex flex-row align-items-center mb-4">
                            <i className="fas fa-key fa-lg me-3 fa-fw" style={{marginTop:'1em'}}/>
                            <div className="form-outline flex-fill mb-0">
                              
                            <label
                                className="form-label"
                                htmlFor="form3Example4cd"
                              >
                                Password
                              </label>
                              <input
                                onChange={(e) => {
                                  setPassword(e.target.value);
                                }}
                                type={password1}
                                id="form3Example4cd"
                                className="form-control"
                                placeholder="Enter Your Passsord"
                              />
                             
                            </div>
                            <i
                              onClick={Eye1}
                              className={`fa ${
                                eye1 ? "fa-eye-slash" : "fa-eye"
                              }`}
                              style={{ marginTop: "1.8em", marginLeft: "-2em" }}
                            ></i>
                          </div>

                          <div className="d-flex justify-content-center mx-4 mb-3 mb-lg-4">
                            <button
                              onClick={Register}
                              type="button"
                              className="btn btn-primary btn-lg"
                              style={{width:`25em`,marginLeft:'20px'}}
                            >
                              Register
                            </button>
                          </div>
                        </form>
                      </div>
                      <div className="col-md-10 col-lg-6 col-xl-7 d-flex align-items-center order-1 order-lg-2">
                        <img
                          src="https://img.freepik.com/free-vector/sign-up-concept-illustration_114360-7965.jpg?w=740&t=st=1684263942~exp=1684264542~hmac=ffd8bb33cb969562764cc18bc5066e57b5d3072b9c8742272de0d8da2f8176cf"
                          className="img-fluid"
                          alt="Sample image"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </form>
    </div>
  );
};

export default Register;
