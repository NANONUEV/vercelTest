import React from 'react'

import { Player } from '@lottiefiles/react-lottie-player'
import PropTypes from 'prop-types'

import './review-button1.css'

const ReviewButton1 = (props) => {
  return (
    <div className={`review-button1-container ${props.rootClassName} `}>
      <Player
        src="https://assets3.lottiefiles.com/packages/lf20_EU5QSFMWQ7.json"
        loop
        speed="1"
        autoplay
        background="transparent"
        className="review-button1-lottie-node"
      ></Player>
    </div>
  )
}

ReviewButton1.defaultProps = {
  rootClassName: '',
}

ReviewButton1.propTypes = {
  rootClassName: PropTypes.string,
}

export default ReviewButton1
