import React from "react";
import styled from "styled-components";



// Footer need to be adjusted in the bottom of the page always
const StyledFooter = styled.footer`
    position: fixed;
    bottom: 0;
    left: 0;
    width: 100%;
    padding: 20px 0 20px 0;
    text-align: center;
    z-index: 1000;
    backdrop-filter: blur(1px) saturate(180%) contrast(120%) brightness(100%);
    background: linear-gradient(rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0.9));
`;

const Rights = styled.p`
    font-size: 0.7rem;
    text-align: center;
    heigth: 100px;
    vertical-align: bottom;
`;

const Footer: React.FC = () => {
    return (
        <StyledFooter>
            <Rights>Copyright © 2023. All rights reserved. Amin Xodā Bandeh</Rights>
        </StyledFooter>
    );
};

export default Footer;