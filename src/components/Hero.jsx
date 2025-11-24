import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { heroVideo , smallHeroVideo } from "../utils";
import { useEffect, useState } from "react";
const Hero = () => {
    const [videosrc , setvideosrc] = useState(window.innerWidth < 760 ? smallHeroVideo : heroVideo);

    const handleScreenResize = () => {
        if (window.innerWidth < 760) 
            setvideosrc(smallHeroVideo);
        else
            setvideosrc(heroVideo);
    }
    useEffect(() => {
        window.addEventListener("resize" , handleScreenResize);
        return () => {
            window.removeEventListener("resize" , handleScreenResize);
        }
    } , [])
  useGSAP(() => {
    gsap.to(".hero-title", {
      opacity: 1,
      y : 20,
      delay: 2,
    });
    gsap.to("#cta", {
      opacity: 1,
      y: -50,
      delay: 2,
      stagger: 0.1
    });
  }, []);
  return (
    <section className="w-full nav-height relative">
      <div className="w-full flex-col flex-center h-5/6">
        <p className="hero-title">iPhone 15 pro max</p>
        <div className="md:w-10/12 w-9/12">
          <video src={videosrc} autoPlay muted></video>
        </div>
      </div>
      <div id="cta" className="flex text-white flex-col items-center opacity-0 translate-y-20">
        <a href="#highlights" className="btn">Buy</a>
        <p className="font-normal text-xl">From $199/month or $999</p>
      </div>
    </section>
  );
};

export default Hero;
