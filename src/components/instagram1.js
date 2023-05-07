import React from 'react'

import { Player } from '@lottiefiles/react-lottie-player'
import PropTypes from 'prop-types'

import './instagram1.css'

const Instagram1 = (props) => {
  return (
    <div className={`instagram1-container ${props.rootClassName} `}>
      <Player
        src="https://assets9.lottiefiles.com/private_files/lf30_f5ytlpiy.json"
        loop
        speed="1"
        autoplay
        background="transparent"
        className="instagram1-lottie-node"
      ></Player>
    </div>
  )
}

Instagram1.defaultProps = {
  rootClassName: '',
}

Instagram1.propTypes = {
  rootClassName: PropTypes.string,
}

export default Instagram1
