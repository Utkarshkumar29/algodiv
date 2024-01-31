'use client'
import React, { useState } from "react";
import styled from "../../styles/navbar.module.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faClose } from "@fortawesome/free-solid-svg-icons";

const Navbar=()=>{
    const [bar,setBar]=useState(false)

    const handleToggleBar=()=>{
        setBar(!bar);
    }

    return(
        <div className={styled.container}>
            <div className={styled.first}>
                <p>Biccas</p>
            </div>
            <div className={styled.mid}>
                <p>Home</p>
                <p>Product</p>
                <p>FAQ</p>
                <p>Blog</p>
                <p>About US</p>
            </div>
            <div className={styled.end}>
                <p>Login</p>
                <p>Sign Up</p>
            </div>

            <div className={styled.bar}>
                <FontAwesomeIcon icon={faBars} onClick={handleToggleBar}/>
            </div>

            {bar && (
                <div className={styled.ham}>
                    <p>Home</p>
                    <p>Product</p>
                    <p>FAQ</p>
                    <p>Blog</p>
                    <p>About US</p>
                    <p>Login</p>
                    <p>Sign Up</p>
                    <div className={styled.close}>
                        <FontAwesomeIcon icon={faClose} style={{width:"20px",height:"20px",color:"white"}} onClick={handleToggleBar}/>
                    </div>
                </div>
            )}
        </div>
    )
}

export default Navbar