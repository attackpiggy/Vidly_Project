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
  
  render() { 
    return ( 
      <React.Fragment>
      <NavBar/>
     
      <main className="container"> <Counters/> </main>
     
     </React.Fragment>
     
     );
  }
}
 
export default App;
