// import logo from './logo.svg';

 import './App.css';
 import Grid from './components/Grid';
 import Keyboard from './components/Keyboard';
 
// import Square from './components/Square';
// import Container from './components/Container'


 function App() {
  return (

    //Starts with title of game
    <div className="App">
      <h1>Wordle</h1>
      <Grid />
      <Keyboard />

      {/* <GameContainer />
      <Square />
      <Square />
      <Square />
      <Container /> */}

      
    </div>
  );

}

export default App;
