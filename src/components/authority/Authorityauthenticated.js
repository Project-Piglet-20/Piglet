import React, { useState } from 'react';
import { Redirect } from 'react-router-dom';
import { auth } from '../../config/fbConfig';

const AuthorityAuthencated = (props) => {
    const [loggedIn, setloggedIn] = useState(null)
    auth.onAuthStateChanged((user) => {
        if (user) {
            setloggedIn(true)
        } else {
            setloggedIn(false)
        }
    })
    if (props.nonAuthenicated) {
        if (loggedIn == null) {
            return "Loading..."
        }
        else if (!loggedIn) {
            return props.children
        }
        else if (loggedIn) {
            return <Redirect to="/authorityhome" />
        }
    } else {
        if (loggedIn == null) {
            return "Loading..."
        }
        else if (loggedIn) {
            return props.children
        }
        else if (!loggedIn) {
            return <Redirect to="/authoritylogin" />
        }
    }
}

export default AuthorityAuthencated;
