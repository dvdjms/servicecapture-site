import React from 'react';
import styled from 'styled-components';
import Navbar from '../components/NavBar';
import Footer from '../components/Footer';

const Cookies: React.FC = () => {
    return (
        <PageContainer>
            <Navbar />
            <MainContent>
                <CookiesContainer>
                    <Title>Cookie Policy</Title>
                    
                    <Subtitle>Service Capture Cookie Policy</Subtitle>
                    <Text>
                        <strong>Effective Date:</strong> 31 March 2026
                    </Text>
                    
                    <Text>
                        We use cookies to help improve your experience of our website at <a href="https://servicecapture.app" target="_blank" rel="noopener noreferrer">servicecapture.app</a>. This cookie policy is part of Service Capture privacy policy. It covers the use of cookies between your device and our site.
                    </Text>
                    
                    <Text>
                        We also provide basic information on third-party services we may use, who may also use cookies as part of their service. This policy does not cover their cookies.
                    </Text>
                    
                    <Text>
                        If you don't wish to accept cookies from us, you should instruct your browser to refuse cookies from <a href="https://servicecapture.app" target="_blank" rel="noopener noreferrer">servicecapture.app</a>. In such a case, we may be unable to provide you with some of your desired content and services.
                    </Text>

                    <Subtitle>What is a cookie?</Subtitle>
                    <Text>
                        A cookie is a small piece of data that a website stores on your device when you visit. It typically contains information about the website itself, a unique identifier that allows the site to recognise your web browser when you return, additional data that serves the cookie's purpose, and the lifespan of the cookie itself.
                    </Text>
                    
                    <Text>
                        Cookies are used to enable certain features (e.g. logging in), track site usage (e.g. analytics), store your user settings (e.g. time zone, notification preferences), and to personalise your content (e.g. advertising, language).
                    </Text>
                    
                    <Text>
                        Cookies set by the website you are visiting are usually referred to as first-party cookies. They typically only track your activity on that particular site.
                    </Text>
                    
                    <Text>
                        Cookies set by other sites and companies (i.e. third parties) are called third-party cookies. They can be used to track you on other websites that use the same third-party service.
                    </Text>

                    <Subtitle>Types of cookies and how we use them</Subtitle>
                    
                    <SubSubtitle>Performance cookies</SubSubtitle>
                    <Text>
                        Performance cookies track how you use a website during your visit. Typically, this information is anonymous and aggregated, with information tracked across all site users. They help companies understand visitor usage patterns, identify and diagnose problems or errors their users may encounter, and make better strategic decisions in improving their audience's overall website experience. These cookies may be set by the website you're visiting (first-party) or by third-party services. They do not collect personal information about you.
                    </Text>
                    
                    <Text>
                        We use performance cookies on our site.
                    </Text>

                    <Subtitle>How Can You Control Our Website's Use of Cookies?</Subtitle>
                    <Text>
                        You have the right to decide whether to accept or reject cookies on our Website. You can manage your cookie preferences in our Cookie Consent Manager. The Cookie Consent Manager allows you to select which categories of cookies you accept or reject. Essential cookies cannot be rejected as they are strictly necessary to provide you with the services on our Website.
                    </Text>
                    
                    <Text>
                        You may also be able to set or amend your cookie preferences by managing your web browser settings. As each web browser is different, please consult the instructions provided by your web browser (typically in the "help" section). If you choose to refuse or disable cookies you may still use the Website, though some of the functionality of the Website may not be available to you.
                    </Text>

                    <Subtitle>How Often Will We Update This Cookie Policy?</Subtitle>
                    <Text>
                        We may update this Cookie Policy from time to time in order to reflect any changes to the cookies and related technologies we use, or for other operational, legal or regulatory reasons.
                    </Text>
                    
                    <Text>
                        Each time you use our Website, the current version of the Cookie Policy will apply. When you use our Website, you should check the date of this Cookie Policy (which appears at the top of this document) and review any changes since the last version.
                    </Text>

                    <ContactBox>
                        <Subtitle style={{ marginTop: 0 }}>Where Can You Obtain Further Information?</Subtitle>
                        <Text>
                            For any questions or concerns regarding our Cookie Policy, you may contact us using the following details:
                        </Text>
                        <Text>
                            <a href="mailto:contact@servicecapture.app">contact@servicecapture.app</a>
                        </Text>
                    </ContactBox>
                </CookiesContainer>
            </MainContent>
            <Footer />
        </PageContainer>
    );
};

export default Cookies;

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
    border-bottom: 2px solid #431980;
    padding-bottom: 10px;
    margin-bottom: 20px;
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

const ContactBox = styled.div`
    background: #f8f9fa;
    padding: 20px;
    border-radius: 5px;
    margin-top: 30px;
    border-left: 4px solid #431980;
`;