"use client";

const services = [
  { title: "Wholesale Distribution", desc: "Large volumes, competitive pricing, fast shipping." },
  { title: "Custom Packs & Assembly", desc: "Design and assemble battery packs to spec." },
  { title: "Technical Support", desc: "Engineering assistance and lifecycle management." },
  { title: "Recycling & Disposal", desc: "Safe and compliant end-of-life services." },
];

export default function ServicesList() {
  return (
    <section className="py-16">
      <div className="mx-auto max-w-6xl px-6">
        <h2 className="text-2xl font-bold mb-6">Services</h2>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((s) => (
            <div key={s.title} className="rounded-lg border p-6 bg-white dark:bg-zinc-800">
              <h3 className="font-semibold mb-2">{s.title}</h3>
              <p className="text-sm text-zinc-600 dark:text-zinc-300">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
