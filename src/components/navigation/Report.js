import React, { Component } from 'react';
import Form from '../utils/form/Form';
import Map from '../utils/Map';

class Report extends Component {
    render() {
        return (
            <div className="row">
                <div className="col m1"></div>
                <div className="col s12 m10">
                    <Map />
                    <div className="card-panel hoverable">
                        <br />
                        <Form routeList={this.props} />
                    </div>
                    <br />
                </div>
                <div className="col m1"></div>
            </div>
        );
    }
}

export default Report;
