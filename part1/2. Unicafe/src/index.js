import React, { useState } from 'react'
import ReactDOM from 'react-dom'

// Statistic
const Statistic = (props) => {
    return (
        <tr>
        <td>{props.title}:</td>
        <td>{props.stat}</td>
        </tr>
    )
}

// Button
const Button = (props) => {
    return (
        <button type="button" onClick={props.addFeedback}>{props.title}</button>
    )
}

// Statistics
const Statistics = (props) => {
    const bad = props.bad
    const good = props.good
    const neutral = props.neutral
    const all = bad + good + neutral
    const avrg = good - bad
    return (
        <div>
        <h2> statistics </h2>
        <table>
        <tbody>
        <Statistic title="good" stat={good}/>
        <Statistic title="neutral" stat={neutral}/>
        <Statistic title="bad" stat={bad}/>
        <Statistic title="average" stat={avrg / all}/>
        <Statistic title="Positive" stat={good / all + "%"}/>
        </tbody>
        </table>
        </div>
    )
}

// 'App'
const App = (props) => {
    const [good, setGood] = useState(0)
    const [neutral, setNeutral] = useState(0)
    const [bad, setBad] = useState(0)


    const addGood = () => {
        setGood(good + 1)
    }

    const addNeutral = () => {
        setNeutral(neutral + 1)
    }

    const addBad = () => {
        setBad(bad + 1)
    }

    function Feedback() {
        if (good > 0 || bad > 0 || neutral > 0) {
          return <Statistics good={good} neutral={neutral} bad={bad} />

        }
        return <h4>No feedback given</h4>
    }

    return (
        <div>
            <h1>
            Give feedback
            </h1>
            <Button addFeedback={addGood} title="good" />
            <Button addFeedback={addNeutral} title="neutral" />
            <Button addFeedback={addBad} title="bad" />
            <Feedback />
        </div>
    )
}




ReactDOM.render(<App />, document.getElementById('root'))