

 import './App.css';
 import Grid from './components/Grid';
 import Keyboard from './components/Keyboard';


 function App() {
  return (

    //Starts with title of game
    <div className="App">

        <h1>Wordle</h1>  
        <Grid />
        <Keyboard />
    
    </div>
  );

}

export default App;
