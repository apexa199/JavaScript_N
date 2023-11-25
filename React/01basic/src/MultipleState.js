import React, { useState } from 'react'

const MultipleState = () => {

    const[data,setData] = useState({fristName : "Apexa",lastName : "Kamani", fullName : ""});

    const fullName = () => {

        setData({...data ,fullName : data.fristName + " " + data.lastName})
    }

  return (
    <div>
        {data.fullName.split(" ").map((v) => v[0]).join(".")}
        {/* {data.fristName}
        {data.lastName} */}

        <button onClick={fullName}>Display</button>

    </div>
    
  )
}

export default MultipleState;