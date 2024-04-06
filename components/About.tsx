"use client";

import SectionHeading from "./SectionHeading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";

const About = () => {
	const { ref } = useSectionInView("About");

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
				After graduating with a bachelor&apos;s degree in Computer Science, I
				started my tech career in Operations and have been there ever since.
				I&apos;ve always been interested in web development, and after several
				years of learning, I have taken the time to apply that knowledge by
				building websites. My core stack is HTML, CSS, and JavaScript (React and
				Next.js). I&apos;m also familiar with TypeScript, Tailwind, and MongoDB.
			</p>
			<p>
				Outside of programming, I enjoy playing video games, skiing during the
				winter, and hiking in the summer. I also enjoy learning new things,
				which drew me to the tech field in the first place. I love that I&apos;m
				almost always guaranteed to learn something new every day.
			</p>
		</motion.section>
	);
};

export default About;
