import React, { useState } from 'react'
import Video from '../../assets/videos/video.mp4';
import { Button } from '../buttonElement'
import { 
    HeroContainer,
    HeroBg,
    VideoBg,
    HeroContent,
    HeroH1,
    HeroP, 
    HeroBtnWrapper,
    ArrowForward,
    ArrowRight 
} from './heroElements';


export const HeroSection = () => {
    const [hover, setHover] = useState(false)

    const onHover = () => {
        setHover(!hover)
    };
    return (
        <HeroContainer>
            <HeroBg>
                <VideoBg autoPlay loop muted src={Video} type='video/mp4' />
            </HeroBg>
            <HeroContent>
                <HeroH1>
                <div className="containerH1">
                    <h1>Din <h1 className="orangeTxt">konsult- och rekryteringspartner</h1> där ingen utmaning är för stor</h1> 
                </div>
                </HeroH1>
                    <HeroBtnWrapper>
                        <Button to='jobs' onMouseEnter={onHover}
                         onMouseLeave={onHover}
                         primary="true"
                         dark="true"
                         > 
                        Lediga jobb {hover ? <ArrowForward /> : <ArrowRight
                            />}
                        </Button> 
                    </HeroBtnWrapper>
            </HeroContent>
        </HeroContainer>
    );
};
