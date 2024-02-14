

const Footer = () => {
    return(
        <footer>
 
                <img 
                className="bkg_footer" 
                src="../assets/images/bkg-red7.png" 
                alt="background red" />
                <div className="tools">
                    <div className="footer_logo">
                        <a href="/#hero">
                            <img src="../assets/images/logo-light.svg" alt="" />
                        </a>
                        <ul style={{display:'none'}}>
                            <li><img loading="lazy" src="../assets/images/WhatsApp-logo.webp" alt="logo WhatsApp"/></li>
                            <li><img loading="lazy" src="../assets/images/Telegram-logo.webp" alt="logo Telegram"/></li>
                            <li><img loading="lazy" src="../assets/images/signal-logo.webp" alt="logo signal"/></li>
                            <li><img loading="lazy" src="../assets/images/mailfence-logo.webp" alt="logo mailfence"/></li>
                        </ul>
                    </div>
                    <div className="footer_links">
                        <ul>
                            <li>for hackers</li>
                            <li><a className="line" href="#">work remote & full time</a></li>
                            <li><a className="line" href="#">submite your vulnerability</a></li>
                            <li><a className="line" href="#">our rewards</a></li>
                        </ul>
                        <ul>
                            <li>codefend</li>
                            <li><a className="line" href="#">our sales team</a></li>
                            <li><a href="mailto:business@codefend.com">partnership</a></li>
                            <li><a href="mailto:hello@codefend.com">contact us</a></li>
                            <li><a href="https://docs.google.com/document/d/1KZRrfHR4hIy2YyKkQmPK7Azp-zkbk7mYhCM6xKlVsoE/edit#heading=h.otbipzz762sq">Terms of use</a></li>
                            <li><a href="https://docs.google.com/document/d/1e0Th-KsMRn_DO8uJ14WZkAqJK7DiUFvrLkQ2yol6E_o/edit?usp=sharing">Privacy policy</a></li>
                        </ul>
                        <ul>
                            <li>resources</li>
                            <li><a className="line" href="#">enciclopedia</a></li>
                            <li><a className="line" href="#">cursos</a></li>
                            <li><a className="line" href="##">prescanner</a></li>
                            <li><a className="line" href="##">infosec</a></li>
                        </ul>
                    </div>
                </div>
           
        </footer>
    )
}

export default Footer