import React, { Component } from 'react';

class JobOpening extends Component {
    render() {
        const job = [
            {
                title: "Job1",
                location: "Thailand",
                position: "Part-time"
            },
            {
                title: "Job2",
                location: "Thailand",
                position: "Full-time"
            },
            {
                title: "Job3",
                location: "Thailand",
                position: "Full-time"
            }
        ]
        return (
            <section className="section">
                <div className="container" style={{paddingLeft: 50 , paddingRight: 50}}>
                    {
                        job.map((val, index) => {
                            return(
                                <div key={index}>
                                    <div className="columns" style={{marginTop: 12}}>
                                        <div className="title"><a href="#">{val.title}</a></div>
                                    </div>
                                    <div className="columns" >
                                            <p>{val.location} - {val.position}</p>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            </section>
        );
    }
}

export default JobOpening;