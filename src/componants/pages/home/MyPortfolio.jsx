import React from "react";

export default function MyPortfolio() {
  const portfolioData = [
    {
      id: "1",
      src: "./img/1.png",
      title: "HTML, css",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspenmdisse varius eim in eros elementum tristique"
    },
    {
      id: "2",
      src: "./img/2.jpg",
      title: "Calculator-app",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspenmdisse varius eim in eros elementum tristique",
     
    },
    {
      id: "3",
      src: "./img/3.jpeg",
      title: "protfolio app",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspenmdisse varius eim in eros elementum tristique",
     
    },
  ];

  return (
    <section className="portfolio--section" id="MyPortfolio">
      <div className="portfolio--container-box">
        <div className="portfolio--container">
          
          <h2 className="section--heading">My Portfolio</h2>
        </div>
        <div>
        
        </div>
      </div>
      <div className="portfolio--section--container">
        {portfolioData.map((item) => (
          <div key={item.id} className="portfolio--section--card">
            <div className="portfolio--section--img">
              <img src={item.src} alt="Placeholder" />
            </div>
            <div className="portfolio--section--card--content">
              <div>
                <h3 className="portfolio--section--title">{item.title}</h3>
                <p className="text-md">{item.description}</p>
              </div>
              <p className="text-sm portfolio--link">
                {item.link}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 20 19"
                  fill="none"
                >
                  {/* SVG path code */}
                </svg>
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}