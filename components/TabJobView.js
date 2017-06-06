import React, { Component } from 'react';
import Router from 'next/router';

class TabJobView extends Component {
    createJob(e) {
        e.preventDefault();
        Router.push('/create');
    }
    render() {
        return (
                    <div className="columns">
                        <div className="column is-8">
                            <div className="tabs">
                                <ul>
                                    <li className="is-active">
                                        <a>All</a>
                                    </li>
                                    <li>
                                       <a>Published</a>
                                    </li>
                                    <li>
                                       <a>Drafts</a>
                                    </li>
                                    <li>
                                       <a>Closed</a>
                                    </li>
                                </ul>
                            </div>                    
                        </div>
                        <div className="column">
                            <button onClick={this.createJob.bind(this)} className="button">
                                Create +
                            </button>
                        </div>
                    </div>
        );
    }
}

export default TabJobView;