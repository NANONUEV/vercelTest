import React from 'react'

import PropTypes from 'prop-types'

import './header.css'

const Header = (props) => {
  return (
    <header
      id="back to top"
      data-role="Accordion"
      className={`header-header ${props.rootClassName} `}
    >
      <img
        alt={props.image_alt}
        src={props.image_src}
        className="header-image"
      />
      <div className="header-separator"></div>
      <nav className="header-nav">
        <nav className="header-nav1">
          <div
            data-thq="thq-dropdown"
            className="header-thq-dropdown list-item"
          >
            <div
              data-thq="thq-dropdown-toggle"
              className="header-dropdown-toggle"
            >
              <span className="header-text">
                <span>the vetopia way</span>
                <br></br>
              </span>
            </div>
            <ul data-thq="thq-dropdown-list" className="header-dropdown-list">
              <li data-thq="thq-dropdown" className="header-dropdown list-item">
                <div
                  data-thq="thq-dropdown-toggle"
                  className="header-dropdown-toggle01"
                >
                  <span className="header-text03 footer_black_below">
                    {props.text1}
                  </span>
                </div>
              </li>
              <li
                data-thq="thq-dropdown"
                className="header-dropdown01 list-item"
              >
                <div
                  data-thq="thq-dropdown-toggle"
                  className="header-dropdown-toggle02"
                >
                  <span className="header-text04 footer_black_below">
                    {props.text2}
                  </span>
                </div>
              </li>
              <li
                data-thq="thq-dropdown"
                className="header-dropdown02 list-item"
              >
                <div
                  data-thq="thq-dropdown-toggle"
                  className="header-dropdown-toggle03"
                >
                  <span className="header-text05 footer_black_below">
                    <span className="footer_black_below">careers</span>
                    <br></br>
                  </span>
                </div>
              </li>
            </ul>
          </div>
          <div
            data-thq="thq-dropdown"
            className="header-thq-dropdown1 list-item"
          >
            <div
              data-thq="thq-dropdown-toggle"
              className="header-dropdown-toggle04"
            >
              <span className="header-text08">
                <span>general practice</span>
                <br></br>
              </span>
            </div>
            <ul data-thq="thq-dropdown-list" className="header-dropdown-list1">
              <li
                data-thq="thq-dropdown"
                className="header-dropdown03 list-item"
              >
                <div
                  data-thq="thq-dropdown-toggle"
                  className="header-dropdown-toggle05"
                >
                  <span className="header-text11 footer_black_below">
                    {props.text3}
                  </span>
                </div>
              </li>
              <li
                data-thq="thq-dropdown"
                className="header-dropdown04 list-item"
              >
                <div
                  data-thq="thq-dropdown-toggle"
                  className="header-dropdown-toggle06"
                >
                  <span className="header-text12 footer_black_below">
                    {props.text4}
                  </span>
                </div>
              </li>
              <li
                data-thq="thq-dropdown"
                className="header-dropdown05 list-item"
              >
                <div
                  data-thq="thq-dropdown-toggle"
                  className="header-dropdown-toggle07"
                >
                  <span className="header-text13 footer_black_below">
                    {props.text5}
                  </span>
                </div>
              </li>
              <li
                data-thq="thq-dropdown"
                className="header-dropdown06 list-item"
              >
                <div
                  data-thq="thq-dropdown-toggle"
                  className="header-dropdown-toggle08"
                >
                  <span className="header-text14 footer_black_below">
                    {props.text6}
                  </span>
                </div>
              </li>
              <li
                data-thq="thq-dropdown"
                className="header-dropdown07 list-item"
              >
                <div
                  data-thq="thq-dropdown-toggle"
                  className="header-dropdown-toggle09"
                >
                  <span className="header-text15 footer_black_below">
                    {props.text7}
                  </span>
                </div>
              </li>
              <li
                data-thq="thq-dropdown"
                className="header-dropdown08 list-item"
              >
                <div
                  data-thq="thq-dropdown-toggle"
                  className="header-dropdown-toggle10"
                >
                  <span className="header-text16 footer_black_below">
                    {props.text8}
                  </span>
                </div>
              </li>
            </ul>
          </div>
          <span className="header-text17 footer_black">{props.text}</span>
          <div
            data-thq="thq-dropdown"
            className="header-thq-dropdown2 list-item"
          >
            <div
              data-thq="thq-dropdown-toggle"
              className="header-dropdown-toggle11"
            >
              <span className="header-text18">
                <span>resources</span>
                <br></br>
              </span>
            </div>
            <ul data-thq="thq-dropdown-list" className="header-dropdown-list2">
              <li
                data-thq="thq-dropdown"
                className="header-dropdown09 list-item"
              >
                <div
                  data-thq="thq-dropdown-toggle"
                  className="header-dropdown-toggle12"
                >
                  <span className="header-text21 footer_black_below">
                    {props.text9}
                  </span>
                </div>
              </li>
              <li
                data-thq="thq-dropdown"
                className="header-dropdown10 list-item"
              >
                <div
                  data-thq="thq-dropdown-toggle"
                  className="header-dropdown-toggle13"
                >
                  <span className="header-text22 footer_black_below">
                    {props.text10}
                  </span>
                </div>
              </li>
              <li
                data-thq="thq-dropdown"
                className="header-dropdown11 list-item"
              >
                <div
                  data-thq="thq-dropdown-toggle"
                  className="header-dropdown-toggle14"
                >
                  <span className="header-text23 footer_black_below">
                    {props.text11}
                  </span>
                </div>
              </li>
              <li
                data-thq="thq-dropdown"
                className="header-dropdown12 list-item"
              >
                <div
                  data-thq="thq-dropdown-toggle"
                  className="header-dropdown-toggle15"
                >
                  <span className="header-text24 footer_black_below">
                    {props.text12}
                  </span>
                </div>
              </li>
              <li
                data-thq="thq-dropdown"
                className="header-dropdown13 list-item"
              >
                <div
                  data-thq="thq-dropdown-toggle"
                  className="header-dropdown-toggle16"
                >
                  <span className="header-text25 footer_black_below">
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

Header.defaultProps = {
  rootClassName: '',
  text5: 'surgery',
  text7: 'teeth cleaning',
  text6: 'spay & neuter',
  text8: 'grooming',
  text2: 'our team',
  text12: 'blog',
  text1: 'our culture',
  text9: 'make an appointment',
  text11: 'review us',
  text4: 'vaccinations',
  text13: 'contact',
  image_alt: 'logo',
  text: '24/7 emergency',
  image_src:
    '/playground_assets/vetopia%20logo%20%5B350%20%C3%97%20100px%5D1-1500h.png',
  text10: 'new client form',
  text3: 'pet exams',
}

Header.propTypes = {
  rootClassName: PropTypes.string,
  text5: PropTypes.string,
  text7: PropTypes.string,
  text6: PropTypes.string,
  text8: PropTypes.string,
  text2: PropTypes.string,
  text12: PropTypes.string,
  text1: PropTypes.string,
  text9: PropTypes.string,
  text11: PropTypes.string,
  text4: PropTypes.string,
  text13: PropTypes.string,
  image_alt: PropTypes.string,
  text: PropTypes.string,
  image_src: PropTypes.string,
  text10: PropTypes.string,
  text3: PropTypes.string,
}

export default Header
