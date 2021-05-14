import React from 'react'
import './Calculator.css'
import Display from './Display'
import Keypad from './Keypad'

function Calculator() {
    return (
        <div className="calculator">
            <Display />
            <Keypad />
        </div>   
    )
}

export default Calculator;