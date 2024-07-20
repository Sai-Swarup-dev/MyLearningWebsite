import React from 'react';
import '../Components/css/navbar.css';

const Navbar = () => {
  return (
    <>
        {/* <p>Hello Navbar</p> */}
        <div className="head">
            <div className="logo">
                <p>CodeWithSai</p>
            </div>
            <div className="list">
                <ul>
                    <li><a href="#">GitHub</a></li>
                    <li><a href="#">Contact</a></li>
                </ul>
            </div>
        </div>
    </>
  );
}

export default Navbar;