import React, { Component } from 'react';
import counter from './Counter'



class Counters extends Component {
    
    render() { 
        return ( <div>
            <counter/>
            <counter/>
            <counter/>
            </div> );
    }
}
 
export default Counters; 