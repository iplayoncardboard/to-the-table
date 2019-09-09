import React from 'react';
import './header.styles.scss';
import {Link} from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { ReactComponent as Logo } from  '../../assets/logo-plain.svg';

import {connect} from 'react-redux'
import {createStructuredSelector} from 'reselect';
import {selectCurrentUser} from '../../redux/user/user.selector'

import {auth} from '../../firebase/firebase.utils'

const Header = ({currentUser, hidden}) => (
    <div className='header'>
         <Link to='/' className='logo-container'>
            <Logo className='logo' />
        </Link>
        <div className='nav-container'>
            {console.log('HDR',currentUser)}
            {
                currentUser ? 
                <div className='header-sign-in' onClick={() => auth.signOut()}>SIGN OUT</div> :
                <Link className='header-sign-in' to='/signIn'>SIGN IN</Link> 
            }
            
            <div className='user-menu'>
                <FontAwesomeIcon className='user-icon'  icon={faUser} size='2x' />
            </div>
        </div>
    </div>
)

const mapStateToProps = createStructuredSelector({
    currentUser:selectCurrentUser
})

export default connect(mapStateToProps)(Header);