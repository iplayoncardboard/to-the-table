import React from 'react';
import './homepage.styles.scss'
import {Link} from 'react-router-dom';
import FeatureCard from '../../components/feature-card/feature-card.component';
import ti3 from '../../assets/images/ti3.jpg'
import warhammer from '../../assets/images/warhammer.jpg'
import rising from '../../assets/images/rising.jpg'

const HomePage = () => (
    <div className='homepage'>
        <Link className='get-started' to='/signIn'>GET STARTED</Link>
        <FeatureCard 
            title='Find New Friends'
            features={['Find gaming events in your area','Invite gamers in your area','Rate groups and gamers']}
            imageUrl={ti3}
        />
         <FeatureCard 
            title='Manage Events Easily'
            features={['Link your BGG collection','Innovative voting system','Innovative table system (self Organize)']}
            imageUrl={warhammer}
        />
         <FeatureCard 
            title='Board Game Geek Integration'
            features={['Automatically Update Plays','Track wins and losses','Import BGG account info']}
            imageUrl={rising}
        />
       
    </div>
    
    
)

export default HomePage;