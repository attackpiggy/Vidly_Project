import React, { Component } from 'react';
import Counter from './counter'



class Counters extends Component {

   state={
       counters:[
        {id:1, value:0},
        {id:2, value:0},
        {id:3, value:0},
        {id:4, value:0}
       ]
   } 



   handleIncrement=counter=>{
     console.log(counter, "plumbing check ")
     const counters=[...this.state.counters]
     counter[0]={...counter}
     counters[0].value++
     console.log(this.state.counters[0])
   }

   handleDelete= counterId =>{
    //console.log("Testing Event handler", counterId)

    const counters=this.state.counters.filter(c=>c.id !== counterId)
    this.setState({counters})

   }

handleReset=()=>{
  const counters=this.state.counters.map(c=>{
    c.value=0
    return c
  })
  this.setState({counters})
}





    render() { 
        return ( <div>

          <button 
          onClick={this.handleReset}
          className="btn btn-primary btn-sm m-2">Reset Button</button>
          { this.state.counters.map(counter=> (<Counter 
          key={counter.id} 
          onDelete={this.handleDelete}
          onIncrement={this.handleIncrement}
          counter={counter}
          //value={counter.value} 
          //id={counter.id}
          
          />))}
            </div> );
    }
}
 
export default Counters; 