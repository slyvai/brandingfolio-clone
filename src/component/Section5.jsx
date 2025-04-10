import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "../styles/Section5.css";

gsap.registerPlugin(ScrollTrigger);
function Section5() {
  useEffect(() => {
    gsap.fromTo(
      ".section5-img1",
      { opacity: 0 },
      {
        opacity: 1,
        duration: 1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: ".section5-container",
          start: "top 80%",
          end: "top 40%",
          scrub: true,
          once: true,
        },
      }
    );
    gsap.fromTo(
      ".section5-img2",
      { opacity: 0, delay: 1 },
      {
        opacity: 1,
        duration: 1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: ".section5-container",
          start: "top 80%",
          end: "top 40%",
          scrub: true,
          once: true,
        },
      }
    );
  }, []);
  return (
    <div className="section5-container">
      <div className="section5-img1">
        <div className="section5-text">
          <img
            className="webflow1"
            src="https://cdn.prod.website-files.com/66d745be9e684f30f3960c6a/66d745be9e684f30f3960e8c_webflow-logo-brix-blocks.svg"
            alt=""
          />
          <h2>Buy Now on Webflow</h2>
          <p>
            Get the Brandingfolio X Webflow Template today, <br /> and take your
            website design to the next level.
          </p>
          <button>Buy template</button>
        </div>
        <img
          className="webflow2"
          src="https://cdn.prod.website-files.com/66d745be9e684f30f3960c6a/66d745be9e684f30f3960fc5_brandingfolio-x-brandingfolio-banner-branding-agency-webflow-template.png"
          alt=""
        />
      </div>

      <div className="section5-img2">
        <div className="section5-text2">
          <img
            className="brix1"
            src="https://cdn.prod.website-files.com/66d745be9e684f30f3960c6a/66d745be9e684f30f3960e4d_brix-templates-icon-square-brix-templates.png"
            alt=""
          />
          <h2>Browse all templates</h2>
          <p>
            Looking for more templates? Browse our collection of <br /> 100+
            Webflow Template on BRIXTemplates.com
          </p>
          <button>Explore more templates</button>
        </div>
        <img
          className="brix2"
          src="https://cdn.prod.website-files.com/66d745be9e684f30f3960c6a/66d745be9e684f30f3960f4f_brandingfolio-x-brix-included-branding-agency-webflow-template.png"
          alt=""
        />
      </div>
    </div>
  );
}

export default Section5;
