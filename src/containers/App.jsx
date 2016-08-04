import React, { PropTypes, Component } from 'react';
import NavLink from '../components/NavLink';
import '../assets/styles/_index.styl';

export default class App extends Component {
    render() {
        return (
            <div className="container">
                <ul className="nav nav-pills">
                    <li><NavLink onlyActiveOnIndex={true} to="/">Главная</NavLink></li>
                    <li><NavLink to="/admin">Админка</NavLink></li>
                    <li><NavLink to="/list">Список жанров</NavLink></li>
                    <li><NavLink to='/login'>Войти</NavLink></li>
                </ul>
                {this.props.children}
            </div>
        );
    }
}

App.propTypes = {
    children: PropTypes.object,
};
