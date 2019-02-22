import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';

import { Paper, Tab, Tabs as MuiTabs } from '@material-ui/core';

import FilterIcon from '@material-ui/icons/FilterVintageTwoTone';

class Tabs extends React.Component
{
    constructor(props) {
        super(props);
    }

    state = {
        value : 0,
    };

    handleChange = (event, value) => {
        this.setState({ value });
    };

    render() {
        const { classes } = this.props;

        return (
            <div className={ classes.root }>
                <MuiTabs
                    value={ this.state.value }
                    onChange={ this.handleChange }
                    variant={'fullWidth'}
                    indicatorColor={'secondary'}
                    textColor={'secondary'}
                    >
                    <Tab icon={<FilterIcon />} label="得意武器" />
                </MuiTabs>
            </div>
        )
    }
}

Tabs.defaultProps = {
};

Tabs.propTypes = {
    style : PropTypes.object
};

const styles = {
    root : {
        position : 'fixed',
        bottom : '0px',
        width : '100%',
    },
};

export default withStyles(styles)(Tabs);