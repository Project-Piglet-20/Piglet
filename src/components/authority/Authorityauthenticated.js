import React, { useState } from 'react';
import { Redirect } from 'react-router-dom';
import { auth } from '../../config/fbConfig';

const AuthorityAuthenticated = (props) => {
    const [loggedIn, setloggedIn] = useState(null);
    auth.onAuthStateChanged((user) => {
        if (user) {
            setloggedIn(true);
        } else {
            setloggedIn(false);
        }
    });
    if (props.nonAuthenicated) {
        if (loggedIn == null) {
            return (
                <div className="progress">
                    <div className="indeterminate"></div>
                </div>
            );
        } else if (!loggedIn) {
            return props.children;
        } else if (loggedIn) {
            return <Redirect to="/authorityhome" />;
        }
    } else {
        if (loggedIn == null) {
            return (
                <div className="progress">
                    <div className="indeterminate"></div>
                </div>
            );
        } else if (loggedIn) {
            return props.children;
        } else if (!loggedIn) {
            return <Redirect to="/authoritylogin" />;
        }
    }
};

export default AuthorityAuthenticated;
