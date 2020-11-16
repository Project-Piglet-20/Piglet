import Selectdropdown from './Selectdropdown';
import React, { Component } from 'react';
import { ACCESS_TOKEN } from '../../utils/Keys';
import axios from 'axios';
import { addIssue } from '../../../actions/addIssue';
import { connect } from 'react-redux';
import Phone from './Phone';
import OTP from './OTP';

var count = 0;
var valid = true;

class Form extends Component {
    state = {
        Category: 'Select Category',
        Type: null,
        Location: {
            lat: null,
            lng: null
        },
        Locality: null,
        Number: null,
        Status: 'Reported',
        DOC: '-'
    };
    componentDidMount() {
        count = 0;
        valid = true;
        this.getLocation();
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
            this.props.props.history.push({
                pathname: '/result',
                state: this.state,
                center: this.props.center
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
            Locality: null,
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
                            CategoryList={this.props.props.optionList}
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
                            <i className="material-icons" id="form_submit">
                                delete
                            </i>
                        </button>
                        <button
                            disabled={valid}
                            className="btn waves-effect waves-light center"
                            type="submit"
                        >
                            <i className="material-icons right" id="submit">
                                send
                            </i>
                            Submit
                        </button>
                    </div>
                    <br />
                </div>
                <div className="col s5 m7">
                    <br />
                    <p className="right" style={{ color: ' red' }}>
                        <i
                            className="material-icons tiny left"
                            style={{ verticalAlign: 'top' }}
                        >
                            announcement
                        </i>
                        We've automatically collected your location
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
