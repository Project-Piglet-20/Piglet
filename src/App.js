import { BrowserRouter, Route } from 'react-router-dom';
import Report from './components/navigation/Report';
import Home from './components/navigation/Home';
import About from './components/navigation/About';
import Result from './components/utils/form/Result';
import React, { Component } from 'react';
import firebase from 'firebase/app';
import 'firebase/firestore';
import AdminLogin from './components/admin/AdminLogin';
import AdminAuthority from './components/admin/authority/AdminAuthority';
import AdminIssues from './components/admin/issues/AdminIssues';
import axios from 'axios';
import './App.css';
import Navbar from './components/navigation/Navbar';
import Footer from './components/navigation/Footer';
import AuthorityLogin from './components/authority/AuthorityLogin';
import AuthorityIssues from './components/authority/issues/AuthorityIssues';

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
                    <Navbar />
                    <Route exact path="/" component={Report} />
                    <Route path="/report" component={Report} />
                    <Route path="/about" component={About} />
                    <Route
                        path="/home"
                        component={() => (
                            <Home issueList={this.state.issueList} />
                        )}
                    />
                    <Route path="/result" component={Result} />
                    <Route path="/authoritylogin" component={AuthorityLogin} />
                    <Route path="/authorityhome" component={AuthorityIssues} />
                    <Route path="/adminlogin" component={AdminLogin} />
                    <Route path="/adminhome/issue" component={AdminIssues} />
                    <Route
                        path="/adminhome/authority"
                        component={AdminAuthority}
                    />
                    <Footer />
                </div>
            </BrowserRouter>
        );
    }
}

export default App;
