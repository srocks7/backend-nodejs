import React, { Component } from 'react'

export default class App extends Component {
  constructor(){
    super();
    this.state={
      title : []
    }
  }
  componentDidMount(){
    fetch("/d/abc")
    .then(res=>res.json())
    .then(title => this.setState({title},function(){
      console.log(title)
    }));
  }
  render() {
    return (
      <div>
      <ul style={{listStyle:'none'}}>{this.state.title.map(title=>
     <li> {title.title}</li>
        )}</ul>
      </div>
    )
  }
}
