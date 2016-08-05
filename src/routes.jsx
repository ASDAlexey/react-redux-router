import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from './containers/App';
import Admin from './components/Admin';
import List from './components/List';
import Genre from './components/Genre';
import Release from './components/Release';
import Home from './components/Home';
import NotFound from './components/NotFound';
import LoginPage from './containers/LoginPage';
import requireAuthentication from './containers/AuthenticatedComponent';

const routes = (
    <div>
        <Route path="/" component={App}>
            <IndexRoute component={Home} />
            {/* <IndexRedirect to="list" />*/}
            <Route path="/admin" component={requireAuthentication(Admin)} />
            <Route path="/genre/:genre" component={Genre}>
                {/* <Route path=":release" component={Release} />*/}
                <Route path="/genre/:genre/:release" component={Release} />
            </Route>
            <Route path="/list" component={List} />
            <Route path="/login" component={LoginPage} />
        </Route>
        <Route path="*" component={NotFound} />
    </div>
);

export default routes;

