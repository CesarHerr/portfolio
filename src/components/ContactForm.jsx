function ContactForm() {
  return (
    <section className="flex justify-center items-center h-screen
    leftSide relative" id="contactForm">
      <h2 className="absolute top-4 text-6xl font-bold">Contact</h2>

      <form className="w-8/12">
        <input className="w-full border rounded py-2" type="text" id="name" placeholder=" Name" />

        <input className="w-full border my-6 rounded py-2" type="email" id="email" placeholder=" email" />

        <textarea id="message" className="border w-full rounded py-2" placeholder="  Write your message" />
      </form>
    </section>
  );
}

export default ContactForm;