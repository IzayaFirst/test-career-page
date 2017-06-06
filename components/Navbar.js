import React, { Component } from 'react';
import Link from 'next/link';

class Navbar extends Component {
    render() {
        return (
                <nav className="nav">
                    <div className="nav-left">
                        <a className="nav-item">
                            <img src="/static/getlink.png" alt="Bulma logo" />
                        </a>
                    </div>
                    <div className="nav-right">
                        <a className="nav-item">
                            <Link href="/login" ><div className="button is-primary">Login</div></Link>
                        </a>
                        <a className="nav-item">
                            <Link href="/Company/detail" as="/page/company"  ><div className="button is-primary">Company</div></Link>
                        </a>
                        <a className="nav-item">
                            <Link href="/Company/detail"><div className="button is-primary">Candidate</div></Link>
                        </a>
                        <a className="nav-item">
                            <Link href="/Company/detail/"><div className="button is-primary">Candidate</div></Link>
                        </a>
                    </div>
                    <style jsx>
                    {`
                        .nav {
                            border-bottom: 1px solid #e4e4e4 !important;
                            box-shadow: 0 1px 5px rgba(0, 0, 0, 0.2) !important;
                        }
                    `}
                    </style>                    
                </nav>
        );
    }
}

export default Navbar;