import './App.scss';
import './Mobile.scss'
import Board from './components/Board';
import Input from './components/Input';
import Reset from './components/Reset';
import Results from './components/Results';
import Tips from './components/Tips';

const viewResults = [
  <Results />,
  <Reset />
]

const view = [
  <section id='set-data'>
    <Input id='bill' name='Bill' type='number' icon='Attach_Money' />
    <Tips name='Select Tip %' />
    <Input id='numberOfPeople' name='Number of People' type='number' icon='Person' placeholder='Minimun of 1' />
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
