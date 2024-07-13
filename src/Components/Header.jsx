<<<<<<< HEAD
import React from 'react';
import './Header.css';
import Respleftside from './Respleftside';
import { useState } from 'react';

function Header() {
    const [showLeftside, setShowLeftside] = useState(false);

    const handleBurgerClick = () => {
        setShowLeftside(!showLeftside);
    };
    return (
        <>
            <nav className="navbar respnavh">
                <div className='left'>
                    <div className='roundball'></div>
                    <div className='roundball'></div>
                </div>

 
                <div
                    className={`burger ${showLeftside ? 'active' : ''}`}
                    onClick={handleBurgerClick}>
                    <div className="line"></div>
                    <div className="line"></div>
                    <div className="line"></div>
                </div>

                <div className='right'>
                    <ul className='navlist respnavv'>
                        <li><a href="#contact"><button className='contact-btn' > Contact me </button> </a> </li>
                    </ul>
                </div>


                {showLeftside && <Respleftside />}

            </nav>


        </>

    );
}

export default Header;
=======
import React from 'react';
import './Header.css';
import Respleftside from './Respleftside';
import { useState } from 'react';

function Header() {
    const [showLeftside, setShowLeftside] = useState(false);

    const handleBurgerClick = () => {
        setShowLeftside(!showLeftside);
    };
    return (
        <>
            <nav className="navbar respnavh">
                <div className='left'>
                    <div className='roundball'></div>
                    <div className='roundball'></div>
                </div>


                <div
                    className={`burger ${showLeftside ? 'active' : ''}`}
                    onClick={handleBurgerClick}>
                    <div className="line"></div>
                    <div className="line"></div>
                    <div className="line"></div>
                </div>

                <div className='right'>
                    <ul className='navlist respnavv'>
                        <li><a href="/"><button disabled className='contact-btn' > Contact me </button> </a> </li>
                    </ul>
                </div>


                {showLeftside && <Respleftside />}

            </nav>


        </>

    );
}

export default Header;
>>>>>>> 11da83f2d45796c0c410296b43b19965cf38081d
