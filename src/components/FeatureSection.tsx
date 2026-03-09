import React from 'react';
import styled, { keyframes } from 'styled-components';


const FeatureSection: React.FC = () => {
    return (
        <>

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
                    <FeatureCard delay="0.4s">
                        <FeatureIcon>🔒</FeatureIcon>
                        <FeatureTitle>Secure & Private</FeatureTitle>
                        <FeatureDescription>
                            Your data is encrypted and protected with enterprise-grade security
                        </FeatureDescription>
                    </FeatureCard>
                    <FeatureCard delay="0.6s">
                        <FeatureIcon>📊</FeatureIcon>
                        <FeatureTitle>Smart Analytics</FeatureTitle>
                        <FeatureDescription>
                            Get insights into your service performance with detailed analytics
                        </FeatureDescription>
                    </FeatureCard>
                </FeatureGrid>
            </FeaturesSection>
        </>
    );
};

export default FeatureSection;

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

const float = keyframes`
    0% { transform: translateY(0px); }
    50% { transform: translateY(-10px); }
    100% { transform: translateY(0px); }
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
