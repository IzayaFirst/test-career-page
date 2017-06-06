import React, { Component } from 'react';
import TabJobView from './TabJobView';
import JobContainer from './JobContainer';

class CompanyJobOverview extends Component {
    render() {
        return (
            <div className="container">
                <div className="section">
                    <TabJobView />
                    <JobContainer />
                </div>
            </div>
        );
    }
}

export default CompanyJobOverview;