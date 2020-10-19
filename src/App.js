import Analytics from './components/analytics/Analytics.js';
import Corporator from './components/corporator/Corporator';
import { BrowserRouter, Route } from 'react-router-dom';
import Result from './components/form/Result';
import Navbar from './navigation/Navbar';
import Footer from './navigation/Footer';
import React, { Component } from 'react';
import Report from './navigation/Report';
import firebase from './config/fbConfig';
import About from './navigation/About';
import Home from './navigation/Home';
import Login from './components/corporator/Login';
import axios from 'axios';

var ACCESS_TOKEN = 'pk.eyJ1IjoidmlwaW5yYmhhcmFkd2FqIiwiYSI6ImNrY3VvZGQ0MzJhNHYyeHM2a21uNGEzZm4ifQ.53CYrj7PS_gUiv8iqESrXQ';
var count = 0;

class App extends Component {
    state = {
        issues: [],
        issueList: []
    }
    componentDidMount() {
        if(count++ === 0)
            window.M.toast({html: 'Welcome to our App!', classes: 'rounded'})
    }
    UNSAFE_componentWillMount()  {
        var issues = [];
        if(navigator.geolocation){
            navigator.geolocation.getCurrentPosition(position => {
                var url = 'https://api.mapbox.com/geocoding/v5/mapbox.places/' + position.coords.longitude + ', ' + position.coords.latitude + '.json?access_token=' + ACCESS_TOKEN; 
                axios.get(url).then(res => {
                    var promise = new Promise((resolve, reject) => {
                        var db = firebase.firestore();
                        db.collection("issues")
                        .where("Locality", "==", res.data.features[1].text)
                        .get()
                        .then((querySnapshot) => {
                            querySnapshot.forEach((doc) => {
                                var tempdata = doc.data();
                                tempdata.DOR = new Date(tempdata.DOR.seconds * 1000).toLocaleDateString("en-US")
                                if(tempdata.DOC !== "-") {
                                    tempdata.DOC = new Date(tempdata.DOC.seconds * 1000).toLocaleDateString("en-US")
                                }
                                issues.push(tempdata);
                            });
                            issues.sort(function(a, b) { 
                                return a.DOR.localeCompare(b.DOR);
                            });
                            this.setState({ issues });
                            resolve(this.state.issues);
                        })
                        .catch(function(error) {
                            console.log(error);
                        })
                    })
                    promise.then(issues => {
                        var id = 0;
                        const issueList = issues.map(issue => {
                            return (
                                <tr key= { ++id }>
                                    <td> {'\xa0'} { id } </td>
                                    <td> {'\xa0'} { issue.Category } </td>
                                    <td> {'\xa0'} { issue.Type } </td>
                                    <td> {'\xa0'} { issue.Locality } </td>
                                    <td> {'\xa0'} { issue.DOR } </td>
                                    <td> {'\xa0'} { issue.Status } </td>
                                    <td> {'\xa0'} { issue.DOC } </td>
                                </tr>
                            )
                        })
                        this.setState({ issueList })
                    })
                })
            });
        }
        else{
            alert("Sorry, browser does not support geolocation!");
        }
    }
  render() {
    return (
        <BrowserRouter>
            <div className="App teal lighten-3">
                <Navbar />
                <Route exact path= "/" component= { Report } />
                <Route path= "/about" component= { About }/>
                <Route path= "/home" component= { () => <Home issueList= { this.state.issueList }/> } />
                <Route path= "/login" component= { Login }/>
                <Route path= "/corporator" component= { Corporator }/>
                <Route path= "/analytics" component= { Analytics }/>
                <Route path= "/result" component= { Result }/>
                <Footer />
            </div>
        </BrowserRouter>
    );
  }
} 

export default App;