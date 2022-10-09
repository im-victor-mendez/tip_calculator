import React from 'react'
import { useSelector } from 'react-redux'
import '../styles/Results.scss'

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
    const state = useSelector(state => state.tipValue)

    const tipAmount = state.tipAmount
    const totalAmount = state.totalAmount
    const bill = state.bill
    const tip = state.tip
    const numberOfPeople = state.numberOfPeople

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
            result: tipAmount
        },
        {
            name: 'Total',
            id: 'total',
            subname: '',
            result: totalAmount
        },
        {
            name: 'Bill',
            id: 'bill',
            subname: 'billReduxState',
            result: bill
        },
        {
            name: 'Tip',
            id: 'tip',
            subname: 'tipReduxState',
            result: tip
        },
        {
            name: 'Numer of People',
            id: 'numberOfPeople',
            subname: 'numberOfPeopleReduxState',
            result: numberOfPeople
        }
    ]

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