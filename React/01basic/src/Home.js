import React ,{useState} from 'react';
import t from './Data1';

export const Counter = () => {
    let [data, setData] = useState(0);

    const inc = () => {
    setData(data+1);
    }
  
    const dec = () => {
    setData(data-1);
    }
  
    const multi = () => {
    setData(data*2);
    }
  
    return (
      <>
  
      {data}
  
      <button onClick={inc}>+</button>
      <button onClick={dec}>-</button>
      <button onClick={multi}>*</button>
    
      <table>
        <tbody>
        {
          t.map((v,index)=>{
  
            return(<tr key={index}>
              <td>{v.id}</td>
              <td>{v.title}</td>
              <td><img width={'50px'} src={v.url}></img></td>
              <td><img width={'50px'} src ={v.thumbnailUrl}></img></td>
            </tr>)
  
          })
        }
        </tbody>
      </table>  </>
    )
  }
  
  
