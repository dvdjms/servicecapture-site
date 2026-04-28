import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'


const Footer: React.FC = () => {
    return (
        <StyledFooter>
            <FooterContainer>
                <Copyright>&copy; {new Date().getFullYear()} Service Capture</Copyright>
                <FooterLinks>
                    <StyledLink to="/privacy">Privacy</StyledLink>
                    <StyledLink to="/terms">Terms</StyledLink>
                    <StyledLink to="/cookies">Cookies</StyledLink>
                    <StyledLink to="/contact">Contact</StyledLink>
                </FooterLinks>
            </FooterContainer>
        </StyledFooter>
    )
}

const StyledFooter = styled.footer`
    border-top: 1px solid #e9ecef;
    background-color: #f8f9fa;
    margin-top: 2rem;
    padding: 1.5rem 2rem;
    
    @media (max-width: 768px) {
        padding: 1rem;
    }
`;

const FooterContainer = styled.div`
  max-width: 1280px;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
    
    @media (max-width: 768px) {
        flex-direction: column;
        gap: 1rem;
        text-align: center;
    }
`;

const Copyright = styled.div`
    font-size: 0.875rem;
    color: #6c757d;
`;

const FooterLinks = styled.div`
    display: flex;
    gap: 2rem;
    
    @media (max-width: 768px) {
        gap: 1.5rem;
        flex-wrap: wrap;
        justify-content: center;
    }
`;

const StyledLink = styled(Link)`
    text-decoration: none;
    font-size: 0.875rem;
    color: #495057;
    transition: color 0.2s ease;
    
    &:hover {
        color: #431980;
    }
`;

export default Footer