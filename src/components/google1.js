import React from 'react'

import { Player } from '@lottiefiles/react-lottie-player'
import PropTypes from 'prop-types'

import './google1.css'

const Google1 = (props) => {
  return (
    <div className={`google1-container ${props.rootClassName} `}>
      <Player
        src="https://assets9.lottiefiles.com/private_files/lf30_29gwi53x.json"
        loop
        speed="1"
        autoplay
        background="transparent"
        className="google1-lottie-node"
      ></Player>
    </div>
  )
}

Google1.defaultProps = {
  rootClassName: '',
}

Google1.propTypes = {
  rootClassName: PropTypes.string,
}

export default Google1
