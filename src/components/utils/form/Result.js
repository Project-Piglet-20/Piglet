import React from 'react';
import Map from '../Map';
import { Link, withRouter } from 'react-router-dom';

const Result = (props) => {
    return (
        <form>
            <div className="container teal">
                <div className="card">
                    <br />
                    <h3 className="center" style={{ color: 'teal' }}>
                        {' '}
                        Thanks for reporting the problem.{' '}
                    </h3>
                    <br />
                    <h4 className="center">
                        {' '}
                        <i className="material-icons">receipt</i> Here's what we
                        got from you:{' '}
                    </h4>
                    <br />
                    <Map />
                    <div className="card-content">
                        <br /> <br />
                        <div className="row">
                            <div className="col s12">
                                <div className="card-panel grey lighten-1">
                                    <h6 style={{ fontSize: 'larger' }}>
                                        {' '}
                                        1. What is the problem?{' '}
                                    </h6>
                                    <span>
                                        {' '}
                                        {props.location.state.Type}{' '}
                                    </span>{' '}
                                    <i className="material-icons left">
                                        search
                                    </i>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col s12">
                                <div className="card-panel grey lighten-1">
                                    <h6 style={{ fontSize: 'larger' }}>
                                        {' '}
                                        2. Your phone number{' '}
                                    </h6>
                                    <span>
                                        {' '}
                                        {props.location.state.Number}{' '}
                                    </span>{' '}
                                    <i className="material-icons left">phone</i>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col s12">
                                <div className="card-panel grey lighten-1">
                                    <h6 style={{ fontSize: 'larger' }}>
                                        {' '}
                                        3. Where is the problem?{' '}
                                    </h6>
                                    <span>
                                        {' '}
                                        {props.location.state.Locality}{' '}
                                    </span>{' '}
                                    <i className="material-icons left">place</i>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col s12">
                                <div className="card-panel grey lighten-1">
                                    <h6 style={{ fontSize: 'larger' }}>
                                        {' '}
                                        4. When was it reported?{' '}
                                    </h6>
                                    <span>
                                        {' '}
                                        {new Date().getDate()} -{' '}
                                        {new Date().getMonth() + 1} -{' '}
                                        {new Date().getFullYear()}{' '}
                                    </span>{' '}
                                    <i className="material-icons left">today</i>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col s12">
                                <div className="center">
                                    <Link to="/">
                                        {' '}
                                        <button className="btn-floating btn-large waves-effect waves-light teal lighten-1 center">
                                            {' '}
                                            <i className="material-icons">
                                                done
                                            </i>{' '}
                                        </button>{' '}
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </form>
    );
};

export default withRouter(Result);
