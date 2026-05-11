import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import styled from 'styled-components';
import icon from '../assets/icon.png';


const Navbar: React.FC = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const location = useLocation();
    const isHomePage = location.pathname === "/";

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 10);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    useEffect(() => {
        if (isMobileMenuOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
        return () => { document.body.style.overflow = 'unset'; };
    }, [isMobileMenuOpen]);

    // Close mobile menu when clicking a link
    const handleLinkClick = () => {
        setIsMobileMenuOpen(false);
    };

    const handleLogoClick = (e: React.MouseEvent) => {
        if (location.pathname === "/") {
            e.preventDefault(); // stop router navigation
            window.scrollTo({ top: 0, behavior: "smooth" });
        }
    };

    return (
        <>
            <Nav isScrolled={isScrolled}>
                <NavContainer>
                    <LogoContainer to="/" 
                        onClick={(e) => {
                            handleLinkClick();
                            handleLogoClick(e);
                        }}
                    >

                        <LogoImage src={icon} alt="Service Capture Logo" />
                        <LogoText>
                            <Service>Service</Service>
                            <OrangeDot />
                            <Capture>Capture</Capture>
                        </LogoText>
                    </LogoContainer>

                    {/* Desktop Navigation */}
                    <NavLinks>
                    {isHomePage && (
                        <>
                        <NavAnchor href="#features" onClick={handleLinkClick}>
                            Features
                        </NavAnchor>

                        <NavAnchor href="#why" onClick={handleLinkClick}>
                            Why
                        </NavAnchor>

                        <NavAnchor href="#report" onClick={handleLinkClick}>
                            Reports
                        </NavAnchor>

                        <NavAnchor href="#download" onClick={handleLinkClick}>
                            Download
                        </NavAnchor>
                        </>
                    )}
                    </NavLinks>

                    {/* Mobile Menu Button */}
                    <MobileMenuButton onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
                        <MenuIcon isOpen={isMobileMenuOpen}>
                            <span></span>
                            <span></span>
                            <span></span>
                        </MenuIcon>
                    </MobileMenuButton>
                </NavContainer>
                
            </Nav>

            {/* Mobile Menu Overlay */}
            <MobileMenu isOpen={isMobileMenuOpen}>
                <MobileNavLinks>
                    <MobileNavLink href="#features" onClick={handleLinkClick}>
                        Features
                    </MobileNavLink>
                    <MobileNavLink href="#why" onClick={handleLinkClick}>
                        Why
                    </MobileNavLink>
                    <MobileNavLink href="#report" onClick={handleLinkClick}>
                        Reports
                    </MobileNavLink>

                    <MobileNavLink href="#download" onClick={handleLinkClick}>
                        Download
                    </MobileNavLink>
                </MobileNavLinks>
            </MobileMenu>
        </>
    );
};

export default Navbar;


const Nav = styled.nav<{ isScrolled: boolean }>`
    position: sticky;
    top: 0;
    z-index: 1000;
    background: ${props => props.isScrolled ? 'rgba(248, 249, 250, 0.95)' : '#f8f9fa'};
    backdrop-filter: ${props => props.isScrolled ? 'blur(10px)' : 'none'};
    box-shadow: ${props => props.isScrolled ? '0 4px 20px rgba(0,0,0,0.08)' : '0 2px 10px rgba(0,0,0,0.05)'};
    transition: all 0.3s ease;
    padding: 0.75rem 2rem;
    
    @media (max-width: 768px) {
        padding: 0.75rem 1rem;
    }
`;

const NavContainer = styled.div`
    max-width: 1280px;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

const LogoContainer = styled(Link)`
    display: flex;
    align-items: center;
    gap: 12px;
    text-decoration: none;
    position: relative;
    transition: transform 0.2s ease;
    
    &:hover {
        transform: scale(1.02);
    }
`;

const LogoImage = styled.img`
    height: 40px;
    width: auto;
    
    @media (max-width: 768px) {
        height: 35px;
    }
`;

const LogoText = styled.div`
    display: flex;
    align-items: center;
    gap: 1px;
`;

const Service = styled.span`
    font-size: 1.3rem;
    font-weight: 700;
    color: #431980;
    
    @media (max-width: 768px) {
        font-size: 1.1rem;
    }
`;

const Capture = styled.span`
    font-size: 1.3rem;
    font-weight: 700;
    background: linear-gradient(135deg, #667eea 0%, #431980 100%);
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    
    @media (max-width: 768px) {
        font-size: 1.1rem;
    }
`;

const OrangeDot = styled.div`
    height: 8px;
    width: 8px;
    border-radius: 50%;
    background: #F97316;
`;

// Desktop Navigation Links
const NavLinks = styled.div`
    display: flex;
    align-items: center;
    gap: 32px;
    
    @media (max-width: 768px) {
        display: none;
    }
`;

// Mobile Menu Components
const MobileMenuButton = styled.button`
    display: none;
    background: none;
    border: none;
    cursor: pointer;
    padding: 8px;
    
    @media (max-width: 768px) {
        display: block;
    }
`;

const MenuIcon = styled.div<{ isOpen: boolean }>`
    width: 24px;
    height: 20px;
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    
    span {
        display: block;
        width: 100%;
        height: 2px;
        background: #431980;
        transition: all 0.3s ease;
        border-radius: 2px;
    }
    
    ${props => props.isOpen && `
        span:first-child {
            transform: rotate(45deg) translate(6px, 6px);
        }
        span:nth-child(2) {
            opacity: 0;
        }
        span:last-child {
            transform: rotate(-45deg) translate(6px, -6px);
        }
    `}
`;

const MobileMenu = styled.div<{ isOpen: boolean }>`
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    width: 100%;
    max-width: 320px;
    background: white;
    box-shadow: -4px 0 20px rgba(0,0,0,0.1);
    transform: ${props => props.isOpen ? 'translateX(0)' : 'translateX(100%)'};
    transition: transform 0.3s cubic-bezier(0.4, 0, 0.2, 1);
    z-index: 999;
    padding-top: 80px;
    
    @media (min-width: 769px) {
        display: none;
    }
`;

const MobileNavLinks = styled.div`
    display: flex;
    flex-direction: column;
    gap: 20px;
    padding: 0 24px;
`;

const MobileNavLink = styled.a`
    text-decoration: none;
    font-size: 1.2rem;
    font-weight: 500;
    color: #495057;
    padding: 12px 0;
    border-bottom: 1px solid #e9ecef;
    transition: all 0.2s ease;
    
    &:hover {
        color: #431980;
        padding-left: 8px;
    }
`;

const NavAnchor = styled.a<{ active?: boolean }>`
    text-decoration: none;
    font-size: 1rem;
    font-weight: 500;
    color: ${props => props.active ? '#431980' : '#495057'};
    position: relative;
    transition: color 0.2s ease;
    padding: 8px 0;

    &::after {
        content: '';
        position: absolute;
        bottom: 0;
        left: 0;
        width: ${props => props.active ? '100%' : '0'};
        height: 2px;
        background: #431980;
        transition: width 0.3s ease;
    }

    &:hover {
        color: #431980;

        &::after {
            width: 100%;
        }
    }
`;