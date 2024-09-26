import React, { useState, useEffect } from 'react';
import { Fab } from '@mui/material';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';

export default function ScrollToTop() {
    const [visible, setVisible] = useState(false);

    const handleScroll = () => {
        const currentScrollY = window.scrollY;
        setVisible(currentScrollY > 300); // Show button after scrolling down 300px
    };

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <Fab
            onClick={scrollToTop}
            color="primary"
            aria-label="scroll to top"
            sx={{
                position: 'fixed',
                bottom: 72,
                right: 32,
                display: visible ? "flex" : "none",
                justifyContent: "center",
                alignItems: "center",
                "&:hover": {
                    bgcolor: "primary"
                }
            }}
        >
            <ArrowUpwardIcon />
        </Fab>
    );
};