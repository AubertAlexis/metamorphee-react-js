import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import AccompagnementPage from './pages/AccompagnementPage';
import HomePage from './pages/HomePage';
import MetamorphosePage from './pages/MetamorphosePage';
import ParfumsPage from './pages/ParfumsPage';
import RekiPage from './pages/RekiPage';
import SoinPage from './pages/SoinPage';
import SeancePage from './pages/SeancePage';
import './resources/style/app.scss';
import BlogPage from './pages/BlogPage';
import BlogDetailsPage from './pages/BlogDetailsPage';
import CoachingDetailsPage from './pages/CoachingDetailsPage';
import ConferenceDetailsPage from './pages/ConferenceDetailsPage';
import ConferenceValidPage from './pages/ConferenceValidPage';
import ContactPage from './pages/ContactPage';
import ScrollToTop from './components/ScrollToTop';

require("./resources/js/script.js");

const App = () => {
  return (
    <Router>

        <ScrollToTop />
        
        <Switch>
            <Route path="/contact" exact component={ContactPage} />
            <Route path="/conference-valid" exact component={ConferenceValidPage} />
            <Route path="/conference-details" exact component={ConferenceDetailsPage} />
            <Route path="/coaching-details" exact component={CoachingDetailsPage} />
            <Route path="/article-details" exact component={BlogDetailsPage} />
            <Route path="/blog" exact component={BlogPage} />
            <Route path="/seances" exact component={SeancePage} />
            <Route path="/soins" exact component={SoinPage} />
            <Route path="/reki" exact component={RekiPage} />
            <Route path="/parfums" exact component={ParfumsPage} />
            <Route path="/metamorphose" exact component={MetamorphosePage} />
            <Route path="/accompagnement-deuil" exact component={AccompagnementPage} />
            <Route path="/" exact component={HomePage} />
        </Switch>
    </Router>
  );

}

ReactDOM.render(<App />,document.getElementById('root'));

