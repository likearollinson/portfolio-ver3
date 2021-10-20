import React from 'react';
import github from '../assets/images/github.png';
import linkedin from '../assets/images/linkedin.png';
import email from '../assets/images/email.png';

const styles = {
    footer: {
        padding: '20px',
        position: 'fixed',
        bottom: '0',
        height: '75px',
        display: 'flex',
        justifyContent: 'center'
    },
    github: {
        height: '100%'
    },
    linkedin: {
        height: '100%'
    },
    email: {
        height: '95%',
        marginLeft: '5px'
    }
}

function Footer() {
    return (
        <div style={styles.footer}>
            <img src={github} alt="github logo" style={styles.github} />
            <img src={linkedin} alt="github logo" style={styles.linkedin} />
            <img src={email} alt="github logo" style={styles.email} />
        </div>
    )
}

export default Footer;