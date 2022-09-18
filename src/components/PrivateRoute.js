import React from 'react';
import {Redirect, Route} from "react-router-dom"

function PrivateRoute ({isAuthenticated, children, ...rest}) {
    return (
        <Route {...rest}>
            {isAuthenticated ? children : <Redirect to="/login"/>}
        </Route>
    );
}

export default PrivateRoute ;