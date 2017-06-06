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
                            <Link href="/login" ><button className="button is-primary">Login</button></Link>
                        </a>
                    </div>
                </nav>
        );
    }
}

export default Navbar;