import React from 'react'
import { Link } from 'react-router-dom'

import { Player } from '@lottiefiles/react-lottie-player'
import DangerousHTML from 'dangerous-html/react'
import { Helmet } from 'react-helmet'

import ReviewButton from '../components/review-button'
import Faceboook from '../components/faceboook'
import Instagram from '../components/instagram'
import Google from '../components/google'
import Twitter from '../components/twitter'
import './emergency.css'

const Emergency = (props) => {
  return (
    <div className="emergency-container">
      <Helmet>
        <title>emergency - WD50_MP2</title>
        <meta property="og:title" content="emergency - WD50_MP2" />
        <meta
          property="og:image"
          content="https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/5df4fe0d-c56b-4e40-a2f8-62ae2ce60a05/4a54f7e3-642b-4238-85fb-fa6d9b3e4d19?org_if_sml=1"
        />
      </Helmet>
      <div className="emergency-container01">
        <div className="emergency-container02"></div>
        <div className="emergency-container03"></div>
        <header
          id="back to top"
          data-role="Accordion"
          className="emergency-header"
        >
          <Link to="/" className="emergency-navlink">
            <img
              alt="logo"
              src="f5ff3c79-8f1f-4681-b5b4-3554a3fc5335"
              className="emergency-image"
            />
          </Link>
          <div className="emergency-separator"></div>
          <nav className="emergency-nav">
            <nav className="emergency-nav1">
              <div
                data-thq="thq-dropdown"
                className="emergency-thq-dropdown list-item"
              >
                <div
                  data-thq="thq-dropdown-toggle"
                  className="emergency-dropdown-toggle"
                >
                  <span className="emergency-text">
                    <span>the vetopia way</span>
                    <br></br>
                  </span>
                </div>
                <ul
                  data-thq="thq-dropdown-list"
                  className="emergency-dropdown-list"
                >
                  <li
                    data-thq="thq-dropdown"
                    className="emergency-dropdown list-item"
                  >
                    <div
                      data-thq="thq-dropdown-toggle"
                      className="emergency-dropdown-toggle01"
                    >
                      <Link
                        to="/our-culture"
                        className="emergency-navlink01 footer_black_below"
                      >
                        our culture
                      </Link>
                    </div>
                  </li>
                  <li
                    data-thq="thq-dropdown"
                    className="emergency-dropdown01 list-item"
                  >
                    <div
                      data-thq="thq-dropdown-toggle"
                      className="emergency-dropdown-toggle02"
                    >
                      <Link
                        to="/our-team"
                        className="emergency-navlink02 footer_black_below"
                      >
                        our team
                      </Link>
                    </div>
                  </li>
                  <li
                    data-thq="thq-dropdown"
                    className="emergency-dropdown02 list-item"
                  >
                    <div
                      data-thq="thq-dropdown-toggle"
                      className="emergency-dropdown-toggle03"
                    >
                      <Link
                        to="/careers"
                        className="emergency-navlink03 footer_black_below"
                      >
                        <span className="footer_black_below">careers</span>
                        <br></br>
                      </Link>
                    </div>
                  </li>
                </ul>
              </div>
              <div
                data-thq="thq-dropdown"
                className="emergency-thq-dropdown1 list-item"
              >
                <div
                  data-thq="thq-dropdown-toggle"
                  className="emergency-dropdown-toggle04"
                >
                  <span className="emergency-text05">
                    <span>general practice</span>
                    <br></br>
                  </span>
                </div>
                <ul
                  data-thq="thq-dropdown-list"
                  className="emergency-dropdown-list1"
                >
                  <li
                    data-thq="thq-dropdown"
                    className="emergency-dropdown03 list-item"
                  >
                    <div
                      data-thq="thq-dropdown-toggle"
                      className="emergency-dropdown-toggle05"
                    >
                      <Link
                        to="/pet-exams"
                        className="emergency-navlink04 footer_black_below"
                      >
                        pet exams
                      </Link>
                    </div>
                  </li>
                  <li
                    data-thq="thq-dropdown"
                    className="emergency-dropdown04 list-item"
                  >
                    <div
                      data-thq="thq-dropdown-toggle"
                      className="emergency-dropdown-toggle06"
                    >
                      <Link
                        to="/vaccinations"
                        className="emergency-navlink05 footer_black_below"
                      >
                        vaccinations
                      </Link>
                    </div>
                  </li>
                  <li
                    data-thq="thq-dropdown"
                    className="emergency-dropdown05 list-item"
                  >
                    <div
                      data-thq="thq-dropdown-toggle"
                      className="emergency-dropdown-toggle07"
                    >
                      <Link
                        to="/surgery"
                        className="emergency-navlink06 footer_black_below"
                      >
                        surgery
                      </Link>
                    </div>
                  </li>
                  <li
                    data-thq="thq-dropdown"
                    className="emergency-dropdown06 list-item"
                  >
                    <div
                      data-thq="thq-dropdown-toggle"
                      className="emergency-dropdown-toggle08"
                    >
                      <Link
                        to="/spay-neuter"
                        className="emergency-navlink07 footer_black_below"
                      >
                        spay &amp; neuter
                      </Link>
                    </div>
                  </li>
                  <li
                    data-thq="thq-dropdown"
                    className="emergency-dropdown07 list-item"
                  >
                    <div
                      data-thq="thq-dropdown-toggle"
                      className="emergency-dropdown-toggle09"
                    >
                      <Link
                        to="/teeth-cleaning"
                        className="emergency-navlink08 footer_black_below"
                      >
                        teeth cleaning
                      </Link>
                    </div>
                  </li>
                  <li
                    data-thq="thq-dropdown"
                    className="emergency-dropdown08 list-item"
                  >
                    <div
                      data-thq="thq-dropdown-toggle"
                      className="emergency-dropdown-toggle10"
                    >
                      <Link
                        to="/grooming"
                        className="emergency-navlink09 footer_black_below"
                      >
                        grooming
                      </Link>
                    </div>
                  </li>
                </ul>
              </div>
              <Link
                to="/emergency"
                className="emergency-navlink10 footer_black"
              >
                24/7 emergency
              </Link>
              <div
                data-thq="thq-dropdown"
                className="emergency-thq-dropdown2 list-item"
              >
                <div
                  data-thq="thq-dropdown-toggle"
                  className="emergency-dropdown-toggle11"
                >
                  <span className="emergency-text08">
                    <span>resources</span>
                    <br></br>
                  </span>
                </div>
                <ul
                  data-thq="thq-dropdown-list"
                  className="emergency-dropdown-list2"
                >
                  <li
                    data-thq="thq-dropdown"
                    className="emergency-dropdown09 list-item"
                  >
                    <div
                      data-thq="thq-dropdown-toggle"
                      className="emergency-dropdown-toggle12"
                    >
                      <Link
                        to="/make-an-appointment"
                        className="emergency-navlink11 footer_black_below"
                      >
                        make an appointment
                      </Link>
                    </div>
                  </li>
                  <li
                    data-thq="thq-dropdown"
                    className="emergency-dropdown10 list-item"
                  >
                    <div
                      data-thq="thq-dropdown-toggle"
                      className="emergency-dropdown-toggle13"
                    >
                      <Link
                        to="/new-client-form"
                        className="emergency-navlink12 footer_black_below"
                      >
                        new client form
                      </Link>
                    </div>
                  </li>
                  <li
                    data-thq="thq-dropdown"
                    className="emergency-dropdown11 list-item"
                  >
                    <div
                      data-thq="thq-dropdown-toggle"
                      className="emergency-dropdown-toggle14"
                    >
                      <Link
                        to="/review-us"
                        className="emergency-navlink13 footer_black_below"
                      >
                        review us
                      </Link>
                    </div>
                  </li>
                  <li
                    data-thq="thq-dropdown"
                    className="emergency-dropdown12 list-item"
                  >
                    <div
                      data-thq="thq-dropdown-toggle"
                      className="emergency-dropdown-toggle15"
                    >
                      <Link
                        to="/blog"
                        className="emergency-navlink14 footer_black_below"
                      >
                        blog
                      </Link>
                    </div>
                  </li>
                  <li
                    data-thq="thq-dropdown"
                    className="emergency-dropdown13 list-item"
                  >
                    <div
                      data-thq="thq-dropdown-toggle"
                      className="emergency-dropdown-toggle16"
                    >
                      <Link
                        to="/contact"
                        className="emergency-navlink15 footer_black_below"
                      >
                        contact
                      </Link>
                    </div>
                  </li>
                </ul>
              </div>
            </nav>
          </nav>
        </header>
        <div className="emergency-container04">
          <Player
            src="https://assets3.lottiefiles.com/packages/lf20_pxGM95.json"
            loop
            speed="1"
            autoplay
            background="transparent"
            className="emergency-lottie-node"
          ></Player>
        </div>
        <div className="emergency-container05">
          <h1 className="emergency-text11">Your 24-Hour Emergency Vet</h1>
          <h1 className="emergency-text12">in the Philippines</h1>
        </div>
      </div>
      <div className="emergency-container06">
        <div className="emergency-container07">
          <span className="emergency-text13">
            We are here for you and your furry companions whenever you need us
            with our 24-hour emergency vet and critical care center. Our team of
            skilled emergency veterinarians and staff members at VETOPIA are
            always available to provide exceptional care for dogs and cats. We
            have advanced medical technology to handle various complex emergency
            cases promptly.
          </span>
          <span className="emergency-text14">
            Once you arrive at VETOPIA, you can park in a numbered parking
            space, call to check-in, and one of our care professionals will come
            to assist you. We will triage your pet, assess their physical
            condition, and take their vitals to evaluate their triage status. We
            will then communicate all relevant information about the evaluation
            and what you can expect next.
          </span>
          <span className="emergency-text15">
            Pet emergencies can be unpredictable and require prompt attention.
            Our team is always ready to receive you and your pet, no matter the
            time of day or night, at VETOPIA.
          </span>
        </div>
        <div className="emergency-container08">
          <h1 className="emergency-text16">
            If you think your pet is having a health emergency, please call us
            immediately at (999) 999-9999.
          </h1>
          <Link
            to="/make-an-appointment"
            className="emergency-navlink16 button"
          >
            MAKE AN APPOINTMENT
          </Link>
        </div>
      </div>
      <div className="emergency-container09">
        <div className="emergency-container10"></div>
        <div className="emergency-container11">
          <h1 className="emergency-text17">Our Pledge to You</h1>
          <span className="emergency-text18">
            As your 24-hour emergency vet in the Philippines, our goal is to
            provide superior emergency and critical care under any
            circumstances. You can expect:
          </span>
          <span className="emergency-text19">
            <span>-Convenience</span>
            <br></br>
            <br></br>
            <span>-Thorough communication for a less stressful experience</span>
            <br></br>
            <br></br>
            <span>-Timeliness</span>
            <br></br>
            <br></br>
            <span>-Constant veterinary supervision and staff availability</span>
            <br></br>
            <br></br>
            <span>-Efficiency (all diagnostics performed in-house)</span>
            <br></br>
            <br></br>
            <span>-A warm, caring atmosphere</span>
          </span>
        </div>
      </div>
      <div className="emergency-container12">
        <h1 className="emergency-text36">Visiting Hours</h1>
        <span className="emergency-text37">
          Is your pet being hospitalized with us? If you’d like, you can visit
          them during these convenient hours:
        </span>
        <div className="emergency-container13">
          <span className="emergency-text38">Monday - Friday: 10am - 8pm</span>
          <span className="emergency-text39">
            Saturday - Sunday: 10am - 6pm
          </span>
        </div>
        <span className="emergency-text40">
          Also, don’t hesitate to call us at (863) 324-3340 if you have any
          questions about your pet’s treatment.
        </span>
      </div>
      <div className="emergency-container14">
        <div className="emergency-container15">
          <div className="emergency-container16">
            <div className="emergency-div">
              <DangerousHTML
                html={`<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3861.802548850011!2d121.04882269999999!3d14.5532811!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3397c8efd99aad53%3A0xb64b39847a866fde!2skodego!5e0!3m2!1sen!2sph!4v1680991754221!5m2!1sen!2sph" width="400" height="300" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>`}
              ></DangerousHTML>
            </div>
            <div className="emergency-container17">
              <a href="#back to top" className="emergency-link">
                <svg viewBox="0 0 1024 1024" className="emergency-icon">
                  <path d="M981.333 512c0-129.579-52.565-246.997-137.472-331.861s-202.283-137.472-331.861-137.472-246.997 52.565-331.861 137.472-137.472 202.283-137.472 331.861 52.565 246.997 137.472 331.861 202.283 137.472 331.861 137.472 246.997-52.565 331.861-137.472 137.472-202.283 137.472-331.861zM896 512c0 106.069-42.923 201.984-112.469 271.531s-165.461 112.469-271.531 112.469-201.984-42.923-271.531-112.469-112.469-165.461-112.469-271.531 42.923-201.984 112.469-271.531 165.461-112.469 271.531-112.469 201.984 42.923 271.531 112.469 112.469 165.461 112.469 271.531zM554.667 682.667v-238.336l97.835 97.835c16.683 16.683 43.691 16.683 60.331 0s16.683-43.691 0-60.331l-170.667-170.667c-4.096-4.096-8.789-7.168-13.824-9.259s-10.539-3.243-16.341-3.243c-5.547 0-11.136 1.067-16.341 3.243-5.035 2.091-9.728 5.163-13.824 9.259l-170.667 170.667c-16.683 16.683-16.683 43.691 0 60.331s43.691 16.683 60.331 0l97.835-97.835v238.336c0 23.552 19.115 42.667 42.667 42.667s42.667-19.115 42.667-42.667z"></path>
                </svg>
              </a>
            </div>
          </div>
          <div className="emergency-container18">
            <span className="emergency-text41">
              © 2023 VETOPIA. Proudly created by Group 1
            </span>
            <div className="emergency-container19">
              <div className="emergency-container20">
                <ReviewButton rootClassName="review-button-root-class-name4"></ReviewButton>
              </div>
              <div className="emergency-container21">
                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noreferrer noopener"
                  className="emergency-link1"
                >
                  <div className="emergency-container22">
                    <Faceboook
                      rootClassName="faceboook-root-class-name4"
                      className="emergency-component1"
                    ></Faceboook>
                  </div>
                </a>
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noreferrer noopener"
                  className="emergency-link2"
                >
                  <div className="emergency-container23">
                    <Instagram
                      rootClassName="instagram-root-class-name4"
                      className="emergency-component2"
                    ></Instagram>
                  </div>
                </a>
              </div>
              <div className="emergency-container24">
                <a
                  href="https://google.com"
                  target="_blank"
                  rel="noreferrer noopener"
                  className="emergency-link3"
                >
                  <div className="emergency-container25">
                    <Google
                      rootClassName="google-root-class-name4"
                      className="emergency-component3"
                    ></Google>
                  </div>
                </a>
                <a
                  href="https://twitter.com"
                  target="_blank"
                  rel="noreferrer noopener"
                  className="emergency-link4"
                >
                  <div className="emergency-container26">
                    <Twitter
                      rootClassName="twitter-root-class-name4"
                      className="emergency-component4"
                    ></Twitter>
                  </div>
                </a>
              </div>
            </div>
            <div className="emergency-container27">
              <div className="emergency-container28"></div>
              <div className="emergency-container29">
                <span className="emergency-text42 Footer">appointments</span>
                <div className="emergency-container30">
                  <span className="footer_black1">mon - fri:</span>
                  <span className="emergency-text44 footer11">
                    8:00 am - 6:00 pm
                  </span>
                </div>
                <div className="emergency-container31">
                  <span className="footer_black1">sat:</span>
                  <span className="emergency-text46 footer11">
                    8:00 am - 2:00 pm
                  </span>
                </div>
              </div>
              <div className="emergency-container32">
                <span className="emergency-text47 Footer">emergencies</span>
                <span className="emergency-text48 footer11">
                  24 hours &amp; 7 days a week
                </span>
                <span className="footer_black1">(999) 999-9999</span>
              </div>
            </div>
          </div>
          <div className="emergency-container33">
            <div className="emergency-container34"></div>
            <div className="emergency-container35">
              <div className="emergency-div1">
                <DangerousHTML
                  html={`<!DOCTYPE html>
<html>
<head>

<style>
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  body {
    font-family: "Inter", sans-serif;
  }
  .formbold-mb-5 {
    margin-bottom: 20px;
  }
  .formbold-pt-3 {
    padding-top: 12px;
  }
  .formbold-main-wrapper {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 48px;
  }

  .formbold-form-wrapper {
    margin: 0 auto;
    max-width: 550px;
    width: 100%;
    background: white;
    border: 1px solid #e0e0e0;
    border-radius: 8px;
    display: none;
  }

  .formbold-form-wrapper.active {
    display: block;
  }

  .formbold-form-label {
    display: block;
    font-weight: 500;
    font-size: 16px;
    color: #07074d;
    margin-bottom: 12px;
  }
  .formbold-form-label-2 {
    font-weight: 600;
    font-size: 20px;
    margin-bottom: 20px;
  }

  .formbold-form-input {
    width: 100%;
    padding: 12px 24px;
    border-radius: 6px;
    border: 1px solid #e0e0e0;
    background: white;
    font-weight: 500;
    font-size: 16px;
    color: #6b7280;
    outline: none;
    resize: none;
  }
  .formbold-form-input:focus {
    border-color: #6a64f1;
    box-shadow: 0px 3px 8px rgba(0, 0, 0, 0.05);
  }

  .formbold-btn {
    text-align: center;
    font-size: 16px;
    border-radius: 6px;
    padding: 14px 32px;
    border: none;
    font-weight: 600;
    background-color: #6a64f1;
    color: white;
    cursor: pointer;
  }
  .formbold-btn:hover {
    box-shadow: 0px 3px 8px rgba(0, 0, 0, 0.05);
  }

  .formbold--mx-3 {
    margin-left: -12px;
    margin-right: -12px;
  }
  .formbold-px-3 {
    padding-left: 12px;
    padding-right: 12px;
  }
  .flex {
    display: flex;
  }
  .flex-wrap {
    flex-wrap: wrap;
  }
  .w-full {
    width: 100%;
  }
  .formbold-form-header {
    background: #6a64f1;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 12px 36px;
    border-radius: 8px 8px 0px 0px;
  }
  .formbold-form-header h3 {
    font-weight: 700;
    font-size: 20px;
    color: white;
  }
  .formbold-form-header button {
    color: white;
    background: transparent;
    border: none;
  }
  .formbold-chatbox-form {
    padding: 32px 36px;
  }
  .formbold-action-buttons {
    max-width: 550px;
    margin-left: auto;
    margin-right: auto;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    margin-top: 48px;
  }
  .formbold-action-btn {
    width: 70px;
    height: 70px;
    background: #6a64f1;
    color: white;
    border-radius: 50%;
    margin-left: 20px;
    border: none;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .formbold-action-btn .formbold-cross-icon {
    display: none;
  }

  .formbold-action-btn.active .formbold-cross-icon {
    display: block;
  }

  .formbold-action-btn.active .formbold-chat-icon {
    display: none;
  }
  @media (min-width: 540px) {
    .sm\:w-half {
      width: 50%;
    }
  }
</style>

</head>
<body>

<div class="formbold-main-wrapper">
  <div class="w-full">
    <div class="formbold-form-wrapper">
      <div class="formbold-form-header">
        <h3>Let's chat? - Online</h3>
        <button onclick="chatboxToogleHandler()">
          <svg width="17" height="17" viewBox="0 0 17 17" fill="white">
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M0.474874 0.474874C1.10804 -0.158291 2.1346 -0.158291 2.76777 0.474874L16.5251 14.2322C17.1583 14.8654 17.1583 15.892 16.5251 16.5251C15.892 17.1583 14.8654 17.1583 14.2322 16.5251L0.474874 2.76777C-0.158291 2.1346 -0.158291 1.10804 0.474874 0.474874Z"
            />
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M0.474874 16.5251C-0.158291 15.892 -0.158291 14.8654 0.474874 14.2322L14.2322 0.474874C14.8654 -0.158292 15.892 -0.158291 16.5251 0.474874C17.1583 1.10804 17.1583 2.1346 16.5251 2.76777L2.76777 16.5251C2.1346 17.1583 1.10804 17.1583 0.474874 16.5251Z"
            />
          </svg>
        </button>
      </div>
      <form
        action="https://formbold.com/s/3Gq41"
        method="POST"
        class="formbold-chatbox-form"
      >
        <div class="formbold-mb-5">
          <label for="name" class="formbold-form-label"> Your Name </label>
          <input
            type="text"
            name="name"
            id="name"
            placeholder="Your Name"
            class="formbold-form-input"
          />
        </div>

        <div class="formbold-mb-5">
          <label for="email" class="formbold-form-label"> Email Address </label>
          <input
            type="email"
            name="email"
            id="email"
            placeholder="example@domain.com"
            class="formbold-form-input"
          />
        </div>

        <div class="formbold-mb-5">
          <label for="message" class="formbold-form-label"> Message </label>
          <textarea
            rows="6"
            name="message"
            id="message"
            placeholder="Don't be shy"
            class="formbold-form-input"
          ></textarea>
        </div>

        <div>
          <button class="formbold-btn w-full">Submit</button>
        </div>
      </form>
    </div>
    <div class="formbold-action-buttons">
      <button class="formbold-action-btn" onclick="chatboxToogleHandler()">
        <span class="formbold-cross-icon">
          <svg
            width="17"
            height="17"
            viewBox="0 0 17 17"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M0.474874 0.474874C1.10804 -0.158291 2.1346 -0.158291 2.76777 0.474874L16.5251 14.2322C17.1583 14.8654 17.1583 15.892 16.5251 16.5251C15.892 17.1583 14.8654 17.1583 14.2322 16.5251L0.474874 2.76777C-0.158291 2.1346 -0.158291 1.10804 0.474874 0.474874Z"
              fill="white"
            />
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M0.474874 16.5251C-0.158291 15.892 -0.158291 14.8654 0.474874 14.2322L14.2322 0.474874C14.8654 -0.158292 15.892 -0.158291 16.5251 0.474874C17.1583 1.10804 17.1583 2.1346 16.5251 2.76777L2.76777 16.5251C2.1346 17.1583 1.10804 17.1583 0.474874 16.5251Z"
              fill="white"
            />
          </svg>
        </span>
        <span class="formbold-chat-icon">
          <svg
            width="28"
            height="28"
            viewBox="0 0 28 28"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M19.8333 14.0002V3.50016C19.8333 3.19074 19.7103 2.894 19.4915 2.6752C19.2728 2.45641 18.976 2.3335 18.6666 2.3335H3.49992C3.1905 2.3335 2.89375 2.45641 2.67496 2.6752C2.45617 2.894 2.33325 3.19074 2.33325 3.50016V19.8335L6.99992 15.1668H18.6666C18.976 15.1668 19.2728 15.0439 19.4915 14.8251C19.7103 14.6063 19.8333 14.3096 19.8333 14.0002ZM24.4999 7.00016H22.1666V17.5002H6.99992V19.8335C6.99992 20.1429 7.12284 20.4397 7.34163 20.6585C7.56042 20.8772 7.85717 21.0002 8.16659 21.0002H20.9999L25.6666 25.6668V8.16683C25.6666 7.85741 25.5437 7.56066 25.3249 7.34187C25.1061 7.12308 24.8093 7.00016 24.4999 7.00016Z"
              fill="white"
            />
          </svg>
        </span>
      </button>
    </div>
  </div>
</div>

<script>
  const formWrapper = document.querySelector(".formbold-form-wrapper");
  const formActionButton = document.querySelector(".formbold-action-btn");
  function chatboxToogleHandler() {
    formWrapper.classList.toggle("active");
    formActionButton.classList.toggle("active");
  }
</script>

</body>
</html>
`}
                ></DangerousHTML>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Emergency
