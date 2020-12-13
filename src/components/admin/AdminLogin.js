import React, { Component } from 'react';
import * as firebaseui from 'firebaseui';
import firebase from 'firebase';

class AdminLogin extends Component {
    componentDidMount() {
        const uiConfig = {
            signInSuccessUrl: '/adminhome/issue',
            signInOptions: [
                {
                    provider: firebase.auth.PhoneAuthProvider.PROVIDER_ID,
                    defaultCountry: 'IN'
                }
            ],
            tosUrl: '/adminhome/issue'
        };
        var ui = new firebaseui.auth.AuthUI(firebase.auth());
        ui.start('#firebaseui-auth-container', uiConfig);
    }
    render() {
        return (
            <>
                <br />
                <div id="firebaseui-auth-container"></div>
                <br />
            </>
        );
    }
}

export default AdminLogin;
