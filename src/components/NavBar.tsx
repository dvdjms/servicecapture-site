import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components';
import icon from '../assets/icon.png'

const Navbar: React.FC = () => {
    return (
        <Nav>
            <LogoContainer to="/">
                <LogoImage src={icon} alt="Service Capture Logo" />
                <Service>Service</Service><Orange /><Capture>Capture</Capture>
            </LogoContainer>
        </Nav>
    )
}


// Styled components
const Nav = styled.nav`
    background-color: #f2f2f7;
    box-shadow: 0 2px 10px rgba(0,0,0,0.1);
    padding: 1rem 2rem;
`;

const LogoContainer = styled(Link)`
    display: inline-flex;
    align-items: center;
    padding-left: 20px;
`;

const LogoImage = styled.img`
    height: 40px;
    width: auto;
`;

const Service = styled.div`
    font-size: 1.5rem;
    font-weight: bold;
    color: #431980;
    text-decoration: none;
    margin-left: 10px;
`;

const Capture = styled.div`
    font-size: 1.5rem;
    font-weight: bold;
    color: #907ad6;
    text-decoration: none;
`;

const Orange = styled.div`
    height: 7px;
    width: 7px;
    border-radius: 3.5px;
    background-color: #F97316;
    margin-top: 3px;
`


export default Navbar