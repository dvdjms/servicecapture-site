import React from 'react';
import styled from 'styled-components';
import Navbar from '../components/NavBar';
import Footer from '../components/Footer';

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

const CookiesContainer = styled.div`
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

const List = styled.ul`
  margin: 10px 0 20px 20px;
  color: #333;
  
  li {
    margin-bottom: 8px;
  }
`;

const CookieTable = styled.table`
  width: 100%;
  border-collapse: collapse;
  margin: 20px 0;
  
  th, td {
    border: 1px solid #ddd;
    padding: 12px;
    text-align: left;
  }
  
  th {
    background-color: #f8f9fa;
    font-weight: bold;
  }
  
  tr:nth-child(even) {
    background-color: #f8f9fa;
  }
`;

const Cookies: React.FC = () => {
  const currentDate = new Date().toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });

  return (
    <PageContainer>
      <Navbar />
      <MainContent>
        <CookiesContainer>
          <Title>Cookie Policy</Title>
          <LastUpdated>Last updated: {currentDate}</LastUpdated>

          <Subtitle>What Are Cookies</Subtitle>
          <Text>
            Cookies are small text files that are placed on your computer or mobile device when you 
            visit a website. They are widely used to make websites work more efficiently and provide 
            information to the owners of the site.
          </Text>

          <Subtitle>How We Use Cookies</Subtitle>
          <Text>We use cookies for a variety of reasons, including:</Text>
          <List>
            <li><strong>Essential Cookies:</strong> Required for the operation of our app</li>
            <li><strong>Analytical/Performance Cookies:</strong> Allow us to recognize and count visitors</li>
            <li><strong>Functionality Cookies:</strong> Recognize you when you return to our app</li>
            <li><strong>Targeting Cookies:</strong> Record your visit to our app and the pages you visit</li>
          </List>

          <Subtitle>Types of Cookies We Use</Subtitle>
          <CookieTable>
            <thead>
              <tr>
                <th>Cookie Type</th>
                <th>Purpose</th>
                <th>Duration</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Session Cookies</td>
                <td>Keep you logged in during your visit</td>
                <td>Session</td>
              </tr>
              <tr>
                <td>Analytics Cookies</td>
                <td>Understand how visitors interact with our app</td>
                <td>2 years</td>
              </tr>
              <tr>
                <td>Preference Cookies</td>
                <td>Remember your settings and preferences</td>
                <td>1 year</td>
              </tr>
            </tbody>
          </CookieTable>

          <Subtitle>Managing Cookies</Subtitle>
          <Text>
            Most web browsers allow you to control cookies through their settings preferences. 
            However, if you limit the ability of websites to set cookies, you may impact your 
            overall user experience.
          </Text>

          <Subtitle>Third-Party Cookies</Subtitle>
          <Text>
            In some special cases, we also use cookies provided by trusted third parties. The 
            following section details which third party cookies you might encounter through our app:
          </Text>
          <List>
            <li>Analytics cookies from services like Google Analytics</li>
            <li>Authentication cookies from Amazon (for "Sign in with Amazon")</li>
          </List>

          <Subtitle>More Information</Subtitle>
          <Text>
            If you have any questions about our use of cookies, please contact us at:
          </Text>
          <Text><strong>Email:</strong> dvdjms@hotmail.com</Text>
        </CookiesContainer>
      </MainContent>
      <Footer />
    </PageContainer>
  );
};

export default Cookies;