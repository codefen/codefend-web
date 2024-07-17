import { useEffect, useRef, useState } from "react";
import { useLocation } from "react-router-dom";
import { countries, topCountriesOnList } from '../data/countries.js';

const FreeTrial = () => {
  const img1 = useRef(null);
  const img2 = useRef(null);
  const [scrolly, setScrolly] = useState(0);
  const [currentPage, setCurrentPage] = useState(0);
  const location = useLocation()

  useEffect(() => {
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
  }, [location.pathname])

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

  const handleForm = () => {

    event.preventDefault(); // Evita el envío predeterminado del formulario

    // Obtener datos del formulario
    var lead_fname = document.querySelector("#form-field-lead_fname").value;
    var lead_lname = document.querySelector("#form-field-lead_lname").value;
    var lead_role = document.querySelector("#form-field-lead_role").value;
    var lead_email = document.querySelector("#form-field-lead_email").value;
    var lead_phone = document.querySelector("#form-field-lead_phone").value;
    var company_name = document.querySelector("#form-field-company_name").value;
    var company_web = document.querySelector("#form-field-company_web").value;
    var company_size = document.querySelector("#form-field-company_size").value;
    var company_area = document.querySelector("#form-field-company_area").value;
    var idiom = document.querySelector("#form-field-idiom").value;

    // Construir la URL con los datos del formulario
    var apiUrl = "https://kundalini.codefend.com/kundalini/index.php?model=users%2Fnew" +
      "&lead_fname=" + encodeURIComponent(lead_fname) +
      "&lead_lname=" + encodeURIComponent(lead_lname) +
      "&lead_role=" + encodeURIComponent(lead_role) +
      "&lead_email=" + encodeURIComponent(lead_email) +
      "&lead_phone=" + encodeURIComponent(lead_phone) +
      "&company_name=" + encodeURIComponent(company_name) +
      "&company_web=" + encodeURIComponent(company_web) +
      "&company_size=" + encodeURIComponent(company_size) +
      "&company_area=" + encodeURIComponent(company_area) +
      "&reseller_name=" + encodeURIComponent(reseller)
      "&reseller_id=77" +
      "&idiom=" + encodeURIComponent(idiom) +
      "&phase=1"

    // Obtener los elementos por su ID
    const messageSuccess = document.getElementById('messageSuccess');
    const messageDanger = document.getElementById('messageDanger');
    messageSuccess.style.display = 'none';
    messageDanger.style.display = 'none';
    // Realizar la solicitud POST
    fetch(apiUrl, { method: "POST" })
      .then(response => response.json())
      .then(data => {
        console.log("Respuesta de la API:", data);
        messageSuccess.style.display = 'block';
      })
      .catch(error => {
        console.error("Error al realizar la solicitud:", error);
        messageDanger.style.display = 'block';
      });
  }

  return (
    <section className="free-trial">
      <div className="container">
        <div className="form-contain">
          <div className="title">
            <h1>start now!</h1>
            {/* <p className="rectangle">create a user and see what we can do, at no cost</p> */}
            <b>create a user and pentest your resources</b>
            <p>
              You will receive an email with the necessary information to
              confirm your user and access the application. Once inside, you
              will have access to all the basic function, and if you wish, you
              can hire one of our services.
            </p>
          </div>

          <form>
            <div className="input-group">
              <input
                type="text"
                name="first_name"
                placeholder="First name"
                autoComplete="given-name"
                required
              />
            </div>
            <div className="input-group">
              <input
                type="text"
                name="last_name"
                autoComplete="family-name"
                placeholder="Last name"
                required
              />
            </div>
            <div className="input-group">
              <input
                type="email"
                name="email_address"
                autoComplete="email"
                placeholder="Email"
                required
              />
            </div>
            <div className="input-group">
              <input
                type="tel"
                name="phone_number"
                placeholder="Phone number"
                required
              />
            </div>
            <div className="input-group">
              <input
                type="text"
                name="company_name"
                placeholder="Company Name"
                required
              />
            </div>
            <div className="input-group">
              <input
                type="text"
                name="company_website"
                placeholder="example.com"
                size="60"
                required
              />
            </div>
            <div className="input-group">
              <select className="log-inputs log-text" name="company_size" required>
                <option value="" disabled hidden>
                  Select Company Size
                </option>
                <option value="1-10">1-10</option>
                <option value="11-50">11-50</option>
                <option value="51-200">51-200</option>
                <option value="201-500">201-500</option>
                <option value=">500">&gt;500</option>
              </select>
            </div>
            <div className="input-group">
              <select id="social-data" className="log-inputs log-text" required>
                <option value="" disabled hidden defaultValue>
                  role
                </option>
                <option value="admin">administrative</option>
                <option value="human">human resources</option>
                <option value="info">information tech</option>
                <option value="ads">marketing</option>
                <option value="sales">sales</option>
                <option value="finance">finance</option>
                <option value="cs">customer service</option>
                <option value="prod">production & ops</option>
                <option value="plan">strategy & planning</option>
                <option value="law">legal affairs</option>
              </select>
            </div>

            <div className="input-group">
              <select id="country" className="log-inputs log-text" required>
                {countries.map((option, index) => (
                  <option
                    key={index}
                    value={option.value}
                    hidden={option?.hidden}>
                    {option.label}
                  </option>
                ))}
              </select>
            </div>

            {/* <div className="extra-group">
              <span className="link link-color">
                I have read and accept the{' '}
                <a href="/help/security-and-privacy-policy" target="_blank">
                  <u>security-and-privacy-policy</u>
                </a>{' '}
                and{' '}
                <a href="/help/terms-and-condition" target="_blank">
                  <u>Terms of Use.</u>
                </a>
              </span>
            </div> */}
            <div className="extra-group">
              <button type="submit">
                submit
              </button>

            </div>
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



