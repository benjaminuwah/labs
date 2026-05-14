const Contact = () => {
  return (
    <>
      <section className="bg-graphite-gray px-8 py-20 text-white">
        <div className="container mx-auto max-w-6xl">
          <div className="mb-14 max-w-3xl">
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.3em] text-defence-gold">
              Contact Us
            </p>
            <h1 className="mb-6 text-4xl font-bold md:text-5xl">
              Let’s discuss your operational needs
            </h1>
            <p className="text-lg leading-8 text-gray-300">
              Reach out to LAB Defence Solutions for tailored defence, security,
              and technology partnership opportunities.
            </p>
          </div>

          <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
            <div className="space-y-6">
              <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
                <h2 className="mb-4 text-2xl font-semibold">Contact Details</h2>

                <div className="space-y-5 text-gray-300">
                  <div>
                    <p className="mb-1 text-sm uppercase tracking-wider text-defence-gold">
                      Address
                    </p>
                    <p>Plot 414, Katampe Close, Katampe, Abuja, Nigeria.
                    </p>
                  </div>

                  <div>
                    <p className="mb-1 text-sm uppercase tracking-wider text-defence-gold">
                      Phone
                    </p>
                    <a
                      href="tel:+44(0)2046187334"
                      className="hover:text-defence-gold transition-colors"
                    >
                      +44 (0) 2046 187 334                    </a>
                  </div>

                  <div>
                    <p className="mb-1 text-sm uppercase tracking-wider text-defence-gold">
                      Email
                    </p>
                    <a
                      href="mailto:info@labdefence.com
"
                      className="hover:text-defence-gold transition-colors"
                    >
                      info@labdefence.com
                    </a>
                  </div>
                </div>
              </div>

              <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
                <h3 className="mb-3 text-xl font-semibold">Office Hours</h3>
                <p className="text-gray-300">
                  Monday to Friday
                  <br />
                  09:00 – 18:00
                </p>
              </div>
            </div>

            <form className="rounded-2xl bg-white p-6 text-gray-900 shadow-xl md:p-8">
              <h2 className="mb-6 text-2xl font-semibold text-deep-navy">
                Send a Message
              </h2>

              <div className="grid gap-5 md:grid-cols-2">
                <div>
                  <label
                    htmlFor="firstName"
                    className="mb-2 block text-sm font-medium"
                  >
                    First Name
                  </label>
                  <input
                    id="firstName"
                    type="text"
                    placeholder="Your first name"
                    className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none transition focus:border-defence-gold"
                  />
                </div>

                <div>
                  <label
                    htmlFor="lastName"
                    className="mb-2 block text-sm font-medium"
                  >
                    Last Name
                  </label>
                  <input
                    id="lastName"
                    type="text"
                    placeholder="Your last name"
                    className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none transition focus:border-defence-gold"
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="mb-2 block text-sm font-medium"
                  >
                    Email
                  </label>
                  <input
                    id="email"
                    type="email"
                    placeholder="your.email@example.com"
                    className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none transition focus:border-defence-gold"
                  />
                </div>

                <div>
                  <label
                    htmlFor="phone"
                    className="mb-2 block text-sm font-medium"
                  >
                    Phone
                  </label>
                  <input
                    id="phone"
                    type="tel"
                    placeholder="+90 000 000 00 00"
                    className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none transition focus:border-defence-gold"
                  />
                </div>

                <div className="md:col-span-2">
                  <label
                    htmlFor="subject"
                    className="mb-2 block text-sm font-medium"
                  >
                    Subject
                  </label>
                  <input
                    id="subject"
                    type="text"
                    placeholder="How can we help?"
                    className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none transition focus:border-defence-gold"
                  />
                </div>

                <div className="md:col-span-2">
                  <label
                    htmlFor="message"
                    className="mb-2 block text-sm font-medium"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows={5}
                    placeholder="Tell us about your request"
                    className="w-full resize-none rounded-lg border border-gray-300 px-4 py-3 outline-none transition focus:border-defence-gold"
                  />
                </div>
              </div>

              <button
                type="submit"
                className="mt-6 rounded-lg bg-defence-gold px-8 py-3 font-semibold text-white transition hover:bg-defence-gold/80"
              >
                Submit Message
              </button>
            </form>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;