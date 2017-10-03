
import React from 'react'

export default ({
  src,
  style = {
    display: 'block',
    width: '99%',
  },
  elementtiming,
}) => (
  <img
    alt="testing"
    src={src}
    style={style}
    data-elementtiming={elementtiming || "banner-image"}
  />
)
