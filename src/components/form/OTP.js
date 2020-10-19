import React from 'react';

const OTP = () => {
    return (
        <div className="card-content">
            <label className= "ReportLabel"> Enter OTP </label> <i className= "material-icons left">message</i> <br/>
            <input 
                id= "OTP" 
                onChange= { (e) => e.target.value = e.target.value.length <= e.target.maxLength ? e.target.value : e.target.value.slice(0, e.target.maxLength) }
                type= "number" 
                maxLength= "6"
                className= "right materialize-textarea" 
                placeholder= "Please enter the 6 digit OTP send to your phone" 
            />
            <br/>
        </div>
)
}

export default OTP;