export default function ContactPage() {
  return (
    <section className="relative w-full overflow-x-hidden bg-white py-8 sm:py-16 lg:py-20">
      {/* Background Glow */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute left-[-80px] top-0 h-[240px] w-[240px] rounded-full bg-red-100 blur-3xl sm:left-0 sm:h-[350px] sm:w-[350px]" />
        <div className="absolute bottom-0 right-[-80px] h-[240px] w-[240px] rounded-full bg-blue-100 blur-3xl sm:right-0 sm:h-[350px] sm:w-[350px]" />
      </div>

      <div className="mx-auto w-full max-w-5xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center">
          <div className="mb-4 inline-flex max-w-full rounded-full border border-blue-200 bg-blue-50 px-3 py-1 text-xs font-semibold text-blue-700 sm:px-4 sm:text-sm">
            Contact Us
          </div>

          <h1 className="balanced-heading break-words text-3xl font-black tracking-tight text-zinc-900 sm:text-4xl md:text-5xl">
            Get In Touch With
            <span className="block bg-gradient-to-r from-red-600 to-blue-700 bg-clip-text text-transparent sm:ml-3 sm:inline">
              Anay Infinity
            </span>
          </h1>

          <p className="mx-auto mt-5 max-w-3xl text-center text-sm leading-7 text-zinc-600 sm:mt-6 sm:text-lg sm:leading-8">
            Connect with us for batteries, solar solutions, UPS systems,
            industrial power solutions, exports, and business partnerships.
          </p>
        </div>

        {/* Contact Cards */}
        <div className="mt-10 grid grid-cols-1 gap-5 sm:mt-16 sm:gap-8 md:grid-cols-3">
          {/* Email */}
          <div className="min-w-0 rounded-2xl border border-zinc-200 bg-white p-5 text-center shadow-lg transition hover:-translate-y-2 hover:shadow-2xl sm:rounded-[28px] sm:p-8">
            <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-red-100 sm:h-16 sm:w-16">
              <span className="text-2xl">@</span>
            </div>

            <h3 className="mt-5 text-xl font-bold text-zinc-900 sm:mt-6 sm:text-2xl">
              Email
            </h3>

            <p className="mt-3 text-center text-sm leading-6 text-zinc-600 sm:text-base">
              Reach us anytime via email.
            </p>

            <a
              href="mailto:ansh@anayinfinity.com"
              className="mt-5 inline-block max-w-full break-all text-sm font-semibold text-blue-700 hover:text-red-600 sm:mt-6 sm:break-words sm:text-base"
            >
              ansh@anayinfinity.com
            </a>
          </div>

          {/* Phone */}
          <div className="min-w-0 rounded-2xl border border-zinc-200 bg-white p-5 text-center shadow-lg transition hover:-translate-y-2 hover:shadow-2xl sm:rounded-[28px] sm:p-8">
            <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-blue-100 sm:h-16 sm:w-16">
              <span className="text-2xl">☎</span>
            </div>

            <h3 className="mt-5 text-xl font-bold text-zinc-900 sm:mt-6 sm:text-2xl">
              Call Us
            </h3>

            <p className="mt-3 text-center text-sm leading-6 text-zinc-600 sm:text-base">
              Speak directly with our team.
            </p>

            <div className="mt-5 space-y-2 sm:mt-6">
              <a
                href="tel:+919468849961"
                className="block text-sm font-semibold text-blue-700 hover:text-red-600 sm:text-base"
              >
                +91 94688 49961
              </a>

              <a
                href="tel:+917976407676"
                className="block text-sm font-semibold text-blue-700 hover:text-red-600 sm:text-base"
              >
                +91 79764 07676
              </a>
            </div>
          </div>

          {/* WhatsApp */}
          <div className="min-w-0 rounded-2xl border border-zinc-200 bg-white p-5 text-center shadow-lg transition hover:-translate-y-2 hover:shadow-2xl sm:rounded-[28px] sm:p-8">
            <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-green-100 sm:h-16 sm:w-16">
              <span className="text-xl font-semibold sm:text-2xl">WA</span>
            </div>

            <h3 className="mt-5 text-xl font-bold text-zinc-900 sm:mt-6 sm:text-2xl">
              WhatsApp
            </h3>

            <p className="mt-3 text-center text-sm leading-6 text-zinc-600 sm:text-base">
              Chat instantly for quick support.
            </p>

            <a
              href="https://wa.me/919468849961"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-5 inline-flex w-full max-w-[220px] items-center justify-center rounded-xl bg-gradient-to-r from-red-600 to-blue-700 px-4 py-3 text-center text-sm font-semibold text-white shadow-md transition hover:opacity-90 sm:mt-6 sm:w-auto sm:max-w-none sm:px-6"
            >
              Chat on WhatsApp
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}