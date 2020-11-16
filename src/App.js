import { BrowserRouter, Route } from 'react-router-dom';
import Report from './components/navigation/Report';
import Home from './components/navigation/Home';
import About from './components/navigation/About';
import Authorityhome from './components/authority/Authorityhome';
import Result from './components/utils/form/Result';
import React, { Component } from 'react';
import { firestore } from './config/fbConfig';
import AuthorityLogin from './components/authority/Login';
import AdminLogin from './components/admin/Login';
import Adminhome from './components/admin/Adminhome';
// import Dashboard from './components/admin/Dashboard';
// import AdminAuthenticated from './components/admin/Adminauthenticated';
// import AuthorityAuthenticated from './components/authority/Authorityauthenticated';
import './App.css';

class App extends Component {
    state = {
        optionList: [],
        center: {
            lat: null,
            lng: null
        }
    };
    componentDidMount() {
        var options = [];
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition((position) => {
                this.setState({
                    center: {
                        lat: position.coords.latitude,
                        lng: position.coords.longitude
                    }
                });
            });
        }
        firestore
            .collection('dropdownList')
            .get()
            .then((querySnapshot) => {
                querySnapshot.forEach((doc) => {
                    var tempdata = doc.data();
                    options.push(tempdata);
                });
                this.setState({ optionList: options });
            })
            .catch(function (error) {
                console.log(error);
            });
    }
    render() {
        return (
            <BrowserRouter>
                <div className="App">
                    <Route
                        exact
                        path="/"
                        component={() => (
                            <Report
                                optionList={this.state.optionList}
                                center={this.state.center}
                                db={firestore}
                            />
                        )}
                    />
                    <Route
                        path="/home"
                        component={() => (
                            <Home center={this.state.center} db={firestore} />
                        )}
                    />
                    <Route path="/about" component={About} />
                    <Route
                        path="/authoritylogin"
                        component={() => <AuthorityLogin />}
                    />
                    <Route
                        path="/adminlogin"
                        component={() => <AdminLogin />}
                    />
                    <Route exact path="/adminhome" component={() => <Adminhome issueList={this.state.issueList} />}>
                    </Route>
                    <Route path="/authorityhome" component={Authorityhome} />
                    <Route path="/result" component={Result} />
                </div>
            </BrowserRouter>
        );
    }
}

export default App;
