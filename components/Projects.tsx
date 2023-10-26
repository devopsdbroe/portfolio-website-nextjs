import React from "react";
import SectionHeading from "./SectionHeading";
import { projectsData } from "@/lib/data";
import ProjectCard from "./ProjectCard";

const Projects = () => {
	return (
		<section>
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
