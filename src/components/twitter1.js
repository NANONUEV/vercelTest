import React from 'react'

import { Player } from '@lottiefiles/react-lottie-player'
import PropTypes from 'prop-types'

import './twitter1.css'

const Twitter1 = (props) => {
  return (
    <div className={`twitter1-container ${props.rootClassName} `}>
      <Player
        src="https://assets2.lottiefiles.com/private_files/lf30_up3nxxtl.json"
        loop
        speed="1"
        autoplay
        background="transparent"
        className="twitter1-lottie-node"
      ></Player>
    </div>
  )
}

Twitter1.defaultProps = {
  rootClassName: '',
}

Twitter1.propTypes = {
  rootClassName: PropTypes.string,
}

export default Twitter1
