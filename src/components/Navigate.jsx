function Navigate() {
  return (
    <section className="flex flex-col items-end fixed mt-32 right-10 rightSide">
      <h2 className="w-full text-left text-4xl font-dancing">Hey There.</h2>
      <h2 className="w-full text-left text-4xl font-dancing">I'm César.</h2>
      <h3 className="w-full text-left text-3xl mt-4">I&apos;m a Software Developer</h3>
      <p className="pt-10 w-full text-left"> I can help you build a product , feature or website Look through some of my work and 
        experience! If you like what you see and have a project you need coded, 
        don&apos;t hesitate to contact me.</p>
      <nav className="flex flex-col items-start pt-32 leading-8 w-4/5">
        <a href="#computer"> ◀️ About</a>
        <a href="#projects" className="my-6"> ◀️ Projects</a>
        <a href="#skills" className="mb-6"> ◀️ Skills</a>
        <a href="#contactForm"> ◀️ Contact</a>
      </nav>
    </section>
  );
}

export default Navigate;
