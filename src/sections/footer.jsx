

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
                        <p>Copyright © 2024 Codefend LLC
                            
                        </p>
                        {/* <ul>
                            <li><img loading="lazy" src="../assets/images/WhatsApp-logo.webp" alt="logo WhatsApp"/></li>
                            <li><img loading="lazy" src="../assets/images/Telegram-logo.webp" alt="logo Telegram"/></li>
                            <li><img loading="lazy" src="../assets/images/signal-logo.webp" alt="logo signal"/></li>
                            <li><img loading="lazy" src="../assets/images/mailfence-logo.webp" alt="logo mailfence"/></li>
                        </ul> */}
                    </div>
                    <div className="footer_links">
                        <ul>
                            <li>Solutions</li>
                            <li><a href="/services">services</a></li>
                            <li><a href="/compliance">compliance</a></li>
                            <li><a href="/industries">industries</a></li>
                        </ul>                        
                        <ul>
                            <li>Product</li>
                            <li><a href="/software">our software</a></li>
                            <li><a href="https://panel.codefend.com/auth/signup" target="_blank">create account</a></li>
                            <li><a href="https://panel.codefend.com/auth/signin" target="_blank">sign in</a></li>
                        </ul>
                        <ul>
                            <li>Company</li>
                            <li><a href="mailto:hello@codefend.com">contact us</a></li>
                            <li><a href="https://docs.google.com/document/d/1KZRrfHR4hIy2YyKkQmPK7Azp-zkbk7mYhCM6xKlVsoE/edit#heading=h.otbipzz762sq" target="_blank">terms of use</a></li>
                            <li><a href="https://docs.google.com/document/d/1e0Th-KsMRn_DO8uJ14WZkAqJK7DiUFvrLkQ2yol6E_o/edit?usp=sharing" target="_blank">privacy policy</a></li>                            
                        </ul>
                    </div>
                </div>
           
        </footer>
    )
}

export default Footer