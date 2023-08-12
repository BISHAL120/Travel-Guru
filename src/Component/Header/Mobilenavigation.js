import React, { useState } from 'react';
import './Header.css';
import { CgMenu, CgClose } from 'react-icons/cg';
import { Link } from 'react-router-dom';
import searchicon from '../../images/search-outline 1.png';
import { motion } from 'framer-motion';

const Mobilenavigation = () => {

    const [open, setOpen] = useState(false);



    return (
        <div className='mobilenavigation'>
            {
                open ? <CgClose onClick={() => setOpen(!open)} className='menuicon' size={'40px'} color='white' />
                    : <CgMenu onClick={() => setOpen(!open)} className='menuicon' size={'40px'} color='white' />
            }
            {
                open && <div className=' menus d-flex justify-content-center align-items-center '>
                    <motion.div
                        initial={{ opacity: 0, y: -500 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.5 }}
                        className='input'>
                        <img src={searchicon} alt="" />
                        <input placeholder='   Search your Destination...' type="text" />
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0, y: -500 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.10 }}
                        className='ancor'>
                        <Link><p>News</p></Link>
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0, y: -500 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.30 }}
                        className='ancor'>
                        <Link><p>Destination</p></Link>
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0, y: -500 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.50 }}
                        className='ancor'>
                        <Link><p>Blog</p></Link>
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0, y: -500 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.70 }}
                        className='ancor'>
                        <Link><p>Contact</p></Link>
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0, y: -500 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.80 }}
                        className='ancor'>
                        <Link><p>Login</p></Link>
                    </motion.div>
                </div>
            }
        </div>
    );
};

export default Mobilenavigation;