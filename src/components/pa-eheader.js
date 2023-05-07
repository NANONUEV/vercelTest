import React from 'react'

import PropTypes from 'prop-types'

import './pa-eheader.css'

const PAGEheader = (props) => {
  return (
    <header
      data-role="Accordion"
      className={`pa-eheader-header ${props.rootClassName} `}
    >
      <img
        alt={props.image_alt}
        src={props.image_src}
        className="pa-eheader-image"
      />
      <div className="pa-eheader-separator"></div>
      <nav className="pa-eheader-nav">
        <nav className="pa-eheader-nav1">
          <div
            data-thq="thq-dropdown"
            className="pa-eheader-thq-dropdown list-item"
          >
            <div
              data-thq="thq-dropdown-toggle"
              className="pa-eheader-dropdown-toggle"
            >
              <span className="pa-eheader-text">
                <span>the vetopia way</span>
                <br></br>
              </span>
            </div>
            <ul
              data-thq="thq-dropdown-list"
              className="pa-eheader-dropdown-list"
            >
              <li
                data-thq="thq-dropdown"
                className="pa-eheader-dropdown list-item"
              >
                <div
                  data-thq="thq-dropdown-toggle"
                  className="pa-eheader-dropdown-toggle01"
                >
                  <span className="pa-eheader-text03 footer_black_below">
                    {props.text1}
                  </span>
                </div>
              </li>
              <li
                data-thq="thq-dropdown"
                className="pa-eheader-dropdown01 list-item"
              >
                <div
                  data-thq="thq-dropdown-toggle"
                  className="pa-eheader-dropdown-toggle02"
                >
                  <span className="pa-eheader-text04 footer_black_below">
                    {props.text2}
                  </span>
                </div>
              </li>
              <li
                data-thq="thq-dropdown"
                className="pa-eheader-dropdown02 list-item"
              >
                <div
                  data-thq="thq-dropdown-toggle"
                  className="pa-eheader-dropdown-toggle03"
                >
                  <span className="pa-eheader-text05 footer_black_below">
                    <span className="footer_black_below">careers</span>
                    <br></br>
                  </span>
                </div>
              </li>
            </ul>
          </div>
          <div
            data-thq="thq-dropdown"
            className="pa-eheader-thq-dropdown1 list-item"
          >
            <div
              data-thq="thq-dropdown-toggle"
              className="pa-eheader-dropdown-toggle04"
            >
              <span className="pa-eheader-text08">
                <span>general practice</span>
                <br></br>
              </span>
            </div>
            <ul
              data-thq="thq-dropdown-list"
              className="pa-eheader-dropdown-list1"
            >
              <li
                data-thq="thq-dropdown"
                className="pa-eheader-dropdown03 list-item"
              >
                <div
                  data-thq="thq-dropdown-toggle"
                  className="pa-eheader-dropdown-toggle05"
                >
                  <span className="pa-eheader-text11 footer_black_below">
                    {props.text3}
                  </span>
                </div>
              </li>
              <li
                data-thq="thq-dropdown"
                className="pa-eheader-dropdown04 list-item"
              >
                <div
                  data-thq="thq-dropdown-toggle"
                  className="pa-eheader-dropdown-toggle06"
                >
                  <span className="pa-eheader-text12 footer_black_below">
                    {props.text4}
                  </span>
                </div>
              </li>
              <li
                data-thq="thq-dropdown"
                className="pa-eheader-dropdown05 list-item"
              >
                <div
                  data-thq="thq-dropdown-toggle"
                  className="pa-eheader-dropdown-toggle07"
                >
                  <span className="pa-eheader-text13 footer_black_below">
                    {props.text5}
                  </span>
                </div>
              </li>
              <li
                data-thq="thq-dropdown"
                className="pa-eheader-dropdown06 list-item"
              >
                <div
                  data-thq="thq-dropdown-toggle"
                  className="pa-eheader-dropdown-toggle08"
                >
                  <span className="pa-eheader-text14 footer_black_below">
                    {props.text6}
                  </span>
                </div>
              </li>
              <li
                data-thq="thq-dropdown"
                className="pa-eheader-dropdown07 list-item"
              >
                <div
                  data-thq="thq-dropdown-toggle"
                  className="pa-eheader-dropdown-toggle09"
                >
                  <span className="pa-eheader-text15 footer_black_below">
                    {props.text7}
                  </span>
                </div>
              </li>
              <li
                data-thq="thq-dropdown"
                className="pa-eheader-dropdown08 list-item"
              >
                <div
                  data-thq="thq-dropdown-toggle"
                  className="pa-eheader-dropdown-toggle10"
                >
                  <span className="pa-eheader-text16 footer_black_below">
                    {props.text8}
                  </span>
                </div>
              </li>
            </ul>
          </div>
          <span className="pa-eheader-text17 footer_black">{props.text}</span>
          <div
            data-thq="thq-dropdown"
            className="pa-eheader-thq-dropdown2 list-item"
          >
            <div
              data-thq="thq-dropdown-toggle"
              className="pa-eheader-dropdown-toggle11"
            >
              <span className="pa-eheader-text18">
                <span>resources</span>
                <br></br>
              </span>
            </div>
            <ul
              data-thq="thq-dropdown-list"
              className="pa-eheader-dropdown-list2"
            >
              <li
                data-thq="thq-dropdown"
                className="pa-eheader-dropdown09 list-item"
              >
                <div
                  data-thq="thq-dropdown-toggle"
                  className="pa-eheader-dropdown-toggle12"
                >
                  <span className="pa-eheader-text21 footer_black_below">
                    {props.text9}
                  </span>
                </div>
              </li>
              <li
                data-thq="thq-dropdown"
                className="pa-eheader-dropdown10 list-item"
              >
                <div
                  data-thq="thq-dropdown-toggle"
                  className="pa-eheader-dropdown-toggle13"
                >
                  <span className="pa-eheader-text22 footer_black_below">
                    {props.text10}
                  </span>
                </div>
              </li>
              <li
                data-thq="thq-dropdown"
                className="pa-eheader-dropdown11 list-item"
              >
                <div
                  data-thq="thq-dropdown-toggle"
                  className="pa-eheader-dropdown-toggle14"
                >
                  <span className="pa-eheader-text23 footer_black_below">
                    {props.text11}
                  </span>
                </div>
              </li>
              <li
                data-thq="thq-dropdown"
                className="pa-eheader-dropdown12 list-item"
              >
                <div
                  data-thq="thq-dropdown-toggle"
                  className="pa-eheader-dropdown-toggle15"
                >
                  <span className="pa-eheader-text24 footer_black_below">
                    {props.text12}
                  </span>
                </div>
              </li>
              <li
                data-thq="thq-dropdown"
                className="pa-eheader-dropdown13 list-item"
              >
                <div
                  data-thq="thq-dropdown-toggle"
                  className="pa-eheader-dropdown-toggle16"
                >
                  <span className="pa-eheader-text25 footer_black_below">
                    {props.text13}
                  </span>
                </div>
              </li>
            </ul>
          </div>
        </nav>
      </nav>
    </header>
  )
}

PAGEheader.defaultProps = {
  text11: 'review us',
  text13: 'contact',
  text1: 'our culture',
  rootClassName: '',
  text9: 'make an appointment',
  text6: 'spay & neuter',
  image_alt: 'logo',
  text7: 'teeth cleaning',
  text12: 'blog',
  text2: 'our team',
  text10: 'new client form',
  image_src:
    '/playground_assets/vetopia%20logo%20%5B350%20%C3%97%20100px%5D-1500h.png',
  text: '24/7 emergency',
  text8: 'grooming',
  text3: 'pet exams',
  text4: 'vaccinations',
  text5: 'surgery',
}

PAGEheader.propTypes = {
  text11: PropTypes.string,
  text13: PropTypes.string,
  text1: PropTypes.string,
  rootClassName: PropTypes.string,
  text9: PropTypes.string,
  text6: PropTypes.string,
  image_alt: PropTypes.string,
  text7: PropTypes.string,
  text12: PropTypes.string,
  text2: PropTypes.string,
  text10: PropTypes.string,
  image_src: PropTypes.string,
  text: PropTypes.string,
  text8: PropTypes.string,
  text3: PropTypes.string,
  text4: PropTypes.string,
  text5: PropTypes.string,
}

export default PAGEheader
