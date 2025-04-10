import "../styles/Section3.css";
import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function Section3() {
  useEffect(() => {
    gsap.fromTo(
      ".section3-text",
      {
        opacity: 0,
      },
      {
        opacity: 1,
        duration: 0.5,
        scrollTrigger: {
          trigger: ".section3-text",
          start: "top 80%",
          end: "top 40%",
          scrub: true,
          once: true,
        },
      }
    );

    gsap.fromTo(
      ".card-section3",
      { opacity: 0, y: 100 },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: "power2.out",
        scrollTrigger: {
          trigger: ".card-section3",
          start: "top 80%",
          end: "top 50%",
          once: true,
        },
      }
    );

    gsap.fromTo(
      ".btn-section3",
      { opacity: 0, y: 100 },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: "power2.out",
        scrollTrigger: {
          trigger: ".btn-section3",
          start: "top 80%",
          end: "top 50%",
          once: true,
        },
      }
    );
  }, []);

  return (
    <>
      <div className="section3-container">
        <div className="section3-text">
          <h1>Utility pages</h1>
          <p>
            Take a look at the utility pages included in the Brandingfolio X
            Template.
          </p>
        </div>

        <div className="section3-images">
          <div className="card-section3">
            <img
              src="https://cdn.prod.website-files.com/66d745be9e684f30f3960c6a/66d745be9e684f30f3960f72_brandingfolio-x-404-not-found-utility-page-branding-agency-webflow-template.png"
              alt=""
            />
            <div className="card3-text">
              <h2>404 Not found</h2>
            </div>
          </div>
          <div className="card-section3">
            <img
              src="https://cdn.prod.website-files.com/66d745be9e684f30f3960c6a/66d745be9e684f30f3960f71_brandingfolio-x-password-protected-utility-page-branding-agency-webflow-template.png"
              alt=""
            />
            <div className="card3-text">
              <h2>Password Protected</h2>
            </div>
          </div>
        </div>
        <button className="btn-section3">Buy template</button>
      </div>
    </>
  );
}

export default Section3;
