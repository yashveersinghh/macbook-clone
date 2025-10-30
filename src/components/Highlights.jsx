import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useMediaQuery } from "react-responsive";

gsap.registerPlugin(ScrollTrigger);

const Highlights = () => {
  const isMobile = useMediaQuery('(max-width: 1024px)');
  const sectionRef = useRef(null);

  useGSAP(
    () => {
      gsap.to(['.left-column', '.right-column'], {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: isMobile ? 'bottom bottom' : 'top top',
        },
        y: 0,
        opacity: 1,
        duration: 1,
        ease: 'power1.inOut',
        stagger: 0.5,
      });
    },
    { scope: sectionRef, dependencies: [isMobile] }
  );

  return (
    <section id="highlights" ref={sectionRef}>
      <h2>There's never been a better time to upgrade.</h2>
      <h3>Here's what you get with the new MacBook Pro.</h3>

      <div className="masonry">
        <div className="left-column">
          <div>
            <img src="/laptop.png" alt="Laptop" />
            <p>Fly through demanding tasks up to 9.8x faster.</p>
          </div>
          <div>
            <img src="/sun.png" alt="Sun" />
            <p>
              A stunning.<br />
              Liquid Retina XDR<br />
              display.
            </p>
          </div>
        </div>

        <div className="right-column">
          <div className="apple-gradient">
            <img src="/ai.png" alt="AI" />
            <p>
              Built for <br />
              <span>Apple Intelligence.</span>
            </p>
          </div>
          <div>
            <img src="/battery.png" alt="Battery" />
            <p>
              Up to
              <span className="green-gradient">{' '}14 more hours{' '}</span>
              battery life.
              <span className="text-dark-100">{' '}(Up to 24 hours total)</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Highlights;
