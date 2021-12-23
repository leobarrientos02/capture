import React from "react";

//Animation
import { motion } from 'framer-motion';
import { pageAnimation, titleAnim } from "../animation";
import styled from 'styled-components';

const ContactUs = () => {

    return (
        <ContactStyle style={{background: "#fff"}} variants={pageAnimation} exit="exit" initial="hidden" animate="show">
            <Title>
                <Hide>
                    <motion.h2 variants={ titleAnim }>
                        Get in touch.
                    </motion.h2>
                </Hide>
            </Title>

            <div>
                <Hide>
                    <Social variants={ titleAnim }>
                        <Circle />
                        <h2>
                            <a href="https://leonelbarrientos.netlify.app/contact/index.html" target="_blank" rel="noopener noreferrer">Send Us a Message</a>
                        </h2>
                    </Social>
                </Hide>
                <Hide>
                    <Social  variants={ titleAnim }>
                        <Circle />
                        <h2>
                            <a href="mailto:leobarrientos02@gmail.com?subject=CaptureProject%20Contact">Send an Email</a>
                        </h2>
                    </Social>
                </Hide>
                    <Social  variants={ titleAnim }>
                        <Circle />
                        <h2>
                            <a href="https://www.linkedin.com/in/leonel-barrientos-519b5a152/" target="_blank" rel="noopener noreferrer">Social Media</a>
                        </h2>
                    </Social>
            </div>
        </ContactStyle>
    );
};

const ContactStyle = styled(motion.div)`
    padding: 5rem 10rem;
    color: #353535;
    min-height: 90vh;
    @media (max-width: 1500px){
        padding: 2rem;
        font-size: 1rem;
    }
`;

const Title = styled.div`
    margin-bottom: 3.5rem;
    color: black;
    @media (max-width: 1500px){
        margin-top: 5rem;
    }
`;

const Hide = styled.div`
    overflow: hidden;
`;

const Circle = styled.div`
    border-radius: 50%;
    width: 2.5rem;
    height: 2.5rem;
    background: #353535;
`;


const Social = styled(motion.div)`
    display: flex;
    align-items: center;
    h2{
        margin: 2rem;
        a{
            text-decoration: none;
            color: #353535;
            font-size: 4rem;
            &:hover{
                text-decoration: underline;
            }
        }
    }    
`;

export default ContactUs;