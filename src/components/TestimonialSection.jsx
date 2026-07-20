import React, { useEffect, useRef, useState } from "react";
import { Star } from "lucide-react";
import "./TestimonialSection.css";
import khalidImg from "../assets/khalid A.webp";
import muhammadImg from "../assets/Muhammad I.webp";
import fernandoImg from "../assets/fernandoM.webp";
import neil from "../assets/NeilP.webp";
/* =======================
   Marquee Component
======================= */
const Marquee = ({
  children,
  direction = "left",
  speed = 40,
  pauseOnHover = true,
}) => {
  const [width, setWidth] = useState(0);
  const contentRef = useRef(null);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (contentRef.current) {
      setWidth(contentRef.current.scrollWidth);
    }
  }, [children]);

  return (
    <div
      className="marquee-wrapper"
      onMouseEnter={() => pauseOnHover && setPaused(true)}
      onMouseLeave={() => pauseOnHover && setPaused(false)}
    >
      <div
        className={`marquee-track ${direction}`}
        style={{
          animationDuration: `${width / speed}s`,
          animationPlayState: paused ? "paused" : "running",
        }}
      >
        <div ref={contentRef} className="marquee-content">
          {children}
        </div>
        <div className="marquee-content">{children}</div>
      </div>
    </div>
  );
};

/* =======================
   Review Card
======================= */
const ReviewCard = ({ avatar, name, location, rating, review, link }) => (
  <a
    href={link}
    target="_blank"
    rel="noopener noreferrer"
    className="review-card clickable"
  >
    <div className="review-header">
      <img src={avatar} alt={name} />

      <div>
        <h4>{name}</h4>
        <span className="review-location">{location}</span>

        <div className="stars">
          {Array.from({ length: 5 }).map((_, i) => (
            <Star
              key={i}
              size={16}
              className={i < rating ? "star filled" : "star"}
            />
          ))}
        </div>
      </div>
    </div>

    <p>"{review}"</p>
  </a>
);

/* =======================
   Main Section Component
======================= */
const TestimonialSection = () => {
  const reviews = [
    {
      id: 1,
      name: "Khalid A.",
      location: "RIYADH, SA",
      avatar:khalidImg,
      rating: 5,
      review:
        "Great work with a great programmer team.",
      link: "https://www.freelancer.com/u/mrprogrmmr?review_context_id=30058830&review_type=project"
    },
    {
      id: 2,
      name: "Mohammad I.",
      location: "AMMAN, JORDAN",
      avatar: muhammadImg,
      rating: 4,
      review:
        "As always, great work. Qllmsoft is my reliable choice for store builds and web application logic.Highly recommended.",
      link: "https://www.freelancer.com/u/mrprogrmmr?review_context_id=10439073&review_type=project"
    },
    {
      id: 3,
      name: "Fernando M.",
      location:"MIRAMAR ,USA",
      avatar: fernandoImg,
      rating: 5,
      review:
        "Very nice developer to work with Qllmsoft consistently delivers a high quality of code and professional results.",
       link: "https://www.freelancer.com/u/mrprogrmmr?review_context_id=5228423&review_type=project"
       
      },
    {
      id: 4,
      name: "Neil P.",
      location: "CARDIFF, UK",
      avatar: neil,
      rating: 4,
      review:
        "Fantastic work. Excellent communication and the end result was perfect.I will continue to use Qllmsoft services.",
      link: "https://www.freelancer.com/u/mrprogrmmr?review_context_id=6964328&review_type=project"
    },
  ];

  return (
    <section className="section testimonial-section bg-light">
      <div className="container">
        <div className="section-title">
          <h2>What Our Clients Say</h2>
        </div>

        <Marquee speed={65}>
          {reviews.map((r) => (
            <ReviewCard key={r.id} {...r} />
          ))}
        </Marquee>
      </div>
    </section>
  );
};

export default TestimonialSection;
