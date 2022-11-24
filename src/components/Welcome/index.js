import {Component} from 'react'

import './index.css'

class Welcome extends Component {
  SubscribeBtn = () => {
    const buttonEle = document.getElementById('btn')
    // buttonEle.textContent = 'Subscribed'

    if (buttonEle.textContent === 'Subscribed') {
      buttonEle.textContent = 'Subscribe'
    } else {
      buttonEle.textContent = 'Subscribed'
    }
  }

  render() {
    return (
      <div className="main-container">
        <h1 className="main-heading">Welcome</h1>
        <h2 className="head-2">Thank you! Happy Learning</h2>
        <button
          className="button-el"
          type="button"
          id="btn"
          onClick={this.SubscribeBtn}
        >
          Subscribe
        </button>
      </div>
    )
  }
}

export default Welcome
