import React, { useEffect, useState } from 'react'
import { AgGridReact } from 'ag-grid-react'; 
import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-quartz.css";
import authfetch from '../axioshandler/interceptor';



export const GridData = () => {

  const [rowData, setRowData] = useState([]);

    const [colDefs] = useState([
      { field: 'Title' , filter: true },
      { field: 'First Nmae' },
      { field: 'Last Name' },
      { field: 'Email' },
      
    ]);
    
    useEffect(() => {     
  
      authfetch.get("/accounts").then((y) => {
  
        setRowData(y.rowData);
  
      });
  
    }, []);
  

    
  return (

    <div
    className={
      "ag-theme-quartz"
    }
    style={{ width: '100%', height: '100%' }}
  >
    <AgGridReact rowData={rowData} columnDefs={colDefs} />
  </div>
)
}

  
