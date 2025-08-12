import React from "react";

const projects = [
	{
		title: "Brain tumor segmentation",
		desc: "MRI segmentation using UNet and MambaUNet. Dice and IoU evaluation with visualizations.",
		img: "https://source.unsplash.com/900x600/?mri,medical?sig=11",
		repo: "https://github.com/shirish2001/brain-seg",
		tech: ["PyTorch", "UNet", "Python"],
	},
	{
		title: "Oxford Pet segmentation",
		desc: "Image segmentation demo using Oxford IIIT Pet dataset and UNet.",
		img: "https://source.unsplash.com/900x600/?pet,dog?sig=12",
		repo: "https://github.com/shirish2001/pet-seg",
		tech: ["PyTorch", "Data"],
	},
	{
		title: "Web visualizer",
		desc: "Interactive data viz and small web tools.",
		img: "https://source.unsplash.com/900x600/?dashboard,ui?sig=13",
		repo: "https://github.com/shirish2001/web-visualizer",
		tech: ["React", "D3"],
	},
	{
		title: "Portfolio website",
		desc: "This website built with Vite, React and TailwindCSS.",
		img: "https://source.unsplash.com/900x600/?workspace,developer?sig=14",
		repo: "https://github.com/shirish2001/portfolio",
		tech: ["React", "Tailwind"],
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
					<article
						key={p.title}
						className="bg-[#071127] rounded-md overflow-hidden shadow-md"
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
								<div>
									<a
										href={p.repo}
										target="_blank"
										rel="noreferrer"
										className="text-accent text-sm"
									>
										repo
									</a>
								</div>
							</div>
						</div>
					</article>
				))}
			</div>
		</section>
	);
}
