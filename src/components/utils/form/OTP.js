import React from 'react';

const OTP = () => {
    return (
        <div className="row" id="issue_card">
            <div className="input-field col s6" style={{minWidth: '360px'}}>
                <input
                    id="OTP"
                    onChange={(e) =>
                        (e.target.value =
                            e.target.value.length <= e.target.maxLength
                                ? e.target.value
                                : e.target.value.slice(0, e.target.maxLength))
                    }
                    type="number"
                    maxLength="6"
                    className="right materialize-textarea"
                    style={{ paddingLeft: '0px' }}
                />
                <label for="OTP">
                    <i className="material-icons left">message</i> Enter OTP
                </label>
            </div>
        </div>
    );
};

export default OTP;
