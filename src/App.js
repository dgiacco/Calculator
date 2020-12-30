/* eslint no-eval: 0 */
import React, { useState } from 'react'
import words from 'lodash.words'
import Functions from './components/Functions'
import MathOps from './components/MathOps'
import Numbers from './components/Numbers'
import Result from './components/Result'
import './App.css'

const App = () => {
    
    // stack: valor por defecto. setStack: funcion que modifica el valor.
    const [stack, setStack] = useState("")

    const [hasOperation, setHasOperation] = useState(false)

    const items = words(stack, /[^-^+^*^/]+/g)
    // (condicionChequeada) ? (resultadoSiEsTrue) : (resultadoSiEsFalse)
    const value = items.length > 0 ? items[items.length-1] : "0"

    return (
        <main className='react-calculator'>
            <Result value={ value }/>
            <Numbers onClickNumber={number => {
                setStack(`${stack}${number}`)
            }}/>
            <Functions 
                onContentClear={clear => {
                    setStack("")
            }}
                onDelete={() => {
                    if (stack.length > 0) {
                        const newStack = stack.substring(0, stack.length -1)
                        setStack(newStack)
                    }
                }} />
            <MathOps 
                onClickOperation={operation => {
                    const newStack = hasOperation ? eval(stack).toString() : stack
                    setHasOperation(true)
                    setStack(`${newStack}${operation}`)
                }}
                onClickEqual={() => {
                    setHasOperation(false)
                    setStack(eval(stack).toString())
                }} />           
        </main>
    )
}

export default App