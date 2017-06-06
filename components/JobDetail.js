import React, { Component } from 'react';

class JobDetail extends Component {
    render() {
        return (
           <section className="section" style={{backgroundColor: '#1A3B46'}}>
                <div className="container">
                    <div className="heading">
                        <div className="columns">
                            <div className="column is-2">
                                <figure className="image is-30x128">
                                    <img src="/static/getlink.png"/>
                                </figure>
                            </div>
                        </div>
                        <div className="columns">
                            <div className="column is-3">
                                <h1 className="title white-font">
                                    {this.props.title}
                                </h1>
                            </div>
                        </div>
                    </div>
                    <style jsx>
                    {`
                        .white-font {
                            color: white !important;
                        }    
                    `}
                    </style>
                </div>
           </section>
        );
    }
}

export default JobDetail;