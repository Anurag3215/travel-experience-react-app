import React from "react";
import { Link } from "react-router-dom";

const HomePage = () => {
  const categories = [
    {
      title: "Travel Experiences",
      tag: "Stories & itineraries",
      description: "Document your routes, budget, favorite stops, and local tips.",
      addTo: "/Addexperience",
      viewTo: "/Viewexperience",
      icon: "bi bi-airplane-engines",
      accent: "primary",
    },
    {
      title: "Hotel Reviews",
      tag: "Stay insights",
      description: "Capture pricing, amenities, cleanliness, and overall comfort.",
      addTo: "/addhotel",
      viewTo: "/viewhotel",
      icon: "bi bi-building",
      accent: "success",
    },
    {
      title: "Adventure Activities",
      tag: "Thrills & escapes",
      description: "Showcase adrenaline-driven experiences with activity details.",
      addTo: "/addadventure",
      viewTo: "/viewadventure",
      icon: "bi bi-tropical-storm",
      accent: "warning",
    },
  ];

  const testimonials = [
    {
      quote: "The experience feels as premium as the best travel apps I use daily.",
      name: "Aline Adams",
      role: "Digital nomad",
    },
    {
      quote: "Beautiful flow, thoughtful interactions, and a polished experience.",
      name: "Noah Chen",
      role: "Product designer",
    },
  ];

  return (
    <div className="page-shell">
      <div className="container py-4 py-lg-5">
        <section className="hero-section row align-items-center g-4 p-4 p-lg-5">
          <div className="col-lg-7">
            <span className="hero-badge">
              <i className="bi bi-stars"></i> Trusted by 1,000+ global travelers
            </span>
            <h1 className="hero-title">Share your journey with the world.</h1>
            <p className="hero-subtitle">
              Discover unforgettable routes, hotel insights, and adrenaline-fueled adventures in one elegant destination.
            </p>
            <div className="d-flex flex-wrap gap-3">
              <Link to="/Addexperience" className="btn btn-gradient">
                <i className="bi bi-compass"></i> Start sharing
              </Link>
              <Link to="/Viewexperience" className="btn btn-outline-gradient">
                <i className="bi bi-play-circle"></i> Explore stories
              </Link>
            </div>
            <div className="stats-row">
              <div className="metric-card">
                <strong>1000+</strong>
                <span>Travelers</span>
              </div>
              <div className="metric-card">
                <strong>5000+</strong>
                <span>Reviews</span>
              </div>
              <div className="metric-card">
                <strong>300+</strong>
                <span>Adventures</span>
              </div>
            </div>
          </div>

          <div className="col-lg-5">
            <div className="hero-visual">
              <div className="orb orb-one"></div>
              <div className="orb orb-two"></div>
              <div className="hero-panel">
                <span className="trip-pill">
                  <i className="bi bi-map-fill"></i> This week in Bali
                </span>
                <div className="illustration-card">
                  <div className="row g-2 align-items-center">
                    <div className="col-6">
                      <div className="p-3 rounded-4 bg-white border border-light">
                        <p className="mb-1 small text-muted">Best place</p>
                        <h6 className="mb-0 fw-bold">Uluwatu</h6>
                      </div>
                    </div>
                    <div className="col-6">
                      <div className="p-3 rounded-4 bg-white border border-light">
                        <p className="mb-1 small text-muted">Budget</p>
                        <h6 className="mb-0 fw-bold">₹ 25,000</h6>
                      </div>
                    </div>
                    <div className="col-12">
                      <div className="p-3 rounded-4 bg-primary bg-opacity-10 border border-primary-subtle">
                        <p className="mb-1 small text-muted">Top tip</p>
                        <h6 className="mb-0 fw-semibold">Sunset views and local cuisine make this stop unforgettable.</h6>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="mt-5" id="about">
          <div className="section-heading d-flex justify-content-between align-items-center flex-wrap gap-2">
            <div>
              <div className="pill-chip">
                <i className="bi bi-grid"></i> Curated sections
              </div>
              <h2 className="section-title">Choose your next experience</h2>
            </div>
          </div>
          <div className="row g-4">
            {categories.map((item) => (
              <div className="col-md-4" key={item.title}>
                <div className="feature-card h-100">
                  <div className={`feature-icon text-${item.accent}`}>
                    <i className={item.icon}></i>
                  </div>
                  <div className="mt-3">
                    <p className="mb-2 small text-uppercase fw-semibold text-primary">{item.tag}</p>
                    <h4 className="fw-semibold mb-2">{item.title}</h4>
                    <p className="text-muted mb-4">{item.description}</p>
                    <div className="d-flex flex-wrap gap-2">
                      <Link to={item.addTo} className="btn btn-gradient btn-sm">
                        Add
                      </Link>
                      <Link to={item.viewTo} className="btn btn-outline-gradient btn-sm">
                        View
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="mt-5">
          <div className="section-heading">
            <div className="pill-chip">
              <i className="bi bi-chat-quote"></i> Travelers love it
            </div>
            <h2 className="section-title">What people are saying</h2>
          </div>
          <div className="row g-4">
            {testimonials.map((testimonial) => (
              <div className="col-md-6" key={testimonial.name}>
                <div className="testimonial-card h-100">
                  <div className="d-flex align-items-center gap-2 text-warning mb-3">
                    {Array.from({ length: 5 }).map((_, index) => (
                      <i key={index} className="bi bi-star-fill"></i>
                    ))}
                  </div>
                  <p className="text-muted mb-3">“{testimonial.quote}”</p>
                  <div>
                    <h6 className="mb-0 fw-semibold">{testimonial.name}</h6>
                    <small className="text-muted">{testimonial.role}</small>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="cta-panel mt-5" id="contact">
          <div className="row align-items-center g-4">
            <div className="col-lg-8">
              <h3 className="fw-semibold mb-2">Ready to turn your trips into stories?</h3>
              <p className="mb-0 opacity-75">Bring your adventures to life with a polished, modern sharing experience.</p>
            </div>
            <div className="col-lg-4 text-lg-end">
              <Link to="/Addexperience" className="btn btn-light text-primary fw-semibold">
                <i className="bi bi-arrow-right-circle"></i> Create a story
              </Link>
            </div>
          </div>
        </section>
      </div>

      <footer className="footer-shell">
        <div className="container">
          <div className="row g-4 align-items-start">
            <div className="col-md-4">
              <div className="brand-mark">
                <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" aria-label="TravelSphere logo">
                  <path d="M13 42L27 24L38 30L50 16" stroke="url(#stroke)" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M24 44C24 41.2 26.2 39 29 39H46C48.8 39 51 41.2 51 44V44" stroke="url(#stroke)" strokeWidth="4" strokeLinecap="round" />
                  <path d="M16 20C16 13.4 21.4 8 28 8H30C36.6 8 42 13.4 42 20V24H16V20Z" fill="url(#fill)" />
                  <defs>
                    <linearGradient id="stroke" x1="13" y1="8" x2="51" y2="44" gradientUnits="userSpaceOnUse">
                      <stop offset="0%" stopColor="#2563EB" />
                      <stop offset="100%" stopColor="#06B6D4" />
                    </linearGradient>
                    <linearGradient id="fill" x1="16" y1="8" x2="42" y2="24" gradientUnits="userSpaceOnUse">
                      <stop offset="0%" stopColor="#2563EB" />
                      <stop offset="100%" stopColor="#06B6D4" />
                    </linearGradient>
                  </defs>
                </svg>
                <span>TravelSphere</span>
              </div>
              <p className="mt-3 mb-0">Premium travel storytelling and local discovery.</p>
            </div>
            <div className="col-md-4">
              <h6 className="fw-semibold text-dark">Quick links</h6>
              <ul className="list-unstyled mt-3">
                <li><Link className="text-muted" to="/">Home</Link></li>
                <li><Link className="text-muted" to="/Viewexperience">Travel</Link></li>
                <li><Link className="text-muted" to="/viewhotel">Hotel Review</Link></li>
              </ul>
            </div>
            <div className="col-md-4">
              <h6 className="fw-semibold text-dark">Contact</h6>
              <ul className="list-unstyled mt-3">
                <li><a className="text-muted" href="mailto:hello@travelsphere.com">hello@travelsphere.com</a></li>
                <li><a className="text-muted" href="tel:+919999999999">+91 99999 99999</a></li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default HomePage;
