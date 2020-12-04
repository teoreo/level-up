/* import React, {useState} from 'react';
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
} from '../components/mainContent/mainContentElements';


export default function MainContent (){
    const [lightBg, setLightBg] = useState(Boolean);
    const [id, setId] = useState(String);
    const [imgStart, setImgStart] = useState(Boolean)
    const [topLine, setTopLine] = useState(String)
    const [lightText, setLightText] = useState(Boolean)
    const [headline, setHeadline] = useState(String)
    const [darkText, setDarkText] = useState(Boolean)
    const [description, setDescription] = useState(String)
    const [img, setImg] = useState([])
    const [alt, setAlt] = useState(String)



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
    )
} */

import React from 'react'

export const mainContent = () => {
    return (
        <div>
            
        </div>
    )
}
