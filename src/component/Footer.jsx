import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "../styles/Footer.css";

gsap.registerPlugin(ScrollTrigger);

function Footer() {
  useEffect(() => {
    gsap.fromTo(
      ".footer-section",
      { opacity: 0, y: 100 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: ".footer-container",
          start: "top 80%",
          end: "top 40%",
          scrub: true,
          once: true,
        },
      }
    );
    gsap.fromTo(
      ".footer-section2",
      { opacity: 0, y: 100 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: ".footer-section2",
          start: "top 80%",
          end: "top 40%",
          scrub: true,
          once: true,
        },
      }
    );
  }, []);

  return (
    <div className="footer-container">
      <div className="footer-section">
        <div className="footer-contact">
          <div className="footer-text">
            <h1>Contact Us Today!</h1>
            <p>
              Nunc tortor aliquam nec sed nunc convallis tincidunt quam <br />{" "}
              felis volutpat ut consequat turpis risus lacus hendrerit.
            </p>
          </div>
          <div className="footer-btn">
            <button className="contact">Contact Us</button>
            <button className="projects">Our Project</button>
          </div>
        </div>
      </div>

      <div className="footer-section2">
        <div className="footer-logo">
          <img
            className="logo"
            src="https://cdn.prod.website-files.com/66d745be9e684f30f3960c6a/66d745be9e684f30f3960ed6_logo-web-white-brandingfolio-x-webflow-template.svg"
            alt=""
          />
          <p>
            Copyright © Brandingfolio X | Designed by <br />{" "}
            <span className="brix-span"> BRIX Templates </span> - Powered by{" "}
            <span className="webflow-span"> Webflow </span>
          </p>
          <div className="subscribe">
            <h1>Subscribe to our newsletter</h1>
            <input type="text" placeholder="Enter your email" />{" "}
            <button>Subscribe</button>
          </div>
        </div>

        <div className="footer-links">
          <ul>
            <h4>Pages</h4>
            <li>Preview</li>
            <li>Home V1</li>
            <li>Home V2</li>
            <li>Home V3</li>
            <li>About</li>
            <li>Blog V1</li>
            <li>Blog V2</li>
            <li>Blog V3</li>
            <li>Blog Post</li>
          </ul>

          <ul>
            <br /> <br /> <br />
            <li>Blog Category</li>
            <li>Packages</li>
            <li>Packages single</li>
            <li>Contact V1</li>
            <li>Contact V2</li>
            <li>Contact V3</li>
            <li>Portofolio</li>
            <li>Portofolio Single</li>
            <li>Team Member</li>
          </ul>

          <ul>
            <h4>Utility Pages</h4>
            <li>Style guide</li>
            <li>Start Here</li>
            <li>404 Not Found</li>
            <li>Password Protected</li>
            <li>Licenses</li>
            <li>Changelog</li>
            <li>
              <u>
                More Webflow <br /> Template
              </u>
            </li>
          </ul>

          <ul>
            <h4>Follow Us</h4>
            <li>Facebook</li>
            <li>Twitter</li>
            <li>Instagram</li>
            <li>LinkedIn</li>
            <li>Youtube</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Footer;
