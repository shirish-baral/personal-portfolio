import React from "react";

export default function Footer() {
  return (
    <footer className="mt-8 border-t border-white/6">
      <div className="container py-6 flex items-center justify-between">
        <div className="text-sm text-slate-400">© {new Date().getFullYear()} Shirish</div>
        <div className="text-sm text-slate-400">Made with React, TypeScript and Tailwind</div>
      </div>
    </footer>
  );
}
