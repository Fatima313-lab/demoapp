import React from "react";
import { Link } from "react-router-dom";
import { SERVICES } from "../data/ServicesData";
import "./RelatedSolutions.css";

const RelatedSolutions = ({ category }) => {
  const filteredSlides = SERVICES.filter(service =>
    service.categories.includes(category)
  );

  return (
    <section className="csd-custom-grid-section">
      <div className="container">

        <div className="section-title text-center">
          <p className="section-eyebrow">Industry Specifics</p>
          <h2 className="text-white">
            Explore Our <span>Dedicated Expertise</span>
          </h2>
        </div>

        <div className="csd-carousel-wrapper">
          <div className="csd-horizontal-scroll csd-auto-scroll">
            {filteredSlides.map(service => (
              <Link
                to={service.link}
                key={service.id}
                className="csd-custom-card-wrapper"
              >
                <div className="csd-custom-card">
                  <div className="card-glass-effect"></div>

                  <div className="card-image-circle">
                    <img
                      src={service.image}
                      alt={service.title}
                      loading="lazy"
                    />
                  </div>

                  <h3>{service.title}</h3>
                  <p>{service.desc}</p>

                  <div className="card-footer-link">
                    Learn More <span>→</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default RelatedSolutions