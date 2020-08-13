import React from 'react';
import './header.styles.scss';
import {Link} from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { ReactComponent as Logo } from  '../../assets/logo-plain.svg';

import CreateEventButton from '../create-event-button/create-event-button.component'

import {connect} from 'react-redux'
import {createStructuredSelector} from 'reselect';
import {selectCurrentUser} from '../../redux/user/user.selector'
import { setActiveEvent } from '../../redux/events/events.actions'

import {auth} from '../../firebase/firebase.utils'

const Header = ({currentUser, hidden, setActiveAsActiveEvent}) => (
    <div className='header'>
         <Link to='/' className='logo-container'>
            <Logo className='logo' />
        </Link>
        <div className='nav-container'>
            {
                currentUser ? 
                <div className= 'button-container'>
                    <Link onClick={()=>setActiveAsActiveEvent(0)}className='header-button' to='/NewEvent'>NEW EVENT</Link> 
                    <div className='header-button' onClick={() => auth.signOut()}>SIGN OUT</div>
                </div> 
                : <Link className='header-button' to='/signIn'>SIGN IN</Link>
               
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

const mapDispatchToProps = dispatch => ({
    setActiveAsActiveEvent: eventId => dispatch(setActiveEvent(eventId))
})

export default connect(mapStateToProps, mapDispatchToProps)(Header);