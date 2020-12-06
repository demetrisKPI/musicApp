import React from 'react';
import Link from 'next/link'

function Navbar() {
    return (
        <nav className='navbar'>
            <Link href='/'>Home</Link>
        </nav>
    );
}
 
export default Navbar;