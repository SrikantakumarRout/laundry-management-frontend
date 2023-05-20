import React from "react";
import axios from "axios";
// Use effect  allows us to run a func immediately after the page rendered.
// UseState  is list containg all the data.
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
// const decode = require("jwt-decode");

const Home = () => {
  let Navigate = useNavigate();

  const [User, setUser] = useState({}); //
  const token = localStorage.getItem("userToken");
  // const data = decode(token);

  const [count, setCount] = useState();

  useEffect(() => {
    axios
      .get("/reg/auth", {
        headers: {
          userToken: localStorage.getItem("userToken"),
        },
      })
      .then((response) => {
        setUser(response.data);
      });
  }, []);

  useEffect(() => {
    axios.get(`/dash/count/${User.mail}`).then((response) => {
      setCount(response.data.count);
    });
  }, [count]);
  // we use this second parameter when a component mounts or only when a resource changes

  const logOut = () => {
    localStorage.removeItem("userToken");
    Navigate("/");
  };

  return (
    <div>
      <>
        <div className="w3-bar w3-top w3-black w3-large" style={{ zIndex: 4 }}>
          <Link
            className="w3-bar-item w3-left"
            to={"/Home"}
            style={{ textDecoration: "none" }}
          >
            Home
          </Link>
          <Link
            className="w3-bar-item w3-left"
            to={`/Details/byId/${User.id}`}
            style={{ textDecoration: "none" }}
          >
            Profile
          </Link>
          {!token || (
            <button
              onClick={logOut}
              style={{ width: "110px", height: "45px" }}
              className="w3-bar-item w3-right"
            >
              Logout
            </button>
          )}
        </div>
        {/* Sidebar/menu */}
        <nav
          className="w3-sidebar w3-collapse w3-white w3-animate-left"
          style={{ zIndex: 3, width: "300px" }}
          id="mySidebar"
        >
          <br />
          <div className="w3-container w3-row">
            <div className="w3-col s4">
              <img
                src={require("../images/Avatar.png")}
                alt="avatar"
                style={{ width: "46px" }}
              />
            </div>
            <div className="w3-col s8 w3-bar">
              <span>
                Welcome, <strong>{User.mail}</strong>
              </span>
              <br />
            </div>
          </div>
          <hr />
          <div className="w3-container">
            <h5>Dashboard</h5>
          </div>
          <div className="w3-bar-block">
            <a
              href="#requestStatus"
              className="w3-bar-item w3-button w3-padding"
            >
              <i className="fa fa-eye fa-fw" />
              &nbsp; Request Status
            </a>
            <a href="#pricing" className="w3-bar-item w3-button w3-padding">
              <i className="fa fa-users fa-fw" />
              &nbsp; Pricing
            </a>
            <a href="#aboutUs" className="w3-bar-item w3-button w3-padding">
              <i className="fa fa-bullseye fa-fw" />
              &nbsp; About us
            </a>
            <a href="#details" className="w3-bar-item w3-button w3-padding">
              <i className="fa fa-cog fa-fw" />
              &nbsp; Details
            </a>
            <br />
            <br />
            <Link to={"/Request"} style={{ width: "20px" }}>
              <button type="button" className="btn btn-dark">
                + Add Request
              </button>
            </Link>
          </div>
        </nav>

        {/* !PAGE CONTENT! */}
        <div
          className="w3-main"
          style={{ marginLeft: "300px", marginTop: "43px" }}
        >
          {/* Header */}
          <header className="w3-container" style={{ paddingTop: "22px" }}>
            <h5>
              <b>
                <i className="fa fa-dashboard" /> My Dashboard
              </b>
            </h5>
          </header>
          <div id="requestStatus" className="w3-row-padding w3-margin-bottom">
            <Link to={"/Requests"}>
              <div className="w3-quarter">
                <div className="w3-container w3-red w3-padding-16">
                  <div className="w3-left">
                    <i className="fas fa-sad-tear w3-xxxlarge" />
                  </div>
                  <div className="w3-right">
                    <h3>{count}</h3>
                  </div>
                  <div className="w3-clear" />
                  <h4>Requests</h4>
                </div>
              </div>
            </Link>
            <div className="w3-quarter">
              <div className="w3-container w3-blue w3-padding-16">
                <div className="w3-left">
                  <i className="fas fa-meh w3-xxxlarge" />
                </div>
                <div className="w3-right">
                  <h3>0</h3>
                </div>
                <div className="w3-clear" />
                <h4>Accept</h4>
              </div>
            </div>
            <div className="w3-quarter">
              <div className="w3-container w3-teal w3-padding-16">
                <div className="w3-left">
                  <i className="fas fa-laugh-beam w3-xxxlarge" />
                </div>
                <div className="w3-right">
                  <h3>0</h3>
                </div>
                <div className="w3-clear" />
                <h4>InProcess</h4>
              </div>
            </div>
            <div className="w3-quarter">
              <div className="w3-container w3-orange w3-text-white w3-padding-16">
                <div className="w3-left">
                  <i className="fas fa-kiss-wink-heart w3-xxxlarge" />
                </div>
                <div className="w3-right">
                  <h3>0</h3>
                </div>
                <div className="w3-clear" />
                <h4>Finished</h4>
              </div>
             
            </div>
          </div>
          <div id="pricing" className="w3-container">
            <h5>Laundry Price(Per Unit)</h5>
            <table className="w3-table w3-striped w3-bordered w3-border w3-hoverable w3-white">
              <tbody>
                <tr>
                  <td>Top Wear Laundry price</td>
                  <td>12</td>
                </tr>
                <tr>
                  <td>Bottom Wear Laundry price</td>
                  <td>22</td>
                </tr>
                <tr>
                  <td>Woolen Wear Laundry Price</td>
                  <td>20</td>
                </tr>
                <tr>
                  <td>Leather Wear Laundry Price</td>
                  <td>25</td>
                </tr>
                <tr>
                  <td>Other Price</td>
                  <td>Depend upon cloth type</td>
                </tr>
              </tbody>
            </table>
          </div>
          <hr />
          <div className="w3-container" id="aboutUs">
            <h5>About Us</h5>
            <div className="w3-row">
              <div className="w3-col m10 w3-container">
                "Cleansing removes the residual influence of earlier
                experience," Lee said in a statement. We are also familiar with
                the saying, "Cleanliness is next to Godliness."
              </div>
            </div>
            <div className="w3-row">
              <div
                style={{ display: " flex" }}
                className="w3-col m2 text-center"
              >
                <img
                  className="w3-rectangle"
                  src={require("../images/Laundry1.jpg")}
                  alt="1"
                  style={{ width: "400px", height: "200px" }}
                />
                <img
                  className="w3-rectangle"
                  src={require("../images/Laundry2.jpg")}
                  alt="2"
                  style={{ width: "500px", height: "200px" }}
                />
                <img
                  className="w3-rectangle"
                  src={require("../images/Laundry3.jpg")}
                  alt="3"
                  style={{ width: "400px", height: "200px" }}
                />
              </div>
            </div>
          </div>
          <br />
          <div id="details" className="w3-container w3-dark-grey w3-padding-32">
            <div className="w3-row">
              <div className="w3-container w3-third">
                <h5 className="w3-bottombar w3-border-green">Demographic</h5>
                <p>Language</p>
                <p>Country</p>
                <p>City</p>
              </div>
              <div className="w3-container w3-third">
                <h5 className="w3-bottombar w3-border-red">System</h5>
                <p>Browser</p>
                <p>OS</p>
                <p>More</p>
              </div>
              <div className="w3-container w3-third">
                <h5 className="w3-bottombar w3-border-orange">Target</h5>
                <p>Users</p>
                <p>Active</p>
                <p>Geo</p>
                <p>Interests</p>
              </div>
            </div>
          </div>
          {/* Footer */}
          <footer className="w3-container w3-padding-16 w3-light-blue">
            <p>@Copyright Devloped by srikanta rout</p>
          </footer>
          {/* End page content */}
        </div>
      </>
    </div>
  );
};

export default Home;
