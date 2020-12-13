import React, { Component } from 'react';
import Table from './Table';
import { addAuthority } from '../../../actions/addAuthority';
import { connect } from 'react-redux';

class AdminAuthority extends Component {
    state = {
        name: '',
        email: '',
        phone: '',
        password: '',
        locality: ''
    };
    logoutHandler = () => {
        this.props.history.push('/adminlogin');
    };
    issueClickHandler = () => {
        this.props.history.push('/adminhome/issue');
    };
    authorityClickHandler = () => {
        this.props.history.push('/adminhome/authority');
    };
    clickHandler = (event) => {
        this.setState({
            [event.target.id]: event.target.value
        });
    };
    submitHandler = (event) => {
        event.preventDefault();
        this.props.addAuthority(this.state);
    };
    render() {
        return (
            <div className="row">
                <div className="col m1">
                    <br />
                    <div style={{ paddingTop: '5px', paddingBottom: '10px' }}>
                        <button
                            className="btn waves-effect waves-light amber"
                            onClick={() => this.issueClickHandler()}
                        >
                            &nbsp;&nbsp;&nbsp;&nbsp;Issues&emsp;
                        </button>
                    </div>
                    <div
                        style={{
                            paddingTop: '5px',
                            paddingBottom: '10px'
                        }}
                    >
                        <button
                            className="btn waves-effect waves-light amber"
                            onClick={() => this.authorityClickHandler()}
                        >
                            Authority
                        </button>
                    </div>
                    <div
                        style={{
                            paddingTop: '5px',
                            paddingBottom: '5px'
                        }}
                    >
                        <button
                            data-target="modalAdd"
                            className="btn-floating btn-large waves-effect waves-light red modal-trigger"
                        >
                            <i className="material-icons">add</i>
                        </button>

                        <div id="modalAdd" className="modal">
                            <div className="modal-content">
                                <form
                                    onSubmit={(event) =>
                                        this.submitHandler(event)
                                    }
                                >
                                    <h3 className="center blue-grey-text text-darken-4">
                                        Add Authority
                                    </h3>
                                    <div className="divider red accent-3"></div>
                                    <br />
                                    <div className="container">
                                        <div className="input-field">
                                            <input
                                                id="name"
                                                type="text"
                                                className="validate"
                                                data-length="20"
                                                onChange={(e) =>
                                                    this.clickHandler(e)
                                                }
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
                                                type="email"
                                                className="validate"
                                                data-length="30"
                                                onChange={(e) =>
                                                    this.clickHandler(e)
                                                }
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
                                                type="tel"
                                                className="validate"
                                                maxLength={10}
                                                onChange={(e) =>
                                                    this.clickHandler(e)
                                                }
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
                                                onChange={(e) =>
                                                    this.clickHandler(e)
                                                }
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
                                                type="text"
                                                className="validate"
                                                data-length="20"
                                                onChange={(e) =>
                                                    this.clickHandler(e)
                                                }
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
                </div>
                <div className="col s12 m10">
                    <br />
                    <div className="divider"></div>
                    <Table />
                </div>
                <div className="col m1">
                    <div className="center" style={{ paddingTop: '5px' }}>
                        <button
                            className="btn-flat waves-effect waves-light"
                            onClick={() => this.logoutHandler()}
                        >
                            <i className="material-icons center small">
                                power_settings_new
                            </i>
                        </button>
                    </div>
                </div>
            </div>
        );
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        addAuthority: (authority) => dispatch(addAuthority(authority))
    };
};

export default connect(null, mapDispatchToProps)(AdminAuthority);
