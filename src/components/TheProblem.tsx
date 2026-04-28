import React from 'react';
import styled from "styled-components";


export const TheProblem: React.FC = () => {



    // const AnimatedCardWrapper: React.FC<{ children: React.ReactNode; delay: number }> = ({ children, delay }) => {
    //     const { ref, isVisible } = useScrollReveal();
    
    //     return (
    //         <AnimatedCard ref={ref} isVisible={isVisible} delay={delay}>
    //             {children}
    //         </AnimatedCard>
    //     );
    // };


    return (
        <ProblemSection>
            <Container>
                <SectionHeader>
                    <Eyebrow>The problem</Eyebrow>
                    <Title>Still documenting work with scattered photos and messy notes?</Title>
                    <Subtitle>You're not alone. Most service pros rely on camera rolls, WhatsApp threads, or paper – until something goes wrong.</Subtitle>
                </SectionHeader>

                <ProblemGrid>
                    <ProblemCard>
                        <ProblemIcon>📸</ProblemIcon>
                        <ProblemText>"Which photo belonged to which client?"</ProblemText>
                    </ProblemCard>
                    <ProblemCard>
                        <ProblemIcon>📝</ProblemIcon>
                        <ProblemText>"Did I remember to note that back door needs oiling?"</ProblemText>
                    </ProblemCard>
                    <ProblemCard>
                        <ProblemIcon>⚠️</ProblemIcon>
                        <ProblemText>"How do I prove what was done for an insurance claim?"</ProblemText>
                    </ProblemCard>
                </ProblemGrid>

                <SolutionTeaser>
                    <span>→</span> Service Capture replaces the chaos with a clean, timestamped record for every job.
                </SolutionTeaser>
            </Container>

        </ProblemSection>
    );
};


// Section containers
const ProblemSection = styled.section`
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

// Problem section styles
const ProblemGrid = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 30px;
    margin: 48px 0;
`;

const ProblemCard = styled.div`
    background: #f8f9fa;
    padding: 30px;
    border-radius: 20px;
    text-align: center;
    border: 1px solid #e9ecef;
`;

const ProblemIcon = styled.div`
    font-size: 2.5rem;
    margin-bottom: 16px;
`;

const ProblemText = styled.p`
    font-size: 1rem;
    color: #495057;
    font-weight: 500;
`;

const SolutionTeaser = styled.div`
    text-align: center;
    padding: 24px;
    background: linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%);
    border-radius: 60px;
    font-weight: 600;
    color: #431980;
    
    span {
        font-size: 1.2rem;
        margin-right: 8px;
    }
`;
