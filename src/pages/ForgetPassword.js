import React, { useState, useEffect } from "react";
import errorMessages from "../utils/errorMessages";
import { Link, useNavigate } from "react-router-dom";
const ForgetPassword = () => {
  const [warnpassword, setwarnpassword] = useState(false);
  const [eye, seteye] = useState(true);
  const [eye1, seteye1] = useState(true);
  const [eye2, seteye2] = useState(true);
  const [password, setpassword] = useState("password");
  const [password1, setpassword1] = useState("password");
  const [password2, setpassword2] = useState("password");
  const [oldPassword, setOldPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [isConfirmPass, setIsConfirmPass] = useState(false);
  const [isNewPass, setIsNewPass] = useState(false);
  const [isOldPass, setIsOldPass] = useState(false);
  const [confirmPassword, setConfirmPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [type, settype] = useState(false);
  const [isError, setIsError] = useState(false);
  let navigate = useNavigate();
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
  const Eye2 = () => {
    if (password2 == "password") {
      setpassword2("text");
      seteye2(false);
      settype(true);
    } else {
      setpassword2("password");

      seteye2(true);
      settype(false);
    }
  };

  const onChangePassword = () => {
    setIsError(true);
    if (oldPassword == "") {
      alert(errorMessages.OLD_PASSWORD);
    } else if (oldPassword.length <= 7) {
      alert(errorMessages.PASSWORD_ALERT_MSG);
    } else if (newPassword == "") {
      alert(errorMessages.NEW_PASSWORD);
    } else if (newPassword.length <= 7) {
      alert(errorMessages.WRONG_NEW_PASSWORD);
    } else if (newPassword === oldPassword) {
      alert(errorMessages.PASSWORD_MISMATCH);
    } else if (confirmPassword == "") {
      alert(errorMessages.CONFIRM_PASSWORD);
    } else if (confirmPassword.length <= 7) {
      alert(errorMessages.CONFIRM_NEW_PASSWORD);
    } else if (confirmPassword === oldPassword) {
      alert(errorMessages.CONFIRM_PASSWORD_MISMATCH);
    } else if (newPassword !== confirmPassword) {
      alert(errorMessages.NEW_CONFIRM_PASSWORD_MISMATCH);
    } else {
      setIsError(false);
      alert('successfully changed password');
      navigate('/')
    }
  };

  const actionOnOldPasswordTextFieldClick = mPassword => {
    setErrorMessage('');
    setOldPassword(mPassword);
  };
  const actionOnNewPasswordTextFieldClick = value => {
    setErrorMessage('');
    setNewPassword(value);
  };
  const actionOnConfirmPasswordTextFieldClick = item => {
    setErrorMessage('');
    setConfirmPassword(item);
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
                          Change Password
                        </p>
                        <form className="mx-1 mx-md-4">
                          <div className="d-flex flex-row align-items-center mb-4">
                            <i
                              className="fas fa-key fa-lg me-3 fa-fw"
                              style={{ marginTop: "1.8em" }}
                            />
                            <div className="form-outline flex-fill mb-0">
                              <label
                                className="form-label"
                                htmlFor="form3Example4cd"
                              >
                                Old Password
                              </label>
                              <input
                                type={password}
                                id="form3Example4cd"
                                className="form-control"
                                placeholder="Enter Old password"
                                value={oldPassword}
                                onChange={(e)=>{
                                    actionOnOldPasswordTextFieldClick(e.target.value)
                                    setIsOldPass(true)
                                    setErrorMessage('')
                                }}
                              />
                            </div>
                            <i
                              onClick={Eye}
                              className={`fa ${
                                eye ? "fa-eye-slash" : "fa-eye"
                              }`}
                              style={{ marginTop: "1.8em", marginLeft: "-2em" }}
                            ></i>
                          </div>

                          <div className="d-flex flex-row align-items-center mb-4">
                            <i
                              className="fas fa-key fa-lg me-3 fa-fw"
                              style={{ marginTop: "1.8em" }}
                            />
                            <div className="form-outline flex-fill mb-0">
                              <label
                                className="form-label"
                                htmlFor="form3Example4cd"
                              >
                                New Password
                              </label>
                              <input
                                type={password1}
                                id="form3Example4cd"
                                className="form-control"
                                placeholder="Enter New Password password"
                                value={newPassword}
                                onChange={(e)=>{
                                    actionOnNewPasswordTextFieldClick(e.target.value)
                                    setIsNewPass(true)
                                    setErrorMessage('')

                                }}
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
                          <div className="d-flex flex-row align-items-center mb-4">
                            <i
                              className="fas fa-key fa-lg me-3 fa-fw"
                              style={{ marginTop: "1.8em" }}
                            />
                            <div className="form-outline flex-fill mb-0">
                              <label
                                className="form-label"
                                htmlFor="form3Example4cd"
                              >
                                Confirm New Password
                              </label>
                              <input
                                type={password2}
                                id="form3Example4cd"
                                className="form-control"
                                placeholder="Enter Confirm New Password password"
                                value={confirmPassword}
                                onChange={(e)=>{
                                    actionOnConfirmPasswordTextFieldClick(e.target.value)
                                    setIsConfirmPass(true)
                                    setErrorMessage('')
                                }}
                              />
                            </div>
                            <i
                              onClick={Eye2}
                              className={`fa ${
                                eye2 ? "fa-eye-slash" : "fa-eye"
                              }`}
                              style={{ marginTop: "1.8em", marginLeft: "-2em" }}
                            ></i>
                          </div>

                          <div className="d-flex justify-content-center mx-4 mb-3 mb-lg-4">
                            <button
                              type="button"
                              className="btn btn-primary btn-lg"
                              style={{ width: `25em`, marginLeft: "20px" }}
                              onClick={onChangePassword}
                            >
                              Change Password
                            </button>
                          </div>
                        </form>
                      </div>
                      <div className="col-md-10 col-lg-6 col-xl-7 d-flex align-items-center order-1 order-lg-2">
                        <img
                          src="https://img.freepik.com/premium-vector/two-steps-verification-illustration-flat-design-illustration_108061-442.jpg?w=996"
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

export default ForgetPassword;
