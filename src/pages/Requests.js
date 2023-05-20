import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

export default function Requests() {
  const [items, setItems] = useState([]);
  const [User, setUser] = useState({});
  let Navigate = useNavigate();
  const token = localStorage.getItem("userToken");
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
    axios.get(`/dash/item/${User.mail}`).then((response) => {
      setItems(response.data);
    });
  }, [User.mail]);

  const deleteItem = (id) => {
    axios.delete(`/dash/delete/${id}`).then((response) => {
      setItems(
        items.filter((val) => {
          return val.id != id;
        })
      );
    });
  };

  const logOut = () => {
    localStorage.removeItem("userToken");
    Navigate("/");
  };
  return (
    <>
      <div className="w3-bar w3-top w3-black w3-large" style={{ zIndex: 4 }}>
        <Link className="w3-bar-item w3-left" to={"/Home"}>
          Home
        </Link>
        <Link className="w3-bar-item w3-left" to={`/Details/byId/${User.id}`}>
          User Details
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

      <div style={{ padding: "100px 20x 300px 300px" }}>
        {items.map((value) => {
          return (
            <div className="card">
              <div className="card-header">Item</div>
              <div className="card-body" style={{ margin: "1em" }}>
                <h6 className="card-title">{value.newRequest}</h6>
                <button
                  onClick={() => deleteItem(value.id)}
                  className="btn btn-primary"
                >
                  Delete
                </button>
              </div>
            </div>
          );
        })}
      </div>

    </>
  
  );
}
