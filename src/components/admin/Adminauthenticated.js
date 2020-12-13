import React, { useState } from 'react';
import { Redirect } from 'react-router-dom';
import { auth } from '../../config/fbConfig';

const AdminAuthenticated = (props) => {
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
            return "Loading...";
        } else if (!loggedIn) {
            return props.children;
        } else if (loggedIn) {
            return <Redirect to="/adminhome/issue" />;
        }
    } else {
        if (loggedIn == null) {
            return "Loading...";
        } else if (loggedIn) {
            return props.children;
        } else if (!loggedIn) {
            return <Redirect to="/adminlogin" />;
        }
    }
};

export default AdminAuthenticated;
