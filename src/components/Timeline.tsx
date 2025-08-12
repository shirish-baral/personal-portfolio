import React from "react";

const timeline = [
	{
		year: "2023 - 2025",
		title: "BTech Computer Science",
		org: "KIIT University",
		note: "Focus on ML and computer vision",
	},
	{
		year: "2022",
		title: "Research intern",
		org: "Small Lab",
		note: "Worked on MRI segmentation pipelines",
	},
	{
		year: "2021",
		title: "Open source contributions",
		org: "Various",
		note: "Frontend and tooling contributions",
	},
];

export default function Timeline() {
	return (
		<section id="career" className="py-12">
			<h2 className="text-xl font-semibold text-white fade-up">
				Academic career
			</h2>
			<div className="mt-6 space-y-4">
				{timeline.map((item) => (
					<div key={item.title} className="flex items-start gap-4">
						<div className="w-28 text-slate-400 text-sm">{item.year}</div>
						<div className="flex-1 bg-[#071127] p-4 rounded-md">
							<div className="font-semibold text-slate-100">
								{item.title} •{" "}
								<span className="text-slate-400">{item.org}</span>
							</div>
							<div className="mt-2 text-slate-300 text-sm">
								{item.note}
							</div>
						</div>
					</div>
				))}
			</div>
			<div className="mt-4 text-sm text-slate-400">
				<a
					className="text-accent"
					href="/sample-cv.pdf"
					target="_blank"
					rel="noreferrer"
				>
					Download sample CV
				</a>
			</div>
		</section>
	);
}
