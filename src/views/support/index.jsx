import { faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import image1 from "../../assets/Vector.png"
import image2 from "../../assets/Vector (1).png"
import image3 from "../../assets/pie-chart 1.png"
import styled from "../../styles/support.module.css"
import Image from "next/image";

const Support=()=>{
    return(
        <div className={styled.boxContainer}>
            <div className={styled.box1}>
                <p className={styled.box1Heading}>How we support our pratner all over the world</p>
                <p className={styled.description}>SaaS become a common delivery model for many business application, including office software, messaging software, payroll processing software, DBMS software, management software</p>
                <div className={styled.ratings}>
                    <div>
                        <div className={styled.icons}>
                            <FontAwesomeIcon icon={faStar} style={{width:"20px",height:"20px",color:"yellow"}}/>
                            <FontAwesomeIcon icon={faStar} style={{width:"20px",height:"20px",color:"yellow"}}/>
                            <FontAwesomeIcon icon={faStar} style={{width:"20px",height:"20px",color:"yellow"}}/>
                            <FontAwesomeIcon icon={faStar} style={{width:"20px",height:"20px",color:"yellow"}}/>
                            <FontAwesomeIcon icon={faStar} style={{width:"20px",height:"20px",color:"yellow"}}/>
                        </div>
                        <p className={styled.number}>4.9 / 5 rating</p>
                        <p className={styled.company}>databricks</p>
                    </div>
                    <div>
                        <div className={styled.icons}>
                            <FontAwesomeIcon icon={faStar} style={{width:"20px",height:"20px",color:"yellow"}}/>
                            <FontAwesomeIcon icon={faStar} style={{width:"20px",height:"20px",color:"yellow"}}/>
                            <FontAwesomeIcon icon={faStar} style={{width:"20px",height:"20px",color:"yellow"}}/>
                            <FontAwesomeIcon icon={faStar} style={{width:"20px",height:"20px",color:"yellow"}}/>
                            <FontAwesomeIcon icon={faStar} style={{width:"20px",height:"20px",color:"gray"}}/>
                        </div>
                        <p className={styled.number}>4.8 / 5 rating</p>
                        <p className={styled.company}>Chainalysis</p>
                    </div>
                </div>
            </div>
            <div className={styled.box2}>
                <div className={styled.features}>
                    <Image src={image1} alt="Error" className={styled.image} style={{width:"50px",height:"50px"}}/>
                    <div>
                        <p className={styled.featHeading}>Publishing</p>
                        <p className={styled.featDescription}>Plan, collaborate, and publishing your contetn that drivees meaningful engagement and growth for your barnd</p>
                    </div>
                </div>
                <div className={styled.features}>
                    <Image src={image3} alt="Error" className={styled.image} style={{width:"50px",height:"50px"}}/>
                    <div>
                        <p className={styled.featHeading}>Analytics</p>
                        <p className={styled.featDescription}>Analyze your performance and create goegeous report</p>
                    </div>
                </div>
                <div className={styled.features}>
                    <Image src={image2} alt="Error" className={styled.image} style={{width:"50px",height:"50px"}}/>
                    <div>
                        <p className={styled.featHeading}>Engagement</p>
                        <p className={styled.featDescription}>Quiuckly navigate you anda engage with your adience</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Support