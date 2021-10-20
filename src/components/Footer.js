import React from 'react';
import github from '../assets/images/github.png';
const styles = {
    github: {
        width: '75px'
    }
}

function Footer() {
    return (
        <div>
            <img src={github} alt="github logo" style={styles.github} />
        </div>
    )
}

export default Footer;