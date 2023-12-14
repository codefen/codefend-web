

const Footer = () => {
    return(
        <footer>
 
                <img 
                className="bkg_footer" 
                src="../assets/images/bkg-red7.png" 
                alt="background red" />
                <div className="tools">
                    <div className="footer_logo">
                        <img src="../assets/images/logo-light.svg" alt="" />
                        <ul>
                            <li><img loading="lazy" src="../assets/images/WhatsApp-logo.webp" alt="logo WhatsApp"/></li>
                            <li><img loading="lazy" src="../assets/images/Telegram-logo.webp" alt="logo Telegram"/></li>
                            <li><img loading="lazy" src="../assets/images/signal-logo.webp" alt="logo signal"/></li>
                            <li><img loading="lazy" src="../assets/images/mailfence-logo.webp" alt="logo mailfence"/></li>
                        </ul>
                    </div>
                    <div className="footer_links">
                        <ul>
                            <li>for hackers</li>
                            <li><a href="#">work remote & full time</a></li>
                            <li><a href="#">submite your vulnerability</a></li>
                            <li><a href="#">our rewards</a></li>
                        </ul>
                        <ul>
                            <li>codefend</li>
                            <li><a href="#">our sales team</a></li>
                            <li><a href="#">partnership</a></li>
                            <li><a href="#">contact us</a></li>
                        </ul>
                        <ul>
                            <li>resources</li>
                            <li><a href="#">enciclopedia</a></li>
                            <li><a href="#">cursos</a></li>
                            <li><a href="##">prescanner</a></li>
                            <li><a href="##">infosec</a></li>
                        </ul>
                    </div>
                </div>
           
        </footer>
    )
}

export default Footer