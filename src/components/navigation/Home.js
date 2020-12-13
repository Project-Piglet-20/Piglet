import React, { Component } from 'react';
import Table from '../utils/Table';
import Map from '../utils/Map';

class Home extends Component {
    render() {
        return (
            <div className="row">
                <div className="col m1"></div>
                <div className="col s12 m10">
                    <Map />
                    <div className="homeTable">
                        <div className="card-panel hoverable">
                            <h3 className="center" style={{ color: '#00838f' }}>
                                Problems reported near you
                            </h3>
                            <br />
                            <Table issueList={this.props.issueList} />
                        </div>
                        <br />
                    </div>
                </div>
                <div className="col m1"></div>
            </div>
        );
    }
}

export default Home;
