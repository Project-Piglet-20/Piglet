import React, { Component } from 'react';
import Form from '../utils/form/Form';
import Map from '../utils/Map';
import Auxiliary from '../hoc/Auxiliary';

class Report extends Component {
    render() {
        return (
            <Auxiliary>
                <div>
                    <Map />
                    <div>
                        <div className="card-panel hoverable">
                            <br />
                            <Form props={this.props}/>
                        </div>
                    </div>
                    <br />
                </div>
            </Auxiliary>
        );
    }
}

export default Report;
