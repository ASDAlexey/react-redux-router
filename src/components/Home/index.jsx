import React, { Component, PropTypes } from 'react';

export default class Home extends Component {
    handleSubmit(e) {
        e.preventDefault();
        const value = e.target.elements[0].value.toLowerCase();
        this.context.router.push(`/genre/${value}`);
    }

    render() {
        return (
            <div className='row'>
                <div className='col-md-12'>Раздел /</div>
                <form className='col-md-4' onSubmit={::this.handleSubmit}>
                    <input type='text' placeholder='genreName' />
                    <button type='submit'>Перейти</button>
                </form>
            </div>
        );
    }
}

Home.contextTypes = {
    router: PropTypes.object.isRequired
};