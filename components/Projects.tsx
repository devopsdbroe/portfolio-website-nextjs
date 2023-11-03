"use client";

import React, { useEffect } from "react";
import SectionHeading from "./SectionHeading";
import { projectsData } from "@/lib/data";
import ProjectCard from "./ProjectCard";
import { useActiveSectionContext } from "@/context/active-section-context";
import { useInView } from "react-intersection-observer";

const Projects = () => {
	const { setActiveSection } = useActiveSectionContext();
	const { ref, inView } = useInView({
		threshold: 0.5,
	});

	useEffect(() => {
		if (inView) {
			setActiveSection("Projects");
		}
	}, [inView]);

	return (
		<section ref={ref} id="projects" className="scroll-mt-28">
			<SectionHeading>My projects</SectionHeading>
			<div>
				{projectsData.map((project, index) => (
					<React.Fragment key={index}>
						<ProjectCard {...project} />
					</React.Fragment>
				))}
			</div>
		</section>
	);
};

export default Projects;
