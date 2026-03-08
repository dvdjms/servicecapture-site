import React from 'react';
import styled from 'styled-components';
import Navbar from '../components/NavBar';
import Footer from '../components/Footer';


const Terms: React.FC = () => {
    const currentDate = new Date().toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    });

    return (
        <PageContainer>
        <Navbar />
        <MainContent>
            <TermsContainer>
            <Title>Terms of Service</Title>
            <LastUpdated>Last updated: {currentDate}</LastUpdated>

            <Subtitle>1. Acceptance of Terms</Subtitle>
            <Text>
                By accessing or using The Service, you agree to be bound by these Terms of Service 
                and all applicable laws and regulations. If you do not agree with any part of these 
                terms, you may not use our services.
            </Text>

            <Subtitle>2. Use License</Subtitle>
            <Text>
                Permission is granted to temporarily download one copy of the materials (information 
                or software) on The Service's website for personal, non-commercial transitory viewing only.
            </Text>

            <Subtitle>3. Disclaimer</Subtitle>
            <Text>
                The materials on The Service's website are provided on an 'as is' basis. The Service 
                makes no warranties, expressed or implied, and hereby disclaims and negates all other 
                warranties including, without limitation, implied warranties or conditions of 
                merchantability, fitness for a particular purpose, or non-infringement of intellectual 
                property or other violation of rights.
            </Text>

            <Subtitle>4. Limitations</Subtitle>
            <Text>
                In no event shall The Service or its suppliers be liable for any damages (including, 
                without limitation, damages for loss of data or profit, or due to business interruption) 
                arising out of the use or inability to use the materials on The Service's website.
            </Text>

            <Subtitle>5. Accuracy of Materials</Subtitle>
            <Text>
                The materials appearing on The Service's website could include technical, typographical, 
                or photographic errors. The Service does not warrant that any of the materials on its 
                website are accurate, complete, or current.
            </Text>

            <Subtitle>6. Links</Subtitle>
            <Text>
                The Service has not reviewed all of the sites linked to its website and is not responsible 
                for the contents of any such linked site. The inclusion of any link does not imply 
                endorsement by The Service of the site.
            </Text>

            <Subtitle>7. Modifications</Subtitle>
            <Text>
                The Service may revise these terms of service for its website at any time without notice. 
                By using this website you are agreeing to be bound by the then current version of these 
                terms of service.
            </Text>

            <Subtitle>8. Governing Law</Subtitle>
            <Text>
                These terms and conditions are governed by and construed in accordance with the laws and 
                you irrevocably submit to the exclusive jurisdiction of the courts in that location.
            </Text>

            <Subtitle>9. Contact Information</Subtitle>
            <Text>
                If you have any questions about these Terms of Service, please contact us at:
            </Text>
            <Text><strong>Email:</strong> dvdjms@hotmail.com</Text>
            </TermsContainer>
        </MainContent>
        <Footer />
        </PageContainer>
    );
};

export default Terms;

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

const TermsContainer = styled.div`
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

const Text = styled.p`
    color: #333;
    line-height: 1.6;
    margin-bottom: 15px;
`;