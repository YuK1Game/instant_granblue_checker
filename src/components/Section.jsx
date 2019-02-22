import React from 'react';
import { withStyles } from '@material-ui/core/styles';

const Section = ({ classes, children }) => (
    <div className={ classes.root }>
        { children }
    </div>
);
const styles = theme => ({
    root : {
        margin : '5px',
    },
});
export default withStyles(styles)(Section);