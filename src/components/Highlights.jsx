import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { watchImg, rightImg } from "../utils";
import VideoCarousel from "./VideoCarousel";
import ScrollTrigger from "gsap/all"
gsap.registerPlugin(ScrollTrigger);
const Highlights = () => {
  useGSAP(() => {
    gsap.to("#title", {
      y: 0,
      opacity: 1,
      scrollTrigger : {
        trigger : "#title"
      }
    });
    gsap.to(".link", {
      y: 0,
      opacity: 1,
      stagger: 0.2,
      scrollTrigger : {
        trigger : ".link" 
      }
    });
  }, []);
  return (
    <section
      id="highlights"
      className="w-full bg-zinc h-full overflow-hidden common-padding"
    >
      <div className="screen-max-width">
        <div className="mb-12 w-full flex items-center justify-between flex-wrap">
          <h1 id="title" className="section-heading">
            Get the highlights.
          </h1>
          <div className="flex flex-wrap items-end gap-5">
            <p className="link">
              Wath the film
              <img src={watchImg} alt="watch" className="ml-2" />
            </p>
            <p className="link">
              Wath the event
              <img src={rightImg} alt="event" className="ml-2" />
            </p>
          </div>
        </div>
        <VideoCarousel />
      </div>
    </section>
  );
};

export default Highlights;
