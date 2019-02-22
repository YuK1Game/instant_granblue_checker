import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Chip from '@material-ui/core/Chip';

class Chips extends React.Component
{
    constructor(props) {
        super(props);
    }

    render() {
        const { classes } = this.props;

        return (
            <Fragment>
                {this.props.chips.map((data) => {
                    return (
                        <Chip
                            className={ classes.chip }
                            key={ data.key }
                            label={ data.label }
                            onDelete={ () => this.props.handleDelete( data.key ) }
                            />
                    )
                })}
            </Fragment>
        )
    }
}

Chips.defaultProps = {
    chips : [],
    handleDelete : () => {},
};

Chips.propTypes = {
    style : PropTypes.object
};

const styles = theme => ({
    root : {
        display : 'flex',
        justifyContent : 'center',
        flexWrap : 'wrap',
        padding : theme.spacing.unit / 2,
    },
    chip : {
        padding : theme.spacing.unit / 2,
        margin : theme.spacing.unit / 2,
    },
});

export default withStyles(styles)(Chips);