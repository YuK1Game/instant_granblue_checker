import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

import Tabs from './Tabs';
import FortePage from './pages/Forte';

class Root extends React.Component
{
    constructor(props) {
        super(props);
    }

    render() {
        const styles = {
            root : {
            },
        };

        return (
            <Fragment>
                <FortePage />
                <Tabs />
            </Fragment>
        )
    }
}

Root.defaultProps = {
};

Root.propTypes = {
    style : PropTypes.object
};

export default Root;