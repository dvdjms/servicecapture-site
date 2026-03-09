import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';


const QuickLinkSection: React.FC = () => {
    return (
        <>
            <QuickLinksSection>
                <SectionTitle>Legal Information</SectionTitle>
                <QuickLinksGrid>
                    <QuickLink to="/privacy">Privacy Policy</QuickLink>
                    <QuickLink to="/terms">Terms of Service</QuickLink>
                    <QuickLink to="/cookies">Cookie Policy</QuickLink>
                    <QuickLink to="/contact">Contact Us</QuickLink>
                </QuickLinksGrid>
            </QuickLinksSection>
        </>
    );
};

export default QuickLinkSection;

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

