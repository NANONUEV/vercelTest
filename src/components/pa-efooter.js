import React from 'react'

import DangerousHTML from 'dangerous-html/react'
import PropTypes from 'prop-types'

import ReviewButton from './review-button'
import Faceboook from './faceboook'
import Instagram from './instagram'
import Google from './google'
import Twitter from './twitter'
import './pa-efooter.css'

const PAGEfooter = (props) => {
  return (
    <div className={`pa-efooter-container ${props.rootClassName} `}>
      <div className="pa-efooter-container01">
        <div className="pa-efooter-container02">
          <div className="pa-efooter-container03">
            <div>
              <DangerousHTML
                html={`<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3861.802548850011!2d121.04882269999999!3d14.5532811!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3397c8efd99aad53%3A0xb64b39847a866fde!2skodego!5e0!3m2!1sen!2sph!4v1680991754221!5m2!1sen!2sph" width="400" height="300" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>`}
              ></DangerousHTML>
            </div>
          </div>
          <div className="pa-efooter-container04">
            <span className="pa-efooter-text">
              © 2023 VETOPIA. Proudly created by Group 1
            </span>
            <div className="pa-efooter-container05">
              <div className="pa-efooter-container06">
                <ReviewButton rootClassName="review-button-root-class-name"></ReviewButton>
              </div>
              <div className="pa-efooter-container07">
                <div className="pa-efooter-container08">
                  <a
                    href="https://facebook.com"
                    target="_blank"
                    rel="noreferrer noopener"
                    className="pa-efooter-link"
                  >
                    <Faceboook
                      rootClassName="faceboook-root-class-name"
                      className="pa-efooter-component1"
                    ></Faceboook>
                  </a>
                </div>
                <div className="pa-efooter-container09">
                  <a
                    href="https://instagram.com"
                    target="_blank"
                    rel="noreferrer noopener"
                    className="pa-efooter-link1"
                  >
                    <Instagram
                      rootClassName="instagram-root-class-name"
                      className="pa-efooter-component2"
                    ></Instagram>
                  </a>
                </div>
              </div>
              <div className="pa-efooter-container10">
                <div className="pa-efooter-container11">
                  <a
                    href="https://google.com"
                    target="_blank"
                    rel="noreferrer noopener"
                    className="pa-efooter-link2"
                  >
                    <Google
                      rootClassName="google-root-class-name"
                      className="pa-efooter-component3"
                    ></Google>
                  </a>
                </div>
                <div className="pa-efooter-container12">
                  <a
                    href="https://twitter.com"
                    target="_blank"
                    rel="noreferrer noopener"
                    className="pa-efooter-link3"
                  >
                    <Twitter
                      rootClassName="twitter-root-class-name"
                      className="pa-efooter-component4"
                    ></Twitter>
                  </a>
                </div>
              </div>
            </div>
            <div className="pa-efooter-container13">
              <div className="pa-efooter-container14"></div>
              <div className="pa-efooter-container15">
                <span className="pa-efooter-text1 Footer">appointments</span>
                <div className="pa-efooter-container16">
                  <span className="footer_black1">mon - fri:</span>
                  <span className="pa-efooter-text3 footer11">
                    8:00 am - 6:00 pm
                  </span>
                </div>
                <div className="pa-efooter-container17">
                  <span className="footer_black1">sat:</span>
                  <span className="pa-efooter-text5 footer11">
                    8:00 am - 2:00 pm
                  </span>
                </div>
              </div>
              <div className="pa-efooter-container18">
                <span className="pa-efooter-text6 Footer">emergencies</span>
                <span className="pa-efooter-text7 footer11">
                  24 hours &amp; 7 days a week
                </span>
                <span className="footer_black1">(999) 999-9999</span>
              </div>
            </div>
          </div>
          <div className="pa-efooter-container19">
            <div className="pa-efooter-container20"></div>
          </div>
        </div>
      </div>
    </div>
  )
}

PAGEfooter.defaultProps = {
  rootClassName: '',
}

PAGEfooter.propTypes = {
  rootClassName: PropTypes.string,
}

export default PAGEfooter
