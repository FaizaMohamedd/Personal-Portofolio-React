export default function HeroSection() {
    return (
      <section id="heroSection" className="hero--section">
        <div className="hero--section--content--box">
          <div className="hero--section--content">
           
           <h1 className="hero--section--sub--title">Hi I'm Faiza</h1>
            <h3 className="hero--section--title">
              <span className="hero--section-title--color">Web  Developer</span>{" "}
             
            </h3>
            <p className="hero--section-description">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              <br /> Dolorum, quas. Amet soluta assumenda cum?
            </p>
          </div>
          <button className="btn btn-primary">Get In Touch</button>
        </div>
        <div className="hero--section--img">
          <img src="./img/hero-section.jpg" alt="Hero Section" />
        </div>
      </section>
    );
  }
  