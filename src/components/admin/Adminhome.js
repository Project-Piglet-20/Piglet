import React, { Component } from 'react';
import Table from './Table';
import Dashboard from './Dashboard';

class Adminhome extends Component {
    render() {
        return (
            <Dashboard>
                <div>
                    <div className="card-panel hoverable">
                        <h3 className="center" style={{ color: '#00838f' }}>
                            ADMIN - ISSUES
                        </h3>
                        <br />
                        <Table />
                    </div>
                </div>
                <br />
            </Dashboard>
        );
    }
}

export default Adminhome;
