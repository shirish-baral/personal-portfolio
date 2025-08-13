import React from "react";

const projects = [
	{
		title: "Brain tumor segmentation",
		desc: "MRI segmentation using UNet and MambaUNet. Dice and IoU evaluation with visualizations.",
		img: "https://source.unsplash.com/900x600/?mri,medical?sig=11",
		repo: "https://github.com/shirish-baral/brain-seg",
		tech: ["PyTorch", "UNet", "Python"],
	},
	{
		title: "Mamba vs U-Net (Medical Image Segmentation)",
		desc: "A comparative notebook analyzing Mamba and U-Net architectures for medical image segmentation tasks.",
		img: "https://source.unsplash.com/900x600/?medical,segmentation?sig=17",
		repo: "https://github.com/shirish-baral/deep-learning/blob/main/mamba_vs_unet.ipynb",
		tech: ["Mamba", "U-Net", "Medical Imaging"],
	},
		{
			title: "Personal Portfolio Website",
			desc: "This website built with Vite, React and TailwindCSS.",
			img: "https://source.unsplash.com/900x600/?workspace,developer?sig=14",
			repo: "https://github.com/shirish-baral/personal-portfolio",
			tech: ["React", "Tailwind"],
		},
	{
		title: "SGPA/CGPA Calculator",
		desc: "A tool to calculate SGPA and CGPA for university students.",
		img: "https://source.unsplash.com/900x600/?calculator,university?sig=15",
		repo: "https://github.com/shirish-baral/sgpa-cgpa-calculator",
		tech: ["JavaScript", "Web"],
	},
	{
		title: "Deep Learning Experiments",
		desc: "Collection of deep learning models and experiments.",
		img: "https://source.unsplash.com/900x600/?deep-learning,ai?sig=16",
		repo: "https://github.com/shirish-baral/deep-learning",
		tech: ["Python", "Deep Learning"],
	},
];

export default function Projects() {
	return (
		<section id="projects" className="py-14">
			<h2 className="text-2xl font-semibold text-white fade-up">
				Selected projects
			</h2>
			<p className="text-slate-400 mt-2">
				Laptop first layout with project details and repo links.
			</p>

					<div className="mt-6 grid lg:grid-cols-2 grid-cols-1 gap-6">
						{projects.map((p) => (
							<a
								key={p.title}
								href={p.repo}
								target="_blank"
								rel="noopener noreferrer"
								className="block bg-[#071127] rounded-md overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-200"
								style={{ textDecoration: 'none' }}
							>
								<div style={{ minHeight: 180 }} className="w-full">
									<img
										className="w-full h-full object-cover"
										src={p.img}
										alt={p.title}
									/>
								</div>
								<div className="p-4">
									<h3 className="font-semibold text-slate-100">{p.title}</h3>
									<p className="text-slate-300 mt-2">{p.desc}</p>
									<div className="mt-3 flex items-center justify-between">
										<div className="flex gap-2">
											{p.tech.map((t) => (
												<span
													key={t}
													className="text-xs bg-white/6 px-2 py-1 rounded text-slate-200"
												>
													{t}
												</span>
											))}
										</div>
									</div>
								</div>
							</a>
						))}
					</div>
		</section>
	);
}
