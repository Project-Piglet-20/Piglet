import { BrowserRouter, Route } from 'react-router-dom';
import Report from './components/navigation/Report';
import Home from './components/navigation/Home';
import About from './components/navigation/About';
import Corporator from './components/corporator/Corporator';
import Result from './components/utils/form/Result';
import React, { Component } from 'react';
import firebase from './config/fbConfig';
import Login from './components/corporator/Login';
import axios from 'axios';
import './App.css';

var ACCESS_TOKEN =
    'pk.eyJ1IjoidmlwaW5yYmhhcmFkd2FqIiwiYSI6ImNrY3VvZGQ0MzJhNHYyeHM2a21uNGEzZm4ifQ.53CYrj7PS_gUiv8iqESrXQ';

class App extends Component {
    state = {
        issues: [],
        issueList: []
    };
    UNSAFE_componentWillMount() {
        var issues = [];
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition((position) => {
                var url =
                    'https://api.mapbox.com/geocoding/v5/mapbox.places/' +
                    position.coords.longitude +
                    ', ' +
                    position.coords.latitude +
                    '.json?access_token=' +
                    ACCESS_TOKEN;
                axios.get(url).then((res) => {
                    var promise = new Promise((resolve, reject) => {
                        var db = firebase.firestore();
                        db.collection('issues')
                            .where('Locality', '==', res.data.features[1].text)
                            .get()
                            .then((querySnapshot) => {
                                querySnapshot.forEach((doc) => {
                                    var tempdata = doc.data();
                                    tempdata.DOR = new Date(
                                        tempdata.DOR.seconds * 1000
                                    ).toLocaleDateString('en-US');
                                    if (tempdata.DOC !== '-') {
                                        tempdata.DOC = new Date(
                                            tempdata.DOC.seconds * 1000
                                        ).toLocaleDateString('en-US');
                                    }
                                    issues.push(tempdata);
                                });
                                issues.sort(function (a, b) {
                                    return a.DOR.localeCompare(b.DOR);
                                });
                                this.setState({ issues });
                                resolve(this.state.issues);
                            })
                            .catch(function (error) {
                                console.log(error);
                            });
                    });
                    promise.then((issues) => {
                        this.setState({ issueList: issues });
                    });
                });
            });
        } else {
            alert('Sorry, browser does not support geolocation!');
        }
    }
    render() {
        return (
            <BrowserRouter>
                <div className="App">
                    <Route exact path="/" component={Report} />
                    <Route path="/about" component={About} />
                    <Route
                        path="/home"
                        component={() => (
                            <Home issueList={this.state.issueList} />
                        )}
                    />
                    <Route path="/login" component={Login} />
                    <Route path="/corporator" component={Corporator} />
                    <Route path="/result" component={Result} />
                </div>
            </BrowserRouter>
        );
    }
}

export default App;
