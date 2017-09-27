
import React from 'react'

export default ({
  src,
  style = {
    display: 'block',
    width: '99%',
  }
}) => (
  <img
    alt="testing"
    src={src}
    style={style}
    data-elementtiming={'banner-image'}
  />
)
