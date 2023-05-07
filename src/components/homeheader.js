import React from 'react'

import PropTypes from 'prop-types'

import './homeheader.css'

const Homeheader = (props) => {
  return (
    <header
      data-role="Accordion"
      className={`homeheader-header ${props.rootClassName} `}
    >
      <img
        alt={props.image_alt}
        src={props.image_src}
        className="homeheader-image"
      />
      <div className="homeheader-separator"></div>
      <nav className="homeheader-nav">
        <nav className="homeheader-nav1">
          <div
            data-thq="thq-dropdown"
            className="homeheader-thq-dropdown list-item"
          >
            <div
              data-thq="thq-dropdown-toggle"
              className="homeheader-dropdown-toggle"
            >
              <span className="homeheader-text">
                <span>the vetopia way</span>
                <br></br>
              </span>
            </div>
            <ul
              data-thq="thq-dropdown-list"
              className="homeheader-dropdown-list"
            >
              <li
                data-thq="thq-dropdown"
                className="homeheader-dropdown list-item"
              >
                <div
                  data-thq="thq-dropdown-toggle"
                  className="homeheader-dropdown-toggle01"
                >
                  <span className="homeheader-text03 footer_black_below">
                    {props.text1}
                  </span>
                </div>
              </li>
              <li
                data-thq="thq-dropdown"
                className="homeheader-dropdown01 list-item"
              >
                <div
                  data-thq="thq-dropdown-toggle"
                  className="homeheader-dropdown-toggle02"
                >
                  <span className="homeheader-text04 footer_black_below">
                    {props.text2}
                  </span>
                </div>
              </li>
              <li
                data-thq="thq-dropdown"
                className="homeheader-dropdown02 list-item"
              >
                <div
                  data-thq="thq-dropdown-toggle"
                  className="homeheader-dropdown-toggle03"
                >
                  <span className="homeheader-text05 footer_black_below">
                    <span className="footer_black_below">careers</span>
                    <br></br>
                  </span>
                </div>
              </li>
            </ul>
          </div>
          <div
            data-thq="thq-dropdown"
            className="homeheader-thq-dropdown1 list-item"
          >
            <div
              data-thq="thq-dropdown-toggle"
              className="homeheader-dropdown-toggle04"
            >
              <span className="homeheader-text08">
                <span>general practice</span>
                <br></br>
              </span>
            </div>
            <ul
              data-thq="thq-dropdown-list"
              className="homeheader-dropdown-list1"
            >
              <li
                data-thq="thq-dropdown"
                className="homeheader-dropdown03 list-item"
              >
                <div
                  data-thq="thq-dropdown-toggle"
                  className="homeheader-dropdown-toggle05"
                >
                  <span className="homeheader-text11 footer_black_below">
                    {props.text3}
                  </span>
                </div>
              </li>
              <li
                data-thq="thq-dropdown"
                className="homeheader-dropdown04 list-item"
              >
                <div
                  data-thq="thq-dropdown-toggle"
                  className="homeheader-dropdown-toggle06"
                >
                  <span className="homeheader-text12 footer_black_below">
                    {props.text4}
                  </span>
                </div>
              </li>
              <li
                data-thq="thq-dropdown"
                className="homeheader-dropdown05 list-item"
              >
                <div
                  data-thq="thq-dropdown-toggle"
                  className="homeheader-dropdown-toggle07"
                >
                  <span className="homeheader-text13 footer_black_below">
                    {props.text5}
                  </span>
                </div>
              </li>
              <li
                data-thq="thq-dropdown"
                className="homeheader-dropdown06 list-item"
              >
                <div
                  data-thq="thq-dropdown-toggle"
                  className="homeheader-dropdown-toggle08"
                >
                  <span className="homeheader-text14 footer_black_below">
                    {props.text6}
                  </span>
                </div>
              </li>
              <li
                data-thq="thq-dropdown"
                className="homeheader-dropdown07 list-item"
              >
                <div
                  data-thq="thq-dropdown-toggle"
                  className="homeheader-dropdown-toggle09"
                >
                  <span className="homeheader-text15 footer_black_below">
                    {props.text7}
                  </span>
                </div>
              </li>
              <li
                data-thq="thq-dropdown"
                className="homeheader-dropdown08 list-item"
              >
                <div
                  data-thq="thq-dropdown-toggle"
                  className="homeheader-dropdown-toggle10"
                >
                  <span className="homeheader-text16 footer_black_below">
                    {props.text8}
                  </span>
                </div>
              </li>
            </ul>
          </div>
          <span className="homeheader-text17 footer_black">{props.text}</span>
          <div
            data-thq="thq-dropdown"
            className="homeheader-thq-dropdown2 list-item"
          >
            <div
              data-thq="thq-dropdown-toggle"
              className="homeheader-dropdown-toggle11"
            >
              <span className="homeheader-text18">
                <span>resources</span>
                <br></br>
              </span>
            </div>
            <ul
              data-thq="thq-dropdown-list"
              className="homeheader-dropdown-list2"
            >
              <li
                data-thq="thq-dropdown"
                className="homeheader-dropdown09 list-item"
              >
                <div
                  data-thq="thq-dropdown-toggle"
                  className="homeheader-dropdown-toggle12"
                >
                  <span className="homeheader-text21 footer_black_below">
                    {props.text9}
                  </span>
                </div>
              </li>
              <li
                data-thq="thq-dropdown"
                className="homeheader-dropdown10 list-item"
              >
                <div
                  data-thq="thq-dropdown-toggle"
                  className="homeheader-dropdown-toggle13"
                >
                  <span className="homeheader-text22 footer_black_below">
                    {props.text10}
                  </span>
                </div>
              </li>
              <li
                data-thq="thq-dropdown"
                className="homeheader-dropdown11 list-item"
              >
                <div
                  data-thq="thq-dropdown-toggle"
                  className="homeheader-dropdown-toggle14"
                >
                  <span className="homeheader-text23 footer_black_below">
                    {props.text11}
                  </span>
                </div>
              </li>
              <li
                data-thq="thq-dropdown"
                className="homeheader-dropdown12 list-item"
              >
                <div
                  data-thq="thq-dropdown-toggle"
                  className="homeheader-dropdown-toggle15"
                >
                  <span className="homeheader-text24 footer_black_below">
                    {props.text12}
                  </span>
                </div>
              </li>
              <li
                data-thq="thq-dropdown"
                className="homeheader-dropdown13 list-item"
              >
                <div
                  data-thq="thq-dropdown-toggle"
                  className="homeheader-dropdown-toggle16"
                >
                  <span className="homeheader-text25 footer_black_below">
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

Homeheader.defaultProps = {
  text13: 'contact',
  text12: 'blog',
  rootClassName: '',
  text: '24/7 emergency',
  text10: 'new client form',
  text3: 'pet exams',
  text4: 'vaccinations',
  text5: 'surgery',
  text8: 'grooming',
  text11: 'review us',
  image_alt: 'logo',
  text2: 'our team',
  text6: 'spay & neuter',
  text9: 'make an appointment',
  text7: 'teeth cleaning',
  text1: 'our culture',
  image_src:
    '/playground_assets/vetopia%20logo%20%5B350%20%C3%97%20100px%5D1-1500h.png',
}

Homeheader.propTypes = {
  text13: PropTypes.string,
  text12: PropTypes.string,
  rootClassName: PropTypes.string,
  text: PropTypes.string,
  text10: PropTypes.string,
  text3: PropTypes.string,
  text4: PropTypes.string,
  text5: PropTypes.string,
  text8: PropTypes.string,
  text11: PropTypes.string,
  image_alt: PropTypes.string,
  text2: PropTypes.string,
  text6: PropTypes.string,
  text9: PropTypes.string,
  text7: PropTypes.string,
  text1: PropTypes.string,
  image_src: PropTypes.string,
}

export default Homeheader
