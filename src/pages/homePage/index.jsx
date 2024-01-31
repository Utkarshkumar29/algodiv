import React from "react";
import styled from "../../styles/homePage.module.css"
import Intro from "@/views/intro";
import Support from "@/views/support";
import Feature from "@/views/features";
import Footer from "@/components/footer";

const HomePage=()=>{
    return(
       <div className={styled.container}>
            <div className={styled.wrapper}>
                <Intro/>
                <Support/>
                <Feature/>
                <Footer/>
            </div>
       </div>
    )
}

export default HomePage