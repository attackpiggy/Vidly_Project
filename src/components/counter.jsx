import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';

class counter extends Component {
    state={
        count:0,
        tags:['tag1','tag2','tag3']
    }
 
    render() {
        
        
        let classes="badge m2 badge-";
        classes+=(this.state.count ===0 ) ? "warning " : "primary"
        return ( 

            <div>
                
              
                <ul>
                     {this.state.tags.map(tag=><li key={tag}>{tag}</li>) }
                </ul>

            </div>
         );
    }
}
 
export default counter;