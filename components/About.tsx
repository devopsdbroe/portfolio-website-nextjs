"use client";

import { useInView } from "react-intersection-observer";
import SectionHeading from "./SectionHeading";
import { motion } from "framer-motion";
import { useActiveSectionContext } from "@/context/active-section-context";
import { useEffect } from "react";

const About = () => {
	const { setActiveSection } = useActiveSectionContext();
	const { ref, inView } = useInView({
		threshold: 0.75,
	});

	useEffect(() => {
		if (inView) {
			setActiveSection("About");
		}
	}, [inView]);

	return (
		<motion.section
			ref={ref}
			className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
			initial={{ opacity: 0, y: 100 }}
			animate={{ opacity: 1, y: 0 }}
			transition={{ delay: 0.175 }}
			id="about"
		>
			<SectionHeading>About Me</SectionHeading>
			<p className="mb-3">
				After graduating with a bachelors degree in{" "}
				<span className="font-medium">Computer Science</span>, I started out my
				tech career in <span className="font-medium">operations</span>and have
				been there ever since. I've always had an interest in web development,
				but have always struggled to get into it because of "tutorial hell".
				After several attempts over the years, I've finally put in the time to
				not only learn, but also BUILD projects so that I can apply my
				knowledge. My core stack is React, Next.js, and Node.js. I'm familiar
				with TypeScript and MongoDB.
			</p>
			<p>
				Outside of programming, I enjoy playing video games, skiing during the
				winter and hiking during the summer. I also enjoy learning new things.
				It's what drew me to the tech field in the first place. I'm almost
				always garunteed to learn something new every day.
			</p>
		</motion.section>
	);
};

export default About;