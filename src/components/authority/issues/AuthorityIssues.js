import React, { Component } from 'react';
import Table from './Table';

class AdminIssues extends Component {
    logoutHandler = () => {
        this.props.history.push('/authoritylogin');
    };
    render() {
        return (
            <div className="row">
                <div className="col m1"></div>
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

export default AdminIssues;
