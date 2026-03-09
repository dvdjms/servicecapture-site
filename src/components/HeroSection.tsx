import React from 'react';
import styled, { keyframes } from 'styled-components';


const HeroSection: React.FC = () => {
    return (
        <>
            <Hero>
                <HeroTitle>Welcome to Service Capture</HeroTitle>
                <HeroSubtitle>
                    Capture and manage your services efficiently with our powerful platform
                </HeroSubtitle>
                
                <ButtonContainer>
                    <DownloadButton primary href="#">
                        Download for iOS
                    </DownloadButton>
                    <DownloadButton href="#">
                        Download for Android
                    </DownloadButton>
                </ButtonContainer>
            </Hero>
        </>
    );
};

export default HeroSection;

// Animations
const fadeIn = keyframes`
    from {
        opacity: 0;
        transform: translateY(20px);
    }
    to {
        opacity: 1;
        transform: translateY(0);
    }
`;

const slideDown = keyframes`
    from {
        opacity: 0;
        transform: translateY(-20px);
    }
    to {
        opacity: 1;
        transform: translateY(0);
    }
`;

// Hero Section
const Hero = styled.section`
    background: linear-gradient(135deg, #907ad6 0%, #431980 100%);
    color: white;
    padding: 80px 20px;
    text-align: center;
    animation: ${fadeIn} 1s ease-out;
`;

const HeroTitle = styled.h1`
    font-size: 3.5rem;
    margin-bottom: 1rem;
    animation: ${slideDown} 0.8s ease-out;
    
    @media (max-width: 768px) {
        font-size: 2.5rem;
    }
`;

const HeroSubtitle = styled.p`
    font-size: 1.3rem;
    margin-bottom: 2rem;
    opacity: 0.95;
    max-width: 600px;
    margin-left: auto;
    margin-right: auto;
    animation: ${fadeIn} 1s ease-out 0.3s both;
`;

const ButtonContainer = styled.div`
    display: flex;
    gap: 20px;
    justify-content: center;
    flex-wrap: wrap;
    animation: ${fadeIn} 1s ease-out 0.6s both;
`;

const DownloadButton = styled.a<{ primary?: boolean }>`
    display: inline-block;
    padding: 15px 40px;
    font-size: 1.1rem;
    font-weight: 600;
    text-decoration: none;
    border-radius: 50px;
    transition: all 0.3s ease;
    cursor: pointer;
    
    ${props => props.primary ? `
        background: white;
        color: #667eea;
        border: 2px solid white;
        
        &:hover {
        background: transparent;
        color: white;
        transform: translateY(-3px);
        box-shadow: 0 10px 25px rgba(0,0,0,0.2);
        }
    ` : `
        background: transparent;
        color: white;
        border: 2px solid white;
        
        &:hover {
        background: white;
        color: #667eea;
        transform: translateY(-3px);
        box-shadow: 0 10px 25px rgba(0,0,0,0.2);
        }
    `}
`;
