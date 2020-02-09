import React from 'react';
import Header from './pages/Header';
import About from './pages/About';
import Resume from './pages/Resume';
import Contact from './pages/Contact';
import Footer from './pages/Footer';
import {HashRouter as Router, Route, Switch} from "react-router-dom";
import './App.scss';

export default () => {
    return (
        <div className="mt-150 mb-150">
            <div className="container">
                <div className="row ">
                    <Router>
                        <Header/>
                        <Switch>
                            <div className="col-md-9 right-content pd-r0 pd-l0">
                                <Route path="/resume" component={Resume}/>
                                <Route path="/contact" component={Contact}/>
                                <Route path="/" component={About}/>
                            </div>
                        </Switch>
                    </Router>
                    <Footer/>
                </div>
            </div>
        </div>
    );
};
