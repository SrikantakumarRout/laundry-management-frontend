import axios from "axios";
import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
const Request = () => {
    const [User, setUser] = useState({});
    const [items, setItems] = useState([]);
    let navigate = useNavigate();
    useEffect(() => {
        axios.get("/reg/auth", {
          headers: {
            userToken : localStorage.getItem("userToken")
          },
        }).then((response) => {
          setUser(response.data);
        });
    }, []);
    
    useEffect(() =>{
      axios.get(`/dash/item/${User.mail}`).then((response) => {
        setItems(response.data);
      })

    }, [User.mail])

    const [itemName, setItemName] = useState('');
    const [number, setNumber] = useState('');
    const [msg, setMsg] = useState('');
    
    const deleteItem = (id) =>{
      axios.delete(`/dash/delete/${id}`)
      .then((response) => {
        setItems(
          items.filter((val) => {
            return val.id != id;
          })
        )
      })
    }


    const Request = () =>{
        axios.post('/dash', {
            userEmail : User.mail,
            newRequest : itemName+","+number
        }).then((response) => {
            setMsg(response.data.message);
        })
        document.getElementById("msg").innerHTML = msg;
        setTimeout(() => {
        document.getElementById("msg").innerHTML = "";
       
        },5000);
         navigate("/Home")
    }
  return (
    <div style={{padding:'10px 300px 300px'}}>
    <form className="justify-content-center align-items-center" style = {{padding :'10px 250px 20px', background:'lightblue', borderRadius:'20px'}}>
        <h3>Make Request</h3>
        <div className="form-group">
          <label>Item Name</label>
          <input onChange={(e) => {setItemName(e.target.value)}} type= "text" className="form-control" />
        </div>
        <div className="form-group">
          <label>No of Items</label>
          <select onChange={(e) => {setNumber(e.target.value)}} className="form-control">
            <option>0</option>
            <option>1</option>
            <option>2</option>
            <option>3</option>
            <option>4</option>
            <option>5</option>
          </select>
        </div>
        <button onClick={Request} style={{marginTop : '50px'}} type="button" className="btn btn-dark">Add</button>
        <p id="msg"></p>
    </form>
    
    {
      items.map((value) =>{
        return(
          <div className="card">
            <div className="card-header">
              Item
            </div>
          <div className="card-body">
            <h6 className="card-title">{value.newRequest}</h6>
            <button onClick={() => deleteItem(value.id)} className="btn btn-primary">Delete</button>
          </div>
        </div>
        )
      })
    }

  </div>
  

  );
};


export default Request;
