import React from 'react'
import '../styles/Results.scss'

const results = [
    /*
    {
        name: '',
        id: '',
        subname: '',
        result: '(reduxStore)'
    }
    */
    {
        name: 'Tip Amount',
        id: 'tipAmount',
        subname: '/ person',
        result: '(reduxStore)'
    },
    {
        name: 'Total',
        id: 'total',
        subname: '/ person',
        result: '(reduxStore)'
    }
]

/* props = id, name, subname, result */
function Result(props) {
  return (
    <div id={`result-${props.id}`} className='result-div' >
        <div className='text'>
            <h1 id='name'>{props.name}</h1>
            <p id='subname'>{props.subname}</p>
        </div>
        <h2 id='result'>${props.result}</h2>
    </div>
  )
}

function Results() {
    return (
        <section id="results">
            {
                results.map(
                    result => <Result key={`key-Result-${result.name}`} id={result.id} name={result.name} subname={result.subname} result={result.result} />
                )
            }
        </section>
    )
}

export default Results