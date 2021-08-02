import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { auth } from '../firebase';
import './Login.css'

function Login() {

    const history = useHistory();
    const[email, setEmail] = useState('');
    const[password, setPassword] = useState('');

    const signIn = e => {
        e.preventDefault();
        auth
        .signInWithEmailAndPassword(email, password)
        .then(auth => {
            alert(`${email} has succesfully login`)
            history.push('/')
        })
        .catch(error => alert(error.message))
    }

    const register = e => {
        e.preventDefault();
        auth
        .createUserWithEmailAndPassword(email, password)
        .then(auth => {
            alert("Succesfully created an account for ", email)
            history.push('/')
        })
        .catch(error => alert(error.message))
    }

    return (
        <div className="body__container">
            <div className="container">
                <div className="title">Login</div>
                <form>
                    <div className="field">
                        <input type="text" 
                        value={email} 
                        onChange={e => setEmail(e.target.value)}
                        required
                        />
                        <label>Email Address</label>
                    </div>
                    <div className="field">
                        <input 
                        type="password"
                        value={password}
                        onChange={e => setPassword(e.target.value)}
                        required
                        />
                        <label>Password</label>
                    </div>
                    <div className="field button">
                        <input onClick={signIn} type="submit" value="Login" />
                        <input onClick={register} type="submit" value="Register" />
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Login
