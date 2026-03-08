import React from 'react';
import { Link } from 'react-router-dom';
import styled, { keyframes } from 'styled-components';
import Footer from '../components/Footer';
import Navbar from '../components/NavBar';

// npm run dev

const Home: React.FC = () => {
    return (
        <>
        <PageContainer>
            <Navbar />
            <MainContent>
                {/* Hero Section */}
                <HeroSection>
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
                </HeroSection>

                {/* Features Section */}
                <FeaturesSection>
                    <SectionTitle>Why Choose Service Capture?</SectionTitle>
                    <FeatureGrid>
                        <FeatureCard delay="0.2s">
                            <FeatureIcon>🚀</FeatureIcon>
                            <FeatureTitle>Lightning Fast</FeatureTitle>
                            <FeatureDescription>
                            Capture and process service requests in real-time
                            </FeatureDescription>
                        </FeatureCard>
                        {/* ... other feature cards */}
                    </FeatureGrid>
                </FeaturesSection>

                {/* Quick Links to Legal Pages */}
                <QuickLinksSection>
                    <SectionTitle>Legal Information</SectionTitle>
                    <QuickLinksGrid>
                        <QuickLink to="/privacy">Privacy Policy</QuickLink>
                        <QuickLink to="/terms">Terms of Service</QuickLink>
                        <QuickLink to="/cookies">Cookie Policy</QuickLink>
                        <QuickLink to="/contact">Contact Us</QuickLink>
                    </QuickLinksGrid>
                </QuickLinksSection>

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

const pulse = keyframes`
    0% { transform: scale(1); }
    50% { transform: scale(1.05); }
    100% { transform: scale(1); }
`;

const float = keyframes`
    0% { transform: translateY(0px); }
    50% { transform: translateY(-10px); }
    100% { transform: translateY(0px); }
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

// Hero Section
const HeroSection = styled.section`
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
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

// Features Section
const FeaturesSection = styled.section`
    padding: 60px 20px;
    max-width: 1200px;
    margin: 0 auto;
`;

const SectionTitle = styled.h2`
    text-align: center;
    font-size: 2.5rem;
    color: #333;
    margin-bottom: 3rem;
    position: relative;
  
    &:after {
        content: '';
        position: absolute;
        bottom: -10px;
        left: 50%;
        transform: translateX(-50%);
        width: 60px;
        height: 3px;
        background: #667eea;
        border-radius: 2px;
    }
`;

const FeatureGrid = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 30px;
    margin-top: 40px;
`;

const FeatureCard = styled.div<{ delay: string }>`
    padding: 30px;
    background: white;
    border-radius: 10px;
    box-shadow: 0 5px 20px rgba(0,0,0,0.1);
    text-align: center;
    transition: all 0.3s ease;
    animation: ${fadeIn} 1s ease-out ${props => props.delay} both;
    
    &:hover {
        transform: translateY(-10px);
        box-shadow: 0 15px 30px rgba(102, 126, 234, 0.2);
    }
`;

const FeatureIcon = styled.div`
    font-size: 3rem;
    margin-bottom: 1rem;
    animation: ${float} 3s ease-in-out infinite;
`;

const FeatureTitle = styled.h3`
    font-size: 1.5rem;
    color: #333;
    margin-bottom: 1rem;
`;

const FeatureDescription = styled.p`
    color: #666;
    line-height: 1.6;
`;


// Add these styled components for the quick links
const QuickLinksSection = styled.section`
    padding: 60px 20px;
    background: #f8f9fa;
    text-align: center;
`;

const QuickLinksGrid = styled.div`
    display: flex;
    justify-content: center;
    gap: 30px;
    flex-wrap: wrap;
    max-width: 800px;
    margin: 0 auto;
`;

const QuickLink = styled(Link)`
    color: #667eea;
    text-decoration: none;
    font-size: 1.1rem;
    padding: 10px 20px;
    border-radius: 5px;
    transition: all 0.3s ease;
    
    &:hover {
        background: white;
        transform: translateY(-2px);
        box-shadow: 0 5px 15px rgba(102, 126, 234, 0.2);
    }
`;


// CTA Section
const CTASection = styled.section`
    text-align: center;
    padding: 60px 20px;
    background: linear-gradient(135deg, #764ba2 0%, #667eea 100%);
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
