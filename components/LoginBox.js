import React, { Component } from 'react';

class LoginBox extends Component {
    render() {
        return (
  <div className="section">
            <div className="columns">
                <div className="column is-half is-offset-one-quarter">
                    <div className="card register">
                        <header className="card-header">
                            <p className="card-header-title">
                                Login
                            </p>
                        </header>
                        <div className="card-content">
                            <div className="content">
                                <div className="field">
                                    <label className="label">
                                        Username
                                    </label>
                                    <p className="control">
                                        <input type="text" className="input"/>
                                    </p>
                                </div>
                                <div className="field">
                                    <label className="label">
                                        Password
                                    </label>
                                    <p className="control has-icons-left">
                                        <input type="password" className="input"/>
                                        <span className="icon is-small is-left">
                                            <i className="fa fa-username"></i>
                                        </span>
                                    </p>
                                </div>                                
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        <style jsx>{`
            .register {
                min-height: 250px; 
            }
        `}
        </style>            
        </div>
        );
    }
}

export default LoginBox;