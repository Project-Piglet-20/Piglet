import React, { Component } from 'react';
import { firestore } from '../../config/fbConfig';

class Table extends Component {
    state = {
        issues: [],
        issueList: []
    };
    componentDidMount() {
        var issues = [];
        var promise = new Promise((resolve, reject) => {
            firestore
                .collection('issues')
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
                    issues.sort(function(a, b) { 
                        return a.DOR.localeCompare(b.DOR);
                    });
                    issues.sort(function(a, b) { 
                        return a.DOC.localeCompare(b.DOC);
                    });
                    this.setState({ issues: issues });
                    resolve(this.state.issues);
                })
                .catch(function (error) {
                    console.log(error);
                });
        });
        promise.then((issues) => {
            var id = 0;
            const ListIssue = issues.map((issue) => {
                console.log('inside map');
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
            console.log(ListIssue);
            this.setState({ issueList: ListIssue });
        });
    }
    clickHandler = (event) => {
        var issues = this.state.issues.filter((issue) => issue.docid === event);
        const DocID = issues[0].docid;
        firestore
            .collection('issues')
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
                            <th className="center">
                                <i className="material-icons left">
                                    info_outline
                                </i>
                                Action
                            </th>
                        </tr>
                    </thead>
                    <tbody>{this.state.issueList}</tbody>
                </table>
            </div>
        );
    }
}

export default Table;
