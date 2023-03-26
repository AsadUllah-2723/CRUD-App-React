import axios from 'axios'
import React, { useEffect, useState } from 'react'
import "./Style.css"
import {Link} from "react-router-dom"

const Read = () => {
    const [data, setData] = useState([])
    function getData () {
        axios.get('https://64202d3225cb65721043d01c.mockapi.io/crud-operations').then((res) => {
            console.log(res.data)
            setData(res.data)
        })
    }

    function handleDelete (id) {
      axios.delete(`https://64202d3225cb65721043d01c.mockapi.io/crud-operations/${id}`).then(() => {
        getData();
      })
    }

    const handleLocalStorage = (id, platform, name, password) => {
        localStorage.setItem("id", id);
        localStorage.setItem("platform", platform);
        localStorage.setItem("name", name);
        localStorage.setItem("password", password);
    }

   useEffect(() => {
        getData();
   }, [])
  return (
    <>
    <table className="table">
  <thead>
    <h1>DataBase</h1>
    <tr>
      <th scope="col">No.</th>
      <th scope="col">Platform</th>
      <th scope="col">User Name</th>
      <th scope="col">Password</th>
      <th scope="col">Update</th>
      <th scope="col">Remove</th>
    </tr>
  </thead>
  {
    data.map((eachData) => {
        return(
            <>
             <tbody>
    <tr>
      <th scope="row">{eachData.id}</th>
      <td>{eachData.platform}</td>
      <td>{eachData.name}</td>
      <td>{eachData.password}</td>
      <Link to= "/edit">
      <td><button type="button" className="button" 
        onClick={() => {
          handleLocalStorage(eachData.id, eachData.platform,eachData.name, eachData.password)
        }}>Edit</button>
      </td>
      </Link>
   
<td><button type="button" className="d-button" 
    onClick={() => handleDelete(eachData.id)}>Delete</button>
</td>
    </tr>
    
  </tbody>
            </>
            
        )
    } )
  }
</table>
<hr/>
<Link to="/"> <button className='database btn btn-primary'>
             Create</button> </Link> <hr/>
    </>
  )
}

export default Read