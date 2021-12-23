import React from "react";

import styled from 'styled-components';
import {Link} from 'react-router-dom';

//Images
import athlete from '../img/athlete-small.png';
import theracer from '../img/theracer-small.png';
import goodTimes from '../img/goodtimes-small.png';

//Animation
import { motion } from 'framer-motion';
import { pageAnimation, fade, photoAnim, lineAnim, Slider, sliderContainer } from "../animation";
import { useScroll } from '../components/useScroll';


const OurWork = () => {
    const [element, controls] = useScroll();
    const [element2, controls2] = useScroll();
    
    return (
        <Work style={{background: "#fff"}} variants={pageAnimation} exit="exit" initial="hidden" animate="show">
            <motion.div variants={ sliderContainer }>
                <Frame1 variants={ Slider }></Frame1>
                <Frame2 variants={ Slider }></Frame2>
                <Frame3 variants={ Slider }></Frame3>
                <Frame4 variants={ Slider }></Frame4>
            </motion.div>
            <Movie>
                <motion.h2 variants={fade}>The Athlete</motion.h2>
                <motion.div variants={ lineAnim } className="line"></motion.div>
                <Link to="/work/the-athlete">
                    <Hide>
                        <motion.img variants={photoAnim} src={athlete} alt="The_Athlete" />
                    </Hide>

                </Link>
            </Movie>
            <Movie ref={element} variants={fade} animate={controls} initial='hidden'>
                <motion.h2 variants={fade}>The Racer</motion.h2>
                <motion.div variants={ lineAnim } className="line"></motion.div>
                <Link to="/work/the-racer">
                    <Hide>
                        <motion.img variants={photoAnim} src={theracer} alt="The_Racer" />
                    </Hide>

                </Link>
            </Movie>
            <Movie ref={element2} variants={fade} animate={controls2} initial='hidden'>
                <motion.h2 variants={fade}>Good Times</motion.h2>
                <motion.div variants={ lineAnim } className="line"></motion.div>
                <Link to="/work/good-times">
                    <Hide>
                        <motion.img variants={photoAnim} src={goodTimes} alt="Good_Times" />
                    </Hide>
                </Link>
            </Movie>
        </Work>
    )
}

// How to get data from an api
//stateMovie.map(movie => <Movie title />)

const Work = styled(motion.div)`
    min-height: 100vh;
    overflow: hidden;
    padding: 5rem 10rem;
    h2{
        padding: 1rem 0rem;
    }
    @media (max-width: 1300px){
        padding: 2rem 2rem;
    }
`;

const Movie = styled(motion.div)`
    padding-bottom: 10rem;
    .line{
        height: 0.5rem;
        background: #23d997;
        margin-bottom: 3rem;
    }
    img{
        width: 100%;
        height: 75vh;
        object-fit: cover;
    }
`;

const Hide = styled.div`
  overflow: hidden;  
`;

// Framer Motion
const Frame1 = styled(motion.div)`
    position: fixed;
    left: 0;
    top: 10%;
    width: 100%;
    height: 100vh;
    background: #fffebf;
    z-index: 2;    
`;
const Frame2 = styled(Frame1)`
    background: #ff8ebf;
`;
const Frame3 = styled(Frame1)`
    background: #8ed2ff;
`;
const Frame4 = styled(Frame1)`
    background: #8effa0;
`;

export default OurWork;