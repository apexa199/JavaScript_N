import React, { useEffect, useState } from 'react'
import Table from 'react-bootstrap/Table';
import authfetch from '../axioshandler/interceptor';

export const Display1 = () => {

  const[data,setData] = useState([]);

  const[islodded,setIsLodded] = useState(false);

  useEffect(() => {

    setIsLodded(true);

    authfetch.get("/accounts").then(y => {  
      
      setData(y.data);
      
      setIsLodded(false);      

  })
  },[])

  return (
    <Table striped bordered hover >
      <thead>
        <tr>
          <th>Title</th>
          <th>First Name</th>
          <th>Last Name</th>
          <th>Email</th>
        </tr>
      </thead>
      <tbody>
    {
      data.map((v,index) => {

        return(<tr>
          <td>{v.title}</td>
          <td>{v.firstName}</td>
          <td>{v.lastName}</td>
          <td>{v.email}</td>
        </tr>)
      })
    }
    
      </tbody>
    </Table>
  )
}
