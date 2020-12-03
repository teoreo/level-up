import React from 'react'
import Video from 'url https://static.kitcdn.se/cws/2020/11/lvl-2020-11-17-21_17_26.mp4'

export const HeroSection = () => {
    return (
        <HeroContainer>
            <HeroBg>
                <VideoBg autoPlay loop muted src={Video} type='video/mp4' />
            </HeroBg>
        </HeroContainer>
    )
}
