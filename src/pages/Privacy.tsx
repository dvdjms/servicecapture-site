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
                <Title>Privacy Policy</Title>
                {/* <LastUpdated>Last updated: {currentDate}</LastUpdated> */}
      

                    <Subtitle>Service Capture Privacy Policy</Subtitle>
                    <Text>
                        Your privacy is important to us. It is Service Capture's policy to respect your privacy and comply with any applicable law and regulation regarding any personal information we may collect about you, including via our app, Service Capture, and its associated services.
                    </Text>
                    <Text>
                        Personal information is any information about you which can be used to identify you. This includes information about you as a person (such as name, address, and date of birth), your devices, payment details, and even information about how you use an app or online service.
                    </Text>
                    <Text>
                        In the event our app contains links to third-party sites and services, please be aware that those sites and services have their own privacy policies. After following a link to any third-party content, you should read their posted privacy policy information about how they collect and use personal information. This Privacy Policy does not apply to any of your activities after you leave our app.
                    </Text>
                    <Text>
                        This policy is effective as of 09 March 2026.
                    </Text>

                    <LastUpdated>Last updated: {currentDate}</LastUpdated>

                    <Subtitle>At-a-Glance</Subtitle>
                    <Text>
                        We like to be clear and easy to understand. This section summarises some important points in the Service Capture privacy policy we think are good to know.
                    </Text>
                    <Text>
                        Service Capture relies on the following personal information to provide a service to you:
                    </Text>
                    <List>
                        <li>Name</li>
                        <li>Email</li>
                    </List>
                    <Text>
                        This information allows us to identify your Service Capture account, to communicate with you about your account, to let you know about new features or changes to our service, to let you know if there's a change in our policies and to send you marketing communications.                
                    </Text>
                    <Text>
                        We store this information, along with data you enter into the app in the cloud as part of providing our service to you.                
                    </Text>
                    <Text>
                        We don't share your personal information, or the data you enter into the app, outside of the Service Capture business.                
                    </Text>
                    <Text>
                        If you would like us to delete your data, please email <a href="mailto:contact@servicecapture.app">contact@servicecapture.app</a> and we will get that done for you.
                    </Text>

                    <Subtitle>Data Selling and Deletion</Subtitle>
                    <Text>
                        Service Capture does not sell, rent, or trade your personal information to third parties.
                    </Text>
                    <Text>
                        You may request deletion of your account and all associated data at any time by contacting <a href="mailto:contact@servicecapture.app">contact@servicecapture.app</a>.
                    </Text>

                    <Subtitle>Information We Collect</Subtitle>
                    <Text>
                        Information we collect falls into one of two categories: 'voluntarily provided' information and 'automatically collected' information.
                    </Text>
                    <Text>
                        'Voluntarily provided' information refers to any information you knowingly and actively provide us when using our app and its associated services.
                    </Text>
                    <Text>
                        'Automatically collected' information refers to any information automatically sent by your device in the course of accessing our app and its associated services.
                    </Text>
                    
                    <SubSubtitle>Log Data</SubSubtitle>
                    <Text>
                        When you access our servers via our app, we may automatically log the standard data provided by your device. It may include your device's Internet Protocol (IP) address, your device type and version, your activity within the app, time and date, and other details about your usage.                
                    </Text>
                    <Text>
                        Additionally, when you encounter certain errors while using the app, we automatically collect data about the error and the circumstances surrounding its occurrence. This data may include technical details about your device, what you were trying to do when the error happened, and other technical information relating to the problem. You may or may not receive notice of such errors, even in the moment they occur, that they have occurred, or what the nature of the error is.                
                    </Text>
                    <Text>
                        Please be aware that while this information may not be personally identifying by itself, it may be possible to combine it with other data to personally identify individual persons.                
                    </Text>
                    
                    <SubSubtitle>Personal Information</SubSubtitle>
                    <Text>
                        We may ask for personal information — for example, when you submit content to us or when you contact us — which may include one or more of the following:
                    </Text>
                    <List>
                        <li>Name</li>
                        <li>Email</li>
                    </List>

                    <SubSubtitle>User-Generated Content</SubSubtitle>
                    <Text>
                        We consider 'user-generated content' to be materials (text, image and/or video content) voluntarily supplied to us by our users for the purpose of publication on our platform, app or re-publishing on our social media channels. All user-generated content is associated with the account or email address used to submit the materials.
                    </Text>
                    <Text>
                        Please be aware that any content you submit for the purpose of publication will be public after posting (and subsequent review or vetting process). Once published it may be accessible to third parties not covered under this privacy policy.
                    </Text>

                    <Subtitle>Legitimate Reasons for Processing Your Personal Information</Subtitle>
                    <Text>
                        We only collect and use your personal information when we have a legitimate reason for doing so. In which instance we only collect personal information that is reasonably necessary to provide our services to you.
                    </Text>

                    <Subtitle>Collection and Use of Information</Subtitle>
                    <Text>
                        We may collect personal information from you when you do any of the following on our app:
                    </Text>
                    <List>
                        <li>Register for an account</li>
                        <li>Use a mobile device or web browser to access our content</li>
                        <li>Contact us via email, social media, or on any similar technologies</li>
                        <li>When you mention us on social media</li>
                    </List>
                    <Text>
                        We may collect, hold, use and disclose information for the following purposes, and personal information will not be further processed in a manner that is incompatible with these purposes:
                    </Text>
                    <List>
                        <li>to provide you with our app and platform's core features and services</li>
                        <li>to enable you to customize or personalize your experience of our app</li>
                        <li>to contact and communicate with you</li>
                        <li>for analytics, market research, and business development, including to operate and improve our app, associated applications, and associated social media platforms</li>
                        <li>for advertising and marketing, including to send you promotional information about our products and services and information about third parties that we consider may be of interest to you</li>
                        <li>to enable you to access and use our app, associated platforms, and associated social media channels</li>
                        <li>for internal record keeping and administrative purposes</li>
                        <li>to comply with our legal obligations and resolve any disputes that we may have</li>
                        <li>for security and fraud prevention, and to ensure that our sites and apps are safe, secure, and used in line with our terms of use</li>
                        <li>for technical assessment, including to operate and improve our app, associated applications, and associated social media platforms</li>
                    </List>
                    <Text>
                        We may combine voluntarily provided and automatically collected personal information with general information or research data we receive from other trusted sources. For example, If you consent to us accessing your social media profiles, we may combine information sourced from those profiles with information received from you directly to provide you with an enhanced experience of our app and services.
                    </Text>

                    <Subtitle>Security of Your Personal Information</Subtitle>
                    <Text>
                        When we collect and process personal information, and while we retain this information, we will protect it within commercially acceptable means to prevent loss and theft, as well as unauthorized access, disclosure, copying, use or modification.
                    </Text>
                    <Text>
                        Although we will do our best to protect the personal information you provide to us, we advise that no method of electronic transmission or storage is 100% secure and no one can guarantee absolute data security.
                    </Text>
                    <Text>
                        You are responsible for selecting any password and its overall security strength, ensuring the security of your own information within the bounds of our services. For example, ensuring any passwords associated with accessing your personal information and accounts are secure and confidential.
                    </Text>

                    <Subtitle>How Long We Keep Your Personal Information</Subtitle>
                    <Text>
                        We keep your personal information only for as long as we need to. This time period may depend on what we are using your information for, in accordance with this privacy policy. For example, if you have provided us with personal information as part of creating an account with us, we may retain this information for the duration your account exists on our system. If your personal information is no longer required for this purpose, we will delete it or make it anonymous by removing all details that identify you.
                    </Text>
                    <Text>
                        However, if necessary, we may retain your personal information for our compliance with a legal, accounting, or reporting obligation or for archiving purposes in the public interest, scientific, or historical research purposes or statistical purposes.
                    </Text>

                    <Subtitle>Children's Privacy</Subtitle>
                    <Text>
                        We do not aim any of our products or services directly at children under the age of 13 (or the applicable minimum age in your jurisdiction) and we do not knowingly collect personal information about children under 13.
                    </Text>

                    <Subtitle>Disclosure of Personal Information to Third Parties</Subtitle>
                    <Text>
                        We may disclose personal information to:
                    </Text>
                    <List>
                        <li>a parent, subsidiary or affiliate of our company</li>
                        <li>third-party service providers for the purpose of enabling them to provide their services including (without limitation) IT service providers, data storage, hosting and server providers, ad networks, analytics, error loggers, debt collectors, maintenance or problem-solving providers, professional advisors, and payment systems operators</li>
                        <li>our employees, contractors, and/or related entities</li>
                        <li>our existing or potential agents or business partners</li>
                        <li>credit reporting agencies, courts, tribunals, and regulatory authorities, in the event you fail to pay for goods or services we have provided to you</li>
                        <li>courts, tribunals, regulatory authorities, and law enforcement officers, as required by law, in connection with any actual or prospective legal proceedings, or in order to establish, exercise, or defend our legal rights</li>
                        <li>third parties, including agents or sub-contractors who assist us in providing information, products, services, or direct marketing to you</li>
                        <li>third parties to collect and process data</li>
                        <li>an entity that buys, or to which we transfer all or substantially all of our assets and business</li>
                    </List>
                    <Text>
                        Third parties we currently use include:
                    </Text>
                    <List>
                        <li>Google Analytics</li>
                        <li>Sentry Application Performance Monitoring & Error Tracking</li>
                        <li>Google Payments</li>
                        <li>Apple Pay</li>
                    </List>

                    <Subtitle>International Transfers of Personal Information</Subtitle>
                    <Text>
                        The personal information we collect is stored and/or processed in United Kingdom, or where we or our partners, affiliates, and third-party providers maintain facilities.
                    </Text>
                    <Text>
                        The countries to which we store, process, or transfer your personal information may not have the same data protection laws as the country in which you initially provided the information. If we transfer your personal information to third parties in other countries: (i) we will perform those transfers in accordance with the requirements of applicable law; and (ii) we will protect the transferred personal information in accordance with this privacy policy.
                    </Text>

                    <Subtitle>Your Rights and Controlling Your Personal Information</Subtitle>
                    <Text>
                        <strong>Your choice:</strong> By providing personal information to us, you understand we will collect, hold, use, and disclose your personal information in accordance with this privacy policy. You do not have to provide personal information to us, however, if you do not, it may affect your use of our app or the products and/or services offered on or through it.
                    </Text>
                    <Text>
                        <strong>Information from third parties:</strong> If we receive personal information about you from a third party, we will protect it as set out in this privacy policy. If you are a third party providing personal information about somebody else, you represent and warrant that you have such person's consent to provide the personal information to us.
                    </Text>
                    <Text>
                        <strong>Marketing permission:</strong> If you have previously agreed to us using your personal information for direct marketing purposes, you may change your mind at any time by contacting us using the details below.
                    </Text>
                    <Text>
                        <strong>Access:</strong> You may request details of the personal information that we hold about you.
                    </Text>
                    <Text>
                        <strong>Correction:</strong> If you believe that any information we hold about you is inaccurate, out of date, incomplete, irrelevant, or misleading, please contact us using the details provided in this privacy policy. We will take reasonable steps to correct any information found to be inaccurate, incomplete, misleading, or out of date.
                    </Text>
                    <Text>
                        <strong>Non-discrimination:</strong> We will not discriminate against you for exercising any of your rights over your personal information. Unless your personal information is required to provide you with a particular service or offer (for example serving particular content to your device), we will not deny you goods or services and/or charge you different prices or rates for goods or services, including through granting discounts or other benefits, or imposing penalties, or provide you with a different level or quality of goods or services.
                    </Text>
                    <Text>
                        <strong>Notification of data breaches:</strong> We will comply with laws applicable to us in respect of any data breach.
                    </Text>
                    <Text>
                        <strong>Complaints:</strong> If you believe that we have breached a relevant data protection law and wish to make a complaint, please contact us using the details below and provide us with full details of the alleged breach. We will promptly investigate your complaint and respond to you, in writing, setting out the outcome of our investigation and the steps we will take to deal with your complaint. You also have the right to contact a regulatory body or data protection authority in relation to your complaint.
                    </Text>
                    <Text>
                        <strong>Unsubscribe:</strong> To unsubscribe from our email database or opt-out of communications (including marketing communications), please contact us using the details provided in this privacy policy, or opt-out using the opt-out facilities provided in the communication. We may need to request specific information from you to help us confirm your identity.
                    </Text>

                    <Subtitle>Use of Cookies</Subtitle>
                    <Text>
                        Our privacy policy covers the use of cookies between your device and our servers. A cookie is a small piece of data that an app may store on your device, typically containing a unique identifier that allows the app servers to recognise your device when you use the app; information about your account, session and/or device; additional data that serves the purpose of the cookie; and any self-maintenance information about the cookie itself.
                    </Text>
                    <Text>
                        We use cookies to give your device access to core features of our app, to track app usage and performance on your device, to tailor your experience of our app based on your preferences, and to serve advertising to your device. Any communication of cookie data between your device and our servers occurs within a secure environment.
                    </Text>
                    <Text>
                        Please refer to our Cookie Policy for more information.
                    </Text>

                    <Subtitle>Business Transfers</Subtitle>
                    <Text>
                        If we or our assets are acquired, or in the unlikely event that we go out of business or enter bankruptcy, we would include data, including your personal information, among the assets transferred to any parties who acquire us. You acknowledge that such transfers may occur, and that any parties who acquire us may, to the extent permitted by applicable law, continue to use your personal information according to this policy, which they will be required to assume as it is the basis for any ownership or use rights we have over such information.
                    </Text>

                    <Subtitle>Limits of Our Policy</Subtitle>
                    <Text>
                        Our app may link to external sites that are not operated by us. Please be aware that we have no control over the content and policies of those sites, and cannot accept responsibility or liability for their respective privacy practices.
                    </Text>

                    <Subtitle>Changes to This Policy</Subtitle>
                    <Text>
                        At our discretion, we may change our privacy policy to reflect updates to our business processes, current acceptable practices, or legislative or regulatory changes. If we decide to change this privacy policy, we will post the changes here.
                    </Text>
                    <Text>
                        If the changes are significant, or if required by applicable law, we will contact you (based on your selected preferences for communications from us) and all our registered users with the new details and links to the updated or changed policy.
                    </Text>
                    <Text>
                        If required by law, we will get your permission or give you the opportunity to opt in to or opt out of, as applicable, any new uses of your personal information.
                    </Text>

                    <Subtitle>Additional Disclosures for UK General Data Protection Regulation (UK GDPR) Compliance (UK)</Subtitle>
                    
                    <SubSubtitle>Data Controller / Data Processor</SubSubtitle>
                    <Text>
                        The GDPR distinguishes between organisations that process personal information for their own purposes (known as "data controllers") and organizations that process personal information on behalf of other organizations (known as "data processors"). For the purposes covered by this Privacy Policy, we are a Data Controller with respect to the personal information you provide to us and remain compliant with our data controller obligations under GDPR.
                    </Text>

                    <SubSubtitle>Third-Party Provided Content</SubSubtitle>
                    <Text>
                        We may indirectly collect personal information about you from third-parties who have your permission to share it. For example, if you purchase a product or service from a business working with us, and give your permission for us to use your details in order to complete the transaction.
                    </Text>
                    <Text>
                        We may also collect publicly available information about you, such as from any social media and messaging platforms you may use. The availability of this information will depend on both the privacy policies and your own privacy settings on such platforms.
                    </Text>

                    <SubSubtitle>Additional Disclosure for Collection and Use of Personal Information</SubSubtitle>
                    <Text>
                        In addition to the aforementioned purposes warranting the collection and use of personal information, we may also conduct marketing and market research activities, including how visitors use our site, website improvement opportunities and user experience.
                    </Text>

                    <SubSubtitle>Personal Information No Longer Required for Our Purposes</SubSubtitle>
                    <Text>
                        If your personal information is no longer required for our stated purposes, or if you instruct us under your Data Subject Rights, we will delete it or make it anonymous by removing all details that identify you ("Anonymisation"). However, if necessary, we may retain your personal information for our compliance with a legal, accounting, or reporting obligation or for archiving purposes in the public interest, scientific, or historical research purposes or statistical purposes.
                    </Text>

                    <SubSubtitle>Legal Bases for Processing Your Personal Information</SubSubtitle>
                    <Text>
                        Data Protection and Privacy Laws permit us to collect and use your personal data on a limited number of grounds. In which case, we will collect and use your personal information lawfully, fairly and in a transparent manner. We never directly market to any person(s) under 18 years of age.
                    </Text>
                    <Text>
                        Our lawful bases depend on the services you use and how you use them. This is a non-exhaustive list of the lawful bases we use:
                    </Text>
                    <Text>
                        <strong>Consent From You</strong><br />
                        Where you give us consent to collect and use your personal information for a specific purpose. You may withdraw your consent at any time using the facilities we provide; however this will not affect any use of your information that has already taken place. When you contact us, we assume your consent based on your positive action of contact, therefore you consent to your name and email address being used so we can respond to your enquiry.
                    </Text>
                    <Text>
                        Where you agree to receive marketing communications from us, we will do so based solely on your indication of consent or until you instruct us not to, which you can do at any time.
                    </Text>
                    <Text>
                        While you may request that we delete your contact details at any time, we cannot recall any email we have already sent. If you have any further enquiries about how to withdraw your consent, please feel free to enquire using the details provided in the Contact Us section of this privacy policy.
                    </Text>
                    <Text>
                        <strong>Performance of a Contract or Transaction</strong><br />
                        Where you have entered into a contract or transaction with us, or in order to take preparatory steps prior to our entering into a contract or transaction with you. For example, if you contact us with an enquiry, we may require personal information such as your name and contact details in order to respond.
                    </Text>
                    <Text>
                        <strong>Our Legitimate Interests</strong><br />
                        Where we assess it is necessary for our legitimate interests, such as for us to provide, operate, improve and communicate our services. We consider our legitimate interests to include research and development, understanding our audience, marketing and promoting our services, measures taken to operate our services efficiently, marketing analysis, and measures taken to protect our legal rights and interests.
                    </Text>
                    <Text>
                        <strong>Compliance with Law</strong><br />
                        In some cases, we may have a legal obligation to use or keep your personal information. Such cases may include (but are not limited to) court orders, criminal investigations, government requests, and regulatory obligations. For example, we are required to keep financial records for a period of 7 years. If you have any further enquiries about how we retain personal information in order to comply with the law, please feel free to enquire using the details provided in the Contact Us section of this privacy policy.
                    </Text>

                    <SubSubtitle>International Transfers of Personal Information</SubSubtitle>
                    <Text>
                        The personal information we collect is stored and/or processed in the United Kingdom by us. Following an adequacy decision by the EU Commission, the UK has been granted an essentially equivalent level of protection to that guaranteed under UK GDPR.
                    </Text>
                    <Text>
                        On some occasions, where we share your data with third parties, they may be based outside of the UK, or the European Economic Area ("EEA"). These countries to which we store, process, or transfer your personal information may not have the same data protection laws as the country in which you initially provided the information.
                    </Text>
                    <Text>
                        If we transfer your personal information to third parties in other countries:
                    </Text>
                    <List>
                        <li>we will perform those transfers in accordance with the requirements of the UK GDPR (Article 45) and Data Protection Act 2018;</li>
                        <li>we will adopt appropriate safeguards for protecting the transferred data, including in transit, such as standard contractual clauses ("SCCs") or binding corporate rules.</li>
                    </List>

                    <SubSubtitle>Your Data Subject Rights</SubSubtitle>
                    <Text>
                        <strong>Right to Restrict Processing:</strong> You have the right to request that we restrict the processing of your personal information if (i) you are concerned about the accuracy of your personal information; (ii) you believe your personal information has been unlawfully processed; (iii) you need us to maintain the personal information solely for the purpose of a legal claim; or (iv) we are in the process of considering your objection in relation to processing on the basis of legitimate interests.
                    </Text>
                    <Text>
                        <strong>Right to Object:</strong> You have the right to object to processing of your personal information that is based on our legitimate interests or public interest. If this is done, we must provide compelling legitimate grounds for the processing which overrides your interests, rights, and freedoms, in order to proceed with the processing of your personal information.
                    </Text>
                    <Text>
                        <strong>Right to be Informed:</strong> You have the right to be informed with how your data is collected, processed, shared and stored.
                    </Text>
                    <Text>
                        <strong>Right of Access:</strong> You may request a copy of the personal information that we hold about you at any time by submitting a Data Subject Access Request (DSAR). The statutory deadline for fulfilling a DSAR request is 30 calendar days from our receipt of your request.
                    </Text>
                    <Text>
                        <strong>Right to Erasure:</strong> In certain circumstances, you can ask for your personal data to be erased from the records held by organisations. However this is a qualified right; it is not absolute, and may only apply in certain circumstances.
                    </Text>
                    <Text>When may the right to erasure apply?</Text>
                    <List>
                        <li>When the personal data is no longer necessary for the purpose for which it was originally collected or processed for.</li>
                        <li>If consent was the lawful basis for processing personal data and that consent has been withdrawn. Service Capture relies on consent to process personal data in very few circumstances.</li>
                        <li>The Company is relying on legitimate interests as a legal basis for processing personal data and an individual has exercised the right to object and it has been determined that the Company has no overriding legitimate grounds to refuse that request.</li>
                        <li>Personal data are being processed for direct marketing purposes e.g. a person's name and email address, and the individual objects to that processing.</li>
                        <li>There is legislation that requires that personal data are to be destroyed.</li>
                    </List>
                    <Text>
                        <strong>Right to Portability:</strong> Individuals have the right to get some of their personal data from an organisation in a way that is accessible and machine-readable, for example as a csv file. Associated with this, individuals also have the right to ask an organisation to transfer their personal data to another organisation.
                    </Text>
                    <Text>However, the right to portability:</Text>
                    <List>
                        <li>only applies to personal data which a person has directly given to Service Capture in electronic form; and</li>
                        <li>onward transfer will only be available where this is "technically feasible".</li>
                    </List>
                    <Text>
                        <strong>Right to Rectification:</strong> If personal data is inaccurate, out of date, or incomplete, individuals have the right to correct, update or complete that data. Collectively this is referred to as the right to rectification. Rectification may involve filling the gaps i.e. to have to have incomplete personal data completed – although this will depend on the purposes for the processing. This may involve adding a supplementary statement to the incomplete data to highlight any inaccuracy or claim thereof.
                    </Text>
                    <Text>
                        This right only applies to an individual's own personal data; a person cannot seek the rectification of another person's information.
                    </Text>
                    <Text>
                        <strong>Notification of data breaches:</strong> Upon discovery of a data breach, we will investigate the incident and report it to the UK's data protection regulator and yourself, if we deem it appropriate to do so.
                    </Text>
                    <Text>
                        <strong>Complaints:</strong> You have the right, at any time, to lodge a complaint with the Information Commissioner's Office (ICO), the UK supervisory authority for data protection issues (www.ico.org.uk). We would, however, appreciate the chance to deal with your concerns before you approach the ICO so please contact us in the first instance using the details below. Please provide us with as much information as you can about the alleged breach. We will promptly investigate your complaint and respond to you, in writing, setting out the outcome of our investigation and the steps we will take to deal with your complaint.
                    </Text>

                    <SubSubtitle>Enquiries, Reports and Escalation</SubSubtitle>
                    <Text>
                        To enquire about Service Capture's privacy policy, or to report violations of user privacy, you may contact our Data Protection Officer using the details in the Contact us section of this privacy policy.
                    </Text>
                    <Text>
                        If we fail to resolve your concern to your satisfaction, you may also contact the Information Commissioner's Office (ICO), the UK Data Protection regulator:
                    </Text>
                    <Text>
                        Information Commissioner's Office<br />
                        Wycliffe House<br />
                        Water Lane<br />
                        Wilmslow<br />
                        Cheshire<br />
                        SK9 5AF<br />
                        <br />
                        Tel: 0303 123 1113 (local rate)<br />
                        Website: <a href="https://www.ico.org.uk" target="_blank" rel="noopener noreferrer">www.ico.org.uk</a>
                    </Text>

                    <ContactBox>
                        <Subtitle style={{ marginTop: 0 }}>Contact Us</Subtitle>
                        <Text>
                            For any questions or concerns regarding your privacy, you may contact us using the following details:
                        </Text>
                        <Text>
                            <a href="mailto:contact@servicecapture.app">contact@servicecapture.app</a>
                        </Text>
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
    background: #f2f2f7;
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
    border-bottom: 2px solid #431980;
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
    border-left: 4px solid #431980;
`;
