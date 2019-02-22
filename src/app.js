
import React, { Fragment } from 'react';
import { render } from 'react-dom';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import './configs/combine';

import Root from './containers/Root';

const theme = createMuiTheme({
    typography: {
        useNextVariants: true,
    },
});

class App extends React.Component {

    constructor(props) {
        super(props);

        if('serviceWorker' in navigator) {
            navigator.serviceWorker.register('/assets/js/serviceworker.build.min.js')
              .then(() => console.log("Service Worker Registered"))
              .catch(e => console.log(e));
          }
    }

    render() {    
        return (
            <MuiThemeProvider theme={ theme }>
                <Root />
            </MuiThemeProvider>
        )
     }
}

render(<App />, document.getElementById('root'))