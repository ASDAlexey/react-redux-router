import React, { PropTypes, Component } from 'react';

export default class Release extends Component {
    render() {
        const releaseName = this.props.params.release.replace(/-/g, ' ');
        return (
            <div className="col-md-12">
                {releaseName}
            </div>
        );
    }
}

Release.propTypes = {
    params: PropTypes.object,
};
