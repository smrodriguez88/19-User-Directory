import React from 'react';
import './Header.css'

function Header(){


    return (    
        <div className="header">
            <h1>User Directory</h1>
            <p>Click on desired column to sort, click on &#9776; icon to filter by column</p>
        </div>
    );
};

export default Header;