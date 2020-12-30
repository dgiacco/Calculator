import React from 'react'
import PropTypes from 'prop-types'

const result = ({value}) => (
    <div className="result">
        {value}
    </div>
)

result.propTypes = {
    value: PropTypes.string.isRequired
}

result.defaultProps = {
    value: '0'
}

export default result
