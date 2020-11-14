import React, { Component } from 'react';
import Person from '../utils/Person';
import Vipin from '../../images/Vipin.jpg';
import Vishak from '../../images/Vishak.jpg';
import Vivek from '../../images/Vivek.jpeg';
import Auxiliary from '../hoc/Auxiliary';

class About extends Component {
    state = {
        people: [
            {
                id: 1,
                img: Vipin,
                name: 'Vipin R Bharadwaj'
            },
            {
                id: 2,
                img: Vishak,
                name: 'Vishak LV'
            },
            {
                id: 3,
                img: Vivek,
                name: 'Vivek V'
            }
        ],
        content:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque ullamcorper pretium ornare. In iaculis, nulla vel feugiat efficitur, diam ex facilisis tortor, sit amet rutrum neque ligula quis diam. Vivamus vel lorem eu nibh interdum pulvinar ac in dolor. Sed orci libero, commodo vulputate laoreet id, blandit gravida libero. Nunc metus metus, vehicula nec cursus eu, pellentesque vel enim. Duis ornare risus est, sit amet dictum nibh porta sed.'
    };
    render() {
        return (
            <div className="teal lighten-4" style={{ paddingRight: '40px' }}>
                <br />
                <Auxiliary>
                    <main className="container">
                        <div className="section">
                            <div className="row">
                                <Person
                                    people={this.state.people}
                                    content={this.state.content}
                                />
                            </div>
                        </div>
                    </main>
                </Auxiliary>
            </div>
        );
    }
}

export default About;
