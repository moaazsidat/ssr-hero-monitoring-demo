
import React from 'react'

export default ({
  children,
  onClick = () => 'onClick',
  type = "",
  value = "",
  style = {
    fontSize: '0.875em',
    display: 'block',
    padding: '0.8em 1.5em',
    background: 'royalblue',
    border: '1px solid royalblue',
    borderRadius: '4px',
    color: '#fff',
  }
}) => (
  <button
    type={type}
    value={value}
    ref={(node) => this.buttonNode = node}
    onClick={() => onClick(this.buttonNode)}
    style={style}
    data-elementtiming="click-me-button"
  >
    {children}
  </button>
)
