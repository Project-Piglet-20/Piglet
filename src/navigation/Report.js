import React, { Component } from 'react';
import Form from '../components/form/Form';
import Map from '../components/utils/Map';

class Report extends Component {
    render() {
        return(
            <div className="container">
                <br/>
                <div className="col s12 m7">
                    <div className="card">
                        <div className="card-image">
                            <Map center= { this.props.center }/>
                        </div>
                        <div className="card-content">
                            <Form props= { this.props }/>
                        </div>
                        
                    </div>
                </div>
            </div>
        )
    }
}

export default Report;