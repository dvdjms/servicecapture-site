import React from 'react';
import styled, { keyframes } from 'styled-components';
import Footer from '../components/Footer';
import Navbar from '../components/NavBar';
import FeatureSection from '../components/FeatureSection';
import HeroSection from '../components/HeroSection';

// npm run dev

const Home: React.FC = () => {
    return (
        <>
        <PageContainer>
            <Navbar />
            <MainContent>
                {/* Hero Section */}
                <ComingSoon>Coming soon!</ComingSoon>
                <HeroSection />

                <FeatureSection />

                {/* <QuickLinkSection /> */}


                {/* Call to Action */}
                <CTASection>
                    <CTATitle>Ready to Get Started?</CTATitle>
                    <CTAButton primary href="#">
                        Download Now
                    </CTAButton>
                </CTASection>
            </MainContent>
            <Footer />
        </PageContainer>
        </>
    );
};

export default Home;


const pulse = keyframes`
    0% { transform: scale(1); }
    50% { transform: scale(1.05); }
    100% { transform: scale(1); }
`;


// Styled Components
const PageContainer = styled.div`
    min-height: 100vh;
    display: flex;
    flex-direction: column;
`;

const MainContent = styled.main`
    flex: 1;
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
        color: #431980;
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
        color: #907ad6;
        transform: translateY(-3px);
        box-shadow: 0 10px 25px rgba(0,0,0,0.2);
        }
    `}
`;


// CTA Section
const CTASection = styled.section`
    text-align: center;
    padding: 60px 20px;
    background: linear-gradient(135deg, #431980 0%, #907ad6 100%);
    color: white;
`;

const CTATitle = styled.h2`
    font-size: 2.5rem;
    margin-bottom: 1rem;
`;

const CTAButton = styled(DownloadButton)`
    margin-top: 20px;
    animation: ${pulse} 2s infinite;
`;


const ComingSoon = styled.div`
    margin: 20px;
    text-align: center;
    font-weight: bold;
    color: #431980;
    font-size: 32px;
    animation: ${pulse} 2s infinite;
`;