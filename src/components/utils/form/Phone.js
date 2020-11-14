import React, { Component } from 'react';

class Phone extends Component {
    state = {
        number: 'Please enter your phone number'
    };
    render() {
        return (
            <div className="row" id="issue_card">
                <div class="input-field col s6" style={{minWidth: '360px'}}>
                    <input
                        id="Number"
                        type="tel"
                        maxLength={10}
                        onChange={(e) => this.props.clickHandler(e)}
                        className="validate"
                    />
                    <label for="Number">
                        <i className="material-icons left">phone</i>Phone Number
                    </label>
                </div>
            </div>
        );
    }
}

export default Phone;
