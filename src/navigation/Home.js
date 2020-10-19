import React, { Component } from 'react';
import Table from '../components/utils/Table';
import Map from '../components/utils/Map';

class Home extends Component {
    render()    {
        return(
            <div>
                <Map />
                <div className="col s15 m7">
                    <div className="card-panel hoverable">
                        <h3 className= "center" style= {{color: '#00838f'}}> Problems reported near you </h3>
                        <br/>
                        <div className="card-content">
                            <Table issueList= { this.props.issueList }/>
                        </div>
                    </div>
                </div>
                <br />
            </div>
        )
    }
}

export default Home;