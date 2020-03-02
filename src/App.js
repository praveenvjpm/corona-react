import React, { Component } from 'react';
import './App.css';

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      data: {
        corona:{
          
        }
      },
    };
  }
  componentDidMount() {
    var cors = require('cors')
    
    fetch('http://localhost:8080/hello',{
      mode: 'cors',
      headers: {
        'Access-Control-Allow-Origin':'*'
      }
    })
      .then(response => response.json())
      .then(data => this.setState({ data }));
      console.log(this.state.data,{});
  }

  render(){
   // const d = {this.state.data};
      const m = Array.from(this.state.data);
      

    return <div>
      <table border="1">
        <tr><th>State</th><th>Country</th><th>Location</th><th>Cases</th></tr>
      { m.map((item, i) => {
          console.log(item.state);
          return <tr className='item'>
					<td>{item.state}</td>
					<td>{item.country}</td>
					<td>{item.corordinates}</td>
          <td>{item.number}</td>
          </tr>
        })
      }





</table>
    </div>;
  }

}

export default App;
