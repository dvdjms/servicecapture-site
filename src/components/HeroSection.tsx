import React from 'react';
import styled, { keyframes } from 'styled-components';
import homeScreen from '../assets/homeScreen-portrait.webp';

export const HeroSection: React.FC = () => {
    return (
        <Hero>
            <Container>
                <ContentGrid>

                    {/* LEFT SIDE */}
                    <MessagingColumn>
                        <Badge>Built for trades & service professionals</Badge>
                        
                        <MainHeading>
                            Your jobs. Fully captured.
                        </MainHeading>
                        <HighlightText> 
                            Photos, notes, clients and reports — all in one place, exactly when you need them.
                        </HighlightText>
                        
                        <FeatureList>
                            <FeatureItem>
                                <CheckCircle>✓</CheckCircle>
                                <span>Photos automatically linked to the right job</span>
                            </FeatureItem>
                            <FeatureItem>
                                <CheckCircle>✓</CheckCircle>
                                <span>Create professional PDF reports instantly</span>
                            </FeatureItem>
                            <FeatureItem>
                                <CheckCircle>✓</CheckCircle>
                                <span>Simple schedule built for real field work</span>
                            </FeatureItem>
                        </FeatureList>
                        
                        <ButtonRow>
                            <BadgeButton
                                href="https://apps.apple.com/gb/app/service-capture/id6760407010" 
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <AppleBadgeImage 
                                    src="https://toolbox.marketingtools.apple.com/api/badges/download-on-the-app-store/black/en-us?size=250x83&releaseDate=1714435200"
                                    alt="Download on the App Store"
                                    fetchPriority="high"
                                />
                            </BadgeButton>

                            <BadgeButton
                                href="https://play.google.com/store/apps/details?id=com.servicecapture.app" 
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <GoogleBadgeImage 
                                    src="https://play.google.com/intl/en_us/badges/static/images/badges/en_badge_web_generic.png"
                                    alt="Get it on Google Play"
                                    fetchPriority="high"
                                />
                            </BadgeButton>
                        </ButtonRow>
                        

                    </MessagingColumn>

                    {/* RIGHT SIDE */}
                    <VisualColumn>
                        {/* <PhoneFrame> */}
                            <Screenshot 
                                src={homeScreen}
                                alt="Service Capture app showing job details, photos and notes"
                                fetchPriority="high"
                            />
                        {/* </PhoneFrame> */}
                    </VisualColumn>

                </ContentGrid>
            </Container>
        </Hero>
    );
};



/* ---------------- Animations ---------------- */


const fadeInRight = keyframes`
    from {
        opacity: 0;
        transform: translateX(-30px);
    }
    to {
        opacity: 1;
        transform: translateX(0);
    }
`;


const fadeInLeft = keyframes`
    from {
        opacity: 0;
        transform: translateX(30px);
    }
    to {
        opacity: 1;
        transform: translateX(0);
    }
`;


/* ---------------- Layout ---------------- */

const Hero = styled.section`
    min-height: 90vh;
    background: linear-gradient(180deg, #f8f9fa 0%, #f2f2f7 100%);
    display: flex;
    align-items: center;
    padding: 30px 0;
`;

const Container = styled.div`
    max-width: 1280px;
    margin: 0 auto;
    padding: 0 24px;
    width: 100%;
`;

const ContentGrid = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 48px;
    align-items: center;

    @media (max-width: 968px) {
        grid-template-columns: 1fr;
        gap: 40px;
    }
`;

const MessagingColumn = styled.div`
    animation: ${fadeInRight} 0.8s ease-out;
`;

const VisualColumn = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    animation: ${fadeInLeft} 0.8s ease-out both;
`;


/* ---------------- Typography ---------------- */

const Badge = styled.div`
    display: inline-block;
    background: #e9ecef;
    color: #495057;
    padding: 6px 14px;
    border-radius: 20px;
    font-size: 0.8rem;
    font-weight: 500;
    margin-bottom: 24px;
`;

const MainHeading = styled.h1`
    font-size: 2.7rem;
    font-weight: 700;
    line-height: 1.2;
    color: #1a1a1a;
    margin-bottom: 16px;
    letter-spacing: -0.02em;

    @media (max-width: 768px) {
        font-size: 2.2rem;
    }
`;

const HighlightText = styled.span`
    font-size: 1.2rem;
    line-height: 1.5;
    color: #4a5568;
    font-weight: 500;
    margin-bottom: 20px;
`;

/* ---------------- Features ---------------- */

const FeatureList = styled.div`
    margin-bottom: 86px;
    margin-top: 40px;
    display: flex;
    flex-direction: column;
    gap: 14px;
    padding-left: 20px;

    @media (max-width: 768px) {
        padding-left: 0px
    }
`;

const FeatureItem = styled.div`
    display: flex;
    align-items: center;
    gap: 12px;
    font-size: 1rem;
    color: #2d3748;
`;

const CheckCircle = styled.span`
    width: 22px;
    height: 22px;
    background: #431980;
    color: white;
    border-radius: 50%;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    font-size: 12px;
    font-weight: bold;
`;


/* ---------------- Visual ---------------- */


const Screenshot = styled.img`
    width: 280px;
    aspect-ratio: 9 / 19;
    border-radius: 28px;
    object-fit: cover;
    display: block;
    margin-bottom: 40px;
`;


/* ---------------- Buttons ---------------- */

const ButtonRow = styled.div`
    display: flex;
    gap: 32px;
    margin-top: 50px;
    margin-bottom: 50px;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center
`;

const BadgeButton = styled.a`
    width: 190px;
    height: 60px;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    border-radius: 12px;
    transition: transform 0.15s ease;
    cursor: pointer;

    &:hover {
        transform: translateY(-2px);
        box-shadow: 0 6px 16px rgba(0,0,0,0.15);
    }

    @media (max-width: 768px) {
        justify-content: center;
    }
`;


const AppleBadgeImage = styled.img`
    width: 100%;
    height: auto;
    display: block;
`;

const GoogleBadgeImage = styled.img`
    width: 110%;
    height: auto;
    display: block;
    transform: scale(1.15); 
`;

