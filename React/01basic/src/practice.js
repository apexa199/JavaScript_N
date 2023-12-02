import React, { useState } from 'react'

export const practice = () => {

   const[data,setData] = useState({
        firstName : "",
        lastName : "",
    })

    const [multipleData,setMultipleData] = useState([])

    const[index,setIndex] = useState(-1);

    const saveInfo =(e) => {

        e.preventDefault();
        let p = [...multipleData]
if(index == -1){        
    p.push(data);
        setMultipleData(p)}
        else{
            p[index] = data;

            setMultipleData(-1);
            setMultipleData(P)

        }
    }
    const changeValue =() =>{

        setData({...data,[e.target.name] : e.target.value});
    }
    const deleteInfo = (index) => {

        let a = [...multipleData];
        a.splice(index,1)
        setMultipleData(p)
    }

    const editInfo = (index) => {

    }
  return (
    <div>
        <form onSubmit={saveInfo}>
            <input type='text' name='firstName' onChange={changeValue} />
            <input type='text' name='lastname' onChange={changeValue} />
            <input type='submit' value="save"/>
        </form>

       <table>
        {
        multipleData.map((v,index) => {
            <tr><td>{v.firstName}</td><td>{v.lastName}</td>
            <td><button onClick={() => {deleteInfo(index)}}>Delete</button></td><button onClick={() => {editInfo(index)}}>Edit</button></tr>
        })
        }
       </table>
    </div>
  )
}

