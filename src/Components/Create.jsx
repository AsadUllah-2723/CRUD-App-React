import React, { useState } from 'react'
import axios from "axios"
import "./Style.css"
import { useNavigate } from 'react-router-dom'
import {Link} from "react-router-dom"

const Create = () => {

    const header = {"Access-Control-Allow-Origin": "*"};

    const [platform, setPlatform] = useState("");
    const [name, setName] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    const handleData = (e) => {
        console.log("clicke")
        e.preventDefault();
        axios.post(
            'https://64202d3225cb65721043d01c.mockapi.io/crud-operations',
            {platform: platform, name: name, password: password,},header).then(() => {
              navigate("/read");
            })

              
    }

  return (
   <>
  <div className="m-2">
  <h2 className='heading'>
    CREATE
   </h2>
   <hr></hr>
  <Link to="/read"><button className='database btn btn-primary'>
    DataBase</button></Link>
  <hr></hr>
  </div>

   <form>
  <div className="mb-3">
    <label  className="name form-label">Platform</label>
    <input type="text" className="Ctable form-control" 
    onChange={(e) => setPlatform(e.target.value)} />
  </div>

  <div className="mb-3">
    <label className="name form-label">User Name</label>
    <input type="text" className="Ctable form-control"
    onChange={(e) => setName(e.target.value)}  />
  </div>

  <div className="mb-3">
    <label className="name form-label">Password</label>
    <input type="text" className="Ctable form-control" 
    onChange={(e) => setPassword(e.target.value)} />
  </div>
<hr></hr>


  <button type="submit" className="btn btn-primary" 
  onClick={handleData}>Save</button>

 <hr></hr>
</form>
   </>
  )

}

export default Create