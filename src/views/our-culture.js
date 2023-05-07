import React from 'react'
import { Link } from 'react-router-dom'

import DangerousHTML from 'dangerous-html/react'
import { Helmet } from 'react-helmet'

import ReviewButton from '../components/review-button'
import Faceboook from '../components/faceboook'
import Instagram from '../components/instagram'
import Google from '../components/google'
import Twitter from '../components/twitter'
import './our-culture.css'

const OurCulture = (props) => {
  return (
    <div className="our-culture-container">
      <Helmet>
        <title>Our-culture - WD50_MP2</title>
        <meta property="og:title" content="Our-culture - WD50_MP2" />
        <meta
          property="og:image"
          content="https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/5df4fe0d-c56b-4e40-a2f8-62ae2ce60a05/4a54f7e3-642b-4238-85fb-fa6d9b3e4d19?org_if_sml=1"
        />
      </Helmet>
      <div className="our-culture-container01">
        <div className="our-culture-container02">
          <header
            id="back to top"
            data-role="Accordion"
            className="our-culture-header"
          >
            <Link to="/" className="our-culture-navlink">
              <img
                alt="logo"
                src="/playground_assets/vetopia%20logo%20%5B350%20%C3%97%20100px%5D1-1500h.png"
                className="our-culture-image"
              />
            </Link>
            <div className="our-culture-separator"></div>
            <nav className="our-culture-nav">
              <nav className="our-culture-nav1">
                <div
                  data-thq="thq-dropdown"
                  className="our-culture-thq-dropdown list-item"
                >
                  <div
                    data-thq="thq-dropdown-toggle"
                    className="our-culture-dropdown-toggle"
                  >
                    <span className="our-culture-text">
                      <span>the vetopia way</span>
                      <br></br>
                    </span>
                  </div>
                  <ul
                    data-thq="thq-dropdown-list"
                    className="our-culture-dropdown-list"
                  >
                    <li
                      data-thq="thq-dropdown"
                      className="our-culture-dropdown list-item"
                    >
                      <div
                        data-thq="thq-dropdown-toggle"
                        className="our-culture-dropdown-toggle01"
                      >
                        <Link
                          to="/our-culture"
                          className="our-culture-navlink01 footer_black_below"
                        >
                          our culture
                        </Link>
                      </div>
                    </li>
                    <li
                      data-thq="thq-dropdown"
                      className="our-culture-dropdown01 list-item"
                    >
                      <div
                        data-thq="thq-dropdown-toggle"
                        className="our-culture-dropdown-toggle02"
                      >
                        <Link
                          to="/our-team"
                          className="our-culture-navlink02 footer_black_below"
                        >
                          our team
                        </Link>
                      </div>
                    </li>
                    <li
                      data-thq="thq-dropdown"
                      className="our-culture-dropdown02 list-item"
                    >
                      <div
                        data-thq="thq-dropdown-toggle"
                        className="our-culture-dropdown-toggle03"
                      >
                        <Link
                          to="/careers"
                          className="our-culture-navlink03 footer_black_below"
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
                  className="our-culture-thq-dropdown1 list-item"
                >
                  <div
                    data-thq="thq-dropdown-toggle"
                    className="our-culture-dropdown-toggle04"
                  >
                    <span className="our-culture-text05">
                      <span>general practice</span>
                      <br></br>
                    </span>
                  </div>
                  <ul
                    data-thq="thq-dropdown-list"
                    className="our-culture-dropdown-list1"
                  >
                    <li
                      data-thq="thq-dropdown"
                      className="our-culture-dropdown03 list-item"
                    >
                      <div
                        data-thq="thq-dropdown-toggle"
                        className="our-culture-dropdown-toggle05"
                      >
                        <Link
                          to="/pet-exams"
                          className="our-culture-navlink04 footer_black_below"
                        >
                          pet exams
                        </Link>
                      </div>
                    </li>
                    <li
                      data-thq="thq-dropdown"
                      className="our-culture-dropdown04 list-item"
                    >
                      <div
                        data-thq="thq-dropdown-toggle"
                        className="our-culture-dropdown-toggle06"
                      >
                        <Link
                          to="/vaccinations"
                          className="our-culture-navlink05 footer_black_below"
                        >
                          vaccinations
                        </Link>
                      </div>
                    </li>
                    <li
                      data-thq="thq-dropdown"
                      className="our-culture-dropdown05 list-item"
                    >
                      <div
                        data-thq="thq-dropdown-toggle"
                        className="our-culture-dropdown-toggle07"
                      >
                        <Link
                          to="/surgery"
                          className="our-culture-navlink06 footer_black_below"
                        >
                          surgery
                        </Link>
                      </div>
                    </li>
                    <li
                      data-thq="thq-dropdown"
                      className="our-culture-dropdown06 list-item"
                    >
                      <div
                        data-thq="thq-dropdown-toggle"
                        className="our-culture-dropdown-toggle08"
                      >
                        <Link
                          to="/spay-neuter"
                          className="our-culture-navlink07 footer_black_below"
                        >
                          spay &amp; neuter
                        </Link>
                      </div>
                    </li>
                    <li
                      data-thq="thq-dropdown"
                      className="our-culture-dropdown07 list-item"
                    >
                      <div
                        data-thq="thq-dropdown-toggle"
                        className="our-culture-dropdown-toggle09"
                      >
                        <Link
                          to="/teeth-cleaning"
                          className="our-culture-navlink08 footer_black_below"
                        >
                          teeth cleaning
                        </Link>
                      </div>
                    </li>
                    <li
                      data-thq="thq-dropdown"
                      className="our-culture-dropdown08 list-item"
                    >
                      <div
                        data-thq="thq-dropdown-toggle"
                        className="our-culture-dropdown-toggle10"
                      >
                        <Link
                          to="/grooming"
                          className="our-culture-navlink09 footer_black_below"
                        >
                          grooming
                        </Link>
                      </div>
                    </li>
                  </ul>
                </div>
                <Link
                  to="/emergency"
                  className="our-culture-navlink10 footer_black"
                >
                  24/7 emergency
                </Link>
                <div
                  data-thq="thq-dropdown"
                  className="our-culture-thq-dropdown2 list-item"
                >
                  <div
                    data-thq="thq-dropdown-toggle"
                    className="our-culture-dropdown-toggle11"
                  >
                    <span className="our-culture-text08">
                      <span>resources</span>
                      <br></br>
                    </span>
                  </div>
                  <ul
                    data-thq="thq-dropdown-list"
                    className="our-culture-dropdown-list2"
                  >
                    <li
                      data-thq="thq-dropdown"
                      className="our-culture-dropdown09 list-item"
                    >
                      <div
                        data-thq="thq-dropdown-toggle"
                        className="our-culture-dropdown-toggle12"
                      >
                        <Link
                          to="/make-an-appointment"
                          className="our-culture-navlink11 footer_black_below"
                        >
                          make an appointment
                        </Link>
                      </div>
                    </li>
                    <li
                      data-thq="thq-dropdown"
                      className="our-culture-dropdown10 list-item"
                    >
                      <div
                        data-thq="thq-dropdown-toggle"
                        className="our-culture-dropdown-toggle13"
                      >
                        <Link
                          to="/new-client-form"
                          className="our-culture-navlink12 footer_black_below"
                        >
                          new client form
                        </Link>
                      </div>
                    </li>
                    <li
                      data-thq="thq-dropdown"
                      className="our-culture-dropdown11 list-item"
                    >
                      <div
                        data-thq="thq-dropdown-toggle"
                        className="our-culture-dropdown-toggle14"
                      >
                        <Link
                          to="/review-us"
                          className="our-culture-navlink13 footer_black_below"
                        >
                          review us
                        </Link>
                      </div>
                    </li>
                    <li
                      data-thq="thq-dropdown"
                      className="our-culture-dropdown12 list-item"
                    >
                      <div
                        data-thq="thq-dropdown-toggle"
                        className="our-culture-dropdown-toggle15"
                      >
                        <Link
                          to="/blog"
                          className="our-culture-navlink14 footer_black_below"
                        >
                          blog
                        </Link>
                      </div>
                    </li>
                    <li
                      data-thq="thq-dropdown"
                      className="our-culture-dropdown13 list-item"
                    >
                      <div
                        data-thq="thq-dropdown-toggle"
                        className="our-culture-dropdown-toggle16"
                      >
                        <Link
                          to="/contact"
                          className="our-culture-navlink15 footer_black_below"
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
          <div className="our-culture-container03">
            <h1 className="our-culture-text11">
              Our Company Culture is Focused on Excellence and Empowerment
            </h1>
            <span className="our-culture-text12">
              We strive to create a company culture of support, collaboration,
              and compassion for others. Our mission is to help people by
              helping their pets stay healthy, happy, and healed. To further
              this mission, we focus on providing high-quality medical and
              surgical care for companion animals well within their family’s
              physical, emotional, and financial capabilities. Further, we aim
              to deliver this high level of care within a professional,
              compassionate environment and to serve as a place of hope,
              healing, and long-term partnerships with people and their
              cherished pets.
            </span>
          </div>
        </div>
      </div>
      <div className="our-culture-container04">
        <h1 className="our-culture-text13">How Do We Do It?</h1>
      </div>
      <div className="our-culture-container05">
        <div className="our-culture-container06"></div>
        <div className="our-culture-container07"></div>
        <div className="our-culture-container08"></div>
      </div>
      <div className="our-culture-container09">
        <div className="our-culture-div">
          <DangerousHTML
            html={`<!DOCTYPE html>
<html lang="en">
  <head>
    <!--====== Required meta tags ======-->
    <meta charset="utf-8" />
    <meta http-equiv="x-ua-compatible" content="ie=edge" />
    <meta name="description" content="" />
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />

    <!--====== Title ======-->
    <title>Home | Ayro UI</title>

    <!--====== Favicon ======-->
    <link rel="shortcut icon" href="assets/images/favicon.ico" type="image/png" />

    <!--====== Bootstrap CSS ======-->
    <link rel="stylesheet" href="https://cdn.ayroui.com/1.0/css/bootstrap.min.css" />

    <!--====== Lineicons CSS ======-->
    <link href="https://cdn.lineicons.com/3.0/lineicons.css" rel="stylesheet">

    <!--====== Style css ======-->
    <link rel="stylesheet" href="https://cdn.ayroui.com/1.0/css/starter.css" />
    
      <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/js/bootstrap.bundle.min.js"></script>
 
 <style>
 /* accordion-style-one */
.accordion-style-one .accordion .card {
  margin-top: 8px;
  border: 1px solid var(--gray-4) !important;
  border-radius: 4px;
}
.accordion-style-one .accordion .card .card-header {
  padding: 0;
  background: none;
}
.accordion-style-one .accordion .card .card-header a {
  display: block;
  font-size: 16px;
  font-weight: 700;
  line-height: 24px;
  position: relative;
  color: var(--primary);
  -webkit-transition: all 0.3s ease-out 0s;
  -moz-transition: all 0.3s ease-out 0s;
  -ms-transition: all 0.3s ease-out 0s;
  -o-transition: all 0.3s ease-out 0s;
  transition: all 0.3s ease-out 0s;
  border: 1px solid var(--primary);
  margin: -1px;
  border-radius: 4px;
  padding: 13px 16px;
  z-index: 5;
}
.accordion-style-one .accordion .card .card-header a::before {
  position: absolute;
  content: "\ea5e";
  font-family: lineicons !important;
  right: 16px;
  top: 14px;
  font-size: 16px;
  -webkit-transition: all 0.3s ease-out 0s;
  -moz-transition: all 0.3s ease-out 0s;
  -ms-transition: all 0.3s ease-out 0s;
  -o-transition: all 0.3s ease-out 0s;
  transition: all 0.3s ease-out 0s;
  -webkit-transform: rotate(180deg);
  -moz-transform: rotate(180deg);
  -ms-transform: rotate(180deg);
  -o-transform: rotate(180deg);
  transform: rotate(180deg);
}
.accordion-style-one .accordion .card .card-header a.collapsed {
  color: var(--black);
  border-color: var(--gray-4);
}
.accordion-style-one .accordion .card .card-header a.collapsed::before {
  -webkit-transform: rotate(0);
  -moz-transform: rotate(0);
  -ms-transform: rotate(0);
  -o-transform: rotate(0);
  transform: rotate(0);
}
.accordion-style-one .accordion .card .card-body {
  padding: 16px;
}
.accordion-style-one .accordion .card .card-body .text {
  color: var(--dark-3);
}
 </style>
 
 </head>

  <body>
    <!--====== PART START ======-->
<div class="single-accordion">
   <div class="accordion-style-one">
      <div class="accordion" id="accordion">
         <div class="card">
            <div class="card-header" id="headingOne">
               <a href="#collapseOne" data-bs-toggle="collapse" role="button" aria-expanded="true">We Offer a Complete Spectrum of Care.</a>
            </div>
            <div id="collapseOne" class="collapse show" data-bs-parent="#accordion">
               <div class="card-body">
                  <p class="text">
                     We provide general medicine for your dog or cat’s unique needs, 24/7 emergency services for urgent health problems, and innovative specialty services for complex medical issues. <br />
                     <br />
                     We do all this within your budget--without compromising our exceptionally high standards.
                  </p>
               </div>
            </div>
         </div>
         <!-- card -->
         <div class="card">
            <div class="card-header" id="headingTwo">
               <a class="collapsed" href="#collapseTwo" data-bs-toggle="collapse" role="button"
                  aria-expanded="false">We Take a Creative Approach to Getting Your Pet the Care They Need.</a>
            </div>
            <div id="collapseTwo" class="collapse" data-bs-parent="#accordion">
               <div class="card-body">
                  <p class="text">
                     We think outside the box to help your beloved four-legged family members, but we wouldn’t have it any other way. <br />
                     <br />
                     Whether through reaching out to a network of specialists or trying a different combination of treatments, we’re always looking for ways to deliver better, safer, and more effective treatments for your pet.
                  </p>
               </div>
            </div>
         </div>
         <!-- card -->
         <div class="card">
            <div class="card-header" id="headingThree">
               <a class="collapsed" href="#collapseThree" data-bs-toggle="collapse" role="button"
                  aria-expanded="false">We’re Committed to
5-Star Service.</a>
            </div>
            <div id="collapseThree" class="collapse" data-bs-parent="#accordion">
               <div class="card-body">
                  <p class="text">
                     If you come to us with a problem, we’ll explore every option and do whatever we can to resolve it, while also helping you and your pet feel more at ease. <br />
                     <br />
                      With compassion, dedication, and perseverance, we aim to make their life healthier and happier than it was the day before, and to make you the best pet parent to your loving companion.
                  </p>
               </div>
            </div>
         </div>
         <!-- card -->
        
         <!-- card -->
      </div>
   </div>
   <!-- card -->
</div>
<!-- accordion style one -->
    <!--====== PART ENDS ======-->
  </body>
</html>`}
          ></DangerousHTML>
        </div>
      </div>
      <div className="our-culture-container10">
        <h1 className="our-culture-text14">Our Core Values</h1>
      </div>
      <div className="our-culture-container11">
        <div className="our-culture-div1">
          <DangerousHTML
            html={`<!DOCTYPE html>
<html lang="en">
  <head>
    <!--====== Required meta tags ======-->
    <meta charset="utf-8" />
    <meta http-equiv="x-ua-compatible" content="ie=edge" />
    <meta name="description" content="" />
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />

    <!--====== Title ======-->
    <title>Home | Ayro UI</title>

    <!--====== Favicon ======-->
    <link rel="shortcut icon" href="assets/images/favicon.ico" type="image/png" />

    <!--====== Bootstrap CSS ======-->
    <link rel="stylesheet" href="https://cdn.ayroui.com/1.0/css/bootstrap.min.css" />

    <!--====== Lineicons CSS ======-->
    <link href="https://cdn.lineicons.com/3.0/lineicons.css" rel="stylesheet">

    <!--====== Style css ======-->
    <link rel="stylesheet" href="https://cdn.ayroui.com/1.0/css/starter.css" />
    
      <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/js/bootstrap.bundle.min.js"></script>
 
 <style>
/* tabs-one */
.tabs-one {
  border: 1px solid var(--gray-4);
}
.tabs-one .nav {
  border-bottom: 1px solid var(--gray-4);
}
@media (max-width: 767px) {
  .tabs-one .nav {
    display: block;
  }
}
@media only screen and (min-width: 576px) and (max-width: 767px) {
  .tabs-one .nav {
    display: flex;
  }
}
.tabs-one .nav .nav-item a {
  font-size: 16px;
  line-height: 24px;
  color: var(--dark-3);
  font-weight: 700;
  padding: 13px;
  -webkit-transition: all 0.3s ease-out 0s;
  -moz-transition: all 0.3s ease-out 0s;
  -ms-transition: all 0.3s ease-out 0s;
  -o-transition: all 0.3s ease-out 0s;
  transition: all 0.3s ease-out 0s;
  display: block;
}
.tabs-one .nav .nav-item a.active {
  color: var(--white);
  background: var(--primary);
}
.tabs-one .tab-content .tab-text {
  padding: 15px;
}
.tabs-one .tab-content .tab-text .text {
  color: var(--dark-3);
}
 </style>
 
 </head>

  <body>
    <div class="tabs">
   <div class="single-tabs tabs-one">
      <ul class="nav nav-justified" id="myTab" role="tablist">
         <li class="nav-item">
            <a class="active" id="tab-one-one-tab" data-bs-toggle="tab" href="#tab-one-one" role="tab"
               aria-controls="tab-one-one" aria-selected="true">Compassion.</a>
         </li>
         <li class="nav-item">
            <a id="tab-one-two-tab" data-bs-toggle="tab" href="#tab-one-two" role="tab"
               aria-controls="tab-one-two" aria-selected="false">Integrity.</a>
         </li>
         <li class="nav-item">
            <a id="tab-one-three-tab" data-bs-toggle="tab" href="#tab-one-three" role="tab"
               aria-controls="tab-one-three" aria-selected="false">Communication.</a>
         </li>
         <li class="nav-item">
            <a id="tab-one-four-tab" data-bs-toggle="tab" href="#tab-one-four" role="tab"
               aria-controls="tab-one-four" aria-selected="false">Excellence.</a>
         </li>
      </ul>
      <div class="tab-content" id="myTabContent">
         <div class="tab-pane fade show active" id="tab-one-one" role="tabpanel"
            aria-labelledby="tab-one-one-tab">
            <div class="tab-text">
               <p class="text">
                  Here at VETOPIA, our culture is built on heartfelt compassion for our patients and their families.  <br /><br />
                  It matters not how much we know, unless you first know how much we care. That’s the VETOPIA way.
               </p>
            </div>
         </div>
         <div class="tab-pane fade" id="tab-one-two" role="tabpanel" aria-labelledby="tab-one-two-tab">
            <div class="tab-text">
               <p class="text">
                  We live and work by a code of high ethical standards, and hold ourselves accountable to deliver nothing less than the very best care to our patients and clients.
               </p>
            </div>
         </div>
         <div class="tab-pane fade" id="tab-one-three" role="tabpanel" aria-labelledby="tab-one-three-tab">
            <div class="tab-text">
               <p class="text">
                  Clear communication is the foundation of our success. Our communication channels enable us to partner with our clients, referring veterinarians, and fellow team members with ease. <br /><br />
                  We listen, ask questions, explain, educate, and make sure there is understanding.
               </p>
            </div>
         </div>
         <div class="tab-pane fade" id="tab-one-four" role="tabpanel" aria-labelledby="tab-one-four-tab">
            <div class="tab-text">
               <p class="text">
                  Excellence is inherent in every aspect of VETOPIA, from our exceptional and highly-trained staff to our incredible medical facilities.  <br /><br />
                  We’re leaders in the veterinary community and are committed to advancing veterinary medicine on all levels.
               </p>
            </div>
         </div>
      </div>
   </div>
   <!-- tabs one -->
</div>
  </body>
</html>`}
          ></DangerousHTML>
        </div>
      </div>
      <div className="our-culture-container12">
        <h1 className="our-culture-text15">
          Making Our Community a Better Place
        </h1>
      </div>
      <div className="our-culture-container13">
        <div className="our-culture-container14">
          <div className="our-culture-container15">
            <div className="our-culture-div2">
              <DangerousHTML
                html={`<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3861.802548850011!2d121.04882269999999!3d14.5532811!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3397c8efd99aad53%3A0xb64b39847a866fde!2skodego!5e0!3m2!1sen!2sph!4v1680991754221!5m2!1sen!2sph" width="400" height="300" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>`}
              ></DangerousHTML>
            </div>
            <div className="our-culture-container16">
              <a href="#back to top" className="our-culture-link">
                <svg viewBox="0 0 1024 1024" className="our-culture-icon">
                  <path d="M981.333 512c0-129.579-52.565-246.997-137.472-331.861s-202.283-137.472-331.861-137.472-246.997 52.565-331.861 137.472-137.472 202.283-137.472 331.861 52.565 246.997 137.472 331.861 202.283 137.472 331.861 137.472 246.997-52.565 331.861-137.472 137.472-202.283 137.472-331.861zM896 512c0 106.069-42.923 201.984-112.469 271.531s-165.461 112.469-271.531 112.469-201.984-42.923-271.531-112.469-112.469-165.461-112.469-271.531 42.923-201.984 112.469-271.531 165.461-112.469 271.531-112.469 201.984 42.923 271.531 112.469 112.469 165.461 112.469 271.531zM554.667 682.667v-238.336l97.835 97.835c16.683 16.683 43.691 16.683 60.331 0s16.683-43.691 0-60.331l-170.667-170.667c-4.096-4.096-8.789-7.168-13.824-9.259s-10.539-3.243-16.341-3.243c-5.547 0-11.136 1.067-16.341 3.243-5.035 2.091-9.728 5.163-13.824 9.259l-170.667 170.667c-16.683 16.683-16.683 43.691 0 60.331s43.691 16.683 60.331 0l97.835-97.835v238.336c0 23.552 19.115 42.667 42.667 42.667s42.667-19.115 42.667-42.667z"></path>
                </svg>
              </a>
            </div>
          </div>
          <div className="our-culture-container17">
            <span className="our-culture-text16">
              © 2023 VETOPIA. Proudly created by Group 1
            </span>
            <div className="our-culture-container18">
              <div className="our-culture-container19">
                <ReviewButton rootClassName="review-button-root-class-name5"></ReviewButton>
              </div>
              <div className="our-culture-container20">
                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noreferrer noopener"
                  className="our-culture-link1"
                >
                  <div className="our-culture-container21">
                    <Faceboook
                      rootClassName="faceboook-root-class-name5"
                      className="our-culture-component1"
                    ></Faceboook>
                  </div>
                </a>
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noreferrer noopener"
                  className="our-culture-link2"
                >
                  <div className="our-culture-container22">
                    <Instagram
                      rootClassName="instagram-root-class-name5"
                      className="our-culture-component2"
                    ></Instagram>
                  </div>
                </a>
              </div>
              <div className="our-culture-container23">
                <a
                  href="https://google.com"
                  target="_blank"
                  rel="noreferrer noopener"
                  className="our-culture-link3"
                >
                  <div className="our-culture-container24">
                    <Google
                      rootClassName="google-root-class-name5"
                      className="our-culture-component3"
                    ></Google>
                  </div>
                </a>
                <a
                  href="https://twitter.com"
                  target="_blank"
                  rel="noreferrer noopener"
                  className="our-culture-link4"
                >
                  <div className="our-culture-container25">
                    <Twitter
                      rootClassName="twitter-root-class-name5"
                      className="our-culture-component4"
                    ></Twitter>
                  </div>
                </a>
              </div>
            </div>
            <div className="our-culture-container26">
              <div className="our-culture-container27"></div>
              <div className="our-culture-container28">
                <span className="our-culture-text17 Footer">appointments</span>
                <div className="our-culture-container29">
                  <span className="footer_black1">mon - fri:</span>
                  <span className="our-culture-text19 footer11">
                    8:00 am - 6:00 pm
                  </span>
                </div>
                <div className="our-culture-container30">
                  <span className="footer_black1">sat:</span>
                  <span className="our-culture-text21 footer11">
                    8:00 am - 2:00 pm
                  </span>
                </div>
              </div>
              <div className="our-culture-container31">
                <span className="our-culture-text22 Footer">emergencies</span>
                <span className="our-culture-text23 footer11">
                  24 hours &amp; 7 days a week
                </span>
                <span className="footer_black1">(999) 999-9999</span>
              </div>
            </div>
          </div>
          <div className="our-culture-container32">
            <div className="our-culture-container33"></div>
            <div className="our-culture-container34">
              <div className="our-culture-div3">
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

export default OurCulture
