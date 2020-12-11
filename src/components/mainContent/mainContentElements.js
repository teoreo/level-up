import styled from 'styled-components'; 
export const InfoContainer = styled.div`
    color: #fff;
    margin-top: 280px;
    background: ${({lightBg}) => (lightBg ? '#010606' : '#f9f9f9')}
    ;
    
    @media screen and (max-width: 768px){
        padding: 100px 0;
    }
`;

export const InfoWrapper = styled.div`
    display: grid;
    z-index: 1;
    height: 800px;
    /* width: 100%; */
    margin-right: auto;
    margin-left: auto;
    /* padding: 0 20px; */
    justify-content: center;
`
export const InfoRow = styled.div`
    margin-top: 300px;
    display: grid;
    grid-auto-columns: minmax(auto, 1fr);
    align-items:center;
    grid-template-areas: ${({ imgStart }) => 
    imgStart ? `'col2 col1'` : `'col1 col2'`};
    
    @media screen and (max-width: 768px){
        grid-template-areas: ${({ imgStart }) => 
        imgStart ? `'col1' 'col2'` : `'col1 col1' 'col2 col2'`};
    }
`;

export const Column1 = styled.div`
    margin-bottom: 15px;
    padding: 0 15px;
    grid-area: col1;
`;

export const Column2 = styled.div`
    margin-bottom: 15px;
    padding: 0 15px;
    grid-area: col2;
`;

export const TextWrapper = styled.div`
    max-width: 540px;
    padding-top: 0;
    padding-bottom: 60px;
`;

export const TopLine = styled.p`
    color: #F4AF7A;
    font-size: 26px;
    line-height: 16px;
    font-weight: 700;
    letter-spacing: 1.4px;
    text-transform: uppercase;
    margin-bottom: 16px;
`;
export const Heading = styled.h1`
    color: #000;
    margin-bottom: 24px;
    font-size: 20px;
    line-height: 1.1;
    font-weight: 600;
    color: ${({ lightText }) => (lightText ? '#010606' : '#f7f8fa')
    };
    
    @media screen and (max-width: 480px) {
        font-size: 32px;
    }
`;

export const Subtitle = styled.p`
    max-width: 440px;
    margin-bottom: 35px;
    text-align: center;
    font-size: 22px;
    line-height: 24px;
    color: ${({darkText}) => (darkText ? '#fff' : '#010606')}
`;

export const ImgWrapper = styled.div`
    max-width: 500px;
    margin: auto;
    height: 100%;
`;


export const Img = styled.img`
    width: 80%;
    margin: auto;
    padding-right: 0;
`;