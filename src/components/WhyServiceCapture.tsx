import React from 'react';
import styled from "styled-components";


export const WhyServiceCapture: React.FC = () => {
    const benefits = [
        {
            icon: "📸",
            title: "Visual proof of work",
            description: "Every photo is timestamped and attached to the right job. No more 'which client was this?'"
        },
        {
            icon: "📄",
            title: "Client-ready reports",
            description: "Generate professional PDF summaries with photos, notes, and job details. Instant credibility."
        },
        {
            icon: "⚡",
            title: "Fast in the field",
            description: "Designed for real work. Snap, tap, share — without admin getting in the way."
        },
        {
            icon: "🔒",
            title: "Your data, your control",
            description: "No cloud lock-in. Export your records anytime. Built for independent pros."
        },
        // NEW CARDS - Addressing common struggles
        {
            icon: "😰",
            title: "Stop losing before/after shots",
            description: "Before photos mixed with vacation pics? Never again. Service Capture keeps job photos organized and instantly accessible."
        },
        {
            icon: "⏰",
            title: "No more 'I'll remember that' notes",
            description: "Capture details on site while they're fresh. Your future self (and your insurance company) will thank you."
        },
        {
            icon: "💼",
            title: "Dispute protection built-in",
            description: "When clients 'forget' what was discussed, your timestamped records tell the real story. Small claims court ready."
        },
        {
            icon: "📱",
            title: "Works offline, syncs when ready",
            description: "Basements, attics, remote sites — weak signal doesn't stop you. Photos save locally, sync automatically."
        }
    ];

    return (
        <WhySection id="why">
            <Container>
                <SectionHeader>
                    <Eyebrow>Why Service Capture?</Eyebrow>
                    <Title>Documentation that works as hard as you do.</Title>
                    <Subtitle>Built for service professionals who need to prove their work, protect their business, and impress their clients.</Subtitle>
                </SectionHeader>

                <BenefitsGrid>
                    {benefits.map((benefit, idx) => (
                        <BenefitCard key={idx}>
                            <BenefitIcon>{benefit.icon}</BenefitIcon>
                            <BenefitTitle>{benefit.title}</BenefitTitle>
                            <BenefitDescription>{benefit.description}</BenefitDescription>
                        </BenefitCard>
                    ))}
                </BenefitsGrid>

                <TrustBadge>
                    <BadgeIcon>✅</BadgeIcon>
                    <BadgeText>No fake reviews. No hype. Just a tool that helps you document work professionally.</BadgeText>
                </TrustBadge>

            </Container>
        </WhySection>
    );
};

// Replace in Home component:
// <WhoItsFor /> becomes <WhyServiceCapture />

// ============================================
// STYLES FOR WHY SECTION
// ============================================

const WhySection = styled.section`
    padding: 80px 0;
    background: white;
    border-radius: 32px;
    margin: 40px 0;
`;


const Container = styled.div`
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 20px;
`;

const SectionHeader = styled.div`
    text-align: center;
    margin-bottom: 48px;
`;

const Eyebrow = styled.div`
    color: #431980;
    font-weight: 600;
    text-transform: uppercase;
    letter-spacing: 2px;
    font-size: 0.8rem;
    margin-bottom: 16px;
`;


const Title = styled.h2`
    font-size: 2.2rem;
    font-weight: 700;
    color: #1a1a1a;
    margin-bottom: 16px;
    
    @media (max-width: 768px) {
        font-size: 1.8rem;
    }
`;

const Subtitle = styled.p`
    font-size: 1.1rem;
    color: #6c757d;
    max-width: 600px;
    margin: 0 auto;
`;

const BenefitsGrid = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 32px;
    margin: 48px 0;
`;

const BenefitCard = styled.div`
    background: #f8f9fa;
    padding: 32px 24px;
    border-radius: 20px;
    text-align: center;
    border: 1px solid #e9ecef;
    transition: all 0.2s ease;
    
    &:hover {
        transform: translateY(-4px);
        border-color: #431980;
        box-shadow: 0 8px 20px rgba(67, 25, 128, 0.08);
    }
`;

const BenefitIcon = styled.div`
    font-size: 2.5rem;
    margin-bottom: 20px;
`;

const BenefitTitle = styled.h3`
    font-size: 1.2rem;
    font-weight: 700;
    margin-bottom: 12px;
    color: #1a1a1a;
`;

const BenefitDescription = styled.p`
    font-size: 0.9rem;
    color: #6c757d;
    line-height: 1.5;
`;

const TrustBadge = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 12px;
    padding: 20px;
    background: #f8f9fa;
    border-radius: 60px;
    margin: 32px 0;
    
    @media (max-width: 768px) {
        flex-direction: column;
        text-align: center;
        border-radius: 24px;
        padding: 20px;
    }
`;

const BadgeIcon = styled.span`
    font-size: 1.2rem;
`;

const BadgeText = styled.span`
    font-size: 0.9rem;
    color: #495057;
    font-weight: 500;
`;
