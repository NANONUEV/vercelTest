import React from 'react'

import { Player } from '@lottiefiles/react-lottie-player'
import PropTypes from 'prop-types'

import './faceboook1.css'

const Faceboook1 = (props) => {
  return (
    <div className={`faceboook1-container ${props.rootClassName} `}>
      <Player
        src="https://assets5.lottiefiles.com/private_files/lf30_pb3we3yk.json"
        loop
        speed="1"
        autoplay
        background="transparent"
        className="faceboook1-lottie-node"
      ></Player>
    </div>
  )
}

Faceboook1.defaultProps = {
  rootClassName: '',
}

Faceboook1.propTypes = {
  rootClassName: PropTypes.string,
}

export default Faceboook1
