import React from 'react';
import './Home.css';
import { Link } from 'react-router-dom';
import { useStateValue } from '../StateProvider';

function Home() {

    const [{user}, dispatch] = useStateValue();
    console.log(user);
    return (
        <div className="home">
            <h1>Hello {user?  user.email.substring(0, user.email.indexOf("@")):"Guest"},</h1> 
            <p>
                Welcome to this simple login authentication program using firebase
            </p>
        </div>
    )
}

export default Home
