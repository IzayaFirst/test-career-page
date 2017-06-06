import React, { Component } from 'react';
import Header from '../components/Header';
import NavbarAdmin from '../components/NavbarAdmin';
import Router from 'next/router';
import JobDetail from '../components/JobDetail';

class job extends Component {
    constructor(props) {
        super(props);
    }
    static getInitialProps (props) {
        const { query } = props;
        return query;
    }
    render() {
        return (
            <div>
                <Header />
                <NavbarAdmin />
                <JobDetail 
                title={this.props.title}
                />
            </div>
        );
    }
}
export default job;