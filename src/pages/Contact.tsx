import React, { useState } from 'react';
import styled from 'styled-components';
import Navbar from '../components/NavBar';
import Footer from '../components/Footer';
// import emailjs from '@emailjs/browser';

const Contact: React.FC = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    });
    
    const [isSubmitting, setIsSubmitting] = useState(false);
    // const [isSuccess, setIsSuccess] = useState(false);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };


    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);
        
        // emailjs.send(
        //     'YOUR_SERVICE_ID',
        //     'YOUR_TEMPLATE_ID',
        //     {
        //         from_name: formData.name,
        //         from_email: formData.email,
        //         subject: formData.subject,
        //         message: formData.message,
        //         to_email: 'contact@servicecapture.app'
        //     },
        //     'YOUR_PUBLIC_KEY'
        // ).then(
        //     () => {
        //         setIsSubmitting(false);
        //         setIsSuccess(true);
        //         setFormData({ name: '', email: '', subject: '', message: '' });
        //         setTimeout(() => setIsSuccess(false), 5000);
        //     },
        //     (error: any) => {
        //         setIsSubmitting(false);
        //         alert('Failed to send message. Please try again.');
        //         console.warn('Failed to send message', error);
        //     }
        // );
    };

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
                    <Label>Email</Label>
                    <Value>contact@servicecapture.app</Value>
                </ContactDetail>
                </ContactItem>
                
                <ContactItem>
                <Icon>📱</Icon>
                {/* <ContactDetail>
                    <Label>Phone</Label>
                    <Value>+1 (555) 123-4567</Value>
                </ContactDetail> */}
                </ContactItem>
                
                <ContactItem>
                <Icon>📍</Icon>
                {/* <ContactDetail>
                    <Label>Address</Label>
                    <Value>123 Tech Street, San Francisco, CA 94105</Value>
                </ContactDetail> */}
                </ContactItem>
            </ContactInfo>

            {/* {isSuccess && ( */}
                <SuccessMessage>
                Thank you for your message! We'll get back to you soon.
                </SuccessMessage>
            {/* )} */}

            <Form onSubmit={handleSubmit}>
                <FormGroup>
                <Label2 htmlFor="name">Name</Label2>
                <Input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    placeholder="Your name"
                />
                </FormGroup>

                <FormGroup>
                <Label2 htmlFor="email">Email</Label2>
                <Input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    placeholder="your.email@example.com"
                />
                </FormGroup>

                <FormGroup>
                <Label2 htmlFor="subject">Subject</Label2>
                <Input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    placeholder="What is this regarding?"
                />
                </FormGroup>

                <FormGroup>
                <Label2 htmlFor="message">Message</Label2>
                <TextArea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    placeholder="Your message..."
                />
                </FormGroup>

                <SubmitButton type="submit" disabled={isSubmitting}>
                {isSubmitting ? 'Sending...' : 'Send Message'}
                </SubmitButton>
            </Form>
            </ContactContainer>
        </MainContent>
        <Footer />
        </PageContainer>
    );
};

export default Contact;


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
    margin-bottom: 40px;
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
    font-size: 1.1rem;
    color: #2c3e50;
    font-weight: 500;
`;

const Form = styled.form`
    display: flex;
    flex-direction: column;
    gap: 20px;
`;

const FormGroup = styled.div`
    display: flex;
    flex-direction: column;
`;

const Label2 = styled.label`
    margin-bottom: 8px;
    color: #34495e;
    font-weight: 500;
`;

const Input = styled.input`
    padding: 12px;
    border: 2px solid #e0e0e0;
    border-radius: 8px;
    font-size: 1rem;
    transition: border-color 0.3s ease;
    
    &:focus {
        outline: none;
        border-color: #431980;
    }
`;

const TextArea = styled.textarea`
    padding: 12px;
    border: 2px solid #e0e0e0;
    border-radius: 8px;
    font-size: 1rem;
    min-height: 120px;
    resize: vertical;
    
    &:focus {
        outline: none;
        border-color: #431980;
    }
`;

const SubmitButton = styled.button`
    padding: 15px 30px;
    background: #431980;
    color: white;
    border: none;
    border-radius: 8px;
    font-size: 1.1rem;
    font-weight: 600;
    cursor: pointer;
    transition: all 0.3s ease;
    
    &:hover {
        background: #764ba2;
        transform: translateY(-2px);
        box-shadow: 0 5px 15px rgba(102, 126, 234, 0.4);
    }
    
    &:disabled {
        background: #ccc;
        cursor: not-allowed;
        transform: none;
    }
`;

const SuccessMessage = styled.div`
    padding: 15px;
    background: #d4edda;
    color: #155724;
    border-radius: 8px;
    margin-bottom: 20px;
    text-align: center;
`;