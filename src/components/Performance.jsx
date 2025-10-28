import { useRef } from "react"
import { useGSAP } from "@gsap/react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { performanceImages, performanceImgPositions } from "../constants"

gsap.registerPlugin(ScrollTrigger)

const Performance = () => {
  const sectionRef = useRef()

  useGSAP(() => {
    gsap.fromTo(".content p", 
      {
        opacity: 0,
        y: 30
      },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
          end: "bottom 20%",
          toggleActions: "play none none reverse"
        }
      }
    )

    const isDesktop = window.innerWidth > 1024
    
    if (isDesktop) {
      performanceImages.forEach(({ id }) => {
        if (id !== "p5") {
          const imgElement = document.querySelector(`#${id}`)
          if (imgElement) {
            gsap.set(imgElement, {
              position: "absolute",
              opacity: 0,
              scale: 0.8
            })
          }
        }
      })

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 60%",
          end: "bottom 40%",
          scrub: 1,
          onRefresh: () => {
            performanceImgPositions.forEach(({ id, left, right, bottom, transform }) => {
              if (id !== "p5") {
                const imgElement = document.querySelector(`#${id}`)
                if (imgElement) {
                  const finalPosition = {}
                  if (left !== undefined) finalPosition.left = `${left}%`
                  if (right !== undefined) finalPosition.right = `${right}%`
                  if (bottom !== undefined) finalPosition.bottom = `${bottom}%`
                  if (transform) finalPosition.transform = transform
                  
                  gsap.set(imgElement, finalPosition)
                }
              }
            })
          }
        }
      })

      performanceImgPositions.forEach(({ id, left, right, bottom, transform }) => {
        if (id !== "p5") {
          const finalPosition = {
            opacity: 1,
            scale: 1,
            duration: 0.8,
            ease: "power2.out"
          }
          
          if (left !== undefined) finalPosition.left = `${left}%`
          if (right !== undefined) finalPosition.right = `${right}%`
          if (bottom !== undefined) finalPosition.bottom = `${bottom}%`
          if (transform) finalPosition.transform = transform
          
          tl.to(`#${id}`, finalPosition, 0)
        }
      })
    }

    const handleResize = () => {
      ScrollTrigger.refresh()
    }
    
    window.addEventListener('resize', handleResize)
    
    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, { scope: sectionRef })

  return (
    <section id="performance" ref={sectionRef}>
        <h2>Next-level graphics performance. Game on.</h2>

        <div className="wrapper">
            {performanceImages.map(({ id, src})=>(
                <img key={id} id={id} src={src} alt={id} />
            ))}
        </div>
        <div className="content">
            <p>
                Run graphics-intensive workflowswith a responsiveness that keeps up with yout imagination. The M4 family of chips features a GPU with a second-generation hardware-accelerated ray tracing engine that renders image faster, so 
                {' '}<span className="text-white">
                    gaming feels more immersive and realistic than ever.
                </span> {' '}
                And Dynamic Caching optimizes fast on-chip memory to dramatically increase average GPU utilization ---driving a huge performance boost for the most demanding pro apps and games.
            </p>
        </div>
    </section>
  )
}

export default Performance