import React, { useEffect, useState } from 'react'

export const APIDisplay = () => {

    const[data,setData] = useState([])

    useEffect(() => {

        fetch("https://jsonplaceholder.typicode.com/posts")
        .then(y => y.json())
        .then(y => 
            setData(y))
    },[])

  return (
    <table>
        <tbody>{
            data.map((v)=> {

                return(<tr>
                    <td>{v.userId}</td><td>{v.title}</td>
                    </tr>)
            })
            }
        </tbody>
    </table>
  )
}

