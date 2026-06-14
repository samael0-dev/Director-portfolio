export const Hero = () => {
  return (
    <section id="hero" className="w-screen flex h-screen items-center">
        <div className="flex flex-col gap-3 pb-25 pl-2">
            <div className="md:2xl">Director · Screenwriter · Producer</div>
            <h1 className="text-9xl">
            Bend<br />
            <span>Reality</span>
            </h1>
            <p className="w-100">A filmmaker who treats the cinema screen as a philosophical instrument — reordering time, collapsing identity, and restoring wonder to the multiplex.</p>
            <div className="hero-scroll">Scroll to explore</div>
        </div>
    </section>
  )
}

export default Hero;
