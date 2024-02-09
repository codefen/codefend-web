import { useEffect, useRef, useState } from "react";
import { useLocation } from "react-router-dom";

const FreeTrial = () => {
  const img1 = useRef(null);
  const img2 = useRef(null);
  const [scrolly, setScrolly] = useState(0);
  const [currentPage, setCurrentPage] = useState(0);
  const location = useLocation()

  useEffect(()=>{
    if (location.pathname === '/') {
      setCurrentPage(8700);
    } else if (location.pathname === '/software') {
      setCurrentPage(4700);
    } else if (location.pathname === '/industries') {
      setCurrentPage(2700);
      
    } else if (location.pathname === '/services') {
      setCurrentPage(3700);
      
    } else if (location.pathname === '/compliance') {
      setCurrentPage(2700);
      
    } else if (location.pathname === '/partners') {
      setCurrentPage(3000);
      
    } else if (location.pathname === '/team') {
      setCurrentPage(1700);
      
    } 
  },[location.pathname])
  
  useEffect(() => {
    const handleScroll = () => {
      setScrolly(window.scrollY);
      let round = currentPage;
      if (scrolly > round) {
        img1.current.style.top = (scrolly - round) / 5 + "px";
        img2.current.style.bottom = (scrolly - round) / 5 + "px";
      } else {
        img1.current.style.top = "0px";
        img2.current.style.bottom = "0px";
      }
    };

    const handleResize = () => {
      if (window.innerWidth <= 820) {
        window.removeEventListener("scroll", handleScroll);
      } else {
        window.addEventListener("scroll", handleScroll);
      }
    };

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleResize);
  }, [scrolly]);

  return (
    <section className="free-trial">
      <div className="container">
        <div className="form-contain">
          <div className="title">
            <h1>free demo</h1>
            {/* <p className="rectangle">create a user and see what we can do, at no cost</p> */}
            <b>create a user and see what we can do, at no cost</b>
            <p>
              You will receive an email with the necessary information to
              confirm your user and access the application. Once inside, you
              will have access to all the basic function, and if you wish, you
              can hire one of our services.
            </p>
          </div>
          <form>
            <input placeholder="we need continious serveillance" type="text" />
            <input placeholder="first name" type="text" />
            <input placeholder="last name" type="text" />
            <input placeholder="role in company" type="text" />
            <input placeholder="work email" type="email" />
            <input placeholder="mobile phone number" type="text" />
            <input placeholder="company name" type="text" />
            <input placeholder="company website" type="text" />
            <input placeholder="company size" type="text" />
            <input placeholder="company industry" type="text" />
            <input placeholder="saudi arabia" type="text" />
            <p>
              I consent I've read and I accept the{" "}
              <a href="">terms and conditions</a>
            </p>
            <button type="submit">show me what you can</button>
          </form>
        </div>
        <div className="img-contain">
          <img ref={img1} src="../assets/images/front.webp" alt="d" />
          <img ref={img2} src="../assets/images/back.webp" alt="d" />
        </div>
      </div>
    </section>
  );
};

export default FreeTrial;
