import React from "react";

const pubs = [
  { title: "A demo paper on MRI segmentation", link: "#", year: 2024 },
  { title: "Small note on dataset caching", link: "#", year: 2023 }
];

export default function Publications() {
  return (
    <section id="pubs" className="py-14">
      <h2 className="text-2xl font-semibold text-white fade-up">Publications & Blog</h2>
      <div className="mt-6 space-y-4">
        <div className="bg-[#071127] p-4 rounded-md">
          <div className="font-semibold text-slate-100">
            <a href="https://medium.com/@baral.shirish8/why-inter-terai-railway-network-is-present-nepals-biggest-need-5760654c5052" target="_blank" rel="noopener noreferrer" className="text-accent hover:underline">
              Why Inter-Terai Railway Network is Present Nepal's Biggest Need
            </a>
          </div>
          <div className="text-slate-400 text-sm mt-1">Medium, 2024</div>
        </div>
      </div>
    </section>
  );
}
