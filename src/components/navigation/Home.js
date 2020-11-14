import React, { Component } from 'react';
import Table from '../utils/Table';
import Map from '../utils/Map';
import Auxiliary from '../hoc/Auxiliary';

class Home extends Component {
    render() {
        return (
            <Auxiliary>
                <div>
                    <Map />
                    <div className="card-panel hoverable">
                        <h3 className="center" style={{ color: '#00838f' }}>
                            Problems reported near you
                        </h3>
                        <br />
                        <Table issueList={this.props.issueList} />
                    </div>
                </div>
                <br />
            </Auxiliary>
        );
    }
}

export default Home;
