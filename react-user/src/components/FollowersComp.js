import React from 'react';
import './components.css';

const FollowersComp = props => {
    return(
        <div className='followlist'>
            {props.followers.map(profile => {
                return(
                    <div key={profile.id} className='followers'>
                        <img src={profile.avatar_url} alt={profile.login} />
                        <h5 className='login'>{profile.login}</h5>
                    </div>
                )
            })}
        </div>
    )
}

export default FollowersComp;