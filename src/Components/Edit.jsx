import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
const Edit = () => {

    const [id, setId] = useState(0);
    const [platform, setPlatform] = useState("");
    const [name, setName] = useState("");
    const [password, setPassword] = useState("")

    const navigate = useNavigate();

    useEffect(() => {
        setId(localStorage.getItem("id"));
        setPlatform(localStorage.getItem("platform"));
        setName(localStorage.getItem("name"));
        setPassword(localStorage.getItem("password"));
    }, [])

    const handleUpdate = (e) => {
        e.preventDefault();
        axios.put(`https://64202d3225cb65721043d01c.mockapi.io/crud-operations/${id}`,{
            platform: platform, name: name, password: password
        }).then(() => {
            navigate("/read")
        })
    }

  return (
    <>
    <h2 className='editheading'>
     Edit
    </h2>
    <hr/>
    <form>
   <div className="mb-3">
     <label  className="name form-label">Platform</label>
     <input type="text" className="Ctable form-control" 
     onChange={(e) => setPlatform(e.target.value)} 
      value={platform}/>
     </div>
 
   <div className="mb-3">
     <label className="name form-label">User Name</label>
     <input type="text" className="Ctable form-control"
     onChange={(e) => setName(e.target.value)}  value={name} />
   </div>
 
   <div className="mb-3">
     <label className="name form-label">Password</label>
     <input type="text" className="Ctable form-control" 
     onChange={(e) => setPassword(e.target.value)} 
    value={password}/>
   </div>
 <hr/>
 
 
   <button type="submit" className="btn btn-primary" 
   onClick={handleUpdate}>Update</button><hr/>
 </form>
    </>
  )
}

export default Edit