import React from "react";
import styled from "../../styles/feature.module.css";
import Image from "next/image";
import image1 from "../../assets/Frame 247.jpg"
import image2 from "../../assets/Frame 54.png"
import image3 from "../../assets/Frame 53.png"
import image4 from "../../assets/Rectangle 48.png"
import image5 from "../../assets/Ellipse 33.png"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChartSimple, faCheck } from "@fortawesome/free-solid-svg-icons";
import { faImage, faMessage } from "@fortawesome/free-regular-svg-icons";

const Feature=()=>{
    return(
        <div className={styled.container}>
            <div className={styled.box1}>
                <p className={styled.heading}>Our Features you cab get</p>
                <p className={styled.description}>We offer a variety of interesting features that you can help increase yor productivity at work and manage your projrct esaly</p>
                <p className={styled.btn}>Get Started</p>
            </div>
            <div className={styled.box2}>
            <div className={styled.box}>
                    <Image src={image1} alt="Error"/>
                    <p className={styled.featHeading}>Collboration Teams</p>
                    <p className={styled.featDescription}>Here you can handle projects together with team virtually</p>
                </div>
                <div className={styled.box}>
                    <Image src={image2} alt="Error"/>
                    <p className={styled.featHeading}>Cloud Storage</p>
                    <p className={styled.featDescription}>No nedd to worry about storage because we provide storage up to 2 TB</p>
                </div>
                <div className={styled.box}>
                    <Image src={image3} alt="Error"/>
                    <p className={styled.featHeading}>Daily Analytics</p>
                    <p className={styled.featDescription}>We always provide useful informatin to make it easier for you every day</p>
                </div>
            </div>
            <div className={styled.box3}>
                <div className={styled.tickWrapper}>
                    <p className={styled.heading}>What Benifit Will You Get</p>
                    <div className={styled.tickContainer}>
                        <p className={styled.tick}><FontAwesomeIcon icon={faCheck} style={{width:"20px",color:"white",backgroundColor:"#6bc6a3",borderRadius:"50%",padding:"5px"}}/>Free Consulting With Experet Saving Money</p>
                        <p className={styled.tick}><FontAwesomeIcon icon={faCheck} style={{width:"20px",color:"white",backgroundColor:"#6bc6a3",borderRadius:"50%",padding:"5px"}}/>Online Banking</p>
                        <p className={styled.tick}><FontAwesomeIcon icon={faCheck} style={{width:"20px",color:"white",backgroundColor:"#6bc6a3",borderRadius:"50%",padding:"5px"}}/>Investment Report Every Month</p>
                        <p className={styled.tick}><FontAwesomeIcon icon={faCheck} style={{width:"20px",color:"white",backgroundColor:"#6bc6a3",borderRadius:"50%",padding:"5px"}}/>Saving Money For The Future</p>
                        <p className={styled.tick}><FontAwesomeIcon icon={faCheck} style={{width:"20px",color:"white",backgroundColor:"#6bc6a3",borderRadius:"50%",padding:"5px"}}/>Online Transection</p>
                    </div>
                </div>
                <div className={styled.imageContainer}>
                    <Image src={image4}/>
                    <div className={styled.expert}>
                        <Image src={image5} alt="Error"/>
                        <div>
                            <p>Amanda Young</p>
                            <p>Expert Saving Money</p>
                        </div>
                        <p className={styled.tick}><FontAwesomeIcon icon={faMessage} style={{width:"30px",color:"white",backgroundColor:"#6bc6a3",borderRadius:"10px",padding:"8px"}}/></p>
                    </div>
                    <div className={styled.money}>
                        <FontAwesomeIcon icon={faCheck} style={{width:"30px",color:"white",color:"#6bc6a3",borderRadius:"20px",padding:"8px",border:"2px solid #6bc6a3"}} className={styled.tick}/>
                        <p>Money Transfer Succesfull</p>
                    </div>
                    <div className={styled.dollar}>
                        <p>Total Income</p>
                        <div className={styled.graph}>
                            <p>$245.00</p>
                            <FontAwesomeIcon icon={faChartSimple} style={{width:"20px",color:"#6bc6a3"}}/>
                        </div>
                    </div>
                    <p className={styled.float}><FontAwesomeIcon icon={faImage} style={{width:"30px",color:"white",backgroundColor:"#6bc6a3",borderRadius:"10px",padding:"8px"}}/></p>
                </div>
            </div>
            <div className={styled.box4}>
                <p className={styled.heading}>Choose Plan That’s Right For You</p>
                <p className={styled.description}>Choose plan that works best for you, feel free to contact us</p>
                <div className={styled.button}>
                    <p>Bil Monthly</p>
                    <p>Bil Yearly</p>
                </div>
            </div>

            <div className={styled.box5}>
                <div className={styled.cardContainer}>
                    <div className={styled.cardInfo}>
                        <p className={styled.heading}>Free</p>
                        <p className={styled}>Have a go  and test your  superpowers</p>
                        <p>$</p>
                        <p>0</p>
                    </div>
                    <div className={styled.offer}>
                        <p className={styled.tick}><FontAwesomeIcon icon={faCheck} style={{width:"20px",color:"white",backgroundColor:"#6bc6a3",borderRadius:"50%",padding:"5px"}}/>2 User</p>
                        <p className={styled.tick}><FontAwesomeIcon icon={faCheck} style={{width:"20px",color:"white",backgroundColor:"#6bc6a3",borderRadius:"50%",padding:"5px"}}/>2 Files</p>
                        <p className={styled.tick}><FontAwesomeIcon icon={faCheck} style={{width:"20px",color:"white",backgroundColor:"#6bc6a3",borderRadius:"50%",padding:"5px"}}/>Public Share & Comments</p>
                        <p className={styled.tick}><FontAwesomeIcon icon={faCheck} style={{width:"20px",color:"white",backgroundColor:"#6bc6a3",borderRadius:"50%",padding:"5px"}}/>Chat Suport</p>
                        <p className={styled.tick}><FontAwesomeIcon icon={faCheck} style={{width:"20px",color:"white",backgroundColor:"#6bc6a3",borderRadius:"50%",padding:"5px"}}/>New income apps</p>
                        <button>Signup for free</button>
                    </div>
                </div>
                <div className={styled.proContainer}>
                <div className={styled.proInfo}>
                        <p>Pro</p>
                        <p>Experiment the power of infinite possibilities</p>
                        <p>$</p>
                        <p>8</p>
                        <button>Save $50 a year</button>
                    </div>
                    <div className={styled.pro}>
                        <p className={styled.tick}><FontAwesomeIcon icon={faCheck} style={{width:"20px",color:"white",backgroundColor:"#6bc6a3",borderRadius:"50%",padding:"5px"}}/>4 User</p>
                        <p className={styled.tick}><FontAwesomeIcon icon={faCheck} style={{width:"20px",color:"white",backgroundColor:"#6bc6a3",borderRadius:"50%",padding:"5px"}}/>All apps</p>
                        <p className={styled.tick}><FontAwesomeIcon icon={faCheck} style={{width:"20px",color:"white",backgroundColor:"#6bc6a3",borderRadius:"50%",padding:"5px"}}/>Unlimited editable exports</p>
                        <p className={styled.tick}><FontAwesomeIcon icon={faCheck} style={{width:"20px",color:"white",backgroundColor:"#6bc6a3",borderRadius:"50%",padding:"5px"}}/>Folders and collaboration </p>
                        <p className={styled.tick}><FontAwesomeIcon icon={faCheck} style={{width:"20px",color:"white",backgroundColor:"#6bc6a3",borderRadius:"50%",padding:"5px"}}/>All incoming apps</p>
                        <button>Go to pro</button>
                    </div>
                    
                <div className={styled.below}></div>
                </div>
                <div className={styled.cardContainer}>
                    <div className={styled.cardInfo}>
                        <p className={styled.heading}>Business</p>
                        <p className={styled}>Unveil new superpowers and join the Design Leaque</p>
                        <p>$</p>
                        <p>16</p>
                    </div>
                    <div className={styled.offer}>
                        <p className={styled.tick}><FontAwesomeIcon icon={faCheck} style={{width:"20px",color:"white",backgroundColor:"#6bc6a3",borderRadius:"50%",padding:"5px"}}/>All the features of pro plan</p>
                        <p className={styled.tick}><FontAwesomeIcon icon={faCheck} style={{width:"20px",color:"white",backgroundColor:"#6bc6a3",borderRadius:"50%",padding:"5px"}}/>Account success Manager</p>
                        <p className={styled.tick}><FontAwesomeIcon icon={faCheck} style={{width:"20px",color:"white",backgroundColor:"#6bc6a3",borderRadius:"50%",padding:"5px"}}/>Single Sign-On (SSO)</p>
                        <p className={styled.tick}><FontAwesomeIcon icon={faCheck} style={{width:"20px",color:"white",backgroundColor:"#6bc6a3",borderRadius:"50%",padding:"5px"}}/>Co-conception pogram</p>
                        <p className={styled.tick}><FontAwesomeIcon icon={faCheck} style={{width:"20px",color:"white",backgroundColor:"#6bc6a3",borderRadius:"50%",padding:"5px"}}/>Collaboration-Soon</p>
                        <button>Goto Business</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Feature