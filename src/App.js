import './App.scss';
import Board from './components/Board';

function App() {
  return (
    <section className="App">
      <div id='title'>
        <h1>SPLI</h1>
        <h1>TTER</h1>
      </div>
      <Board view={'Test'} />
    </section>
  );
}

export default App;
