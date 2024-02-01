import React from "react";
import styled from "../../styles/intro.module.css";
import Navbar from "@/components/navbar";
import { faCirclePlay } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFonticons, faGalacticRepublic, faIntercom, faUnsplash } from "@fortawesome/free-brands-svg-icons";
import Image from "next/image";
import image1 from "../../assets/Frame 46.png";
import image2 from "../../assets/Frame 45.png"
import { faChartSimple, faCheck, faDatabase } from "@fortawesome/free-solid-svg-icons";

const Intro=()=>{
    return(
        <div className={styled.container}>
            <Navbar/>
            <div className={styled.boxContainer}>
                <div className={styled.box1}>
                    <p className={styled.heading}>We&apos;re here to Increase your Productivity</p>
                    <div className={styled.line}></div>
                    <p className={styled.text}>Let&apos;s make your work more organize and easily using the Taskio Dashboard with many of the latest featuresin managing work every day.</p>
                    <div className={styled.btn}>
                        <span className={styled.free}>Try Free Trail</span>
                        <div className={styled.demo}>
                            <FontAwesomeIcon icon={faCirclePlay} style={{width:"20px",height:"20px"}}/>
                            <p>View Demo</p>
                        </div>
                    </div>
                </div>
                <div className={styled.box2}>
                    <Image src={image1} alt="Error"/>
                    <Image src={image2} alt="Error" style={{width:"146px",height:"188px",position:"absolute",top:"300px",right:"10px"}} className={styled.image2}/>
                    <div className={styled.dollar}>
                        <p>Total Income</p>
                        <div className={styled.graph}>
                            <p>$245.00</p>
                            <FontAwesomeIcon icon={faChartSimple} style={{width:"20px",color:"#6bc6a3"}}/>
                        </div>
                    </div>
                    <div className={styled.tick}>
                        <FontAwesomeIcon icon={faCheck} style={{width:"20px",color:"white"}}/>
                    </div>
                    <div className={styled.database}>
                        <FontAwesomeIcon icon={faDatabase} style={{width:"20px",color:"white"}}/>
                    </div>
                    <div className={styled.send}>
                    <div>
                        <p>Enter Amount</p>
                        <p>$450.0</p>
                    </div>
                        <button>Send</button>
                    </div>
                </div>
            </div>
            <div className={styled.collabContainer}>
                <p className={styled.collabHeading}>More than 25,000 teams use Collabs</p>
                <div className={styled.collabs}>
                    <p className={styled.icons}><FontAwesomeIcon icon={faUnsplash} style={{width:"40px",height:"40px",paddingRight:"10px"}}/>Unsplash</p>
                    <p className={styled.icons}><FontAwesomeIcon icon={faFonticons} style={{width:"40px",height:"40px",paddingRight:"10px"}}/>Unsplash</p>
                    <p className={styled.icons}><FontAwesomeIcon icon={faIntercom} style={{width:"40px",height:"40px",paddingRight:"10px"}}/>Intercom</p>
                    <p className={styled.icons}><FontAwesomeIcon icon={faUnsplash} style={{width:"40px",height:"40px",paddingRight:"10px"}}/>descript</p>
                    <p className={styled.icons}><FontAwesomeIcon icon={faUnsplash} style={{width:"40px",height:"40px",paddingRight:"10px"}}/>grammarly</p>
                </div>
            </div>
        </div>
    )
}

export default Intro