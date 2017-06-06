import React, { Component } from 'react';
import Job from './Job';

class JobContainer extends Component {
    render() {
        const test = [
            {
                name: "TEST 001",
                source: 1,
                applied: 1,
                offer: 2,
                hired: 3,
            },
            {
                name: "TEST 002",
                source: 1,
                applied: 1,
                offer: 2,
                hired: 3,
            },
            {
                name: "TEST 003",
                source: 1,
                applied: 1,
                offer: 2,
                hired: 3,
            }
        ]
        return (
           <div className="columns">
                <table className="table">
                    <thead>
                        <tr>
                            <th>
                                NAME
                            </th>
                            <th colSpan={2}>
                                STATUS                            
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            test.map((val, index) => {
                                   return(
                                       <tr>
                                            <td>
                                                <div className="alignment">{val.name}</div>
                                            </td>
                                            <td>
                                                <Job 
                                                     source={val.source} 
                                                     applied={val.applied} 
                                                     offer={val.offer}
                                                     hired={val.hired} 
                                                />
                                            </td>
                                            <td>
                                                <div className="alignment">
                                                    <button className="button ">
                                                        ...
                                                    </button>
                                                </div>
                                            </td>
                                       </tr>
                                   ) 
                            })
                        }
                    </tbody>
                </table> 
                <style jsx global>
                     {`
                        .alignment {
                             padding: 1.625rem 0.9375rem 0;
                             text-align: center;
                             vartical-align: middle
                        }    
                    `}
                </style>
           </div>
        );
    }
}

export default JobContainer;