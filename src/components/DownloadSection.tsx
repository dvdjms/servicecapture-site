import React from 'react';
import styled from "styled-components";
import appQRCode from '../assets/static-qr-code-download.svg'


const isDesktop = window.innerWidth > 768;

export const DownloadSection: React.FC<{ mode?: 'landing' | 'fallback' }> = ({ mode = 'landing' }) => {    return (
        <DownloadContainer id="download">
            <SectionHeader>
                <Eyebrow>Download</Eyebrow>
                <Title>
                    {mode === 'fallback'
                        ? 'Redirecting to download...'
                        : 'Start documenting professionally today'}
                </Title>                
                <Subtitle>
                    Available now on iOS and Android. Get started in minutes — no credit card required.
                </Subtitle>
            </SectionHeader>
        
            <ButtonRow>
                <StoreLinks>
                    <StoreLink 
                        href="https://apps.apple.com/gb/app/service-capture/id6760407010" 
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <AppleBadgeImage 
                            src="https://toolbox.marketingtools.apple.com/api/badges/download-on-the-app-store/black/en-us?size=250x83&releaseDate=1714435200"
                            alt="Download on the App Store"
                        />
                    </StoreLink>

                    <StoreLink 
                        href="https://play.google.com/store/apps/details?id=com.servicecapture.app" 
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <GoogleBadgeImage 
                            src="https://play.google.com/intl/en_us/badges/static/images/badges/en_badge_web_generic.png"
                            alt="Get it on Google Play"
                        />
                    </StoreLink>
                </StoreLinks>

                {mode === 'landing' && isDesktop && (
                    <QRCodeWrapper>
                        <QRCodeImage src={appQRCode} alt="Scan to download" />
                        {/* <QRLabel>Scan with your phone</QRLabel> */}
                    </QRCodeWrapper>
                )}
            </ButtonRow>
        </DownloadContainer>
    );
};

const DownloadContainer = styled.div`
    max-width: 1200px;
    margin: 0 auto;
    padding: 80px 20px;
    text-align: center;
    background: linear-gradient(135deg, #f8f9fa 0%, #ffffff 100%);
    border-radius: 32px;
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
    max-width: 700px;
    margin: 0 auto;
`;

const ButtonRow = styled.div`

    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 40px;
    margin: 40px 0;
`;

const StoreLinks = styled.div`
    display: flex;
    gap: 20px;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
    transform: translateX(14px);

    @media (max-width: 768px) {
        flex-direction: column;
        transform: translateX(0px);
        gap: 16px;
    }
`;

const StoreLink = styled.a`
    display: block;
    transition: transform 0.2s ease;

    &:hover {
        transform: translateY(-3px);
    }
`;

const AppleBadgeImage = styled.img`
    height: 65px;
    width: auto;
    display: block;
`;

const GoogleBadgeImage = styled.img`
    height: 95px;
    width: auto;
    display: block;
`;

const QRCodeWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 10px;
    padding: 5px 5px;
    background: white;
    border-radius: 20px;
    box-shadow: 0 10px 22px rgba(0,0,0,0.08);
    border: 1px solid #ede9ef;
    //transform: rotate(5deg);
`;

const QRCodeImage = styled.img`
    width: 210px;
    height: 210px;
    display: block;
`;

