import { performanceImages } from "../constants"

const Performance = () => {
  return (
    <section id="performance">
        <h2>Next-level graphics performance. Game on.</h2>

        <div className="wrapper">
            {performanceImages.map(({ id, src})=>(
                <img key={id} src={src} alt={id} />
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