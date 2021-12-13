import React from 'react';
import {Link} from 'react-router-dom';

import './header.styles.css';

const Header = () => (
    <div className="header">
        <nav>
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/shop">Tienda</Link></li>
                <li><Link to="/contact">Contacto</Link></li>
                
            </ul>
        </nav>
    </div>
);

export default Header;