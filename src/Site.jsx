import { useState, useEffect } from "react";
import { easeOut, motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import './Site.css' 

function Site() {

       useEffect(() => {
        window.scrollTo(0, 0);
    }, []);


    const [isOpen, setIsOpen] = useState(false);

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

    return(




        <>

             <div className="bgscm">
            <h1 className="titlemo">Oprosti!</h1>
            <h1 className="titlem">Sajt nema ugradjenu podrsku <br /> za vece tablete ili laptopove i PC-jeve. </h1>
        </div>


        <div className="sitecontainer">

        <div className="navbar">
            <div className="logo">
                <p onClick={() => handleNavClick('pocetna')} className="logotxt"> <span style={{color: '#e41d52'}}>dj</span> peca</p>

                

            </div>

            <ul className="desktop-menu">
                <li onClick={() => scrollToSection('pocetna')}>Pocetna</li>
                <li onClick={() => scrollToSection('usluge')} >Usluge</li>
                <li onClick={() => scrollToSection('kontakt')}>Kontakt</li>
            </ul>

            <div className="hamburger" onClick={() => setIsOpen(!isOpen)}>
                <motion.span animate={{ rotate: isOpen ? 45 : 0, y: isOpen ? 8 : 0 }} />
                <motion.span animate={{ opacity: isOpen ? 0 : 1 }} />
                <motion.span animate={{ rotate: isOpen ? -45 : 0, y: isOpen ? -8 : 0 }} />
            </div>

            <AnimatePresence>
                {isOpen && (
                    <motion.div 
                        className="mobile-menu"
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.3 }}
                    >
                        <ul>
                            <li onClick={() => handleNavClick('pocetna')}>Pocetna</li>
                            <li onClick={() => handleNavClick('usluge')}>Usluge</li>
                            <li onClick={() => handleNavClick('moj-rad')}>Moj Rad</li>
                            <li onClick={() => handleNavClick('kontakt')}>Kontakt</li>
                            <li><Link to="/o-meni" style={{ color: 'inherit', textDecoration: 'none' }}>O Meni</Link></li>
                        </ul>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>

            <div className="all">

                <div className="head" id="pocetna">

                <motion.h1 
                className="title"
                initial={{opacity: 0}}
                animate={{opacity: 1}}
                transition={{duration: 1.1}}
                > <span style={{ color: '#e41d52'}}>dj</span> peca</motion.h1>
                <p className="subtxt">Spreman da dignem atmosferu <br /> na sledeci nivo!</p>

                <div className="btnw">
                    <motion.button 
                    onClick={() => scrollToSection('moj-rad')}
                    className="btn"
                    whileTap={{ scale: 0.8, transition: { duration: 0.1, delay: 0}}}
                       initial= {{opacity: 0, scale: 0}}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8, type: 'spring'}}
                        
                    //     viewport={{ once: true}}

                    >Moj Rad</motion.button>
                    <motion.button 
                    onClick={() => scrollToSection('kontakt')}
                    className="btn"
                   whileTap={{ scale: 0.8, transition: { duration: 0.1, delay: 0}}}
                       initial= {{opacity: 0, scale: 0}}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8, type: 'spring'}}
                        

                    >Moj Kontakt</motion.button>
                </div>


                </div>
                <div id="usluge" className="mid">
                    <h3 className="subtitle"> Moje <span style={{color: '#e41d52'}}>Usluge</span> </h3>
                    <motion.span 
                    className="line"
                    initial={{scaleX: 0}}
                    whileInView={{scaleX: 1}}
                    transition={{duration: 0.8}}
                    viewport={{ once: true }}
                    ></motion.span>

                    <div className="boxw">


                        <motion.div 
                        className="box" id="boxone"
                        initial= {{opacity: 0, scale: 0}}
                        whileInView={{ opacity: 1, scale: 1}}
                        transition={{ duration: 0.8, ease: 'ease', type: 'spring'}}
                        viewport={{ once: true, amount: 0.2}}
                        
                        >
                            <p id="boxtitone" className="boxtitle">Privatne <br /> Žurke & Rođendan<span style={{ color: '#e41d52'}}>i</span> </p>
                            <p className="subtxtone">Nezaboravna atmosfera skrojena po tvojoj meri. Od tehno i house ritmova do najnovijih komercijalnih i pop-folk hitova koji drže podijum punim tokom cele noći.</p>
                        </motion.div>


                        <motion.div 
                        className="box" id="boxtwo"
                         initial= {{opacity: 0, scale: 0}}
                        whileInView={{ opacity: 1, scale: 1}}
                        transition={{ duration: 0.8, ease: 'ease', type: 'spring'}}
                        viewport={{ once: true}}
                        
                        >
                             <p id="boxtittwo" className="boxtitle">Klubovi <br />  <span style={{ color: '#e41d52'}}>&</span> Eventi</p>
                             <p id="subtxttwo">Energični i precizno miksovani setovi prilagođeni klupskoj publici. Tranzicije bez greške i dinamika koja održava visoku energiju u prostoru.</p>
                        </motion.div>


                        <motion.div 
                        className="box" id="boxthree"
                         initial= {{opacity: 0, scale: 0}}
                        whileInView={{ opacity: 1, scale: 1}}
                        transition={{ duration: 0.8, ease: 'ease', type: 'spring'}}
                        viewport={{ once: true}}
                        >
                             <p id="boxtitthree" className="boxtitle"> <span style={{color: '#e41d52'}}>Proslave</span> & Posebne Prilike</p>
                             <p id="subtxtthree">Profesionalno ozvučenje i rasveta u kombinaciji sa pažljivo odabranom listom pesama za maturske večeri, proslave i specijalne događaje.</p>
                        </motion.div>

                    </div>

                </div>

                <div id="moj-rad"></div>
                <div className="mr">
                    <p className="subtitmr"><span style={{color: '#e41d52'}}>M</span>oj rad</p>
                            <motion.span 
                    className="line"
                    initial={{scaleX: 0}}
                    whileInView={{scaleX: 1}}
                    transition={{duration: 0.8}}
                    viewport={{ once: true }}
                    ></motion.span>


                    <div className="boxw">


                        <motion.div 
                        className="box" id="boxmrone"
                        initial= {{opacity: 0, scale: 0}}
                        whileInView={{ opacity: 1, scale: 1}}
                        transition={{ duration: 0.8, ease: 'ease', type: 'spring'}}
                        viewport={{ once: true}}
                        
                        >
                            <p id="boxmrtitone" className="boxtitle">O Mix<span style={{ color: '#e41d52'}}>-</span>evima</p>
                            <p>Svaki set je jedinstveno iskustvo. Kombinujem brze tranzicije, ekskluzivne edite i najtraženije trake kako bi provod bio na maksimalnom nivou od prve do poslednje pesme.</p>
                        </motion.div>


                        <motion.div 
                        className="box" id="boxmrtwo"
                         initial= {{opacity: 0, scale: 0}}
                        whileInView={{ opacity: 1, scale: 1}}
                        transition={{ duration: 0.8, ease: 'ease', type: 'spring'}}
                        viewport={{ once: true}}
                        
                        >
                             <p id="boxmrtittwo" className="boxtitle">Inspir<span style={{ color: '#e41d52'}}>a</span>cija</p>
                             <p>Zvuk gradskih klubova, klupske žurke i energija publike na podijumu. Pratimo savremene trendove svetske i domaće scene i pretvaramo ih u vrhunsku žurku.</p>

                        </motion.div>


                        <motion.div 
                        className="box" id="boxmrthree"
                         initial= {{opacity: 0, scale: 0}}
                        whileInView={{ opacity: 1, scale: 1}}
                        transition={{ duration: 0.8, ease: 'ease', type: 'spring'}}
                        viewport={{ once: true}}
                        >
                             <p id="boxmrtittwo" className="boxtitle"> <span style={{ color: '#e41d52'}}>O</span>prema</p>
                             <p>Rad na profesionalnim DJ kontrolerima i miksetama poslednje generacije, što garantuje besprekoran kvalitet zvuka i pouzdanost na svakom nastupu.</p>
                        </motion.div>

                    </div>

                </div>
                <div id="kontakt"></div>
                <div className="kon">
                    <p className="subtitkon">Kont<span style={{color: '#e41d52'}}>a</span>kt</p>
                               <motion.span 
                    className="line"
                    initial={{scaleX: 0}}
                    whileInView={{scaleX: 1}}
                    transition={{duration: 0.8}}
                    viewport={{ once: true }}
                    ></motion.span>


                    <div className="kon-icons">
                    {/* <p className="subtxtkon">Poseti moj instagram da zakazes termnin!</p> */}

                    <div className="ictxt">
                    <a href="https://www.instagram.com/dj_pecaa/">
                    <motion.img 
                    whileTap={{ scale: 0.8 }}
                    initial={{opacity: 0}}
                whileInView={{opacity: 1}}
                transition={{duration: 1.1, amount: 0.6}}
                    src="/inst.svg" alt="" width='60px' />
                    </a>

                    <a style={{ textDecoration: 'none'}} href="https://www.instagram.com/dj_pecaa/">

                    <motion.p 
                    className="tag"
                      initial={{opacity: 0}}
                whileInView={{opacity: 1}}
                transition={{duration: 1.1, amount: 0.6}}
                    >@dj peca</motion.p>

                    </a>





                    </div>


                    </div>


                    <div className="uslu-m">
                        <p className="subtituslu">Mi<span style={{color: '#e41d52'}}>s</span>ljenja</p>
                    <motion.span 
                    className="line"
                    initial={{scaleX: 0}}
                    whileInView={{scaleX: 1}}
                    transition={{duration: 0.8}}
                    viewport={{ once: true }}
                    ></motion.span>


                        <div className="rings-page-wrapper">
                            <div className="rings-card">

                                <svg width='70' heigth= '70' style={{overflow: 'visible'}} >
                                <motion.circle viewport={{once: true}} initial={{opacity: 0}} whileInView={{opacity: 0.2}} transition={{duration: 1}} cx='50%' cy='50%' r='80%' stroke="#FF4D4D" strokeWidth='16' opacity={0.2} fill="none" />
                                <motion.circle 
                                cx='50%' cy='50%' r='80%' 
                                stroke="#FF4D4D" 
                                strokeWidth='16' fill="none"
                                style={{rotate: -90, transformOrigin: 'center'}}
                                strokeLinecap='round'
                                initial={{pathLength: 0}}
                                whileInView={{ pathLength: 80 / 100}}
                                transition={{ duration: 1.4, ease: easeOut}}
                                viewport={{once: true, amount: 0.6}}



                                >

                                </motion.circle>

                                <motion.circle viewport={{once: true}} initial={{opacity: 0}} whileInView={{opacity: 0.2}} transition={{duration: 1, delay: 0.2}} cx='50%' cy='50%' r='60%' stroke="#ea4c1c" strokeWidth='16' opacity={0.2} fill="none" />
                                <motion.circle 
                                cx='50%' cy='50%' r='60%' 
                                stroke="#ea4c1c" 
                                strokeWidth='16' fill="none"
                                style={{rotate: -90, transformOrigin: 'center'}}
                                strokeLinecap='round'
                                initial={{pathLength: 0}}
                                whileInView={{ pathLength: 80 / 100}}
                                transition={{ duration: 0.8, ease: easeOut}}
                                viewport={{once: true, amount: 0.6}}



                                >

                                </motion.circle>
                                
                                <motion.circle viewport={{once: true}} initial={{opacity: 0}} whileInView={{opacity: 0.2}} transition={{duration: 1, delay: 0.3}} cx='50%' cy='50%' r='40%' stroke="#ea1c1c" strokeWidth='16' opacity={0.2} fill="none" />
                                <motion.circle 
                                cx='50%' cy='50%' r='40%' 
                                stroke="#ea1c1c" 
                                strokeWidth='16' fill="none"
                                style={{rotate: -90, transformOrigin: 'center'}}
                                strokeLinecap='round'
                                initial={{pathLength: 0}}
                                whileInView={{ pathLength: 0 / 100}}
                                transition={{ duration: 1, ease: easeOut}}
                                viewport={{once: true, amount: 0.6}}



                                >

                                </motion.circle>
                                </svg>
                            </div>

                            <div className="datatxt">

                                <div className="dataone">
                                <p className="labeltxt">Ljudi Usluzeno</p>
                                <p style={{color: '#FF4D4D'}} className="numone">80 / 100</p>
                                </div>

                                <div className="datatwo">
                                <p className="labeltxt">Ljudi Zadovoljno</p>
                                <p style={{ color: '#ea4c1c'}} className="numone">80 / 100</p>
                                </div>

                                <div className="datathree">
                                <p className="labeltxt">Ljudi Nezadovoljno</p>
                                <p style={{ color: '#ea1c1c'}} className="numone">0 / 100</p>
                                </div>



                            </div>


                        </div>
                    </div>

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


        </>
    )

}

export default Site