import React from "react";

const skills = [
	{ name: "Python", level: 92 },
	{ name: "PyTorch", level: 84 },
	{ name: "React", level: 86 },
	{ name: "TypeScript", level: 72 },
	{ name: "HTML CSS", level: 95 },
];

export default function Skills() {
	return (
		<section id="skills" className="py-12">
			<h2 className="text-xl font-semibold text-white fade-up">Skills</h2>
			<p className="text-slate-400 mt-2 max-w-2xl">
				Languages, frameworks and tools i use frequently for projects and
				research.
			</p>

			<div className="mt-6 grid lg:grid-cols-2 grid-cols-1 gap-6">
				{skills.map((s) => (
					<div
						key={s.name}
						className="bg-[#071127] p-4 rounded-md shadow-sm"
					>
						<div className="flex justify-between items-center">
							<div className="text-slate-200 font-medium">{s.name}</div>
							<div className="text-slate-400 text-sm">
								{s.level}%
							</div>
						</div>
						<div className="mt-3 h-2 bg-white/6 rounded-full overflow-hidden">
							<div
								className="h-full bg-accent rounded-full"
								style={{ width: `${s.level}%` }}
							/>
						</div>
					</div>
				))}
			</div>
		</section>
	);
}
