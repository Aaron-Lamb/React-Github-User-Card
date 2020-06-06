import React from 'react';
import { Link } from 'react-router-dom';
import './components.css';

const UserComp = props => {
    return(
        <div className='profile'>
            <img src={props.profile.avatar_url} alt='Me' />
            <div className='info'>
                <h3>{props.profile.name}</h3>
                <p>{props.profile.bio}</p>
                <h5>{props.profile.login}</h5>
                <h5>{props.profile.location}</h5>
            </div>
            <Link to='/followers'>Followers</Link>
        </div>
    )
}

export default UserComp;