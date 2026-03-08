// src/components/Navbar.tsx
import React from 'react'
import { Link } from 'react-router-dom'

const Navbar: React.FC = () => {
    return (
        <nav style={styles.nav}>
            {/* <div style={styles.logo}>Service Capture</div> */}
            <Link to="/" style={styles.Logolink}>Service Capture</Link>

        </nav>
    )
}

const styles: { [key: string]: React.CSSProperties } = {
    nav: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '1rem 2rem',
        borderBottom: '1px solid #ddd',
        backgroundColor: '#fff',
        position: 'sticky',
        top: 0,
        zIndex: 1000,
    },
    logo: {
        fontWeight: 700,
        fontSize: '1.25rem',
        color: '#333',
    },
    links: {
        display: 'flex',
        gap: '1rem',
    },
    link: {
        textDecoration: 'none',
        color: '#333',
        fontWeight: 500,
    },
    Logolink: {
        fontWeight: 700,
        fontSize: '1.25rem',
        color: '#333',
    }
}

export default Navbar