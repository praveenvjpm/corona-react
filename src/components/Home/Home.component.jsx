import React from 'react';
import App from '../../App';
import Country from '../Country/Country.component';

class Home extends React.Component{
    constructor(){
        super();
    }

    render(){
        return <div>
               <App></App>
               <Country></Country>
            </div>
    }
}
export default Home;