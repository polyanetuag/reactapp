import React from 'react'
import PropTypes from 'prop-types'

const Button = (props) => {
  return (
    <button style={{margin: props.margin, width: `${props.width}px`}}>{props.children}</button>
  )
}

Button.defaultProps = {
    margin: '10px',
}

Button.propTypes = {
    width: PropTypes.number.isRequired
}

export default Button