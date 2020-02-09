import React from 'react';
import Header from './pages/Header';
import About from './pages/About';
import Resume from './pages/Resume';
import Contact from './pages/Contact';
import Footer from './pages/Footer';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import './App.scss';

export default () => {
    return (
        <div className="mt-150 mb-150">
            <div className="container">
                <div className="row ">
                    <Header/>
                    <div className="col-md-9 right-content pd-r0 pd-l0">
                        <Router>
                            <Switch>
                                <Route path="/resume" component={Resume}/>
                                <Route path="/contact" component={Contact}/>
                                <Route path="/" component={About}/>
                            </Switch>
                        </Router>
                    </div>
                    <Footer/>
                </div>
            </div>
        </div>
    );
};
