import React, { Component } from 'react';

class Job extends Component {
    render() {
        return (
                    <div className="columns">
                        <div className="column">
                            <div className="alignment">
                                <div>{this.props.source}</div> 
                                <div>Sourced</div>  
                            </div>
                        </div>
                        <div className="column">
                            <div className="alignment">
                                <div>{this.props.applied}</div> 
                                <div>Applied</div>  
                            </div>
                        </div>
                        <div className="column">
                            <div className="alignment">
                                    <div>{this.props.offer}</div> 
                                    <div>Offers</div>  
                            </div>
                        </div>
                        <div className="column">
                            <div className="alignment corner">
                                    <div>{this.props.hired}</div> 
                                    <div>Hired</div>  
                            </div>
                        </div>
                        <style jsx>{`
                            .corner
                        `}
                        </style>                        
                    </div>  
        );
    }
}

export default Job;