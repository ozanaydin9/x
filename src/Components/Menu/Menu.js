import React, {useEffect, useState} from "react";
import styles from './Menu.module.css';
import {Route, Switch, useHistory} from "react-router-dom";

const Menu = () => {
    const history = useHistory();
    return(
        <>
            <div className={styles.main}>
                <div className={styles.menu}>
                    <span className={styles.menuItem} onClick={()=> history.push("/ch")} >Chart</span>
                    <span className={styles.menuItem} >Soon..</span>
                    <span className={styles.menuItem} >Soon..</span>
                </div>
            </div>
        </>
    )
};

export default Menu;