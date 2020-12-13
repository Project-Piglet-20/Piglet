import React, { Component } from 'react';
import Table from './Table';

class AdminIssues extends Component {
    logoutHandler = () => {
        this.props.history.push('/adminlogin')
    }
    issueClickHandler = () => {
        this.props.history.push('/adminhome/issue')
    }
    authorityClickHandler = () => {
        this.props.history.push('/adminhome/authority')
    }
    render() {
        return (
            <div className="row">
                <div className="col m1">
                    <br />
                    <div style={{ paddingTop: '5px', paddingBottom: '5px' }}>
                        <button className="btn waves-effect waves-light amber" onClick={() => this.issueClickHandler()}>
                        &nbsp;&nbsp;&nbsp;&nbsp;Issues&emsp;
                        </button>
                    </div>
                    <div style={{ paddingTop: '5px', paddingBottom: '5px', width: '100%' }}>
                        <button className="btn waves-effect waves-light amber" onClick={() => this.authorityClickHandler()}>
                            Authority
                        </button>
                    </div>
                </div>
                <div className="col s12 m10">
                    <br />
                    <div className="divider"></div>
                    <Table />
                </div>
                <div className="col m1">
                    <div className="center" style={{ paddingTop: '5px' }}>
                        <button className="btn-flat waves-effect waves-light" onClick={() => this.logoutHandler()}>
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
