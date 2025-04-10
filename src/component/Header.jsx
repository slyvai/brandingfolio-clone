import { useEffect, useRef, useState } from "react";
import "../styles/Header.css";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { FaBars, FaTimes } from "react-icons/fa";

gsap.registerPlugin(ScrollTrigger);

function Header() {
  const imageRef1 = useRef(null);
  const imageRef2 = useRef(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setScreenWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);
    
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);


  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  useEffect(() => {
    if (screenWidth > 768) {
      gsap.fromTo(
        imageRef1.current,
        {
          y: 10,
        },
        {
          y: -400,
          scrollTrigger: {
            trigger: ".hero-section",
            start: "top top",
            end: "bottom top",
            scrub: true,
          },
        }
      );

      gsap.fromTo(
        imageRef2.current,
        {
          y: -200,
        },
        {
          y: 10,
          duration: 1,
          scrollTrigger: {
            trigger: ".hero-section",
            start: "top top",
            end: "bottom top",
            scrub: true,
          },
        }
      );
    } else {
      gsap.fromTo(
        imageRef1.current,
        {
          x: -110,
        },
        {
          x: -210,
          scrollTrigger: {
            trigger: ".header-section2",
            start: "top top",
            end: "bottom top",
            scrub: true,
          },
        }
      );

      gsap.fromTo(
        imageRef2.current,
        {
          x: -310,
        },
        {
          x: -210,
          scrollTrigger: {
            trigger: ".header-section2",
            start: "top top",
            end: "bottom top",
            scrub: true,
          },
        }
      );
    }
  }, [screenWidth]);

  return (
    <>
      <div className="header-container">
        <div className="header-section">
          <div className="header-nav">
            <img
              className="header-logo"
              src="https://cdn.prod.website-files.com/66d745be9e684f30f3960c6a/66d745be9e684f30f3960ed7_logo-web-brandingfolio-x-webflow-template.svg"
              alt=""
            />
            <button className="hamburger" onClick={toggleMobileMenu}>
              {isMobileMenuOpen ? <FaTimes /> : <FaBars />}
            </button>
            <ul className={`nav-menu ${isMobileMenuOpen ? "open" : ""}`} >
              <li>Home</li>
              <li>About</li>
              <li>Blog</li>
              <li>Pages</li>
              <li>Cart</li>
              <li ><button className="contact-btn">Contact Us</button></li>
            </ul>
          </div>
          <div className="header-btn">
            <button>Contact Us</button>
          </div>
        </div>
        <div className="hero-section">
          <div className="header-section2">
            <div className="header-text">
              <div className="header-title">
                <h1>
                  Brandingfolio X <br />
                  Webflow Template
                </h1>
                <p>
                  Presenting Brandingfolio X, the ultimate Branding <br />{" "}
                  Agency Webflow Template.
                </p>
              </div>
              <div className="header-btn2">
                <button className="template">Buy template</button>
                <button className="explore">Explore pages</button>
              </div>
            </div>
            <div className="header-image">
              <div className="header-image1" ref={imageRef1}>
                <img
                  src="https://cdn.prod.website-files.com/66d745be9e684f30f3960c6a/66d745be9e684f30f3960f53_brandingfolio-x-about-main-page-branding-agency-webflow-template.png"
                  alt=""
                />
                <img
                  src="https://cdn.prod.website-files.com/66d745be9e684f30f3960c6a/66d745be9e684f30f3960fc3_brandingfolio-x-home-v1-main-page-branding-agency-webflow-template.png"
                  alt=""
                />
                <img
                  src="https://cdn.prod.website-files.com/66d745be9e684f30f3960c6a/66d745be9e684f30f3960f51_brandingfolio-x-blog-posts-main-page-branding-agency-webflow-template.png"
                  alt=""
                />
                <img
                  src="https://cdn.prod.website-files.com/66d745be9e684f30f3960c6a/66d745be9e684f30f3960f5c_brandingfolio-x-portfolio-single-main-page-branding-agency-webflow-template.png"
                  alt=""
                />
              </div>
              <div className="header-image2" ref={imageRef2}>
                <img
                  src="https://cdn.prod.website-files.com/66d745be9e684f30f3960c6a/66d745be9e684f30f3960f3a_brandingfolio-x-packages-page-branding-agency-webflow-template.png"
                  alt=""
                />
                <img
                  src="https://cdn.prod.website-files.com/66d745be9e684f30f3960c6a/66d745be9e684f30f3960f39_brandingfolio-x-portfolio-single-page-branding-agency-webflow-template.png"
                  alt=""
                />
                <img
                  src="https://cdn.prod.website-files.com/66d745be9e684f30f3960c6a/66d745be9e684f30f3960f38_brandingfolio-x-team-member-page-branding-agency-webflow-template.png"
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Header;