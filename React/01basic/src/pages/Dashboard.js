import React, { useEffect, useState } from 'react'
import authfetch from "../axios/intercepForm";
import { Table } from 'react-bootstrap';

export const Dashboard = () => {

  const [data,setData] = useState([]);

  useEffect(() => {

    authfetch.get("/accounts")
    .then(y => {

      setData(y.data)

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
