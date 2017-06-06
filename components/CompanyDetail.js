import React, { Component } from 'react';

class CompanyDetail extends Component {
    render() {
        return (
           <section className="section" style={{backgroundColor: '#1A3B46'}}>
                <div className="container">
                    <div className="heading">
                        <div className="columns">
                            <div className="column is-2">
                                <figure className="image is-128x128">
                                    <img src="http://bulma.io/images/placeholders/128x128.png"/>
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
                        <div className="columns">
                            <div className="column is-6">
                                <p className="white-font">
                                 {this.props.subtitle}
                                </p>
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

export default CompanyDetail;