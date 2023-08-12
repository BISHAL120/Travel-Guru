import React, { useContext, useState } from 'react';
import { Mycontext } from '../../App';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import logo from '../../images/Logo copy.png';
import { Link } from 'react-router-dom';
import { CgMenu, CgClose } from 'react-icons/cg';
import './Header.css';
import Navigation from './Navigation';
import Mobilenavigation from './Mobilenavigation';
import Travelsection from '../Travelsection/Travelsection';

const Header = () => {
    const [open, setOpen] = useState(false);
    const [showarea] = useContext(Mycontext);
    return (
        <div>
            <div className="home-container" style={{
                backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),url(${showarea.img})`,
                backgroundSize: "cover",
                backgroundPosition: "center"
            }}>
                <div className='header container pt-3 d-flex justify-content-between'>
                    <div>
                        <div className='logo'>
                            <Link><img className='' src={logo} alt="" /></Link>
                        </div>
                    </div>
                    <Navigation />
                    <Mobilenavigation />
                    {/* {
                        open ?
                            
                            :
                            
                    } */}
                </div>
                <Travelsection></Travelsection>
            </div>
        </div>
    );
};

export default Header;