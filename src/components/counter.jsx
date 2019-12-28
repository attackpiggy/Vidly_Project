import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';

class counter extends Component {
    state={
        count:0,
        
    }
    formatCount(){
        const {count} =this.state;
        return count===0 ? "Zero" :count
    }
    styles={
        fontSize:50,
        fontWeight:"bold"

    };
   
    render() { 
        return ( 

            <div>
                
                <span style={this.styles} className="badge badge-primary m-2">{this.formatCount()} </span> 
                <button style={this.styles}className="btn btn-secondary btn-sm">Increment</button>
            </div>
         );
    }
}
 
export default counter;