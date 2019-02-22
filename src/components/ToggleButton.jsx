import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

import Button from '@material-ui/core/Button';

class ToggleButton extends React.Component
{
    constructor(props) {
        super(props);
    }

    render () {
        return (
            <Fragment>
                { ! this.props.selected && (
                    <Button { ...this.props }>{this.props.children}</Button>
                )}
            </Fragment>
        )
    }
}

ToggleButton.defaultProps = {
    selected : false,
};

ToggleButton.propTypes = {
    selected : PropTypes.bool.isRequired,
};

export default ToggleButton;