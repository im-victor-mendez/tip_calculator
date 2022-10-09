import './App.scss';
import Board from './components/Board';
import Input from './components/Input';
import Results from './components/Results';
import Tips from './components/Tips';

const viewResults = [
  <Results />
]

const view = [
  <Input name='Bill' type='number' icon='Attach_Money' />,
  <Tips />,
  <Input name='Number of People' type='number' icon='Person' />,
  <Board id='results-board' view={viewResults} />
]

function App() {
  return (
    <section className="App">
      <div id='title'>
        <h1>SPLI</h1>
        <h1>TTER</h1>
      </div>
      <Board view={view} />
    </section>
  );
}

export default App;
