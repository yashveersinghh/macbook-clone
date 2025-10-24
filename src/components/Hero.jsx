const Hero = () => {
  return (
    <section id="hero">
        <div>
            <h1>MacBook Pro</h1>
            <img src="title.png" alt="MacBook Title" className="w-95 h-20"/>
        </div>
        <video src="/videos/hero.mp4" autoPlay muted playsInline loop className="w-[80%] max-h-[35vh] object-contain mx-auto"></video>
        <button className="px-3 py-1 text-[10px] bg-primary text-white rounded-full font-medium hover:bg-white hover:text-black transition-all duration-300 mb-2 mt-0">
  Buy
</button>

        <p className="text-[10px]">From $1599 or $133/mo for 12 months</p>
    </section>
  )
}

export default Hero