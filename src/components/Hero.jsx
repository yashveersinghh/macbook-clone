const Hero = () => {
  return (
    <section id="hero">
        <div>
            <h1 className="text-3xl">MacBook Pro</h1>
            <img src="title.png" alt="MacBook Title" className="w-full h-25"/>
        </div>
        <video src="/videos/hero.mp4" autoPlay muted playsInline loop className="w-full max-h-[50vh] object-contain mx-auto"></video>
        <button className="px-5 py-3 text-sm bg-primary text-white rounded-full font-medium hover:bg-white hover:text-black transition-all duration-300 mb-4 mt-0">
  Buy
</button>

        <p className="text-xl">From $1599 or $133/mo for 12 months</p>
    </section>
  )
}

export default Hero