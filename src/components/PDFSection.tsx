import React, { useState } from 'react';
import styled from 'styled-components';
import pdfScreen from '../assets/pdfScreen.pdf';

const PDFSection: React.FC = () => {
    const [isFullscreen, setIsFullscreen] = useState(false);

    return (
        <PDFSectionWrapper id="report">
            <Container>
                <SectionHeader>
                    <Eyebrow>Generate Professional Reports</Eyebrow>
                    <Title>Create polished, client-ready PDFs in seconds</Title>
                    <Description>
                        One tap is all it takes to transform your job data into a clean, 
                        professional report that builds trust and showcases your work.
                    </Description>
                </SectionHeader>

                <PDFContainer>
                    <PDFCard>
                        <PDFToolbar>
                            <ToolbarDots>
                                <Dot color="#ff5f56" />
                                <Dot color="#ffbd2e" />
                                <Dot color="#27c93f" />
                            </ToolbarDots>
                            <ToolbarTitle>service-capture-report.pdf</ToolbarTitle>
                            <FullscreenButton onClick={() => setIsFullscreen(true)}>
                                ⊞
                            </FullscreenButton>
                        </PDFToolbar>
                        
                        <PDFEmbedWrapper>
                            <PDFEmbed 
                                src={pdfScreen}
                                type="application/pdf"
                                title="Service Capture Report Example"
                            />
                        </PDFEmbedWrapper>
                        
                        <DownloadButton href={pdfScreen} download="service-capture-report.pdf">
                            <DownloadIcon>📄</DownloadIcon>
                            Download Example Report
                        </DownloadButton>
                    </PDFCard>
                    
                    <FeatureList>
                        <FeatureItem>
                            <CheckIcon>✓</CheckIcon>
                            <FeatureText>
                                <strong>Auto-populated</strong> with job photos and notes
                            </FeatureText>
                        </FeatureItem>
                        <FeatureItem>
                            <CheckIcon>✓</CheckIcon>
                            <FeatureText>
                                <strong>Drag and drop</strong> photos to arrange them perfectly
                            </FeatureText>
                        </FeatureItem>
                        <FeatureItem>
                            <CheckIcon>✓</CheckIcon>
                            <FeatureText>
                                <strong>Clean, branded layout</strong> that impresses clients
                            </FeatureText>
                        </FeatureItem>
                        <FeatureItem>
                            <CheckIcon>✓</CheckIcon>
                            <FeatureText>
                                <strong>Before & after</strong> comparison views
                            </FeatureText>
                        </FeatureItem>
                        <FeatureItem>
                            <CheckIcon>✓</CheckIcon>
                            <FeatureText>
                                <strong>Signatures & timestamps</strong> for proof of completion
                            </FeatureText>
                        </FeatureItem>
                        <FeatureItem>
                            <CheckIcon>✓</CheckIcon>
                            <FeatureText>
                                <strong>Cover page</strong> optional as required
                            </FeatureText>
                        </FeatureItem>
                    </FeatureList>
                </PDFContainer>
            </Container>

            {/* Fullscreen Modal */}
            {isFullscreen && (
                <Modal onClick={() => setIsFullscreen(false)}>
                    <ModalContent onClick={(e) => e.stopPropagation()}>
                        <ModalHeader>
                            <ModalTitle>Report Preview</ModalTitle>
                            <CloseButton onClick={() => setIsFullscreen(false)}>✕</CloseButton>
                        </ModalHeader>
                        <ModalPDFEmbed src={pdfScreen} type="application/pdf" />
                    </ModalContent>
                </Modal>
            )}
        </PDFSectionWrapper>
    );
};

export default PDFSection;

const PDFSectionWrapper = styled.section`
    padding: 80px 0;
    background: linear-gradient(135deg, #f8f9fa 0%, #ffffff 100%);
    margin-bottom: 30px;
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
    margin-bottom: 16px;
    
    @media (max-width: 768px) {
        font-size: 2rem;
    }
`;

const Description = styled.p`
    font-size: 1.1rem;
    color: #6c757d;
    max-width: 600px;
    margin: 0 auto;
    line-height: 1.5;
`;

const PDFContainer = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 60px;
    align-items: start;
    
    @media (max-width: 968px) {
        grid-template-columns: 1fr;
        gap: 40px;
    }
`;

const PDFCard = styled.div`
    background: #f1f3f4;
    border-radius: 20px;
    box-shadow: 0 20px 40px rgba(0,0,0,0.1);
    overflow: hidden;
    transition: transform 0.3s ease, box-shadow 0.3s ease;
    
    &:hover {
        transform: translateY(-4px);
        box-shadow: 0 30px 50px rgba(0,0,0,0.15);
    }
`;

const PDFToolbar = styled.div`
    background: #f1f3f4;
    padding: 12px 16px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-bottom: 1px solid #e0e0e0;
`;

const ToolbarDots = styled.div`
    display: flex;
    gap: 8px;
`;

const Dot = styled.div<{ color: string }>`
    width: 12px;
    height: 12px;
    border-radius: 50%;
    background-color: ${props => props.color};
`;

const ToolbarTitle = styled.span`
    font-size: 0.85rem;
    color: #5f6368;
    font-family: monospace;
`;

const FullscreenButton = styled.button`
    background: none;
    border: none;
    cursor: pointer;
    font-size: 1.2rem;
    color: #5f6368;
    padding: 0 4px;
    transition: color 0.2s ease;
    
    &:hover {
        color: #431980;
    }
`;

const PDFEmbedWrapper = styled.div`
    background: #525659;
    padding: 20px;
`;

const PDFEmbed = styled.embed`
    width: 100%;
    height: 500px;
    border-radius: 8px;
    display: block;
    
    @media (max-width: 768px) {
        height: 400px;
    }
`;

const DownloadButton = styled.a`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 8px;
    background: #431980;
    color: white;
    text-decoration: none;
    padding: 14px 24px;
    margin: 20px;
    border-radius: 12px;
    font-weight: 600;
    transition: all 0.3s ease;
    
    &:hover {
        background: #5a24a8;
        transform: translateY(-2px);
        box-shadow: 0 5px 15px rgba(67, 25, 128, 0.3);
    }
`;

const DownloadIcon = styled.span`
    font-size: 1.2rem;
`;

const FeatureList = styled.div`
    display: flex;
    flex-direction: column;
    gap: 24px;
    align-self: center; 
`;

const FeatureItem = styled.div`
    display: flex;
    align-items: center;
    gap: 16px;
    background: white;
    padding: 20px;
    border-radius: 16px;
    box-shadow: 0 2px 8px rgba(0,0,0,0.05);
    transition: transform 0.2s ease;
    
    &:hover {
        transform: translateX(8px);
    }
`;

const CheckIcon = styled.div`
    width: 32px;
    height: 32px;
    background: #43198010;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #431980;
    font-weight: bold;
    font-size: 1.2rem;
`;

const FeatureText = styled.p`
    font-size: 1rem;
    color: #1a1a1a;
    line-height: 1.4;
    margin: 0;
    
    strong {
        color: #431980;
    }
`;

// Modal styles for fullscreen view
const Modal = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(0,0,0,0.9);
    z-index: 1000;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 40px;
    animation: fadeIn 0.2s ease;
    
    @keyframes fadeIn {
        from { opacity: 0; }
        to { opacity: 1; }
    }
`;

const ModalContent = styled.div`
    background: white;
    border-radius: 16px;
    width: 90%;
    max-width: 1200px;
    height: 90%;
    display: flex;
    flex-direction: column;
    overflow: hidden;
`;

const ModalHeader = styled.div`
    padding: 16px 24px;
    border-bottom: 1px solid #e0e0e0;
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

const ModalTitle = styled.h3`
    font-size: 1.2rem;
    color: #1a1a1a;
    margin: 0;
`;

const CloseButton = styled.button`
    background: none;
    border: none;
    font-size: 1.5rem;
    cursor: pointer;
    color: #666;
    transition: color 0.2s ease;
    
    &:hover {
        color: #431980;
    }
`;

const ModalPDFEmbed = styled.embed`
    flex: 1;
    width: 100%;
    border: none;
`;