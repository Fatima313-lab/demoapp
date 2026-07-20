import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { projects } from '../data/mock';
import './ProjectSections.css';

const VISIBLE = 3;
const AUTO_DELAY = 4000;

const ProjectsSection = () => {
  const carouselRef = useRef(null);

  const [index, setIndex] = useState(VISIBLE);
  const [isTransitioning, setIsTransitioning] = useState(true);
  const [cardWidth, setCardWidth] = useState(0);

  const projectCount = projects.length;

  // Clone for infinite loop
  const items = [
    ...projects.slice(-VISIBLE),
    ...projects,
    ...projects.slice(0, VISIBLE),
  ];

  // 🔥 Dynamic width (KEY FIX)
  useEffect(() => {
    const updateWidth = () => {
      const card = carouselRef.current?.querySelector('.carousel-card');
      if (card) {
        const gap = 15;
        setCardWidth(card.offsetWidth + gap);
      }
    };

    updateWidth();
    window.addEventListener('resize', updateWidth);
    return () => window.removeEventListener('resize', updateWidth);
  }, []);

  // Auto scroll
  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => prev + 1);
    }, AUTO_DELAY);

    return () => clearInterval(timer);
  }, []);

  // Apply transform
  useEffect(() => {
    const carousel = carouselRef.current;
    if (!carousel || cardWidth === 0) return;

    carousel.style.transition = isTransitioning
      ? 'transform 0.6s ease'
      : 'none';

    carousel.style.transform = `translateX(-${index * cardWidth}px)`;
  }, [index, isTransitioning, cardWidth]);

  // Infinite loop fix
  useEffect(() => {
    if (index === projectCount + VISIBLE) {
      setTimeout(() => {
        setIsTransitioning(false);
        setIndex(VISIBLE);
      }, 600);
    }

    if (index === 0) {
      setTimeout(() => {
        setIsTransitioning(false);
        setIndex(projectCount);
      }, 600);
    }

    if (!isTransitioning) {
      requestAnimationFrame(() => setIsTransitioning(true));
    }
  }, [index, projectCount, isTransitioning]);

  return (
    <section className="section projects-section">
      <div className="container">
        <div className="section-title">
          <h2>Latest Projects</h2>
          <p>Explore our recent work across web, mobile, and desktop applications</p>
        </div>

        <div className="custom-carousel-wrapper">
          <div className="custom-carousel" ref={carouselRef}>
            {items.map((project, i) => (
              <div className="carousel-card" key={`${project.id}-${i}`}>
                <Link to={`/projects#${project.slug}`}>
                  <img src={project.image} alt={project.name} />
                  <div className="carousel-info">
                    <h3>{project.name}</h3>
                    <p>{project.description}</p>
                  </div>
                </Link>
              </div>
            ))}
          </div>

          <button
            className="carousel-btn prev"
            onClick={() => setIndex((i) => i - 1)}
          >
            ‹
          </button>
          <button
            className="carousel-btn next"
            onClick={() => setIndex((i) => i + 1)}
          >
            ›
          </button>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;