const { useState, useEffect } = React;

// Data from the JSON
const instituteData = {
  "institute": {
    "name": "IELTS Excellence Academy",
    "tagline": "Your Gateway to Global Success",
    "description": "Leading IELTS coaching institute with 10+ years of experience helping students achieve their dream scores."
  },
  "hero": {
    "headline": "Achieve Your Dream IELTS Score",
    "subtext": "Expert coaching, personalized learning, and proven results. Join thousands who achieved their target band score.",
    "primaryCTA": "Start Free Assessment",
    "secondaryCTA": "View Courses"
  },
  "features": [
    {
      "id": 1,
      "title": "Speaking Practice",
      "description": "1-on-1 speaking sessions with certified IELTS trainers to boost your confidence and fluency",
      "icon": "🎤"
    },
    {
      "id": 2,
      "title": "Mock Tests",
      "description": "Full-length practice tests with detailed feedback and performance analysis",
      "icon": "📋"
    },
    {
      "id": 3,
      "title": "AI Band Score Prediction",
      "description": "Advanced AI technology analyzes your performance and predicts your potential band score",
      "icon": "📊"
    },
    {
      "id": 4,
      "title": "Flexible Scheduling",
      "description": "Choose from online and offline classes scheduled at your convenience",
      "icon": "📅"
    }
  ],
  "testimonials": [
    {
      "id": 1,
      "name": "Sarah Johnson",
      "score": "Band 8.5",
      "review": "The personalized attention and mock tests helped me improve from 6.5 to 8.5 in just 3 months!",
      "rating": 5,
      "avatar": "SJ"
    },
    {
      "id": 2,
      "name": "Rajesh Kumar",
      "score": "Band 7.5",
      "review": "Excellent teaching methodology and flexible timings. Achieved my target score for Canada PR.",
      "rating": 5,
      "avatar": "RK"
    },
    {
      "id": 3,
      "name": "Emily Chen",
      "score": "Band 8.0",
      "review": "The AI feedback system is amazing! It helped me identify my weak areas and improve quickly.",
      "rating": 5,
      "avatar": "EC"
    }
  ],
  "footer": {
    "about": "IELTS Excellence Academy is committed to helping students achieve their academic and immigration goals through comprehensive IELTS preparation programs.",
    "quickLinks": [
      "IELTS Courses",
      "Mock Tests",
      "Speaking Practice",
      "About Us",
      "Contact"
    ],
    "contact": {
      "address": "123 Education Street, Learning City, LC 12345",
      "phone": "+1 (555) 123-4567",
      "email": "info@ieltsexcellence.com"
    },
    "socialMedia": [
      { "platform": "Facebook", "url": "#" },
      { "platform": "Twitter", "url": "#" },
      { "platform": "Instagram", "url": "#" },
      { "platform": "YouTube", "url": "#" }
    ]
  },
  "navigation": [
    { "name": "Home", "href": "#home" },
    { "name": "Courses", "href": "#courses" },
    { "name": "About", "href": "#about" },
    { "name": "Contact", "href": "#contact" },
    { "name": "Login", "href": "#login" }
  ]
};

// Navbar Component
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar">
      <div className="nav-container">
        <div className="logo">
          🎓 {instituteData.institute.name}
        </div>
        <ul className={`nav-menu ${isOpen ? 'active' : ''}`}>
          {instituteData.navigation.map((item, index) => (
            <li key={index}>
              {item.name === 'Login' ? (
                <button className="login-btn">{item.name}</button>
              ) : (
                <a href={item.href} className="nav-link" onClick={() => setIsOpen(false)}>
                  {item.name}
                </a>
              )}
            </li>
          ))}
        </ul>
        <button className="hamburger" onClick={toggleMenu}>
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
    </nav>
  );
};

// Hero Component
const Hero = () => {
  return (
    <section className="hero" id="home">
      <div className="hero-container">
        <div className="hero-content">
          <h1>{instituteData.hero.headline}</h1>
          <p>{instituteData.hero.subtext}</p>
          <div className="hero-buttons">
            <button className="btn-primary">{instituteData.hero.primaryCTA}</button>
            <button className="btn-secondary">{instituteData.hero.secondaryCTA}</button>
          </div>
        </div>
        <div className="hero-image">
          <div className="hero-placeholder">
            🎯 IELTS Success Illustration
          </div>
        </div>
      </div>
    </section>
  );
};

// Features Component
const Features = () => {
  return (
    <section className="features" id="features">
      <div className="features-container">
        <h2 className="section-title">Why Choose IELTS Excellence Academy?</h2>
        <div className="features-grid">
          {instituteData.features.map((feature) => (
            <div key={feature.id} className="feature-card">
              <span className="feature-icon">{feature.icon}</span>
              <h3>{feature.title}</h3>
              <p>{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Testimonials Component
const Testimonials = () => {
  const renderStars = (rating) => {
    return '⭐'.repeat(rating);
  };

  return (
    <section className="testimonials" id="testimonials">
      <div className="testimonials-container">
        <h2 className="section-title">Success Stories From Our Students</h2>
        <div className="testimonials-grid">
          {instituteData.testimonials.map((testimonial) => (
            <div key={testimonial.id} className="testimonial-card">
              <div className="testimonial-header">
                <div className="avatar">{testimonial.avatar}</div>
                <div className="testimonial-info">
                  <h4>{testimonial.name}</h4>
                  <span className="score">{testimonial.score}</span>
                </div>
              </div>
              <div className="stars">{renderStars(testimonial.rating)}</div>
              <p>"{testimonial.review}"</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Footer Component
const Footer = () => {
  return (
    <footer className="footer" id="footer">
      <div className="footer-container">
        <div className="footer-content">
          <div className="footer-section">
            <h3>About {instituteData.institute.name}</h3>
            <p>{instituteData.footer.about}</p>
            <div className="social-links">
              {instituteData.footer.socialMedia.map((social, index) => (
                <a key={index} href={social.url} className="social-link">
                  {social.platform.charAt(0)}
                </a>
              ))}
            </div>
          </div>

          <div className="footer-section">
            <h3>Quick Links</h3>
            <ul className="footer-links">
              {instituteData.footer.quickLinks.map((link, index) => (
                <li key={index}>
                  <a href="#" className="footer-link">{link}</a>
                </li>
              ))}
            </ul>
          </div>

          <div className="footer-section">
            <h3>Contact Info</h3>
            <p>📍 {instituteData.footer.contact.address}</p>
            <p>📞 {instituteData.footer.contact.phone}</p>
            <p>✉️ {instituteData.footer.contact.email}</p>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; 2025 {instituteData.institute.name}. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

// Main App Component
const App = () => {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <Features />
      <Testimonials />
      <Footer />
    </div>
  );
};

// Render the App
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);