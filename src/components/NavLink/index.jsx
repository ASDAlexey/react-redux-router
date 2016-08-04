import React from 'react';
import { Link } from 'react-router';

import './styles.styl';

export default class NavLink extends React.Component {
    render() {
        return <Link {...this.props} activeClassName="active" />;
    }
}
