import React from 'react';
import styled from 'styled-components';
import Footer from '../components/Footer';
import Navbar from '../components/NavBar';
import FeatureSection from '../components/FeatureSection';
import { HeroSection } from '../components/HeroSection';
import { WhyServiceCapture } from '../components/WhyServiceCapture';
import { Description } from '../components/Description';
import PDFSection from '../components/PDFSection';
import { DownloadSection } from '../components/DownloadSection';

// npm run dev

const Home: React.FC = () => {
    return (
        <>
            <PageContainer>
                <Navbar />
                <MainContent>

                    <HeroSection />
                    <FeatureSection />
                    <Description />

                    <WhyServiceCapture />
                    <PDFSection />
                    <DownloadSection />

                </MainContent>
                <Footer />
            </PageContainer>
        </>
    );
};

export default Home;


const PageContainer = styled.div`
    min-height: 100vh;
    display: flex;
    flex-direction: column;
`;

const MainContent = styled.main`
    flex: 1;
`;
