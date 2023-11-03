const FreeTrial = () =>{
    return(
      <section className="free-trial">
        <div className="container">
          <div className="form-contain">
            <div>
              <h1>free trial</h1>

              <p><b>create a user and see what we can do, at no cost</b><br />
                You will receive an email with the necessary information to confirm your user
                and access the application. Once inside, you will have access to all the basic function,
                and if you wish, you can hire one of our services.
              </p>
            </div>
            <form>
              <input placeholder="we need continious serveillance" type="text" />
              <input placeholder="first name" type="text" />
              <input placeholder="last name" type="text" />
              <input placeholder="role in company" type="email" />
              <input placeholder="work email" type="number" />
              <input placeholder="mobile phone number" type="text" />
              <input placeholder="company name" type="text" />
              <input placeholder="company website" type="text" />
              <input placeholder="company size" type="text" />
              <input placeholder="company industry" type="text" />
              <input placeholder="saudi arabia" type="text" />
              <a href="#">i consent i've read and i accept the terms and conditions</a>
              <button type="submit">ENTER</button>
            </form>
          </div>
          <div className="img-contain">
            <img src="src/assets/images/front.webp" alt="d" />
            <img src="src/assets/images/back.webp" alt="d" />
          </div>
          </div>
      </section>
    )
}

export default FreeTrial