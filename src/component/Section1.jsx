import "../styles/Section1.css";
import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function Section1() {
  useEffect(() => {
    gsap.fromTo(
      ".section1-text",
      {
        opacity: 0,
        y: 100,
      },
      {
        opacity: 1,
        y: 0,
        scrollTrigger: {
          trigger: ".section1-text",
          start: "top 80%",
          end: "top 60%",
          scrub: true,
          once: true,
        },
      }
    );
  }, []);

  useEffect(() => {
    gsap.fromTo(
      ".card-section1",
      {
        opacity: 0,
        y: -100,
      },
      {
        opacity: 1,
        y: 0,
        stagger: 0.2,
        duration: 0.5,
        scrollTrigger: {
          trigger: ".section1-image",
          start: "top 80%",
          end: "top 40%",
          scrub: true,
          once: true,
        },
      }
    );

    gsap.fromTo(
      ".information1",
      {
        opacity: 0,
        y: 100,
      },
      {
        opacity: 1,
        y: 0,
        duration: 0.5,
        scrollTrigger: {
          trigger: ".information1",
          start: "top 80%",
          end: "top 40%",
          scrub: true,
          once: true,
        },
      }
    );

    gsap.fromTo(
      ".information2",
      {
        opacity: 0,
        y: 100,
      },
      {
        opacity: 1,
        y: 0,
        duration: 0.5,
        scrollTrigger: {
          trigger: ".information2",
          start: "top 80%",
          end: "top 40%",
          scrub: true,
          once: true,
        },
      }
    );

    gsap.fromTo(
      ".btn-section1",
      {
        opacity: 0,
        y: 100,
      },
      {
        opacity: 1,
        y: 0,
        duration: 0.5,
        scrollTrigger: {
          trigger: ".btn-section1",
          start: "top 80%",
          end: "top 40%",
          scrub: true,
          once: true,
        },
      }
    );
  }, []);
  return (
    <>
      <div className="section1-container">
        <div className="section1-text">
          <h1>
            What is included in <br /> Brandingfolio X
          </h1>
          <p>
            <b>Brandingfolio X Webflow</b> Template includes over{" "}
            <b>
              19 <br /> pages in total
            </b>
            , with more than <b>35 sections.</b>
          </p>
        </div>
        <div className="section1-image">
          <div className="card-section1">
            <img
              src="https://cdn.prod.website-files.com/66d745be9e684f30f3960c6a/66d745be9e684f30f3960fc4_brandingfolio-x-10-pages-included-branding-agency-webflow-template.png"
              alt=""
            />
            <div className="card-text">
              <h2>19+ Pages</h2>
            </div>
          </div>

          <div className="card-section1">
            <img
              src="https://cdn.prod.website-files.com/66d745be9e684f30f3960c6a/66d745be9e684f30f3960f3d_brandingfolio-x-35-sections-included-branding-agency-webflow-template.png"
              alt=""
            />
            <div className="card-text">
              <h2>35+ Section</h2>
            </div>
          </div>

          <div className="card-section1">
            <img
              src="https://cdn.prod.website-files.com/66d745be9e684f30f3960c6a/66d745be9e684f30f3960f50_brandingfolio-x-35-styles-and-symbols-included-branding-agency-webflow-template.png"
              alt=""
            />
            <div className="card-text">
              <h2>25+ Styles & Symbols</h2>
            </div>
          </div>
        </div>
      </div>
      <div className="container-information1">
        <div className="information1">
          <div className="information1-text">
            <img
              className="figma"
              src="https://cdn.prod.website-files.com/66d745be9e684f30f3960c6a/66d745be9e684f30f3960fba_figma-icon-brandingfolio-x-webflow-template.svg"
              alt=""
            />
            <h1>Figma file included</h1>
            <p>
              Send us an email to <br /> brandingfoliox@brixtemplates.com with
              your <br /> purchase receipt, and we will send you the editable{" "}
              <br /> Figma file for the Brandingfolio X template.
            </p>
            <button>Request figma file</button>
          </div>
          <img
            className="image-figma"
            src="https://cdn.prod.website-files.com/66d745be9e684f30f3960c6a/66d745be9e684f30f3960fc2_brandingfolio-x-figma-included-branding-agency-webflow-template.png"
            alt=""
          />
        </div>

        <div className="information2">
          <img
            className="image-webflow"
            src="https://cdn.prod.website-files.com/66d745be9e684f30f3960c6a/66d745be9e684f30f3960f4f_brandingfolio-x-brix-included-branding-agency-webflow-template.png"
            alt=""
          />
          <div className="information2-text">
            <img
              className="webflow"
              src="https://cdn.prod.website-files.com/66d745be9e684f30f3960c6a/66d745be9e684f30f3960fbd_brix-templates-icon-brandingfolio-x-webflow-template.svg"
              alt=""
            />
            <h1>
              Looking for more <br /> amazing Webflow <br /> Templates?
            </h1>
            <p>
              Take a look at our collection of 100+ <br /> premium Webflow
              Templates at BRIX <br /> Templates.
            </p>
            <button>Browse templates</button>
          </div>
        </div>

        <button className="btn-section1">Buy template</button>
      </div>
    </>
  );
}

export default Section1;
