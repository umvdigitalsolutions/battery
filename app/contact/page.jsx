export default function ContactPage() {
  return (
    <section className="relative overflow-hidden bg-white py-20">
      
      {/* Background Glow */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute left-0 top-0 h-[350px] w-[350px] rounded-full bg-red-100 blur-3xl" />
        <div className="absolute bottom-0 right-0 h-[350px] w-[350px] rounded-full bg-blue-100 blur-3xl" />
      </div>

      <div className="mx-auto max-w-5xl px-6">

        {/* Header */}
        <div className="text-center">
          <div className="mb-4 inline-flex rounded-full border border-blue-200 bg-blue-50 px-4 py-1 text-sm font-semibold text-blue-700">
            Contact Us
          </div>

          <h1 className="text-4xl font-black tracking-tight text-zinc-900 md:text-5xl">
            Get In Touch With
            <span className="ml-3 bg-gradient-to-r from-red-600 to-blue-700 bg-clip-text text-transparent">
              Anay Infinity
            </span>
          </h1>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-zinc-600">
            Connect with us for batteries, solar solutions, UPS systems,
            industrial power solutions, exports, and business partnerships.
          </p>
        </div>

        {/* Contact Cards */}
        <div className="mt-16 grid gap-8 md:grid-cols-3">

          {/* Email */}
          <div className="rounded-[30px] border border-zinc-200 bg-white p-8 text-center shadow-xl transition hover:-translate-y-2 hover:shadow-2xl">
            
            <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-red-100">
              <span className="text-2xl">✉️</span>
            </div>

            <h3 className="mt-6 text-2xl font-bold text-zinc-900">
              Email
            </h3>

            <p className="mt-3 text-zinc-600">
              Reach us anytime via email.
            </p>

            <a
              href="mailto:ansh@anayinfinity.com"
              className="mt-6 inline-block font-semibold text-blue-700 hover:text-red-600"
            >
              ansh@anayinfinity.com
            </a>
          </div>

          {/* Phone */}
          <div className="rounded-[30px] border border-zinc-200 bg-white p-8 text-center shadow-xl transition hover:-translate-y-2 hover:shadow-2xl">
            
            <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-blue-100">
              <span className="text-2xl">📞</span>
            </div>

            <h3 className="mt-6 text-2xl font-bold text-zinc-900">
              Call Us
            </h3>

            <p className="mt-3 text-zinc-600">
              Speak directly with our team.
            </p>

            <div className="mt-6 space-y-2">
              <a
                href="tel:+919468849961"
                className="block font-semibold text-blue-700 hover:text-red-600"
              >
                +91 94688 49961
              </a>

              <a
                href="tel:+917976407676"
                className="block font-semibold text-blue-700 hover:text-red-600"
              >
                +91 79764 07676
              </a>
            </div>
          </div>

          {/* WhatsApp */}
          <div className="rounded-[30px] border border-zinc-200 bg-white p-8 text-center shadow-xl transition hover:-translate-y-2 hover:shadow-2xl">
            
            <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-green-100">
              <span className="text-2xl">💬</span>
            </div>

            <h3 className="mt-6 text-2xl font-bold text-zinc-900">
              WhatsApp
            </h3>

            <p className="mt-3 text-zinc-600">
              Chat instantly for quick support.
            </p>

            <a
              href="https://wa.me/919468849961"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-flex rounded-xl bg-gradient-to-r from-red-600 to-blue-700 px-6 py-3 text-sm font-semibold text-white shadow-md transition hover:opacity-90"
            >
              Chat on WhatsApp
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}