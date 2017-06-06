import React, { Component } from 'react';
import Router from 'next/router';

class JobFormFill extends Component {
    create(e) {
        e.preventDefault();
        Router.push({
            pathname: '/job',
            query: { 
                title: 'getlinks' 
            }
        });
    }
    render() {
        return (
            <div className="section">
                <div className="container">
                    <div className="heading">
                        <h3 className="title">
                            Job Detail
                        </h3>
                    </div>
                    <div style={{marginTop: 20}}></div>
                    <div className="columns">
                        <div className="column is-8">
                            <div className="field">
                                <label className="label">Job title</label>
                                <p className="control">
                                    <input type="text" className="input"/>
                                </p>
                            </div>
                            <div className="field">
                                <label className="label">Description</label>
                                <p className="control">
                                    <textarea cols="30" rows="10" className="textarea"></textarea>
                                </p>
                            </div>
                            <div className="field">
                                <label className="label">Benefit</label>
                                <p className="control">
                                    <textarea cols="30" rows="10" className="textarea"></textarea>
                                </p>
                            </div>
                            <div className="field is-grouped">
                                <p className="control">
                                    <label htmlFor="" className="label">Country</label>
                                    <span className="select">
                                        <select name="" id="">
                                            <option value="">Thailand</option>
                                            <option value="">Vietnam</option>
                                            <option value="">Hongkong</option>
                                        </select>
                                    </span>
                                </p>
                                <p className="control">
                                    <label htmlFor="" className="label">Address</label>
                                    <input type="text" className="input"/>
                                </p>                                
                            </div>
                            <label htmlFor="" className="label">Salary range</label>
                            <div className="field is-grouped">
                                <p className="control">
                                    <label htmlFor="" className="label">min</label>
                                    <input type="text" className="input"/>
                                </p> 
                                <p className="control">
                                    <label htmlFor="" className="label">max</label>
                                    <input type="text" className="input"/>
                                </p>
                                <p className="control">
                                    <label htmlFor="" className="label">currency</label>
                                    <span className="select">
                                        <select name="" id="">
                                            <option value="">USD</option>
                                            <option value="">Baht</option>
                                            <option value="">Euro</option>
                                        </select>
                                    </span>
                                </p>                                  
                            </div>
                            <div className="field is-grouped">
                                <p className="control">
                                <label htmlFor="" className="label">Employment type</label>
                                    <span className="select">
                                        <select name="" id="">
                                            <option value="">Full-time</option>
                                            <option value="">Part-time</option>
                                            <option value="">Contract</option>                                        
                                        </select>
                                    </span>
                                </p>
                                <p className="control">
                                    <label htmlFor="" className="label">Position Level</label>
                                    <span className="select">
                                        <select name="" id="">
                                            <option value="">Intern</option>
                                            <option value="">Easy-level</option>
                                            <option value="">Assosiation</option>
                                            <option value="">Mid-level</option>                                        
                                            <option value="">Senior</option>                                        
                                            <option value="">Executive</option>                                                                  
                                        </select>
                                    </span>
                                </p>                                
                            </div>
                            <div className="field">
                               <p className="control">
                                    <label htmlFor="" className="label">Position Type</label>
                                    <span className="select">
                                        <select>
                                            <option value="1">
                                                Accounting
                                            </option>
                                            <option value="2">
                                                Administrative and Clerical
                                            </option>
                                            <option value="3">
                                                Agriculture
                                            </option>
                                            <option value="4">
                                                Architectural services
                                            </option>
                                            <option value="5">
                                                Arts and Entertainment
                                            </option>
                                            <option value="6">
                                                Automotive
                                            </option>
                                            <option value="7">
                                                Banking
                                            </option>
                                            <option value="8">
                                                Biotech
                                            </option>
                                            <option value="14">
                                                Call center
                                            </option>
                                            <option value="11">
                                                Construction
                                            </option>
                                            <option value="12">
                                                Consulting
                                            </option>
                                            <option value="13">
                                                Customer service
                                            </option>
                                            <option value="15">
                                                Design and Creative
                                            </option>
                                            <option value="16">
                                                Education and Training
                                            </option>
                                            <option value="17">
                                                Energy
                                            </option>
                                            <option value="18">
                                                Engineering
                                            </option>
                                            <option value="19">
                                                Finance
                                            </option>
                                            <option value="20">
                                                Government and Nonprofit
                                            </option>
                                            <option value="21">
                                                Healthcare
                                            </option>
                                            <option value="22">
                                                Hospitality
                                            </option>
                                            <option value="23">
                                                Information technology
                                            </option>
                                            <option value="24">
                                                Insurance
                                            </option>
                                            <option value="25">
                                                Internet and Software
                                            </option>
                                            <option value="26">
                                                Legal
                                            </option>
                                            <option value="27">
                                                Leisure
                                            </option>
                                            <option value="28">
                                                Logistics and Transportation
                                            </option>
                                            <option value="29">
                                                Manufacturing and Production
                                            </option>
                                            <option value="30">
                                                Marketing and PR
                                            </option>
                                            <option value="43">
                                                Other
                                            </option>
                                            <option value="9">
                                                Pharma
                                            </option>
                                            <option value="31">
                                                Procurement and Trade
                                            </option>
                                            <option value="32">
                                                Property
                                            </option>
                                            <option value="33">
                                                Publishing and Editorial
                                            </option>
                                            <option value="10">
                                                R&amp;D
                                            </option>
                                            <option value="34">
                                                Recruitment and HR
                                            </option>
                                            <option value="35">
                                                Retail
                                            </option>
                                            <option value="36">
                                                Sales
                                            </option>
                                            <option value="38">
                                                Science
                                            </option>
                                            <option value="37">
                                                Security and Safety
                                            </option>
                                            <option value="39">
                                                Technical
                                            </option>
                                            <option value="40">
                                                Telecommunication
                                            </option>
                                            <option value="41">
                                                Tourism
                                            </option>
                                            <option value="42">
                                                Translation services
                                            </option>
                                        </select>
                                    </span>
                               </p> 
                            </div>
                            <div className="field">
                                <p className="control">
                                    <label className="checkbox">
                                    <input type="checkbox" />
                                       <span style={{paddingLeft: 10}}>I agree to the </span><a href="#">terms and conditions</a>
                                    </label>
                                </p>
                            </div> 
                            <div className="field is-grouped">
                                <p className="control">
                                    <button onClick={this.create.bind(this)}className="button is-primary">Submit</button>
                                </p>
                            </div>                       
                        </div>
                    </div>    
                </div>
                <style jsx>{`
                    .section {
                        padding-top: 35px;
                        padding-bottom: 35px;
                    }    
                `}</style>
            </div>
        );
    }
}

export default JobFormFill;