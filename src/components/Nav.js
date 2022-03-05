import React from 'react';
import { Link } from 'react-router-dom';



function Nav() {
    return (
        <nav>
            <h2>adw</h2>
            <ul>
                <Link to='/anime'>
                  <li>Anime</li>
                </Link>
                <Link to='/about'>
                  <li>About</li>
                </Link>
            </ul>
        </nav>
    );
}

export default Nav;