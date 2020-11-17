import React, { Component } from 'react';
import Form from '../utils/form/Form';
import Map from '../utils/Map';
import Auxiliary from '../hoc/Auxiliary';
import { withRouter } from 'react-router-dom';

class Report extends Component {
    render() {
        return (
            <Auxiliary>
                <div style={{ width: window.innerWidth }}>
                    <Map center={this.props.center} />
                    <div>
                        <div className="card-panel hoverable">
                            <br />
                            <Form
                                props={this.props}
                                center={this.props.center}
                            />
                        </div>
                    </div>
                    <br />
                </div>
            </Auxiliary>
        );
    }
}

export default withRouter(Report);
