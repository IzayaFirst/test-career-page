import React, { Component } from 'react';
import Head from 'next/head';

class Header extends Component {
    render() {
        return (
            <Head>
                <title>My page title</title>
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />    
                <link href="https://fonts.googleapis.com/css?family=Raleway" rel="stylesheet" />
                <link rel="stylesheet" href="/static/bulma.css"/>
                <script src="https://use.fontawesome.com/12e462bd5f.js"></script>
            </Head>
        );
    }
}

export default Header;