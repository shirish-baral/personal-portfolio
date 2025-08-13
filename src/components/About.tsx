import React from "react";

export default function About() {
  return (
    <section id="about" className="py-16">
      <div className="grid lg:grid-cols-12 grid-cols-1 gap-8 items-start">
        <div className="lg:col-span-8">
          <h2 className="text-2xl font-semibold text-white fade-up">About me</h2>
          <p className="mt-4 text-slate-300 max-w-3xl">
            I’m a Computer Science student deeply focused on machine learning, deep learning, and data-driven applications. Currently, my research centers on deep learning for medical image analysis, including MRI, CT, and ultrasound data. I implement architectures like U-Net, MambaUNet, and transformer-based models, while also exploring broader fields like computer vision and building reproducible research pipelines.
            <br /><br />
            Though web development isn’t my main focus, I enjoy using AI-assisted tools to quickly put together clean, functional websites, usually as a fun and practical way to fill the time while my models are training. This blend of applied AI research with user-friendly interfaces helps me create demos that let users interact intuitively with complex models.
          </p>

          <div className="mt-6 grid grid-cols-2 gap-4">
            <div className="bg-[#071127] p-4 rounded-md shadow-md">
              <h3 className="text-sm text-slate-300">Location</h3>
              <p className="mt-1 text-slate-200">Bhubaneswar, India</p>
            </div>
            <div className="bg-[#071127] p-4 rounded-md shadow-md">
              <h3 className="text-sm text-slate-300">Availability</h3>
              <p className="mt-1 text-slate-200">Open to internships and research collaborations</p>
            </div>
          </div>
        </div>

        <aside className="lg:col-span-4 hidden lg:block">
          <div className="p-4 rounded-md bg-[#081022] border border-white/6">
            <img src="/IMG_4939.jpeg" alt="avatar" className="w-full rounded-md" />
            <div className="mt-4 text-sm text-slate-300">
              <div><strong>Pronouns</strong> he/him</div>
              <div className="mt-2"><strong>Email</strong> baral.shirish8@gmail.com</div>
            </div>
          </div>
        </aside>
      </div>
    </section>
  );
}
