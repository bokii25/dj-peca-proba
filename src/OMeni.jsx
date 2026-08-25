import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import {  Link } from 'react-router-dom';
import './OMeni.css';

function OMeni() {
    const [isOpen, setIsOpen] = useState(false);


    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const scrollToSection = (id) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    const handleNavClick = (id) => {
        setIsOpen(false);
        scrollToSection(id);
    };

    return (
        <div className="sitecontainer">
            <div className="navbar">
                <div className="logo">

                    <Link to='/'  >

                   <img className="arrow" src="./arrow.svg" alt="" />

                    </Link>


                </div>

                <ul className="desktop-menu">
                    <li onClick={() => scrollToSection('pocetna')}>Pocetna</li>
                    <li onClick={() => scrollToSection('usluge')}>Usluge</li>
                    <li onClick={() => scrollToSection('kontakt')}>Kontakt</li>
                </ul>

               

               
            </div>

          

            <div id="all">

                <div id="head">
                    <motion.p 
                    id="title"
                    initial={{opacity: 0}}
                animate={{opacity: 1}}
                transition={{duration: 1.1}}
                    >O <span style={{ color: '#e41d52'}}>Meni</span></motion.p>
                    <p id="subtxt">Muzika za mene nije samo posao, već strast i energija koju delim sa publikom na svakom nastupu. Moj cilj je jednostavan — napraviti atmosferu koja se pamti.</p>

                </div>

                <motion.span 
                id="line"
                  className="line"
                    initial={{scaleX: 0}}
                    whileInView={{scaleX: 1}}
                    transition={{duration: 0.8}}
                    viewport={{ once: true }}
                ></motion.span>

                <div className="ms">
                   <div className="boxw">


                        <motion.div 
                        className="box" id="boxmrone"
                        initial= {{opacity: 0, scale: 0}}
                        whileInView={{ opacity: 1, scale: 1}}
                        transition={{ duration: 0.8, ease: 'ease', type: 'spring'}}
                        viewport={{ once: true}}
                        
                        >
                            <p id="boxmrtitone" className="boxtitle"> Muzicki <span style={{ color: '#e41d52'}}>S</span>til</p>
                            <p>Specijalizovan za dinamične mikseve — od Commercial i House ritmova do Pop-Folk hitova koji drže podijum punim tokom cele noći.</p>
                        </motion.div>


                        <motion.div 
                        className="box" id="boxmrtwo"
                         initial= {{opacity: 0, scale: 0}}
                        whileInView={{ opacity: 1, scale: 1}}
                        transition={{ duration: 0.8, ease: 'ease', type: 'spring'}}
                        viewport={{ once: true}}
                        
                        >
                             <motion.p id="boxmrtittwo" className="boxtitle">Nastupi <span style={{ color: '#e41d52'}}>&</span>Eventi</motion.p>
                             <p>Zvuk gradskih klubova, klupske žurke i energija publike na podijumu. Pratimo savremene trendove svetske i domaće scene i pretvaramo ih u vrhunsku žurku.</p>

                        </motion.div>





                       

                    </div>

                    <div className="isk">
                        <motion.p 
                        className="godi"
                        initial={{ opacity: 0}}
                        whileInView={{ opacity: 1}}
                        transition={{ duration: 1.1}}
                        viewport={{ once: true}}

                        > <span style={{ color: '#e41d52'}} >5+</span> <br /> Godina <br /> Iskustva</motion.p>
                        <motion.p 
                        className="godi"
                            initial={{ opacity: 0}}
                        whileInView={{ opacity: 1}}
                        transition={{ duration: 1.1, delay: 0.2}}
                        viewport={{ once: true}}

                        ><span style={{ color: '#e41d52'}}>100+</span> <br /> Uspesnih <br /> Zurki</motion.p>
                        <motion.p 
                        className="godi"
                            initial={{ opacity: 0}}
                        whileInView={{ opacity: 1}}
                        transition={{ duration: 1.1, delay: 0.3}}
                        viewport={{ once: true}}
                        ><span style={{ color: '#e41d52'}}>100%</span> <br /> Posvecenost <br /> Radu</motion.p>
                    </div>
                </div>

                <div className="buttonw">

                    <Link to= '/'>

                    <motion.button 
                    id="btn"
                      whileTap={{ scale: 0.8, transition: { duration: 0.1, delay: 0}}}
                       initial= {{opacity: 0, scale: 0}}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8, type: 'spring'}}

                    ><span style={{ color: '#fff'}}>Spreman</span> Za <span style={{ color: '#e41d52'}}>Zurku?</span></motion.button>
                    </Link>





                </div>



                <footer className="footer">
    <div className="footer-content">
        <div className="footer-brand">
            <p className="titlefoot"><span style={{ color: '#e41d52' }}>dj</span> peca</p>
            <p className="footer-desc">Zadužen za vrhunski provod i nezaboravnu atmosferu na tvojim žurkama.</p>
        </div>

        <div className="footer-links">
            <p className="footer-heading">Navigacija</p>
            <ul>
                <li onClick={() => scrollToSection('pocetna')}>Početna</li>
                <li onClick={() => scrollToSection('usluge')}>Usluge</li>
                <li onClick={() => scrollToSection('moj-rad')}>Moj Rad</li>
                <li onClick={() => scrollToSection('kontakt')}>Kontakt</li>
            </ul>
        </div>

        <div className="footer-socials">
            <p className="footer-heading">Zaprati me</p>
            <div className="social-links">
                <a href="https://www.instagram.com/dj_pecaa/" target="_blank" rel="noreferrer">Instagram</a>
                <a href="#" target="_blank" rel="noreferrer">SoundCloud</a>
                <a href="#" target="_blank" rel="noreferrer">YouTube</a>
            </div>
        </div>
    </div>

    <div className="footer-bottom">
        <span className="footer-line"></span>
        <p>&copy; {new Date().getFullYear()} DJ Peca. Sva prava zadržana.</p>
    </div>
</footer>


            </div>
        </div>
    );
}

export default OMeni;