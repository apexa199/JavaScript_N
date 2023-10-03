import { Employee } from "./data";

export default function emp() {
    return (
        <div>{Employee.map((value) => {
            return (<><div>{value.id}. {value.name} <br></br> <b>Age = </b>{value.age} </div></>)
        })}</div>
    )
}

