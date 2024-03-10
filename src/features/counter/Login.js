import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { loginAsync,selectlogged,selectToken} from './loginSlice';
import styles from './Counter.module.css';

export function Login() {
    const logged = useSelector(selectlogged);
    const token = useSelector(selectToken);
    const dispatch = useDispatch();
    const [username, setuserName] = useState("")
    const [password, setpassword] = useState("")
    return (
        <div style={{backgroundColor:"gray"}}>
            <div className={styles.row}>
                <h1>{logged ? "logged":"not logged"}</h1>
                {/* {token} */}
                <br></br>
                <hr></hr>
                User name<input onChange={(e)=>setuserName(e.target.value)}/>
                Password<input  onChange={(e)=>setpassword(e.target.value)}/>
                <button onClick={() => dispatch(loginAsync({username,password}))}>login</button>
            </div>
        </div>
    );
}