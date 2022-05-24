import logo from './logo.svg';
import './App.css';
//import Grid from './components/Grid';
import GameContainer from './components/GameContainer';
import Square from './components/Square';


 function App() {
  return (
    <div className="App">
      <GameContainer />
      <Square />
    </div>
  );


//   return (
//     <div grid = "Grid">
// < Grid />
//     </div>
    
//   );
}

export default App;
