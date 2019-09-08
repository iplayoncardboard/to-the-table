import React from 'react';
import './header.styles.scss';
import {Link} from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { ReactComponent as Logo } from  '../../assets/logo-plain.svg';

const Header = () => (
    <div className='header'>
         <Link to='/' className='logo-container'>
            <Logo className='logo' />
        </Link>
        <div className='nav-container'>
            <Link className='header-sign-in' to='/signIn'>SIGN IN</Link>
            <div className='user-menu'>
                <FontAwesomeIcon className='user-icon'  icon={faUser} size='2x' />
            </div>
        </div>
    </div>
)

export default Header