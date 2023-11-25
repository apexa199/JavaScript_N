import { Employee } from "./data";

export default function Emp() {
    return (
        <div>{Employee.map((value) => {
            return (<><div>{value.id}. {value.name} <br></br> <b>Age = </b>{value.age} <img width={"200px"} src={value.image}/></div></>)
        })}</div>
    )
}

