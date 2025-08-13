import React from "react";

export default function Hero() {
  return (
    <section id="home" className="pt-12 pb-20">
      <div className="grid lg:grid-cols-12 grid-cols-1 gap-8 items-center">
        <div className="lg:col-span-7">
          <h1 className="text-5xl lg:text-6xl font-extrabold text-white leading-tight fade-up">
            Hi, I am <span className="text-accent">Shirish</span>
          </h1>
          <p className="mt-4 text-lg text-slate-300 max-w-3xl">
            Computer Science student focused on machine learning and deep learning with a strong interest and building in AI.<br />
            While my models train, I use AI to quickly put together simple, neat webpages, making the most of the downtime with a bit of creativity.
          </p>
          <div className="mt-6 flex items-center gap-4">
            <a className="inline-block rounded-lg bg-accent px-5 py-2 text-[#001219] font-semibold" href="#projects">See projects</a>
            <a className="text-slate-300" href="#contact">Contact me</a>
          </div>

          <div className="mt-6 text-slate-400 text-sm">
            <div>GitHub: <a className="text-slate-200" href="https://github.com/shirish-baral" target="_blank" rel="noreferrer">github.com/shirish-baral</a></div>
            <div>LinkedIn: <a className="text-slate-200" href="https://linkedin.com/in/shirish-baral" target="_blank" rel="noreferrer">linkedin.com/in/shirish-baral</a></div>
          </div>
        </div>

        <div className="lg:col-span-5 hidden lg:block">
          <div className="relative w-full rounded-xl overflow-hidden shadow-xl" style={{ minHeight: 320 }}>
            <img
              src="/IMG_4939.jpeg"
              alt="profile photo"
              className="w-full h-full object-cover"
            />
            <div className="absolute bottom-4 left-4 bg-black/50 text-slate-200 px-3 py-1 rounded text-sm">Computer Science student</div>
          </div>
        </div>
      </div>
    </section>
  );
}
