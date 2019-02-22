import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import configs from 'react-global-configuration';
import {  Paper, Typograpy } from '@material-ui/core';

import ToggleButton from '../../components/ToggleButton';
import Section from '../../components/Section';
import Chips from './fortes/Chips';

class Forte extends React.Component
{
    constructor(props) {
        super(props);
    }

    state = {
        filters : [],
    };

    handleAddFilter = (data) => {
        if (this.hasKey(data.key)) {
            return false;
        }

        let filters = this.state.filters;
        filters.push(data);
        this.setState({ filters : filters });
    };

    handleDelete = (key) => {
        const filters = this.state.filters.filter((data) => {
            return data.key !== key;
        });
        this.setState({ filters : filters });
    };

    hasKey = (key) => {
        let hasKey = false;
        this.state.filters.map((data) => {
            if (data.key === key) {
                hasKey = true;
            }
        });
        return hasKey;
    };

    render() {
        const { classes } = this.props;

        return (
            <div className={ classes.root }>
                <Paper className={ classes.paper }>
                    <Section>
                        <Chips
                            chips={ this.state.filters }
                            handleDelete={(data) => this.handleDelete( data ) }
                            />
                    </Section>
                </Paper>
                <Paper className={ classes.paper }>
                    <Section>
                        {configs.get('elementtypes').map((data) => {
                            return (
                                <ToggleButton
                                    className={ classes.button }
                                    key={ data.key }
                                    variant={'contained'}
                                    color={'primary'}
                                    onClick={ () => this.handleAddFilter(data) }
                                    selected={this.hasKey( data.key )}>
                                    {data.label}
                                </ToggleButton>
                            )
                        })}
                    </Section>
                    <Section>
                        {configs.get('hollowskyweapons').map((data) => {
                            return (
                                <ToggleButton
                                    className={ classes.button }
                                    key={ data.key }
                                    variant={'contained'}
                                    color={'secondary'}
                                    onClick={ () => this.handleAddFilter(data) }
                                    selected={this.hasKey( data.key )}>
                                    {data.label}
                                </ToggleButton>
                            )
                        })}
                    </Section>
                    <Section>
                        {configs.get('weapons').map((data) => {
                            return (
                                <ToggleButton
                                    className={ classes.button }
                                    key={ data.key }
                                    variant={'contained'}
                                    onClick={ () => this.handleAddFilter(data) }
                                    selected={this.hasKey( data.key )}>
                                    {data.label}
                                </ToggleButton>
                            )
                        })}
                    </Section>
                </Paper>
            </div>
        )
    }
}

Forte.defaultProps = {
    types : [
        { key : 'fire', label : '火', values : ['fire']},
        { key : 'water', label : '水', values : ['water']},
        { key : 'earth', label : '土', values : ['earth']},
        { key : 'wind', label : '風', values : ['wind']},
        { key : 'light', label : '光', values : ['light']},
        { key : 'dark', label : '闇', values : ['dark']},
    ],
    hollowskyWeapons : [
        { key : 'hollow_sword', label : '虚空の裂剣(剣)', values : ['sword', 'dagger']},
        { key : 'hollow_arrow', label : '虚空の歪弦(弓)', values : ['arrow', 'gun']},
        { key : 'hollow_axe',   label : '虚空の晶塊(斧)', values : ['axe', 'melee']},
        { key : 'hollow_spear', label : '虚空の楔槍(槍)', values : ['spear', 'katana']},
        { key : 'hollow_staff', label : '虚空の拝腕(杖)', values : ['staff', 'harp']},
    ],
    weapons : [
        { key : 'sword', label : '剣', values : ['sword']},
        { key : 'dagger', label : '短剣', values : ['sword']},
        { key : 'arrow', label : '弓', values : ['arrow']},
        { key : 'gun', label : '銃', values : ['gun']},
        { key : 'axe',   label : '斧', values : ['axe']},
        { key : 'melee', label : '格闘', values : ['melee']},
        { key : 'spear', label : '槍', values : ['spear']},
        { key : 'katana', label : '刀', values : ['katana']},
        { key : 'staff', label : '杖', values : ['staff']},
        { key : 'harp', label : '楽器', values : ['harp']},
    ],
};

Forte.propTypes = {
    style : PropTypes.object
};

const styles = theme => ({
    root : {
        
    },
    paper : {
        padding : '10px',
        marginBottom : '20px',
    },
    button : {
        margin : theme.spacing.unit,
    },
});

export default withStyles(styles)(Forte);