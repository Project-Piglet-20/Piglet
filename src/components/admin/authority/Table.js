import React, { Component } from 'react';
import firebase from 'firebase/app';
import 'firebase/firestore';

class Table extends Component {
    state = {
        authorities: [],
        authorityList: [],
        clickedID: '',
        name: '',
        email: '',
        phone: '',
        password: '',
        locality: ''
    };
    componentDidMount() {
        var authorities = [];
        var promise = new Promise((resolve, reject) => {
            var db = firebase.firestore();
            db.collection('authority')
                .get()
                .then((querySnapshot) => {
                    querySnapshot.forEach((doc) => {
                        var tempdata = doc.data();
                        tempdata.docid = doc.id;
                        tempdata.id = authorities.length + 1;
                        authorities.push(tempdata);
                    });
                    authorities.sort((a, b) =>
                        a.locality > b.locality
                            ? 1
                            : b.locality > a.locality
                            ? -1
                            : 0
                    );
                    this.setState({ authorities: authorities });
                    resolve(this.state.authorities);
                })
                .catch(function (error) {
                    console.log(error);
                });
        });
        promise.then((authorities) => {
            var id = 1;
            const ListIssue = authorities.map((authority) => {
                return (
                    <tr key={++id}>
                        <td className="center">
                            {'\xa0\xa0'} {id}
                        </td>
                        <td className="center">
                            {'\xa0\xa0'} {authority.name}
                        </td>
                        <td className="center">
                            {'\xa0\xa0'} {authority.email}
                        </td>
                        <td className="center">
                            {'\xa0\xa0'} {authority.phone}
                        </td>
                        <td className="center">
                            {'\xa0\xa0'} {authority.password}
                        </td>
                        <td className="center">
                            {'\xa0\xa0'} {authority.locality}
                        </td>
                        <td className="center">
                            <button
                                className="btn-floating waves-effect waves-red red"
                                value="Delete"
                                onClick={() =>
                                    this.deleteHandler(authority.docid)
                                }
                            >
                                <i className="material-icons">clear</i>
                            </button>
                        </td>
                        <td className="center">
                            <button
                                data-target="modalEdit"
                                className="btn-flat waves-effect waves-light green-text modal-trigger"
                                value="Edit"
                                onClick={() =>
                                    this.setState({
                                        clickedID: authority.docid,
                                        name: authority.name,
                                        email: authority.email,
                                        phone: authority.phone,
                                        password: authority.password,
                                        locality: authority.locality
                                    })
                                }
                            >
                                <i className="material-icons">edit</i>
                            </button>
                        </td>
                    </tr>
                );
            });
            this.setState({ authorityList: ListIssue });
        });
    }
    clickHandler = (event) => {
        this.setState({
            [event.target.id]: event.target.value
        });
    };
    deleteHandler = (event) => {
        var authorities = this.state.authorities.filter(
            (authority) => authority.docid === event
        );
        const DocID = authorities[0].docid;
        var db = firebase.firestore();
        db.collection('authority')
            .doc(DocID)
            .delete()
            .then(function () {
                console.log('Document successfully deleted!');
            })
            .catch(function (error) {
                console.error('Error removing document: ', error);
            });
        var newAuthorities = this.state.authorities.filter(
            (authority) => authority.docid !== event
        );
        this.setState({ authorities: newAuthorities });

        var id = 0;
        const authorityList = this.state.authorities.map((authority) => {
            return (
                <tr key={++id}>
                    <td className="center">
                        {'\xa0\xa0'} {id}
                    </td>
                    <td className="center">
                        {'\xa0\xa0'} {authority.name}
                    </td>
                    <td className="center">
                        {'\xa0\xa0'} {authority.email}
                    </td>
                    <td className="center">
                        {'\xa0\xa0'} {authority.phone}
                    </td>
                    <td className="center">
                        {'\xa0\xa0'} {authority.password}
                    </td>
                    <td className="center">
                        {'\xa0\xa0'} {authority.locality}
                    </td>
                    <td className="center">
                        <button
                            className="btn-floating waves-effect waves-red red"
                            value={authority.Status}
                            onClick={() => this.deleteHandler(authority.docid)}
                        >
                            <i className="material-icons">clear</i>
                        </button>
                    </td>
                    <td className="center">
                        <button
                            className="btn-floating waves-effect waves-light green"
                            value="Edit"
                            onClick={() =>
                                this.setState({
                                    clickedID: authority.docid
                                })
                            }
                        >
                            <i className="material-icons">edit</i>
                        </button>
                    </td>
                </tr>
            );
        });
        this.setState({ authorityList });
    };
    editHandler = (event) => {
        event.preventDefault();
        const authorityDetails = {
            name: '',
            email: '',
            phone: '',
            password: '',
            locality: ''
        };
        authorityDetails.name = this.state.name;
        authorityDetails.email = this.state.email;
        authorityDetails.phone = this.state.phone;
        authorityDetails.password = this.state.password;
        authorityDetails.locality = this.state.locality;

        var authorityfilter = this.state.authorities.filter(
            (authority) => authority.docid === this.state.clickedID
        );

        const DocID = authorityfilter[0].docid;
        var db = firebase.firestore();
        db.collection('authority')
            .doc(DocID)
            .update({
                name: this.state.name,
                email: this.state.email,
                phone: this.state.phone,
                password: this.state.password,
                locality: this.state.locality
            })
            .then(function () {
                console.log('Document successfully edited!');
            })
            .catch(function (error) {
                console.error('Error updating document: ', error);
            });
        var newAuthorities = this.state.authorities.filter(
            (authority) => authority.docid !== event
        );
        this.setState({ authorities: newAuthorities });

        var id = 0;
        const authorityList = this.state.authorities.map((authority) => {
            return (
                <tr key={++id}>
                    <td className="center">
                        {'\xa0\xa0'} {id}
                    </td>
                    <td className="center">
                        {'\xa0\xa0'} {authority.name}
                    </td>
                    <td className="center">
                        {'\xa0\xa0'} {authority.email}
                    </td>
                    <td className="center">
                        {'\xa0\xa0'} {authority.phone}
                    </td>
                    <td className="center">
                        {'\xa0\xa0'} {authority.password}
                    </td>
                    <td className="center">
                        {'\xa0\xa0'} {authority.locality}
                    </td>
                    <td className="center">
                        <button
                            className="btn-floating waves-effect waves-red red"
                            value={authority.Status}
                            onClick={() => this.deleteHandler(authority.docid)}
                        >
                            <i className="material-icons">clear</i>
                        </button>
                    </td>
                    <td className="center">
                        <button
                            className="btn-floating waves-effect waves-light green modal-trigger"
                            value="Edit"
                            data-target="modalEdit"
                            onClick={() =>
                                this.setState({
                                    clickedID: authority.docid
                                })
                            }
                        >
                            <i className="material-icons">edit</i>
                        </button>
                    </td>
                </tr>
            );
        });
        this.setState({ authorityList });
    };
    render() {
        return (
            <div>
                <br />
                <table className="highlight responsive-table">
                    <thead>
                        <tr>
                            <th className="center">Sl No</th>
                            <th className="center">Name</th>
                            <th className="center">Email</th>
                            <th className="center">Phone</th>
                            <th className="center">Password</th>
                            <th className="center">Locality</th>
                            <th className="center red-text">Delete</th>
                            <th className="center green-text">Edit</th>
                        </tr>
                    </thead>
                    <tbody>{this.state.authorityList}</tbody>
                </table>
                <div id="modalEdit" className="modal">
                    <div className="modal-content">
                        <form onSubmit={(event) => this.editHandler(event)}>
                            <h3 className="center blue-grey-text text-darken-4">
                                Edit Authority Details
                            </h3>
                            <div className="divider red accent-3"></div>
                            <br />
                            <div className="container">
                                <div className="input-field">
                                    <input
                                        id="name"
                                        placeholder={this.state.name}
                                        type="text"
                                        className="validate"
                                        data-length="20"
                                        onChange={(e) => this.clickHandler(e)}
                                    />
                                    <label
                                        htmlFor="name"
                                        className="black-text"
                                    >
                                        Name
                                    </label>
                                </div>
                                <div className="input-field">
                                    <input
                                        id="email"
                                        placeholder={this.state.email}
                                        type="email"
                                        className="validate"
                                        data-length="30"
                                        onChange={(e) => this.clickHandler(e)}
                                    />
                                    <label
                                        htmlFor="email"
                                        className="black-text"
                                    >
                                        Email
                                    </label>
                                </div>
                                <div className="input-field">
                                    <input
                                        id="phone"
                                        placeholder={this.state.phone}
                                        type="tel"
                                        className="validate"
                                        maxLength={10}
                                        onChange={(e) => this.clickHandler(e)}
                                    />
                                    <label
                                        htmlFor="phone"
                                        className="black-text"
                                    >
                                        Phone
                                    </label>
                                </div>
                                <div className="input-field">
                                    <input
                                        id="password"
                                        type="password"
                                        className="validate"
                                        data-length="30"
                                        onChange={(e) => this.clickHandler(e)}
                                    />
                                    <label
                                        htmlFor="password"
                                        className="black-text"
                                    >
                                        Password
                                    </label>
                                </div>
                                <div className="input-field">
                                    <input
                                        id="locality"
                                        placeholder={this.state.locality}
                                        type="text"
                                        className="validate"
                                        data-length="20"
                                        onChange={(e) => this.clickHandler(e)}
                                    />
                                    <label
                                        htmlFor="locality"
                                        className="black-text"
                                    >
                                        Locality
                                    </label>
                                </div>
                            </div>
                            <div className="modal-footer grey lighten-4">
                                <div className="center">
                                    <button
                                        className="btn waves-effect waves-light"
                                        type="submit"
                                        name="action"
                                    >
                                        Submit
                                        <i className="material-icons right">
                                            send
                                        </i>
                                    </button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        );
    }
}

export default Table;
