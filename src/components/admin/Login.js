import React, { Component } from 'react';
import * as firebaseui from 'firebaseui';
import firebase from 'firebase';

var count = 0;

class AdminLogin extends Component {
    componentDidMount() {
        if (++count === 3) {
            const uiConfig = {
                signInSuccessUrl: '/adminhome',
                signInOptions: [
                    {
                        provider: firebase.auth.PhoneAuthProvider.PROVIDER_ID,
                        defaultCountry: 'IN'
                    }
                ],
                tosUrl: '/adminhome'
            };
            var ui = new firebaseui.auth.AuthUI(firebase.auth());
            ui.start('#firebaseui-auth-container', uiConfig);
        }
    }
    render() {
        return (
            <>
                <h1>ADMIN LOGIN</h1>
                <div id="firebaseui-auth-container"></div>
            </>
        );
    }
}

export default AdminLogin;