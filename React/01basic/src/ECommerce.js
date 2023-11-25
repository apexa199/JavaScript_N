import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { EDisplay } from './Edisplay';



export const ECommerce = () => {

    const [data, setState] = useState([])
    console.log(data);

    useEffect(() => {

        axios.get("https://fakestoreapi.com/products")
            .then(y => {
                setState(y.data);


            }).catch(y => {
                console.log(y)
            })

    }, [])

    return (
        <>
        {
             data.map((v) => {

            return (<EDisplay title={v.title} des={v.description}/>)
                })
            }
        </>
    )
}