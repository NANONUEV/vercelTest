import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import './style.css'
import Contact from './views/contact'
import NewClientForm from './views/new-client-form'
import OurCulture from './views/our-culture'
import TeethCleaning from './views/teeth-cleaning'
import PetExams from './views/pet-exams'
import Blog from './views/blog'
import SpayNeuter from './views/spay-neuter'
import Vaccinations from './views/vaccinations'
import Emergency from './views/emergency'
import Careers from './views/careers'
import Home from './views/home'
import Surgery from './views/surgery'
import Grooming from './views/grooming'
import ReviewUs from './views/review-us'
import MakeAnAppointment from './views/make-an-appointment'
import OurTeam from './views/our-team'

const App = () => {
  return (
    <Router>
      <div>
        <Route component={Contact} exact path="/contact" />
        <Route component={NewClientForm} exact path="/new-client-form" />
        <Route component={OurCulture} exact path="/our-culture" />
        <Route component={TeethCleaning} exact path="/teeth-cleaning" />
        <Route component={PetExams} exact path="/pet-exams" />
        <Route component={Blog} exact path="/blog" />
        <Route component={SpayNeuter} exact path="/spay-neuter" />
        <Route component={Vaccinations} exact path="/vaccinations" />
        <Route component={Emergency} exact path="/emergency" />
        <Route component={Careers} exact path="/careers" />
        <Route component={Home} exact path="/" />
        <Route component={Surgery} exact path="/surgery" />
        <Route component={Grooming} exact path="/grooming" />
        <Route component={ReviewUs} exact path="/review-us" />
        <Route
          component={MakeAnAppointment}
          exact
          path="/make-an-appointment"
        />
        <Route component={OurTeam} exact path="/our-team" />
      </div>
    </Router>
  )
}

ReactDOM.render(<App />, document.getElementById('app'))
