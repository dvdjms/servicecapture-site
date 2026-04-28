import React, { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';

// Custom hook that tracks direction and visibility
const useScrollReveal = () => {
    const [isVisible, setIsVisible] = useState(false);
    const ref = useRef<HTMLDivElement>(null);
    const hasBeenVisibleRef = useRef(false);

    useEffect(() => {
        let prevScrollY = window.scrollY;
        
        const observer = new IntersectionObserver(
            ([entry]) => {
                const currentScrollY = window.scrollY;
                const isScrollingDown = currentScrollY > prevScrollY;
                prevScrollY = currentScrollY;
                
                // When scrolling down and element comes into view
                if (isScrollingDown && entry.isIntersecting && !hasBeenVisibleRef.current) {
                    setIsVisible(true);
                    hasBeenVisibleRef.current = true;
                }
                // When scrolling up and element leaves viewport
                else if (!isScrollingDown && !entry.isIntersecting && hasBeenVisibleRef.current) {
                    setIsVisible(false);
                    hasBeenVisibleRef.current = false;
                }
            },
            { 
                threshold: 0.1,
                rootMargin: '0px 0px -50px 0px'
            }
        );

        const currentRef = ref.current;
        if (currentRef) {
            observer.observe(currentRef);
            
            // Initial check for first paragraph
            const rect = currentRef.getBoundingClientRect();
            const isInitiallyVisible = rect.top < window.innerHeight - 100 && rect.bottom > 100;
            
            if (isInitiallyVisible) {
                setIsVisible(true);
                hasBeenVisibleRef.current = true;
            }
        }

        return () => {
            if (currentRef) {
                observer.unobserve(currentRef);
            }
        };
    }, []);

    return { ref, isVisible };
};

const AnimatedParagraph: React.FC<{ children: React.ReactNode; delay?: number }> = ({ children, delay = 0 }) => {
    const { ref, isVisible } = useScrollReveal();

    return (
        <AnimatedDiv 
            ref={ref} 
            isVisible={isVisible} 
            delay={delay}
        >
            <ParagraphText>{children}</ParagraphText>
        </AnimatedDiv>
    );
};



export const Description: React.FC = () => {
    return (
        <DescriptionSection>
            <Container>
                <DescriptionGrid>
                    <DescriptionText>
                        <Step>
                            <AnimatedParagraph>
                                {/* <strong>Service Capture</strong> */}
                                Service Capture is an all-in-one app that brings your jobs, photos, notes and reports 
                                into one simple workflow.
                            </AnimatedParagraph>
                        </Step>

                        <Step>
                            <AnimatedParagraph delay={0.1}>
                                Capture everything as you work — photos are automatically linked to the right 
                                job, notes stay organised, and nothing gets lost in your camera roll.
                            </AnimatedParagraph>
                        </Step>

                        {/* <Step>
                            <AnimatedParagraph delay={0.2}>
                                When the job's done, generate a clean, professional report in seconds. 
                                No chasing files, no manual admin — just a clear record of the work you've done.
                            </AnimatedParagraph>
                        </Step> */}


                        <Step>
                            <AnimatedParagraph delay={0.2}>
                                Designed with simplicity in mind, the app aims to create an easy to use experience, 
                                allowing you to focus a busy mind on what truly matters — your day ahead.
                            </AnimatedParagraph>
                        </Step>


                    </DescriptionText>
                </DescriptionGrid>
            </Container>
        </DescriptionSection>
    );
};

// Styled components
const DescriptionSection = styled.section`
    padding: 60px 0;
    background: white;
    border-radius: 32px;
    margin: 40px 0;
    overflow-x: hidden;
`;

const Container = styled.div`
    margin: 0 auto;
    padding: 0 20px;
`;

const DescriptionGrid = styled.div`
    display: grid;
    grid-template-columns: 1fr;
    gap: 60px;
    align-items: center;
    
    @media (max-width: 968px) {
        grid-template-columns: 1fr;
        gap: 40px;
    }
`;

const DescriptionText = styled.div`
    display: flex;
    flex-direction: column;
    gap: 20px;
`;

const Step = styled.div`
    min-height: 20vh;
    display: flex;
    width: 100%;
    padding: 40px 0;
    justify-content: center;
    align-items: center;
    scroll-margin: 50px;
`;

const ParagraphText = styled.p`
    font-size: clamp(1.4rem, 6.5vw, 4rem);
    font-weight: 600;
    line-height: 1.4;
    color: #1a1a1a;
    max-width: 1000px;
    text-align: center;
    margin: 0 auto;
    
    strong {
        color: #431980;
    }
`;

const AnimatedDiv = styled.div<{ isVisible: boolean; delay: number }>`
    will-change: opacity, transform;
    transition: opacity 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94),
                transform 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94);
    transition-delay: ${props => props.delay}s;
    
    opacity: ${props => props.isVisible ? 1 : 0};
    transform: ${props => props.isVisible 
        ? 'translate3d(0, 0, 0) scale(1)' 
        : 'translate3d(0, 60px, 0) scale(0.94)'
    };
    
    width: 100%;
    display: flex;
    justify-content: center;
    backface-visibility: hidden;
    -webkit-font-smoothing: antialiased;
`;



