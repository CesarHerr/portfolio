function Navigate() {
  return (
    <section className="flex flex-col items-end fixed mt-32 right-10 rightSide">
      <h2 className="w-full text-left text-4xl">Hey There.</h2>
      <h2 className="w-full text-left text-4xl">I&apos;m a Software Developer</h2>
      <p className="pt-10 w-full text-left"> I can help you build a product , feature or website Look through some of my work and 
        experience! If you like what you see and have a project you need coded, 
        don&apos;t hesitate to contact me.</p>
      <nav className="flex flex-col items-start pt-32 leading-8 w-2/4">
        <a href="#computer"> ◀️ About</a>
        <a href="#projects"> ◀️ Projects</a>
        <a href="#skills"> ◀️ Skills</a>
        <a href="#contactForm"> ◀️ Contact</a>
      </nav>
    </section>
  );
}

export default Navigate;
