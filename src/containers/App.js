import React, { Component } from 'react'
import Button from '../components/Button'
import Image from '../components/Image'

export default class App extends Component {
  render(){
    return (
      <div>
        <h4>div element with text</h4>
        <div
          style={{
            background: '#eee',
            padding: '0.5em 1em',
            borderRadius: '2px',
          }}
          data-elementtiming={"hello-div"}
        >hello, learners</div>
        <h4>button element</h4>
        <Button
          onClick={() => alert('Button clicked!')}
        >Click me!</Button>
        <h4>image element</h4>
        <Image src="https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://d15cw65ipctsrr.cloudfront.net/a3/84f770789511e7bd35dd2b717c014a/Deep-learningheader.jpg?auto=format%2Ccompress&dpr=2" />
      </div>
    )
  }
}
