import React from 'react';
import Person from '../utils/Person';
import Vipin from '../../images/Vipin.jpg';
import Vishak from '../../images/Vishak.jpg';
import Vivek from '../../images/Vivek.jpeg';
import Auxiliary from '../hoc/Auxiliary';

const About = () => {
    const state = {
        people: [
            {
                id: 1,
                img: Vipin,
                number: '1221111111',
                name: 'Vipin R Bharadwaj'
            },
            {
                id: 2,
                img: Vishak,
                number: '1221111111',
                name: 'Vishak LV'
            },
            {
                id: 3,
                img: Vivek,
                number: '1221111111',
                name: 'Vivek V'
            }
        ],
        content:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque ullamcorper pretium ornare. In iaculis, nulla vel feugiat efficitur, diam ex facilisis tortor, sit amet rutrum neque ligula quis diam. Vivamus vel lorem eu nibh interdum pulvinar ac in dolor. Sed orci libero, commodo vulputate laoreet id, blandit gravida libero. Nunc metus metus, vehicula nec cursus eu, pellentesque vel enim. Duis ornare risus est, sit amet dictum nibh porta sed.'
    };
    return (
        <Auxiliary>
            <div>
                <Person people={state.people} content={state.content} />
            </div>
        </Auxiliary>
    );
};

export default About;
