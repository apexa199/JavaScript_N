import React, { Component } from 'react'

export default class APIDisplayWithClass extends Component {

    state = {
        data : []
    }

    componentDidMount()
    {
        fetch("https://jsonplaceholder.typicode.com/posts")
        .then(y => y.json())
        .then(y =>{

            this.setState({...this.setState,data:y})
        })
    }
  render() {
    return (
      <table>{this.state.data.map((v) => {

        return(<tr><td>{v.userId}</td><td>{v.body}</td></tr>)
      })}

      </table>
    )
  }
}

