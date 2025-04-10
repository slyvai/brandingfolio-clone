import "../styles/Section4.css";
import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function Section4() {
  useEffect(() => {
    gsap.fromTo(
      ".section4-text",
      {
        opacity: 0,
        y: 100,
      },
      {
        opacity: 1,
        y: 0,
        duration: 0.5,
        scrollTrigger: {
          trigger: ".section4-text",
          start: "top 80%",
          end: "top 40%",
          scrub: true,
          once: true,
        },
      }
    );

    gsap.utils.toArray(".information-sec4").forEach((section) => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: section,
          start: "top 80%",
          end: "bottom 50%",
          toggleActions: "play none none none",
        },
      });

      tl.fromTo(
        section.querySelector("img"),
        { opacity: 0, y: -50 },
        { opacity: 1, y: 0, duration: 0.6, ease: "power2.out" }
      );

      tl.fromTo(
        section.querySelector(".card2-text2"),
        { opacity: 0, y: 50 },
        { opacity: 1, y: 0, duration: 0.8, ease: "power2.out" },
        "-=0.3"
      );
    });
  }, []);

  return (
    <div className="section4-container">
      <div className="section4-text">
        <h1>
          The Brandingfolio X Webflow <br /> Template also comes with <br />
          more surprises...
        </h1>
      </div>
      <div className="card-information2">
        <div className="information1-sec4 information-sec4">
          <div className="card2-text2">
            <h2>3 Headers and Footers</h2>
            <p>
              With a total of 3 different headers and footers, you <br /> can
              easily customize the Brandingfolio X Webflow <br /> Template to
              fit your company needs <br /> and requirements.
            </p>
            <button className="buy">Buy template</button>
          </div>
          <img
            src="https://cdn.prod.website-files.com/66d745be9e684f30f3960c6a/66d745be9e684f30f3960f75_brandingfolio-x-3-headers-and-footers-branding-agency-webflow-template.png"
            alt=""
          />
        </div>

        <div className="information2-sec4 information-sec4">
          <img
            src="https://cdn.prod.website-files.com/66d745be9e684f30f3960c6a/66d745be9e684f30f3960f73_brandingfolio-x-3-notification-bars-branding-agency-webflow-template.png"
            alt=""
          />
          <div className="card2-text2">
            <h2>3 Notification Bars</h2>
            <p>
              If you are looking to get more sales, use one of our 3 <br />{" "}
              notification bars included in the Brandingfolio X <br /> Webflow
              Template, and start promoting your <br /> products or services.
            </p>
            <button className="buy">Buy template</button>
          </div>
        </div>

        <div className="information3-sec4 information-sec4">
          <div className="card2-text2">
            <h2>Custom Icon Set</h2>
            <p>
              The Brandingfolio X Webflow Template includes 3 <br /> sets of
              custom icons (rounded, square and filled), so <br /> you can
              easily use more icon fonts in your template. <br />
              No matter if you are looking to add another social <br /> media
              icon in the footer, or change the cart icon in <br /> the header,
              we got you covered.
            </p>
            <button className="buy">Buy template</button>
            <button className="download">Download icons</button>
          </div>
          <img
            src="https://cdn.prod.website-files.com/66d745be9e684f30f3960c6a/66d745be9e684f30f3960f74_brandingfolio-x-custom-icon-set-branding-agency-webflow-template.png"
            alt=""
          />
        </div>

        <div className="information4-sec4 information-sec4">
          <img
            src="https://cdn.prod.website-files.com/66d745be9e684f30f3960c6a/66d745be9e684f30f3960f77_brandingfolio-x-social-media-assets-branding-agency-webflow-template.png"
            alt=""
          />
          <div className="card2-text2">
            <h2>Social Media Assets</h2>
            <p>
              Our Brandingfolio X Webflow Template Figma file <br /> includes a
              collection of social media covers that <br /> match with the
              Webflow Template design (for <br /> Facebook, Twitter and
              LinkedIn), so you can easily <br /> edit, customize, and use them
              for your own social <br /> media profiles.
            </p>
            <button className="buy">Buy template</button>
          </div>
        </div>

        <div className="information5-sec4 information-sec4">
          <div className="card2-text2">
            <h2>Email Signature</h2>
            <p>
              Our Brandingfolio X Webflow Template Figma file <br /> includes 2
              custom email signature templates that <br /> match with the
              Webflow template, and you can use <br /> them to impress your
              customers with an amazing <br /> email signature.
            </p>
            <button className="buy">Buy template</button>
          </div>
          <img
            src="https://cdn.prod.website-files.com/66d745be9e684f30f3960c6a/66d745be9e684f30f3960f78_brandingfolio-x-email-signature-branding-agency-webflow-template.png"
            alt=""
          />
        </div>
      </div>
    </div>
  );
}

export default Section4;
