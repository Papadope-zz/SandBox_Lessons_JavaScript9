import React from 'react';

class Circle extends React.Component {

  constructor(){
    super();
    console.log("constructor()");
    this.state = { counter: 0 }
  }

  componentDidUpdate(){
    console.log("componentDidUpdate");
  }

  componentDidMount(){
    console.log("componentDidMount");
    fetch("https://restcountries.eu/rest/v2/name/greece")
    .then( res => res.json() )
    .then( data => this.setState({ counter: 10 }))
    .catch( err => console.log(err) );
  }

  // Arrow function to retain a 'this' binding to the Circle class object
  handleClick = ()=>{
    console.log( this.state.counter );
    this.setState({ counter: this.state.counter + 1 });
  }

  render(){
    return <p onClick={ this.handleClick }>Color: { this.props.color } | { this.state.counter }</p>
  }

}



export default Circle;