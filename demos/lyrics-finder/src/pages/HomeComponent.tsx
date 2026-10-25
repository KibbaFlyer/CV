import React from "react";
import arrowPic from '../../assets/icons8-down-arrow-100-2.png'

// Styled Components
import { Div, H1, H2, StyledParallax, StyledParallaxLayer, StyledParallaxBackgroundLayer, StyledImg } from '../styling/ParallaxComponentStyling'

// CSS
import animations from '../styling/Animations.module.css'

const HomeComponent: React.FC = () => {

    return (
        <Div>
            <StyledParallax
                pages={2}
            >
                <StyledParallaxBackgroundLayer
                    offset={0}
                    speed={1}
                    factor={4}
                >
                </StyledParallaxBackgroundLayer>
                <StyledParallaxLayer
                    offset={0}
                    speed={2}
                >
                    <H1>Hello and Welcome!</H1>
                </StyledParallaxLayer>
                <StyledParallaxLayer
                    offset={0.3}
                    speed={1.5}
                >
                    <img className={`${animations.show} ${animations.img}`} src={arrowPic} />
                </StyledParallaxLayer>
                <StyledParallaxLayer
                    offset={0.9}
                    speed={2}
                >
                    <H2>This is a small little submission for a React course at ITHS</H2>
                </StyledParallaxLayer>
                <StyledParallaxLayer
                    offset={1}
                    speed={2}
                >
                    <StyledImg className={`${animations.show} ${animations.img}`} src={arrowPic}/>
                    <H2>I have connected some external APIs, please have a look at the different tabs in the top</H2>
                </StyledParallaxLayer>
            </StyledParallax>
        </Div>
    );

};

export default HomeComponent;