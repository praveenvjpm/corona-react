import React, { Component } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Table from 'react-bootstrap/Table';
import Breadcrumb from 'react-bootstrap/Breadcrumb'

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
    <Breadcrumb>
  <Breadcrumb.Item href="#">Home</Breadcrumb.Item>
  <Breadcrumb.Item href="https://getbootstrap.com/docs/4.0/components/breadcrumb/">
    Library
  </Breadcrumb.Item>
  <Breadcrumb.Item active>Data</Breadcrumb.Item>
</Breadcrumb>
    <div>
      <Table striped bordered hover size="sm" variant="dark">
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





</Table>
    </div>;
    </div>
  }

}

export default App;
