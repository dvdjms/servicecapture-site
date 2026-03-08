// src/components/Footer.tsx
import React from 'react'
import { Link } from 'react-router-dom'

const Footer: React.FC = () => {
  return (
    <footer style={styles.footer}>
        <div>&copy; {new Date().getFullYear()} Service Capture</div>
        <div style={styles.links}>
            <Link to="/privacy" style={styles.link}>Privacy</Link>
            <Link to="/terms" style={styles.link}>Terms</Link>
            <Link to="/cookies" style={styles.link}>Cookies</Link>
            <Link to="/contact" style={styles.link}>Contact</Link>
            {/* <a href="mailto:hello@servicecapture.app" style={styles.link}>Contact</a> */}
        </div>
    </footer>
  )
}

const styles: { [key: string]: React.CSSProperties } = {
    footer: {
        borderTop: '1px solid #ddd',
        padding: '1rem 2rem',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: '#f9f9f9',
        fontSize: '0.875rem',
        marginTop: '2rem',
    },
    links: {
        display: 'flex',
        gap: '1rem',
    },
    link: {
        textDecoration: 'none',
        color: '#333',
    },
}

export default Footer