import React, { Component } from 'react';
import Table from './Table';

class Corporator extends Component {
    render() {
        return(
            <div>
                <div className="col s12 m7">
                    <div className="card">
                        <div className="card-content">
                            <Table props= { this.props } />
                        </div>
                    </div>
                </div>
                <br />
            </div>
        )  
    }
}

export default Corporator;