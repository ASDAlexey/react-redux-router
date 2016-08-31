import React, { Component, PropTypes } from 'react';
import DocumentTitle from 'react-document-title';

export default class Home extends Component {
    static contextTypes = {
        router: PropTypes.object.isRequired,
    };

    static propTypes = {
        route: PropTypes.object.isRequired,
    };

    componentDidMount() {
        this.context.router.setRouteLeaveHook(this.props.route, this.routerWillLeave);
    }

    handleSubmit(e) {
        e.preventDefault();
        const value = e.target.elements[0].value.toLowerCase();
        this.context.router.push(`/genre/${value}`);
    }

    routerWillLeave() {
        return 'Вы уверены?';
    }

    render() {
        return (
            <DocumentTitle title="Home">
                <div className="row">
                    <div className="col-md-12">Раздел /</div>
                    <form className="col-md-4" onSubmit={::this.handleSubmit}>
                        <input type="text" placeholder="genreName" />
                        <button type="submit">Перейти</button>
                    </form>
                </div>
            </DocumentTitle>
        );
    }
}
