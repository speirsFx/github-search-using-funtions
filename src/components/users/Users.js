import React, { useContext } from 'react';
import UserItem from './UserItem';
import Spinner from '../layout/Spinner';
import PropTypes from 'prop-types';
import GithubContext from '../../context/github/githubContext';


const Users = () => {

    const githubContext = useContext(GithubContext);
  
    const {loading, users} = githubContext;
    console.log(users);

         if(loading){
            return <Spinner />
        }
        else { 
        return (
            <div style={userStyle}>
            {users.map(user => (
                <UserItem key={user.id} user={user} />
            ))}
            </div>
        )}
    
}




const userStyle = {
    display: 'grid',
    gridTemplateColumns: 'repeat(3, 1fr)',
    gridGap: '1rem'
}

Users.protoTypes = {
    loading: PropTypes.bool.isRequired,
    user: PropTypes.object.isRequired,
};


export default Users
