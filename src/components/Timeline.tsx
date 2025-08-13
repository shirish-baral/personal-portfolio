import React from "react";

const timeline = [
		{
			year: "2022 - 2026",
			title: "Bachelor of Technology - BTech, Computer Science",
			org: "KIIT - Kalinga Institute of Industrial Technology",
			note: "Grade: 9.46 CGPA (till 6th semester)"
		},
		{
			year: "2020 - 2022",
			title: "High School, Computer Science",
			org: "Motherland Secondary School",
			note: "Grade: 3.72 CGPA out of 4.0"
		},
		{
			year: "2006 - 2020",
			title: "School",
			org: "Motherland Secondary School",
			note: "Grade: 4.0 GPA out of 4.0 - Class 10"
		}
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
												{item.org === "KIIT - Kalinga Institute of Industrial Technology" ? (
													<a href="https://kiit.ac.in" target="_blank" rel="noopener noreferrer" className="text-accent hover:underline">{item.org}</a>
												) : item.org === "Motherland Secondary School" ? (
													<a href="https://motherland.edu.np" target="_blank" rel="noopener noreferrer" className="text-accent hover:underline">{item.org}</a>
												) : (
													<span className="text-slate-400">{item.org}</span>
												)}
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
