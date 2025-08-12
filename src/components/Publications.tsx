import React from "react";

const pubs = [
  { title: "A demo paper on MRI segmentation", link: "#", year: 2024 },
  { title: "Small note on dataset caching", link: "#", year: 2023 }
];

export default function Publications() {
  return (
    <section id="pubs" className="py-12">
      <h2 className="text-xl font-semibold text-white fade-up">Publications and blog</h2>
      <ul className="mt-4 space-y-3">
        {pubs.map(p => (
          <li key={p.title} className="bg-[#071127] p-3 rounded-md">
            <a className="text-slate-100 font-medium" href={p.link}>{p.title}</a>
            <div className="text-slate-400 text-sm">{p.year}</div>
          </li>
        ))}
      </ul>
    </section>
  );
}
