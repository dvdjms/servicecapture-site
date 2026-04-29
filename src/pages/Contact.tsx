import React from 'react';
import styled from 'styled-components';
import Navbar from '../components/NavBar';
import Footer from '../components/Footer';


const Contact: React.FC = () => {
    return (
        <PageContainer>
            <Navbar />
            <MainContent>
                <ContactContainer>
                    <Title>Contact Us</Title>
                    
                    <ContactInfo>
                        <ContactItem>
                            <Icon>📧</Icon>
                            <ContactDetail>
                                <Label>Email us directly at:</Label>
                                <EmailLink href="mailto:contact@servicecapture.app">
                                    contact@servicecapture.app
                                </EmailLink>
                            </ContactDetail>
                        </ContactItem>
                        
                        <ContactItem>
                            <Icon>💬</Icon>
                            <ContactDetail>
                                <Label>Response Time</Label>
                                <Value>We'll get back to you within 24 hours</Value>
                            </ContactDetail>
                        </ContactItem>
                    </ContactInfo>

                    <NoteSection>
                        <NoteTitle>📝 Before you reach out:</NoteTitle>
                        <NoteList>
                            <li>Let us know your device (iOS/Android)</li>
                            <li>Include your app version if reporting a bug</li>
                            <li>Screenshots are helpful for technical issues</li>
                        </NoteList>
                    </NoteSection>
                </ContactContainer>
            </MainContent>
            <Footer />
        </PageContainer>
    );
};

export default Contact;

// Styled components
const PageContainer = styled.div`
    min-height: 100vh;
    display: flex;
    flex-direction: column;
`;

const MainContent = styled.main`
    flex: 1;
    padding: 40px 20px;
    background: #f2f2f7;
`;

const ContactContainer = styled.div`
    max-width: 600px;
    margin: 0 auto;
    background: white;
    padding: 40px;
    border-radius: 10px;
    box-shadow: 0 5px 20px rgba(0,0,0,0.05);
`;

const Title = styled.h1`
    color: #2c3e50;
    border-bottom: 2px solid #431980;
    padding-bottom: 10px;
    margin-bottom: 30px;
`;

const ContactInfo = styled.div`
    margin-bottom: 30px;
`;

const ContactItem = styled.div`
    display: flex;
    align-items: center;
    margin-bottom: 20px;
    padding: 15px;
    background: #f8f9fa;
    border-radius: 8px;
    transition: transform 0.3s ease;
    
    &:hover {
        transform: translateX(10px);
    }
`;

const Icon = styled.span`
    font-size: 24px;
    margin-right: 15px;
    width: 40px;
    text-align: center;
`;

const ContactDetail = styled.div`
    flex: 1;
`;

const Label = styled.div`
    font-size: 0.9rem;
    color: #7f8c8d;
    margin-bottom: 4px;
`;

const Value = styled.div`
    font-size: 1rem;
    color: #2c3e50;
`;

const EmailLink = styled.a`
    font-size: 1.3rem;
    color: #431980;
    font-weight: 600;
    text-decoration: none;
    
    &:hover {
        text-decoration: underline;
        color: #764ba2;
    }
`;

const NoteSection = styled.div`
    background: #f0f4ff;
    padding: 20px;
    border-radius: 8px;
    margin: 30px 0;
`;

const NoteTitle = styled.h3`
    color: #431980;
    margin-bottom: 12px;
    font-size: 0.95rem;
`;

const NoteList = styled.ul`
    margin: 0;
    padding-left: 20px;
    
    li {
        color: #555;
        margin-bottom: 8px;
        font-size: 0.9rem;
        line-height: 1.4;
    }
`;
