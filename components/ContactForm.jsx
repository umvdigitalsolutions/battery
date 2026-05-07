"use client";
import { useState } from "react";

export default function ContactForm() {
  const [sent, setSent] = useState(false);
  const handleSubmit = (e) => {
    e.preventDefault();
    setSent(true);
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-2xl">
      <div className="grid gap-4">
        <input name="name" placeholder="Your name" required className="w-full rounded border px-3 py-2" />
        <input name="email" type="email" placeholder="Email" required className="w-full rounded border px-3 py-2" />
        <textarea name="message" rows={5} placeholder="Message" required className="w-full rounded border px-3 py-2" />
        <div>
          <button className="rounded bg-blue-700 px-4 py-2 text-white hover:bg-blue-600">
            Send Message
          </button>
        </div>
        {sent && <div className="text-green-600">Thanks - we&apos;ll reply soon.</div>}
      </div>
    </form>
  );
}
