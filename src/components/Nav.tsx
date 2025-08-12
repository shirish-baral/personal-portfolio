import React from "react";

const links = [
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "career", label: "Academic career" },
  { id: "projects", label: "Projects" },
  { id: "pubs", label: "Publications" },
  { id: "contact", label: "Contact" }
];

export default function Nav() {
  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <header className="sticky top-0 z-40 bg-black/50 backdrop-blur-md border-b border-white/6">
      <div className="container flex items-center justify-between h-16">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-md bg-gradient-to-br from-accent to-[#7c3aed] flex items-center justify-center font-semibold text-[#001219]">S</div>
          <div>
            <div className="text-slate-100 font-semibold">Shirish</div>
            <div className="text-xs text-slate-400">shirish2001</div>
          </div>
        </div>

        <nav aria-label="Main navigation" className="hidden lg:flex gap-6">
          {links.map(l => (
            <button
              key={l.id}
              onClick={() => scrollTo(l.id)}
              className="text-slate-300 hover:text-white text-sm"
            >
              {l.label}
            </button>
          ))}
        </nav>

        <div className="hidden lg:flex gap-3 items-center">
          <a className="text-sm text-slate-300" href="mailto:shirish.dev@example.com">shirish.dev@example.com</a>
          <a className="px-3 py-1 rounded bg-accent text-[#001219] font-medium text-sm" href="#projects">View work</a>
        </div>

        <div className="lg:hidden">
          <button
            aria-label="open menu"
            onClick={() => alert("mobile menu demo")}
            className="text-slate-300"
          >
            menu
          </button>
        </div>
      </div>
    </header>
  );
}
