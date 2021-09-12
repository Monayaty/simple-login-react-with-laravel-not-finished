import React from 'react';
//import 'semantic-ui-css/semantic.min.css';
import Header from './Header';
import Carousel from './Slider';
import Footer from './Footer';
import Signin from './Signin';
import { Route, Switch } from 'react-router-dom';
// import CardGridView from './Card';

function Index() {
    return (
        <div>
            <Header />
            <Switch>
                <Route exact path="login" component={ Signin } />
                <Route exact path="/" component={ Carousel } />
            </Switch>
            <Footer />
        </div>
    );
}

export default Index;

