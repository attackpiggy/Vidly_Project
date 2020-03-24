import React from 'react';
import NavBar from './components/navbar'
import './App.css';
import Counter from "./components/counter"

//import Movies from "./components/movies"

// function App() {
//   return (
  
//     <main className="container">
//       <Movies/>
//     </main>
//   );
// }

// export default App;



class App extends Component {
  
  render() { 
    return ( 
      <React.Fragment>
      <NavBar/>
      <main className="container"> <Counter/> </main>
     
     
     </React.Fragment>
     
     );
  }
}
 
export default App;
