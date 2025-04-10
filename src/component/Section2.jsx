import "../styles/Section2.css";
import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const pages = [
  {
    title: "Home V1",
    img: "66d745be9e684f30f3960fc3_brandingfolio-x-home-v1-main-page-branding-agency-webflow-template.png",
  },
  {
    title: "Home V2",
    img: "66d745be9e684f30f3960f59_brandingfolio-x-home-v2-main-page-branding-agency-webflow-template.png",
  },
  {
    title: "Home V3",
    img: "66d745be9e684f30f3960f5b_brandingfolio-x-home-v3-main-page-branding-agency-webflow-template.png",
  },
  {
    title: "About",
    img: "66d745be9e684f30f3960f53_brandingfolio-x-about-main-page-branding-agency-webflow-template.png",
  },
  {
    title: "Blog V1",
    img: "66d745be9e684f30f3960f6f_brandingfolio-x-blog-v1-main-page-branding-agency-webflow-template.png",
  },
  {
    title: "Blog V2",
    img: "66d745be9e684f30f3960f56_brandingfolio-x-blog-v2-main-page-branding-agency-webflow-template.png",
  },
  {
    title: "Blog V3",
    img: "66d745be9e684f30f3960f54_brandingfolio-x-blog-v3-main-page-branding-agency-webflow-template.png",
  },
  {
    title: "Blog Post",
    img: "66d745be9e684f30f3960f3b_brandingfolio-x-blog-posts-page-branding-agency-webflow-template.png",
  },
  {
    title: "Blog Category",
    img: "66d745be9e684f30f3960f52_brandingfolio-x-blog-category-main-page-branding-agency-webflow-template.png",
  },
  {
    title: "Team Member",
    img: "66d745be9e684f30f3960fc3_brandingfolio-x-home-v1-main-page-branding-agency-webflow-template.png",
  },
  {
    title: "Portfolio",
    img: "66d745be9e684f30f3960fc3_brandingfolio-x-home-v1-main-page-branding-agency-webflow-template.png",
  },
  {
    title: "Portfolio Single",
    img: "66d745be9e684f30f3960f5c_brandingfolio-x-portfolio-single-main-page-branding-agency-webflow-template.png",
  },
  {
    title: "Packages",
    img: "66d745be9e684f30f3960f3a_brandingfolio-x-packages-page-branding-agency-webflow-template.png",
  },
  {
    title: "Packages Single",
    img: "66d745be9e684f30f3960f5e_brandingfolio-x-packages-single-main-page-branding-agency-webflow-template.png",
  },
  {
    title: "Contact V1",
    img: "66d745be9e684f30f3960f57_brandingfolio-x-contact-v1-main-page-branding-agency-webflow-template.png",
  },
  {
    title: "Contact V2",
    img: "66d745be9e684f30f3960f55_brandingfolio-x-contact-v2-main-page-branding-agency-webflow-template.png",
  },
  {
    title: "Contact V3",
    img: "66d745be9e684f30f3960f58_brandingfolio-x-contact-v3-main-page-branding-agency-webflow-template.png",
  },
];

function Section2() {
  useEffect(() => {
    gsap.fromTo(
      ".section2-text",
      {
        opacity: 0,
      },
      {
        opacity: 1,
        duration: 0.5,
        scrollTrigger: {
          trigger: ".section2-text",
          start: "top 80%",
          end: "top 40%",
          scrub: true,
          once: true,
        },
      }
    );

    gsap.utils.toArray(".card-section2").forEach((card) => {
      gsap.fromTo(
        card,
        { opacity: 0, y: 100 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: "power2.out",
          scrollTrigger: {
            trigger: card,
            start: "top 80%",
            end: "top 50%",
            once: true,
          },
        }
      );
    });

    gsap.fromTo(
      ".btn-section2",
      {
        opacity: 0,
        y: 100,
      },
      {
        opacity: 1,
        y: 0,
        duration: 0.5,
        scrollTrigger: {
          trigger: ".btn-section2",
          start: "top 80%",
          end: "top 40%",
          scrub: true,
          once: true,
        },
      }
    );
  }, []);
  return (
    <div className="section2-container">
      <div className="section2-text">
        <h2>Main Pages</h2>
        <p>
          Take a look at the main pages included in the Brandingfolio X
          Template.
        </p>
      </div>

      <div className="section2-images">
        {pages.map(({ title, img }) => (
          <div className="card-section2" key={title}>
            <img
              src={`https://cdn.prod.website-files.com/66d745be9e684f30f3960c6a/${img}`}
              alt={title}
            />
            <div className="card2-text">
              <h2>{title}</h2>
            </div>
          </div>
        ))}
        <div className="section2-bottom"></div>
      </div>
      <button className="btn-section2">Buy template</button>
    </div>
  );
}

export default Section2;
