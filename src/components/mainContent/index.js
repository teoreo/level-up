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
    alt
}) => {
   
    return (
        <React.Fragment>
         <InfoContainer lightBg={lightBg} id={id}>
          <InfoWrapper>
              <InfoRow imgStart={imgStart}>
                  <Column1>
                  <TextWrapper>
                      <TopLine>{topLine}</TopLine>
                      <Heading lightText={lightText}> {headline}</Heading>
                      <Subtitle dark={darkText}>{description}</Subtitle>
                  </TextWrapper>
                  </Column1>
                  <Column2>
                    <ImgWrapper>
                        <Img src={img} alt={alt}/>
                    </ImgWrapper>
                  </Column2>
              </InfoRow>
            </InfoWrapper>  
        </InfoContainer>   
        
        </React.Fragment>
    );
};
export default MainContent;