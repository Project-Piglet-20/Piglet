import Selectdropdown from './Selectdropdown';
import { ACCESS_TOKEN } from '../../utils/Keys';
import firebase from '../../../config/fbConfig';
import React, { Component } from 'react';
import axios from 'axios';
import { addIssue } from '../../../actions/addIssue';
import { connect } from 'react-redux';
import Phone from './Phone';
import OTP from './OTP';

var count = 0;
var valid = true;
var CategoryList = [];

class Form extends Component {
    state = {
        Category: 'Select Category',
        Type: null,
        Location: {
            lat: null,
            lng: null
        },
        Number: null,
        Status: 'Reported',
        DOC: '-'
    };
    UNSAFE_componentWillMount() {
        count = 0;
        valid = true;
        this.getList();
        this.getLocation();
    }
    getList() {
        var db = firebase.firestore();
        db.collection('dropdownList')
            .get()
            .then((querySnapshot) => {
                querySnapshot.forEach((doc) => {
                    var tempdata = doc.data();
                    if (tempdata.id !== 'null') CategoryList.push(tempdata);
                });
            })
            .catch(function (error) {
                console.log(error);
            });
    }
    getLocation() {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition((position) => {
                this.setState({
                    Location: {
                        lat: position.coords.latitude,
                        lng: position.coords.longitude
                    }
                });
                this.get_data(
                    position.coords.latitude,
                    position.coords.longitude
                );
            });
        } else {
            alert('Sorry, browser does not support geolocation!');
        }
    }
    get_data = (latitude, longitude) => {
        var url =
            'https://api.mapbox.com/geocoding/v5/mapbox.places/' +
            longitude +
            ', ' +
            latitude +
            '.json?access_token=' +
            ACCESS_TOKEN;
        axios.get(url).then((res) => {
            var toastHTML = 'Your Location: ' + res.data.features[1].text;
            window.M.toast({ html: toastHTML, options: {
                displayLength: 100
            } });
            this.setState({ Locality: res.data.features[1].text });
        });
    };
    clickHandler = (event) => {
        if (event) {
            if (event.id !== 'OTP') {
                this.setState({
                    [event.target.id]: event.target.value
                });
            }
            ++count;
        }
        if (count === 2) valid = false;
    };
    addData = (event) => {
        this.setState({
            Category: event.id,
            Type: event.value
        });
        ++count;
    };
    decrementCount = (count) => {
        --count;
    };
    submitHandler = (event) => {
        event.preventDefault();
        if (
            this.state.Location.lat === null ||
            this.state.Location.lng === null
        ) {
            alert(
                'You have not enabled location. Please enable location and refresh page to proceed further.'
            );
            return;
        }
        if (count >= 2) {
            this.setState({ id: this.props.id });
            this.props.addIssue(this.state);
            window.M.toast({
                html: 'Thank you contributing to well being of the society! :)',
                classes: 'rounded'
            });
            this.props.routeList.history.push({
                pathname: '/result',
                state: this.state
            });
        } else {
            alert('All fields are mandatory!');
        }
    };
    resetHandler = () => {
        const state = {
            Category: 'Select Category',
            Type: null,
            Location: {
                lat: null,
                lng: null
            },
            Number: null,
            Status: 'Reported',
            DOC: '-'
        };
        this.setState({ state });
    };
    render() {
        return (
            <form
                onSubmit={(event) => this.submitHandler(event)}
                onReset={this.resetHandler}
            >
                <h3 className="center" style={{ color: '#00838f' }}>
                    Fill in the details
                    <i className="material-icons small">article</i>
                </h3>
                <br /> <br />
                <div className="card-content">
                    <div>
                        <Selectdropdown
                            addData={this.addData}
                            CategoryList={CategoryList}
                            count={count}
                            decrementCount={this.decrementCount}
                            value={this.state.Type}
                        />
                    </div>
                    <div>
                        <Phone
                            clickHandler={this.clickHandler}
                            value={this.state.Number}
                        />
                    </div>
                    <div>
                        <OTP value={this.state.OTP} />
                    </div>
                    <br />
                    <div
                        className="card-content center"
                        style={{ paddingLeft: '40px' }}
                    >
                        <button
                            disabled={valid}
                            className="btn-floating waves-effect waves-light red right"
                            type="reset"
                        >
                            {' '}
                            <i className="material-icons" id="form_submit">
                                delete
                            </i>{' '}
                        </button>
                        <button
                            disabled={valid}
                            className="btn waves-effect waves-light center"
                            type="submit"
                        >
                            {' '}
                            <i className="material-icons right" id="submit">
                                send
                            </i>{' '}
                            Submit{' '}
                        </button>
                    </div>
                    <br />
                </div>
                <div>
                    <br />
                    <p className="right" style={{ color: ' red' }}>
                        <i
                            className="material-icons tiny left"
                            style={{ verticalAlign: 'top' }}
                        >
                            announcement
                        </i>
                        We've automatically collected your location{' '}
                        <i className="material-icons right">place</i>
                    </p>
                    <br />
                </div>
            </form>
        );
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        addIssue: (issue) => dispatch(addIssue(issue))
    };
};

export default connect(null, mapDispatchToProps)(Form);
