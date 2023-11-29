import React, { useState } from 'react';


export const DataMangment = () => {

    const[data,setData] = useState({
        firstName : "",
        lastName : "",
        address : {
            city : "",
            pincode : " ",
            state : ""
        }

    });

const [index,setIndex] = useState(-1);

const [multipleData,setMultipleData] = useState([])

const changeValue = (e) => {

    setData({...data,[e.target.name] : e.target.value})

}

const saveInfo = (e) => {
    
    e.preventDefault();
    
    let p =[...multipleData];

    if(index == -1)
    {
    p.push(data);
    }
    else
    p[index] = data; 

    setMultipleData(-1)
    setMultipleData(p);
}

const deleteInfo = (index) =>{

    let p = [...multipleData];
    p.splice(index,1);

    setMultipleData(p)
}

const editInfo = (index) => {

    let a = multipleData[index];

    setData({...a});
    setIndex(index);
}
  return (
    <div>
        <form onSubmit={saveInfo}>
            <input type='text' name='firstName' onChange={changeValue} value={data.firstName} /><br/><br/>
            <input type='text' name='lastName'  onChange={changeValue} value={data.lastName}/><br/><br/>
            <label name='address'>Address :</label>
           
            <select onChange={changeValue} value={data.address}>
               <option value="Vadodara">Vadodara</option>
                <option value="Pune">Pune</option>
                <option value="Banglore">Banglore</option>
            </select>
            <input type='number' name='address' onChange={changeValue} value={data.address.pincode} />
            <input type='text' name='address' onChange={changeValue} value={data.address.state} /><br/><br/>

            <input type='submit' value='save'/>
        </form>

        <table>
            {
                multipleData.map((v,index) => {

                    return(<tr><td>{v.firstName}</td>
                    <td>{v.lastName}</td>
                    <td>{v.address && v.address.map((multipleData) => (<td>{multipleData.city}</td>))}</td>
                    <td><button onClick={() => {deleteInfo(index)}}>Delete</button></td>
                    <td><button onClick={() => {editInfo(index)}}>Edit</button></td></tr>)
                })
            }
        </table>
    </div>
  )
}
