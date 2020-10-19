import React, { Component } from 'react';

class Phone extends Component {
    state = {
        number: 'Please enter your phone number'
    }
    render () {
        return (
            <div className="card-content">
                <label className= "ReportLabel"> Phone Number </label> <i className= "material-icons left">phone</i> <br/>
                <input 
                    id= "Number"
                    type= "tel"
                    min= { 1000000000 }
                    maxLength= { 10 }
                    onChange= { e => this.props.clickHandler(e) }
                    className= "left materialize-textarea" 
                    placeholder= "Please enter your 10 digit phone number" 
                /> 
                <br/> <br/>
            </div>
        )
    }
}

export default Phone;