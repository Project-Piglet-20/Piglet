import React, { Component } from 'react';
import Table from '../utils/Table';
import Map from '../utils/Map';
import Auxiliary from '../hoc/Auxiliary';
import axios from 'axios';

var ACCESS_TOKEN =
    'pk.eyJ1IjoidmlwaW5yYmhhcmFkd2FqIiwiYSI6ImNrY3VvZGQ0MzJhNHYyeHM2a21uNGEzZm4ifQ.53CYrj7PS_gUiv8iqESrXQ';

class Home extends Component {
    state = {
        issues: [],
        issueList: []
    };
    componentDidMount() {
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
                        this.props.db
                            .collection('issues')
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
                                    tempdata.id = issues.length + 1;
                                    issues.push(tempdata);
                                });
                                resolve(issues);
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
            <Auxiliary>
                <Map center={this.props.center} />
                <div className="card-panel hoverable">
                    <h3 className="center" style={{ color: '#00838f' }}>
                        Problems reported near you
                    </h3>
                    <br />
                    <Table issueList={this.state.issueList} />
                </div>
                <br />
            </Auxiliary>
        );
    }
}

export default Home;
