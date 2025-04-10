import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';

export const LandingPage = () => {
 
    const [activeSection, setActiveSection] = useState('home');
  
    // Data for products
    const categories = [
      {
        id: 1,
        title: "Men's Collection",
        image: "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
      },
      {
        id: 2,
        title: "Women's Collection",
        image: "https://images.unsplash.com/photo-1487412947147-5cebf100ffc2?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
      },
      {
        id: 3,
        title: "Kids' Collection",
        image: "https://images.unsplash.com/photo-1522771930-78848d9293e8?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      }
    ];
  
    // Data for gallery
    const galleryImages = [
      "https://images.unsplash.com/photo-1469334031218-e382a71b716b?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
      "https://images.unsplash.com/photo-1520367445093-50dc08a59d9d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
      "https://images.unsplash.com/photo-1490114538077-0a7f8cb49891?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
      "https://images.unsplash.com/photo-1479064555552-3ef4979f8908?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
      "https://images.unsplash.com/photo-1492707892479-7bc8d5a4ee93?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
      "https://images.unsplash.com/photo-1542272604-787c3835535d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
    ];
  
    // Handle scroll to update active section
    useEffect(() => {
      const handleScroll = () => {
        const sections = ['home', 'about', 'products', 'gallery', 'contact'];
        for (const section of sections) {
          const element = document.getElementById(section);
          if (element) {
            const rect = element.getBoundingClientRect();
            if (rect.top <= 100 && rect.bottom >= 100) {
              setActiveSection(section);
              break;
            }
          }
        }
      };
  
      window.addEventListener('scroll', handleScroll);
      return () => window.removeEventListener('scroll', handleScroll);
    }, []);
  
    // Scroll to section
    const scrollToSection = (sectionId) => {
      setActiveSection(sectionId);
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    };
  
    return (
      <div style={styles.page}>
        {/* Navigation Header */}
        <header style={styles.header}>
          <div style={styles.logo}>WearWeb</div>
          <nav>
            <ul style={styles.navList}>
              {['home', 'about', 'products', 'gallery', 'contact'].map((item) => (
                <li key={item} style={styles.navItem}>
                  <button
                    style={{
                      ...styles.navButton,
                      ...(activeSection === item ? styles.activeNavButton : {})
                    }}
                    onClick={() => scrollToSection(item)}
                  >
                    {item.charAt(0).toUpperCase() + item.slice(1)}
                  </button>
                </li>
              ))}
               {/* Add these login/signup links */}
            <li style={{ ...styles.navItem, marginLeft: 'auto' }}>
              <Link to="/login" style={styles.authLink}>Login</Link>
              <span style={styles.authDivider}>/</span>
              <Link to="/signup" style={styles.authLink}>Sign Up</Link>
            </li>
            </ul>
          </nav>
        </header>
  
        {/* Hero Section */}
        <section id="home" style={styles.heroSection}>
          <div style={styles.heroContent}>
            <h1 style={styles.heroTitle}>Elevate Your Style</h1>
            <p style={styles.heroText}>Discover the latest trends in fashion with our exclusive collection</p>
            <button 
              style={styles.primaryButton} 
              onClick={() => scrollToSection('products')}
            >
              Shop Now
            </button>
          </div>
        </section>
  
        {/* Features Section */}
        <section style={styles.featuresSection}>
          {[
            {
              title: "Premium Quality",
              text: "Materials that last longer and feel better"
            },
            {
              title: "Trending Designs", 
              text: "Stay ahead with our fashion-forward collections"
            },
            {
              title: "Easy Returns",
              text: "30-day hassle-free return policy"
            }
          ].map((feature, index) => (
            <div key={index} style={styles.featureCard}>
              <h3 style={styles.featureTitle}>{feature.title}</h3>
              <p style={styles.featureText}>{feature.text}</p>
            </div>
          ))}
        </section>
  
        {/* About Section */}
        <section id="about" style={styles.aboutSection}>
          <h2 style={styles.sectionTitle}>Our Story</h2>
          <p style={styles.sectionText}>
            Founded in 2020, WearWeb began as a small boutique with big dreams. Today, we're a leading fashion destination known for our quality and style.
          </p>
          
          <h2 style={styles.sectionTitle}>Our Mission</h2>
          <p style={styles.sectionText}>
            To provide affordable, high-quality fashion that makes our customers look and feel their best.
          </p>
          
          <h2 style={styles.sectionTitle}>Our Team</h2>
          <p style={styles.sectionText}>
            We're a passionate group of designers, stylists, and fashion enthusiasts dedicated to bringing you the latest trends.
          </p>
        </section>
  
        {/* Products Section */}
        <section id="products" style={styles.productsSection}>
          <h2 style={styles.sectionTitle}>Our Collections</h2>
          <div style={styles.productsGrid}>
            {categories.map(category => (
              <div key={category.id} style={styles.productCard}>
                <img 
                  src={category.image} 
                  alt={category.title} 
                  style={styles.productImage}
                />
                <div style={styles.productContent}>
                  <h3 style={styles.productTitle}>{category.title}</h3>
                  <button style={styles.secondaryButton}>View All</button>
                </div>
              </div>
            ))}
          </div>
        </section>
  
        {/* Gallery Section */}
        <section id="gallery" style={styles.gallerySection}>
          <h2 style={styles.sectionTitle}>Style Gallery</h2>
          <div style={styles.galleryGrid}>
            {galleryImages.map((image, index) => (
              <img 
                key={index} 
                src={image} 
                alt={`Fashion ${index + 1}`} 
                style={styles.galleryImage}
              />
            ))}
          </div>
        </section>
  
        {/* Contact Section */}
        <section id="contact" style={styles.contactSection}>
          <h2 style={styles.sectionTitle}>Get In Touch</h2>
          <div style={styles.contactContent}>
            <div style={styles.contactInfo}>
              <h3 style={styles.contactSubtitle}>Our Store</h3>
              <p style={styles.contactText}>
                123 Fashion Street<br />
                Style City, SC 12345<br />
                Phone: (123) 456-7890<br />
                Email: info@wearweb.com
              </p>
              
              <h3 style={styles.contactSubtitle}>Business Hours</h3>
              <p style={styles.contactText}>
                Monday-Friday: 9am-8pm<br />
                Saturday: 10am-6pm<br />
                Sunday: 12pm-5pm
              </p>
            </div>
            
            <div style={styles.contactForm}>
              <form style={styles.form}>
                <input 
                  type="text" 
                  placeholder="Your Name" 
                  required 
                  style={styles.formInput}
                />
                <input 
                  type="email" 
                  placeholder="Your Email" 
                  required 
                  style={styles.formInput}
                />
                <input 
                  type="text" 
                  placeholder="Subject" 
                  style={styles.formInput}
                />
                <textarea 
                  placeholder="Your Message" 
                  required 
                  style={styles.formTextarea}
                ></textarea>
                <button type="submit" style={styles.primaryButton}>
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </section>
  
        {/* Footer */}
        <footer style={styles.footer}>
          <p style={styles.footerText}>&copy; 2023 WearWeb. All rights reserved.</p>
        </footer>
      </div>
    );
  }
  
  // All CSS styles in JavaScript object format
  const styles = {
    page: {
      // display: 'flex',
      // flexDirection: 'column',
      // minHeight: '100%',
      // minWidth: '100%',
      // backgroundColor: '#f8f9fa',
      // fontFamily: 'Arial, sans-serif',
      display: 'flex',
      flexDirection: 'column',
      width: '100vw', /* Ensures full width */
      height: '100vh', /* Ensures full height */
      backgroundColor: '#f8f9fa',
      fontFamily: 'Arial, sans-serif'
    },
    
    // Header Styles
    header: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: '20px 10%',
      background: 'white',
      boxShadow: '0 2px 10px rgba(0,0,0,0.1)',
      position: 'sticky',
      top: 0,
      zIndex: 100,
    },
    logo: {
      fontSize: '24px',
      fontWeight: 'bold',
      color: '#ff6b6b',
    },
    navList: {
      display: 'flex',
      listStyle: 'none',
    },
    navItem: {
      marginLeft: '30px',
    },
    navButton: {
      fontWeight: 500,
      transition: 'all 0.3s',
      padding: '5px 10px',
      borderRadius: '5px',
      border: 'none',
      background: 'none',
      cursor: 'pointer',
      fontSize: '16px',
      color: '#333',
    },
    activeNavButton: {
      color: '#ff6b6b',
      background: '#fff0f0',
    },
    
    // Button Styles
    primaryButton: {
      display: 'inline-block',
      background: '#ff6b6b',
      color: 'white',
      padding: '10px 20px',
      borderRadius: '5px',
      transition: 'background 0.3s',
      border: 'none',
      cursor: 'pointer',
      fontSize: '16px',
      textDecoration: 'none',
    },
    secondaryButton: {
      display: 'inline-block',
      background: 'white',
      color: '#ff6b6b',
      padding: '10px 20px',
      borderRadius: '5px',
      transition: 'all 0.3s',
      border: '1px solid #ff6b6b',
      cursor: 'pointer',
      fontSize: '16px',
    },
    
    // Hero Section
    heroSection: {
      width: '100vw', 
      height: '100vh', 
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      textAlign: 'center',
      background: `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), 
                   url('https://images.unsplash.com/photo-1483985988355-763728e1935b?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80')`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat',
      color: 'white',
      padding: '350px',
      overflow: 'hidden',
  },
    heroContent: {
      maxWidth: '800px',
    },
    heroTitle: {
      fontSize: '3rem',
      marginBottom: '20px',
      textShadow: '2px 2px 4px rgba(0,0,0,0.5)',
    },
    heroText: {
      fontSize: '1.2rem',
      marginBottom: '30px',
      textShadow: '1px 1px 2px rgba(0,0,0,0.5)',
    },
    
    // Features Section
    featuresSection: {
      display: 'flex',
      justifyContent: 'space-around',
      textAlign: 'center',
      flexWrap: 'wrap',
      padding: '80px 10%',
    },
    featureCard: {
      flexBasis: '30%',
      padding: '30px',
      borderRadius: '10px',
      boxShadow: '0 5px 15px rgba(0,0,0,0.1)',
      transition: 'transform 0.3s',
      background: 'white',
      margin: '10px',
    },
    featureTitle: {
      marginBottom: '15px',
      color: '#ff6b6b',
    },
    featureText: {
      color: '#666',
    },
    
    // Common Section Styles
    sectionTitle: {
      marginBottom: '20px',
      color: '#ff6b6b',
      fontSize: '2rem',
    },
    sectionText: {
      marginBottom: '30px',
      color: '#666',
      lineHeight: '1.6',
    },
    
    // About Section
    aboutSection: {
      background: 'white',
      padding: '80px 10%',
      borderRadius: '10px',
      boxShadow: '0 5px 15px rgba(0,0,0,0.1)',
      margin: '50px 10%',
    },
    
    // Products Section
    productsSection: {
      padding: '80px 10%',
      textAlign: 'center',
    },
    productsGrid: {
      display: 'flex',
      justifyContent: 'space-between',
      flexWrap: 'wrap',
    },
    productCard: {
      flexBasis: '30%',
      marginBottom: '40px',
      overflow: 'hidden',
      borderRadius: '10px',
      boxShadow: '0 5px 15px rgba(0,0,0,0.1)',
      background: 'white',
    },
    productImage: {
      width: '100%',
      height: '250px',
      objectFit: 'cover',
      transition: 'transform 0.5s',
    },
    productContent: {
      padding: '20px',
    },
    productTitle: {
      margin: '10px 0',
      color: '#333',
    },
    
    // Gallery Section
    gallerySection: {
      padding: '80px 10%',
      textAlign: 'center',
    },
    galleryGrid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
      gap: '20px',
    },
    galleryImage: {
      width: '100%',
      height: '300px',
      objectFit: 'cover',
      borderRadius: '10px',
      transition: 'transform 0.3s',
      boxShadow: '0 5px 15px rgba(0,0,0,0.1)',
    },
    
    // Contact Section
    contactSection: {
      background: 'white',
      padding: '80px 10%',
      borderRadius: '10px',
      boxShadow: '0 5px 15px rgba(0,0,0,0.1)',
      margin: '50px 10%',
    },
    contactContent: {
      display: 'flex',
      justifyContent: 'space-between',
      flexWrap: 'wrap',
    },
    contactInfo: {
      flexBasis: '48%',
    },
    contactForm: {
      flexBasis: '48%',
    },
    contactSubtitle: {
      marginBottom: '20px',
      color: '#ff6b6b',
    },
    contactText: {
      marginBottom: '20px',
      color: '#666',
      lineHeight: '1.6',
    },
    form: {
      display: 'flex',
      flexDirection: 'column',
    },
    formInput: {
      marginBottom: '20px',
      padding: '15px',
      border: '1px solid #ddd',
      borderRadius: '5px',
      fontSize: '16px',
    },
    formTextarea: {
      marginBottom: '20px',
      padding: '15px',
      border: '1px solid #ddd',
      borderRadius: '5px',
      fontSize: '16px',
      height: '150px',
      resize: 'vertical',
    },
    
    // Footer
    footer: {
      textAlign: 'center',
      padding: '30px',
      background: 'white',
      boxShadow: '0 -2px 10px rgba(0,0,0,0.1)',
    },
    footerText: {
      color: '#666',
    },
    
    // Hover Effects
    hoverEffects: {
      '&:hover': {
        transform: 'scale(1.05)',
      }
    },
    
    // Responsive Styles
    '@media (max-width: 768px)': {
      header: {
        flexDirection: 'column',
        padding: '20px',
      },
      navList: {
        marginTop: '20px',
        flexWrap: 'wrap',
        justifyContent: 'center',
      },
      navItem: {
        margin: '5px 10px',
      },
      featuresSection: {
        flexDirection: 'column',
      },
      featureCard: {
        flexBasis: '100%',
        marginBottom: '30px',
      },
      productsGrid: {
        flexDirection: 'column',
      },
      productCard: {
        flexBasis: '100%',
      },
      contactContent: {
        flexDirection: 'column',
      },
      contactInfo: {
        flexBasis: '100%',
        marginBottom: '30px',
      },
      contactForm: {
        flexBasis: '100%',
      },
      heroTitle: {
        fontSize: '2rem',
      },
      aboutSection: {
        margin: '20px 5%',
      },
      contactSection: {
        margin: '20px 5%',
      },
    },
    
  // ... (keep all your existing styles) ...

  // Add these new styles for auth links
  // Updated auth link styles to match header navigation
authLink: {
  fontWeight: 500,
  transition: 'all 0.3s',
  padding: '10px 15px',
  borderRadius: '5px',
  border: 'none',
  background: 'none',
  cursor: 'pointer',
  fontSize: '16px',
  color: '#333',
  textDecoration: 'none',
  '&:hover': {
    color: '#ff6b6b',
    background: '#fff0f0',
  }
},
activeAuthLink: { // If you need active state for auth links
  color: '#ff6b6b',
  background: '#fff0f0',
},
authDivider: {
  margin: '0 5px',
  color: '#ccc',
  fontSize: '16px',
},


  };
