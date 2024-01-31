import React from "react";
import styled from "../../styles/footer.module.css";
import image1 from "../../assets/Ellipse 33.png"
import image2 from "../../assets/Ellipse 54.png"
import image3 from "../../assets/Ellipse 55.png"
import image4 from "../../assets/Ellipse 56.png"
import image5 from "../../assets/Group 215.png"
import image6 from "../../assets/Group.png"
import image7 from "../../assets/Group 212.png"
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowAltCircleRight } from "@fortawesome/free-regular-svg-icons";
import { faRightLong } from "@fortawesome/free-solid-svg-icons";


const Footer=()=>{
    return(
        <div className={styled.container}>
            <div className={styled.box1}>
                <div className={styled.people}>
                    <p>People are Saying About DoWhith</p>
                    <p>Everything you need to accept to payment and grow your money of manage anywhere on planet</p>
                    <Image src={image7} alt="Error"/>
                    <p>I am very helped by this E-wallet application , my days are very easy to use this application and its very helpful in my life , even I can pay a short time 😍</p>
                    <p>_ Aria Zinanrio</p>
                    <div className={styled.images}>
                        <Image src={image1}/>
                        <Image src={image2}/>
                        <Image src={image3}/>
                        <Image src={image4}/>
                        <Image src={image5}/>
                    </div>
                </div>
                <div className={styled.form}>
                    <Image src={image6}/>
                    <p>Get Started</p>
                    <div className={styled.label}>
                        <label>Email</label>
                        <input type="email" placeholder="Enter your Email"/>
                    </div>
                    <div className={styled.label}>
                        <label>Message</label>
                        <input type="text" placeholder="What are you say?"/>
                        <button>Request Demo</button>
                    </div>
                    <p className={styled.trial}>or Start Free Trial</p>
                </div>
            </div>
            <div className={styled.optionsWrapper}>
                <div className={styled.intro}>
                    <p>Biccas</p>
                    <p>Get started noew try our product</p>
                    <div className={styled.inputWrapper}>
                        <input type="email" placeholder="Enter your email here"/><FontAwesomeIcon icon={faRightLong} className={styled.arrow}/>
                    </div>
                </div>
                <div className={styled.optionsContainer}>
                    <div className={styled.options}>
                        <p>Support</p>
                        <div>
                            <p>Help centre</p>
                            <p>Account information</p>
                            <p>About</p>
                            <p>Contact us</p>
                        </div>
                    </div>
                    <div className={styled.options}>
                        <p>Help and Solution</p>
                        <div>
                            <p>Talk to support</p>
                            <p>Support docs</p>
                            <p>Support docs</p>
                            <p>Covid responde</p>
                        </div>
                    </div>
                    <div className={styled.options}>
                        <p>Product</p>
                        <div>
                            <p>Update</p>
                            <p>Security</p>
                            <p>Beta test</p>
                            <p>Pricing product</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className={styled.rights}>
                <p>© 2022 Biccas Inc. Copyright and rights reserved</p>
                <p>Terms and Condtions . Privacy Policy</p>
            </div>
        </div>
    )
}

export default Footer