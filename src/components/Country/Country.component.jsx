import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Table from 'react-bootstrap/Table';

class Country extends React.Component{

    constructor(props){
        super(props);
        this.state={
            data: {
                corona:{
          
                }
            },

        };
    }

    componentDidMount() {
        //var cors = require('cors')
        console.log("sdddd");
        fetch('http://localhost:8080/country',{
          mode: 'cors',
          headers: {
            'Access-Control-Allow-Origin':'*'
          }
        })
          .then(response => response.json())
          .then(data => this.setState({ data }));
          console.log(this.state.data,{});
          console.log(this.data);
      }

    render(){
        const m = Array.from(this.state.data);

        return <div>
                        <Table striped bordered hover size="sm" variant="dark">
                            <thead><tr><th>Country</th><th>Cases</th></tr></thead>
                            <tbody>
                        { m.map((item, i) => {
                            console.log(item.country);
                            return <tr className='item'>
                                       
                                        <td>{item.country}</td>
                                       
                            <td>{item.number}</td>
                            </tr>
                            })
                        }
                        </tbody>
                        </Table>
                </div>
    
    }

}
export default Country;