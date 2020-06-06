import React from 'react';
import './components.css';

const FollowersComp = props => {
    return(
        <div>
            {props.followers.map(profile => {
                return(
                    <div key={profile.id} className='profile'>
                        <img src={profile.avatar_url} alt={profile.login} />
                        <h5>{profile.login}</h5>
                    </div>
                )
            })}
        </div>
    )
}

export default FollowersComp;