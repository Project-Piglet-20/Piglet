import React from 'react';

const Person = ({ people, content }) => {
    const personList = people.map(person => {
        return (
            <div key= { person.id }>
                <div className="col s12 m8 offset-m2 l6 offset-l3">
                    <div className="card-panel hoverable grey lighten-5 z-depth-1">
                        <div className="row valign-wrapper">
                            <img src= { person.img } alt="" className="imgcol"/>
                            <div className="col s10">
                                <span className="black-text">
                                    <div style= {{maxWidth: 'inherit'}}> <i className= "material-icons left">person</i> <h5> { person.name } </h5></div>
                                    <div style= {{maxWidth: 'auto'}}> <p> { content } </p> <br/> </div>
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    })
    return (
        <div> 
            { personList }
        </div>
    )
}

export default Person;