import React,{Component} from 'react';
import NavBar from './components/navbar'
import './App.css';
import Counters from "./components/counters"

//import Movies from "./components/movies"

// function App() {
//   return (
  
//     <main className="container">
//       <Movies/>
//     </main>
//   );
// }

// export default App;
//<main className="container"> <Counter/> </main>


class App extends Component {


  
  state={
    counters:[
     {id:1, value:0},
     {id:2, value:0},
     {id:3, value:0},
     {id:4, value:0}
    ]
} 


// need to work on this part a bit more, plumbing apparently working not sure why though.!!
handleIncrement=counter=>{
  console.log(counter, "plumbing check ")
  const counters=[...this.state.counters]
  const index = counters.indexOf(counter)
  counters[index]={...counter}
  counters[index].value++
  this.setState({counters})
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
    return ( 
      <React.Fragment>
      <NavBar/>
     
      <main className="container"> 
      <Counters 
      counters={this.state.counters}
      onReset={this.handleReset} onIncrement={this.handleIncrement} onhandleDelete={this.handleDelete}/> </main>
     
     </React.Fragment>
     
     );
  }
}
 
export default App;
