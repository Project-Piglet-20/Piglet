import React from 'react';

const Person = ({ people, content }) => {
    const personList = people.map((person) => {
        return (
            <div className="col s12 m4" key={person.id} style={{minWidth: '260px'}}>
                <div className="icon-block">
                    <div className="card z-depth-5" style={{ maxWidth: '260px' }}>
                        <div className="card-image waves-effect waves-block waves-light">
                            <img
                                className="activator"
                                src={person.img}
                                alt={person.name}
                            />
                        </div>
                        <div className="card-content">
                            <span className="card-title activator grey-text text-darken-4">
                                <h5>
                                    {person.name}
                                    <i className="material-icons right">
                                        more_vert
                                    </i>
                                </h5>
                            </span>
                            <br />
                            <p>
                                Lorem ipsum dolor sit amet, consectetur
                                adipiscing elit. Quisque ullamcorper pretium
                                ornare. In iaculis, nulla vel feugiat efficitur.
                            </p>
                        </div>
                        <div className="card-reveal">
                            <span className="card-title grey-text text-darken-4">
                                <h5>
                                    {person.name}
                                    <i className="material-icons right">close</i>
                                </h5>
                            </span>
                            <p>
                                { content }
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        );
    });
    return <div>{personList}</div>;
};

export default Person;
