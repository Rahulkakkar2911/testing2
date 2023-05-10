import Congrats from './Components/Congrats'
import GuessedWords from './Components/GuessedWords'
import './App.css';

function App() {
  return (
    <div className='container'>
      <h1>Jotto</h1>
      <Congrats success={false}/>
      <GuessedWords guessedWords={[{guessedWord:'train', letterMatchCount:3}]}/>
    </div>
  );
}

export default App;
