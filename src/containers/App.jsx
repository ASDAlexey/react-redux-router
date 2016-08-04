import React, { PropTypes, Component } from 'react';
import { Link } from 'react-router';
import '../assets/styles/_index.styl';

export default class App extends Component {
    render() {
        return (
            <div className="container">
                <h1>App</h1>
                <ul>
                    <li><Link to="/admin">Admin</Link></li>
                    <li><Link to="/genre">Genre</Link></li>
                </ul>
                {this.props.children}
            </div>
        );
    }
}

App.propTypes = {
    children: PropTypes.object,
};
