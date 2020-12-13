import React, { Component } from 'react';
import firebase from 'firebase/app';
import 'firebase/firestore';

class Table extends Component {
    state = {
        issues: [],
        issueList: []
    };
    componentDidMount() {
        var issues = [];
        var promise = new Promise((resolve, reject) => {
            var db = firebase.firestore();
            db.collection('issues')
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
                        tempdata.id = issues.length + 1;
                        issues.push(tempdata);
                    });
                    issues.sort(function (a, b) {
                            return a.DOR.localeCompare(b.DOR);
                        }).sort(function (a, b) {
                            return a.DOC.localeCompare(b.DOC);
                        }).sort((a, b) => a.Locality > b.Locality ? 1 : b.Locality > a.Locality ? -1 : 0);
                    this.setState({ issues: issues });
                    resolve(this.state.issues);
                })
                .catch(function (error) {
                    console.log(error);
                });
        });
        promise.then((issues) => {
            var id = 1;
            const ListIssue = issues.map((issue) => {
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
                            {'\xa0\xa0'} {issue.Status}
                        </td>
                        <td>
                            {'\xa0\xa0'} {issue.DOC}
                        </td>
                        <td className="center">
                            <button
                                className="btn waves-effect waves-red red"
                                value="Delete"
                                onClick={() => this.clickHandler(issue.docid)}
                            >
                                Delete
                            </button>
                        </td>
                    </tr>
                );
            });
            this.setState({ issueList: ListIssue });
        });
    }
    clickHandler = (event) => {
        var issues = this.state.issues.filter((issue) => issue.docid === event);
        const DocID = issues[0].docid;
        var db = firebase.firestore();
        db.collection('issues')
            .doc(DocID)
            .delete()
            .then(function () {
                console.log('Document successfully deleted!');
            })
            .catch(function (error) {
                console.error('Error removing document: ', error);
            });
        var newIssues = this.state.issues.filter(
            (issue) => issue.docid !== event
        );
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
                    <td>
                        {'\xa0\xa0'} {issue.Status}
                    </td>
                    <td>
                        {'\xa0\xa0'} {issue.DOC}
                    </td>
                    <td className="center">
                        <button
                            className="btn waves-effect waves-red red"
                            value={issue.Status}
                            onClick={() => this.clickHandler(issue.docid)}
                        >
                            Delete
                        </button>
                    </td>
                </tr>
            );
        });
        this.setState({ issueList });
    };
    render() {
        return (
            <div>
                <br />
                <table className="highlight responsive-table">
                    <thead>
                        <tr>
                            <th>Sl No</th>
                            <th>Issue Category</th>
                            <th className="center">Issue Type</th>
                            <th className="center">Location</th>
                            <th>Date of Reporting</th>
                            <th className="center">Status</th>
                            <th>Date of Closure</th>
                            <th className="center">Action</th>
                        </tr>
                    </thead>
                    <tbody>{this.state.issueList}</tbody>
                </table>
            </div>
        );
    }
}

export default Table;
