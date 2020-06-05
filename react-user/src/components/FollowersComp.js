import React from 'react';

const FollowersComp = props => {
    return(
        <div>
            {props.followers.map(profile => {
                return(
                    <div key={profile.id}>
                        <img src={profile.avatar_url} alt={profile.login} />
                        <h5>{profile.login}</h5>
                    </div>
                )
            })}
        </div>
    )
}

export default FollowersComp;