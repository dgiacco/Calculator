import React from 'react'
import PropTypes from 'prop-types'
import Button from './Button'

const MathOps = ({ onClickOperation, onClickEqual}) => (
    <section className="math-operations">
        <Button text='+' clickHandler={onClickOperation}/>
        <Button text='-' clickHandler={onClickOperation}/>
        <Button text='*' clickHandler={onClickOperation}/>
        <Button text='/' clickHandler={onClickOperation}/>
        <Button text='=' clickHandler={onClickEqual}/>
    </section>
)

MathOps.propTypes = {
    onClickOperation: PropTypes.func.isRequired,
    onClickEqual: PropTypes.func.isRequired
}

export default MathOps