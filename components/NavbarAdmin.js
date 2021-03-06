import React, { Component } from 'react';
import Link from 'next/link';

class NavbarAdmin extends Component {
    render() {
        return (
                <nav className="nav">
                    <div className="nav-left">
                        <a className="nav-item">
                            <img src="/static/getlink.png" alt="Bulma logo" />
                        </a>
                        <a className="nav-item is-tab">
                            <Link href="#" ><span>Job</span></Link>
                        </a>
                        <a className="nav-item is-tab">
                            <Link href="#" ><span>Candidate</span></Link>
                        </a>
                    </div>
                    <div className="nav-right">
                        <a className="nav-item is-tab">
                            <Link href="#" ><span>John Doe</span></Link>
                        </a>
                    </div>
                    <style jsx>{`
                        .nav {
                            border-bottom: 1px solid #e4e4e4 !important;
                            box-shadow: 0 1px 5px rgba(0, 0, 0, 0.2) !important;
                        }
                        .nav-item a.is-tab.is-active,
                        a.nav-item.is-tab.is-active {
                            border-bottom: 5px solid #00d1b2 !important;
                            color: #00d1b2;
                            padding-bottom: calc(0.75rem - 3px) !important;
                        }
                    `}
                    </style>
                </nav>               
        );
    }
}

export default NavbarAdmin;