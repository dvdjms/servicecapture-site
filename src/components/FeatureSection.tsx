import React from 'react';
import styled from 'styled-components';
import clientList from '../assets/clientList-portrait.webp';
import clientScreen from '../assets/clientScreen-portrait.webp';
import schedulerScreen from '../assets/schedulerScreen-portrait.webp';

const FeatureSection: React.FC = () => {
    const features = [
        {
            icon: "👥",
            title: "All clients in one place",
            description: "Quickly search, view, and manage all your clients in a simple, organised list.",
            screenshot: clientList,
            alt: "Client list interface showing list of clients"
        },
        {
            icon: "📂",
            title: "Organise Every Job",
            description: "Attach notes, photos, and client details to each job for clear, complete records in the field.",
            screenshot: clientScreen,
            alt: "Client screen with job details and attachments"
        },
        {
            icon: "📅",
            title: "Scheduler to plan ahead",
            description: "Plan your daily and upcoming work with a simple, visual scheduling system.",
            screenshot: schedulerScreen,
            alt: "Scheduler screen showing todays work"
        }
    ];

    return (
        <FeaturesSection id="features">
            <Container>
                <SectionHeader>
                    <Eyebrow>Features</Eyebrow>
                    <Title>Everything you need to document work professionally.</Title>
                </SectionHeader>

                <FeaturesGrid>
                    {features.map((feature, idx) => (
                        <FeatureCard key={idx}>
                            <FeatureIcon>{feature.icon}</FeatureIcon>
                            <FeatureTitle>{feature.title}</FeatureTitle>
                            <FeatureDescription>{feature.description}</FeatureDescription>
                            <ScreenshotWrapper>
                                <ScreenshotImage 
                                    src={feature.screenshot} 
                                    alt={feature.alt}
                                    fetchPriority="high"
                                />
                            </ScreenshotWrapper>
                        </FeatureCard>
                    ))}
                </FeaturesGrid>
            </Container>
        </FeaturesSection>
    );
};

export default FeatureSection;

const FeaturesSection = styled.section`
    padding: 80px 0;
    background: white;
`;

const Container = styled.div`
    max-width: 1280px;
    margin: 0 auto;
    padding: 0 24px;
`;

const SectionHeader = styled.div`
    text-align: center;
    margin-bottom: 60px;
`;

const Eyebrow = styled.div`
    color: #431980;
    font-weight: 600;
    text-transform: uppercase;
    letter-spacing: 2px;
    font-size: 0.85rem;
    margin-bottom: 16px;
`;

const Title = styled.h2`
    font-size: 2.5rem;
    font-weight: 700;
    color: #1a1a1a;
    
    @media (max-width: 768px) {
        font-size: 2rem;
    }
`;

const FeaturesGrid = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
    gap: 40px;
`;

const FeatureCard = styled.div`
    background: #f8f9fa;
    border-radius: 24px;
    padding: 32px;
    text-align: center;
    transition: all 0.3s ease;
    border: 1px solid #e9ecef;
    
    &:hover {
        transform: translateY(-8px);
        box-shadow: 0 20px 30px rgba(0,0,0,0.05);
        border-color: #dee2e6;
    }
`;

const FeatureIcon = styled.div`
    font-size: 3rem;
    margin-bottom: 20px;
`;

const FeatureTitle = styled.h3`
    font-size: 1.3rem;
    font-weight: 600;
    margin-bottom: 12px;
    color: #1a1a1a;
`;

const FeatureDescription = styled.p`
    font-size: 0.95rem;
    color: #6c757d;
    line-height: 1.5;
    margin-bottom: 28px;
`;

const ScreenshotWrapper = styled.div`

`;

const ScreenshotImage = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: block;
    transition: transform 0.3s ease;
    
    ${FeatureCard}:hover & {
        transform: scale(1.02);
    }
`;