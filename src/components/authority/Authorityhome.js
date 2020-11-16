import React, { Component } from 'react';
import Table from './Table';

class AuthorityHome extends Component {
    render() {
        return(
            <div>
                <div className="col s12 m7">
                    <div className="card">
                        <div className="card-content">
                            <Table />
                        </div>
                    </div>
                </div>
                <br />
            </div>
        )  
    }
}

export default AuthorityHome;