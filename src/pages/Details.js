import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";

const Details = () => {
  let { id } = useParams();
  const [details, setDetails] = useState({});
  const [itemData, setItemData] = useState({});
  let Navigate = useNavigate();

  const [User, setUser] = useState({}); //
  const token = localStorage.getItem("userToken");
  useEffect(() => {
    axios.get(`/reg/byId/${id}`).then((response) => {
      setDetails(response.data[0]);
    });
  }, []);

  const logOut = () => {
    localStorage.removeItem("userToken");
    Navigate("/");
  };
  const onChangeName = (value) => {
    setDetails({ ...details, name: value });
    console.log(value)
  };

  const onChangeEmail = (value) => {
    setDetails({ ...details, email: value });
  };
  const onChangeMobile = (value) => {
    setDetails({ ...details, phone: value });
  };

  const handleUpdate = async() => {
    debugger;
    let data = {
      UserName: details.name,
      UserPhone: details.phone,
      UserEmail: details.email,
    };
  


    await axios.put('/reg/update/${id}' ,data).then((response) => {
let data = response.data;
console.log(data);
    }).catch((error) => {
      alert('something went wrong')
    })
};
  
 
  return (
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
      <div>
        <div
          className="container rounded"
          style={{
            backgroundColor: "#E5E7E9",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            marginTop: "10em",
          }}
        >
          <div className="row">
            <div className="col-md-3 border-right">
              <div className="d-flex flex-column align-items-center text-center p-3 py-5" >
                <img
                  className="rounded-circle mt-5"
                  
                  width="150px"
                  src="https://st3.depositphotos.com/15648834/17930/v/600/depositphotos_179308454-stock-illustration-unknown-person-silhouette-glasses-profile.jpg"
                />
              </div>
            </div>
            <div className="col-md-6 border-right">
              <div className="p-10 py-5">
                <div className="d-flex justify-content-center align-items-center mb-3">
                  <h4 className="text-aling-center">User Profile</h4>
                </div>
                <div className="row mt-3">
                  <div className="col-md-12">
                    <label className="labels">Your Name:</label>
                    <br />
                    <input
                      defaultValue={details && details?.userName}
                      onChange={(e) => onChangeName(e.target.value)}
                    />
                  </div>
                  <div className="col-md-12">
                    <label className="labels">Your Email:</label>
                    <br />
                    <input
                      defaultValue={details && details?.userEmail}
                      onChange={(e) => onChangeEmail(e.target.value)}
                    />
                  </div>
                  <div className="col-md-12">
                    <label className="labels">Your Mobile no:</label>
                    <br />
                    <input
                      defaultValue={details && details?.userPhone}
                      onChange={(e) => onChangeMobile(e.target.value)}
                    />
                  </div>
                </div>
                <div className="mt-5 text-center">
                  <button
                    className="btn btn-primary profile-button"
                    type="button"
                    onClick={handleUpdate}
                  >
                    Update Profile
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Details;
