import React, { Component } from 'react';
import firebase from 'firebase/app';
import 'firebase/firestore';
import axios from 'axios';
import { withRouter } from 'react-router-dom';
import Heatmap from '../utils/../../utils/Heatmap';

var ACCESS_TOKEN =
    'pk.eyJ1IjoidmlwaW5yYmhhcmFkd2FqIiwiYSI6ImNrY3VvZGQ0MzJhNHYyeHM2a21uNGEzZm4ifQ.53CYrj7PS_gUiv8iqESrXQ';

class Table extends Component {
    state = {
        issues: [],
        issueList: [],
        center: {
            lat: null,
            lng: null
        }
    };
    clickHandler = (event) => {
        var issues = this.state.issues.filter((issue) => issue.DocID === event);
        var newIssues = this.state.issues.filter(
            (issue) => issue.DocID !== event
        );
        issues[0].Status = 'Resolved';
        var date = new Date();
        var today =
            (date.getDate() < 10 ? '0' + date.getDate() : date.getDate()) +
            '/' +
            (date.getMonth() + 1 < 10
                ? '0' + (date.getMonth() + 1)
                : date.getMonth() + 1) +
            '/' +
            date.getFullYear();
        issues[0].DOC = today;
        var db = firebase.firestore();
        db.collection('issues')
            .doc(issues[0].docid)
            .update({ DOC: new Date(), Status: 'Resolved' });
        newIssues.push(issues[0]);
        this.setState({ issues: newIssues });

        var id = 0;
        const issueList = this.state.issues.map((issue) => {
            return (
                <tr key={++id}>
                    <td>
                        {'\xa0\xa0'} {id}
                    </td>
                    <td>
                        {'\xa0\xa0'} {issue.Category}
                    </td>
                    <td>
                        {'\xa0\xa0'} {issue.Type}
                    </td>
                    <td>
                        {'\xa0\xa0'} {issue.Locality}
                    </td>
                    <td>
                        {'\xa0\xa0'} {issue.DOR}
                    </td>
                    <td className="center">
                        <button
                            className={
                                issue.Status === 'Resolved'
                                    ? 'btn waves-effect waves-teal'
                                    : 'btn waves-effect waves-red red'
                            }
                            value={issue.Status}
                            onClick={() => this.clickHandler(issue.DocID)}
                        >
                            {issue.Status}
                        </button>
                    </td>
                    <td>
                        {'\xa0\xa0'} {issue.DOC}
                    </td>
                </tr>
            );
        });
        this.setState({ issueList });
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
                this.setState({
                    center: {
                        lat: position.coords.latitude,
                        lng: position.coords.longitude
                    }
                });
                axios.get(url).then((res) => {
                    var promise = new Promise((resolve, reject) => {
                        var db = firebase.firestore();
                        db.collection('issues')
                            .where('Locality', '==', res.data.features[1].text)
                            .get()
                            .then((querySnapshot) => {
                                querySnapshot.forEach((doc) => {
                                    var tempdata = doc.data();
                                    tempdata.docid = doc.id;
                                    tempdata.DOR = new Date(
                                        tempdata.DOR.seconds * 1000
                                    ).toLocaleDateString('en-US');
                                    if (tempdata.DOC !== '-') {
                                        tempdata.DOC = new Date(
                                            tempdata.DOC.seconds * 1000
                                        ).toLocaleDateString('en-US');
                                    }
                                    tempdata.DocID = doc.id;
                                    if (tempdata.Status !== 'Resolved')
                                        issues.push(tempdata);
                                });
                                issues
                                    .sort(function (a, b) {
                                        return a.DOR.localeCompare(b.DOR);
                                    })
                                    .sort(function (a, b) {
                                        return a.DOC.localeCompare(b.DOC);
                                    });
                                this.setState({ issues });
                                resolve(this.state.issues);
                            })
                            .catch(function (error) {
                                console.log(error);
                            });
                    });
                    promise.then((issues) => {
                        var id = 1;
                        const issueList = issues.map((issue) => {
                            return (
                                <tr key={++id}>
                                    <td>
                                        {'\xa0\xa0'} {id}
                                    </td>
                                    <td>
                                        {'\xa0\xa0'} {issue.Category}
                                    </td>
                                    <td>
                                        {'\xa0\xa0'} {issue.Type}
                                    </td>
                                    <td>
                                        {'\xa0\xa0'} {issue.Locality}
                                    </td>
                                    <td>
                                        {'\xa0\xa0'} {issue.DOR}
                                    </td>
                                    <td>
                                        <button
                                            className="btn waves-effect waves-red red"
                                            onClick={() =>
                                                this.clickHandler(issue.docid)
                                            }
                                        >
                                            {issue.Status}
                                        </button>
                                    </td>
                                    <td>
                                        {'\xa0\xa0'} {issue.DOC}
                                    </td>
                                </tr>
                            );
                        });
                        this.setState({ issueList });
                    });
                });
            });
        } else {
            alert('Sorry, browser does not support geolocation!');
        }
    }
    render() {
        return (
            <div>
                <div className="divider"></div>
                <br />
                <Heatmap center={this.state.center} />
                <br />
                <table className="highlight">
                    <thead>
                        <tr>
                            <th>
                                <i className="material-icons left">
                                    format_list_numbered
                                </i>
                                Sl No
                            </th>
                            <th>
                                <i className="material-icons left">search</i>
                                Issue Category
                            </th>
                            <th>
                                <i className="material-icons left">
                                    info_outline
                                </i>
                                Issue Type
                            </th>
                            <th>
                                <i className="material-icons left">place</i>
                                Location
                            </th>
                            <th>
                                <i className="material-icons left">today</i>
                                Date of Reporting
                            </th>
                            <th>
                                <i className="material-icons left">done_all</i>
                                Status
                            </th>
                            <th>
                                <i className="material-icons left">
                                    date_range
                                </i>
                                Date of Closure
                            </th>
                        </tr>
                    </thead>
                    <tbody>{this.state.issueList}</tbody>
                </table>
            </div>
        );
    }
}

export default withRouter(Table);
