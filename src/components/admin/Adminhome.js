import React, { Component } from 'react';
import Table from './Table';
import Dashboard from './Dashboard';
import Divider from '@material-ui/core/Divider';

class Adminhome extends Component {
    render() {
        return (
            <Dashboard>
                <div>
                    <div className="card-panel hoverable">
                        <h3 className="center" style={{ color: '#00838f' }}>
                            <u>ADMIN - ISSUES</u>
                        </h3>
                        <br />
                        <Divider />
                        <Table />
                    </div>
                </div>
                <br />
            </Dashboard>
        );
    }
}

export default Adminhome;
