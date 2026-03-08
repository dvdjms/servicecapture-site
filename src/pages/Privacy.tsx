

import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import Navbar from '../components/NavBar';
import Footer from '../components/Footer';


const Privacy: React.FC = () => {
    const [currentDate, setCurrentDate] = useState('');

    useEffect(() => {
        const date = new Date().toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'long',
            day: 'numeric'
        });
        setCurrentDate(date);
    }, []);

    return (
        <PageContainer>
        <Navbar />
        <MainContent>
            <PolicyContainer>
            <Title>Privacy Policy for The Service</Title>
            <LastUpdated>Last updated: {currentDate}</LastUpdated>

            <Subtitle>1. Introduction</Subtitle>
            <Text>
                The Service ("we," "our," or "us") is committed to protecting your privacy. 
                This Privacy Policy explains how we collect, use, disclose, and safeguard 
                your information when you use our mobile application and services.
            </Text>

            <Subtitle>2. Information We Collect</Subtitle>
            
            <SubSubtitle>Personal Information</SubSubtitle>
            <Text>
                When you use "Sign in with Amazon" to create an account, we receive the 
                following information from your Amazon profile:
            </Text>
            <List>
                <li>David James</li>
                <li>dvdjms@hotmail.com</li>
                <li>Amazon user ID</li>
            </List>
            
            <SubSubtitle>Automatically Collected Information</SubSubtitle>
            <Text>We may automatically collect certain information when you use our app, including:</Text>
            <List>
                <li>Device information (type, operating system, unique device identifiers)</li>
                <li>App usage data and analytics</li>
                <li>Crash reports and performance data</li>
            </List>

            {/* Add all other sections from your original privacy policy */}
            {/* ... */}

            <ContactBox>
                <Subtitle style={{ marginTop: 0 }}>Contact Us</Subtitle>
                <Text>
                If you have any questions about this Privacy Policy, please contact us at:
                </Text>
                <Text><strong>Email:</strong> dvdjms@hotmail.com</Text>
            </ContactBox>
            </PolicyContainer>
        </MainContent>
        <Footer />
        </PageContainer>
    );
};

export default Privacy;

const PageContainer = styled.div`
    min-height: 100vh;
    display: flex;
    flex-direction: column;
`;

const MainContent = styled.main`
    flex: 1;
    padding: 40px 20px;
    background: #f8f9fa;
`;

const PolicyContainer = styled.div`
    max-width: 800px;
    margin: 0 auto;
    background: white;
    padding: 40px;
    border-radius: 10px;
    box-shadow: 0 5px 20px rgba(0,0,0,0.05);
`;

const Title = styled.h1`
    color: #2c3e50;
    border-bottom: 2px solid #667eea;
    padding-bottom: 10px;
    margin-bottom: 20px;
`;

const LastUpdated = styled.p`
    color: #7f8c8d;
    font-style: italic;
    margin-bottom: 30px;
`;

const Subtitle = styled.h2`
    color: #34495e;
    margin-top: 30px;
    margin-bottom: 15px;
`;

const SubSubtitle = styled.h3`
    color: #34495e;
    margin-top: 20px;
    margin-bottom: 10px;
`;

const Text = styled.p`
    color: #333;
    line-height: 1.6;
    margin-bottom: 15px;
`;

const List = styled.ul`
    margin: 10px 0 20px 20px;
    color: #333;
    
    li {
        margin-bottom: 8px;
    }
`;

const ContactBox = styled.div`
    background: #f8f9fa;
    padding: 20px;
    border-radius: 5px;
    margin-top: 30px;
    border-left: 4px solid #667eea;
`;
