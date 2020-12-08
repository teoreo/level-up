import React from 'react';
import { InfoContainer,
    InfoWrapper,
    InfoRow,
    Column1,
    TextWrapper,
    TopLine,
    Heading,
    Subtitle,
    Column2,
    ImgWrapper,
    Img
} from './mainContentElements';


const MainContent = ({
    lightBg,
    id,
    imgStart,
    topLine,
    lightText,
    headline,
    darkText,
    description,
    img,
    alt,
    primary,
    dark
}) => {
   
    return (
        <React.Fragment>
         <InfoContainer lightBg={lightBg} id={id}>
          <InfoWrapper>
              <InfoRow imgStart={imgStart}>
                  <Column1>
                  <TextWrapper smooth={true}
                  duration={500}
                  spy={true}
                  exact="true"
                  offset={-80}
                  primary={primary ? 1 : 0} /* om det 1 = true 0 = false */
                  dark={ dark ? 1 : 0 }>
                      <TopLine>{topLine}</TopLine>
                      <Heading lightText={lightText}> {headline}</Heading>
                  </TextWrapper>
                  </Column1>
                  <Column2>
                    <ImgWrapper>
                        <Subtitle dark={darkText}>{description}</Subtitle>
                        <Img src={img} alt={alt} />
                    </ImgWrapper>
                  </Column2>
              </InfoRow>
            </InfoWrapper>  
        </InfoContainer>   
        
        </React.Fragment>
    );
};
export default MainContent;