import React, { useEffect, useState } from 'react'
import { AgGridReact } from 'ag-grid-react'; 
import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-quartz.css";
import authfetch from "../axios/intercepForm";



export const GridData = () => {

  const [data, setData] = useState([]);

    const [colm] = useState([
      { field: 'id' , headerName: 'Id' },
      { field: 'title' , headerName: 'Title' },
      { field: 'firstName',headerName: 'First Name'  },
      { field: 'lastName',headerName: 'Last Name' },
      { field: 'email' ,headerName: 'Email' },
    
      
    ]);
    
    useEffect(() => {

      authfetch.get("/accounts")
      .then(y => {
  
        setData(y.data)
  
      })
  
    },[])

    
  return (
    <div style={{ width: '100%', height: '100%' }}>
    <div
      style={{ width: '100%', height: '100%' }}
      className={
        "ag-theme-quartz"
      }>
    <AgGridReact rowData={data} columnDefs={colm} />
  </div>
  </div>
)
}