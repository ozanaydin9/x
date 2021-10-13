import React, {useEffect, useState} from "react";
import styles from './Home.module.css';
import {BrowserRouter, useHistory} from "react-router-dom";
import Menu from "../Menu/Menu";

const Home = () => {
    const [username, setUsername] = useState([])
    const [password, setPassword] = useState([])
    const history = useHistory();

   const usernameChange = (e) => {
       setUsername(e.target.value)
   }

    const passwordChange = (e) => {
        setPassword(e.target.value)
    }

    useEffect(()=>{
       checkLogin();
    },[password,username])

    const checkLogin = () => {
       console.log(username)
       console.log(password)
        if(username==1 && password==2){
            history.push("/in")
        }
    }

    return(
        <>
            <div className={styles.main}>
                <input onChange={usernameChange} placeholder={"username"} type="password" className={styles.input}/><br/>
                <input onChange={passwordChange} placeholder={"password"} type="password" className={styles.input}/>
            </div>

        </>


    )
};

export default Home;