import React, { useState } from 'react';
import { MyMangment } from './Component/MyMangment';


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
            <input type='text' name='firstName' placeholder="Enter First Name" onChange={changeValue} value={data.firstName} /><br/><br/>
            <input type='text' name='lastName' placeholder="Enter Last Name" onChange={changeValue} value={data.lastName}/><br/><br/>
            <label name='address'>Address :</label>
           
            <select onChange={changeValue} name='address' value={data.address.city}>
            <option value="">City</option>
               <option value="Vadodara">Vadodara</option>
                <option value="Pune">Pune</option>
                <option value="Banglore">Banglore</option>
            </select>
            <input type='number' name='address'placeholder="Enter Pincode Number" onChange={changeValue} value={data.address.pincode} />
            <input type='text' name='address' placeholder="Enter State" onChange={changeValue} value={data.address.state} /><br/><br/>

            <input type='submit' value='save'/>
        </form>

        <MyMangment multipleData ={multipleData} 
        deleteInfo = {deleteInfo}
        editInfo = {editInfo}
        />
    </div>
  )
}
