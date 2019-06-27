import React, { useState } from 'react'
import ReactDOM from 'react-dom'

//  'Header'
const Header = (props) => {
    console.log(props)
    return (
        <h1>{props.course}</h1>
    )
}

//  'Part'
const Part = (props) => {
    console.log(props)
    return (
        <p>{props.name} {props.exercises}</p>
    )
}

//  'Content'
const Content = (props) => {
    console.log(props)
    return (
        <div>
            <Part name = {props.parts[0].name}
                  exercises = {props.parts[0].exercises}
            />
            <Part name = {props.parts[1].name}
                  exercises = {props.parts[1].exercises}
            />
            <Part name = {props.parts[2].name}
                  exercises = {props.parts[2].exercises}
            />
        </div>
    )
}

//  'Total'
const Total = (props) => {
    console.log(props)
    return (
        <div>
            <p>Number of exercises {
                props.total[0].exercises +
                props.total[1].exercises +
                props.total[2].exercises}
            </p>
        </div>
    )
}

// 'App'
const App = (props) => {

    const course = {
        name: 'Half Stack application development',
        parts:  [
            {
            name:       'Fundamentals of React',
            exercises:  10
            },
            {
            name:       'Using props to pass data',
            exercises:  7
            },
            {
            name: 'State of component',
            exercises:  14
            }
        ]
    }

    return (
        <div>
            <Header course={course.name} />
            <Content parts = {course.parts} />
            <Total total = {course.parts} />
        </div>
    )
}




ReactDOM.render(<App />, document.getElementById('root'))