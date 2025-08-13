import React from "react";

export default function Contact() {
  return (
    <section id="contact" className="py-14">
      <h2 className="text-2xl font-semibold text-white fade-up">Contact</h2>
      <p className="text-slate-400 mt-2">Reach out for internships, collaborations or questions.</p>

      <div className="mt-6 grid lg:grid-cols-12 grid-cols-1 gap-6 items-start">
        <div className="lg:col-span-7">
          <form
            onSubmit={(e) => {
              e.preventDefault();
              const target = e.target as HTMLFormElement;
              const name = (target.elements.namedItem("name") as HTMLInputElement).value;
              const email = (target.elements.namedItem("email") as HTMLInputElement).value;
              const msg = (target.elements.namedItem("message") as HTMLTextAreaElement).value;
              window.location.href = `mailto:baral.shirish8@gmail.com?subject=${encodeURIComponent("Message from " + name)}&body=${encodeURIComponent(msg + "\n\n" + email)}`;
            }}
            className="space-y-3"
            aria-label="contact form"
          >
            <div className="grid lg:grid-cols-2 grid-cols-1 gap-3">
              <input name="name" required placeholder="Your name" className="p-3 rounded bg-[#06101b] border border-white/6 w-full" />
              <input name="email" type="email" required placeholder="you@example.com" className="p-3 rounded bg-[#06101b] border border-white/6" />
            </div>
            <textarea name="message" rows={6} required placeholder="Message" className="p-3 rounded bg-[#06101b] border border-white/6 w-full" />
            <div>
              <button type="submit" className="px-5 py-2 rounded bg-accent text-[#001219] font-semibold">Send email</button>
            </div>
          </form>
        </div>

        <aside className="lg:col-span-5 hidden lg:block">
          <div className="bg-[#071127] p-5 rounded-md">
            <h3 className="text-slate-200 font-medium">Contact details</h3>
            <div className="mt-3 text-slate-300">Email: baral.shirish8@gmail.com</div>
            <div className="mt-2 text-slate-300">GitHub: github.com/shirish-baral</div>
            <div className="mt-2 text-slate-300">LinkedIn: linkedin.com/in/shirish-baral</div>
            <div className="mt-4">
              <a className="text-accent" href="mailto:baral.shirish8@gmail.com">Send email</a>
            </div>
          </div>
        </aside>
      </div>
    </section>
  );
}
