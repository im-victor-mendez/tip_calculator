import './App.scss';
import Board from './components/Board';
import Input from './components/Input';
import Results from './components/Results';
import Tips from './components/Tips';

const viewResults = [
  <Results />
]

const view = [
  <section id='setData'>
    <Input name='Bill' type='number' icon='Attach_Money' />
    <Tips name='Select Tip %' />
    <Input name='Number of People' type='number' icon='Person' />
  </section>,
  <Board id='results-board' view={viewResults} />
]

function App() {
  return (
    <section className="App">
      <div id='title'>
        <h1>SPLI</h1>
        <h1>TTER</h1>
      </div>
      <Board id='app-board' view={view} />
    </section>
  );
}

export default App;
