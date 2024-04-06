import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import broecodeImg from "@/public/broecode.png";
import devflowImg from "@/public/devflow.png";
import mernestateImg from "@/public/mernestate.png";
import corpcommentImg from "@/public/corpcomment.png";
import rmtdevImg from "@/public/rmtdev.png";
import wordanalyticsImg from "@/public/wordanalytics.png";

export const links = [
	{
		name: "Home",
		hash: "#home",
	},
	{
		name: "About",
		hash: "#about",
	},
	{
		name: "Projects",
		hash: "#projects",
	},
	{
		name: "Skills",
		hash: "#skills",
	},
	{
		name: "Experience",
		hash: "#experience",
	},
	{
		name: "Contact",
		hash: "#contact",
	},
] as const;

export const experiencesData = [
	{
		title: "Graduated from Vermont Tech",
		location: "Randolph, VT",
		description:
			"I graduated with a bachelor's degree in IT after 4 years of studying.",
		icon: React.createElement(LuGraduationCap),
		date: "2017",
	},
	{
		title: "System Operator - Vermont Mutual",
		location: "East Montpelier, VT",
		description:
			"I worked the night shift as a system operator for a year-and-a-half.",
		icon: React.createElement(CgWorkAlt),
		date: "2018 - 2019",
	},
	{
		title: "Computer Operator / DevOps Administrator - Vermont Mutual",
		location: "Montpelier, VT",
		description:
			"I'm currently working as a DevOps Administrator working with AWS and GitLab CI/CD pipelines. I also have some experience with Python.",
		icon: React.createElement(CgWorkAlt),
		date: "2019 - present",
	},
] as const;

export const projectsData = [
	{
		title: "Broe Code",
		description:
			"My personal blog website, built using the MERN development stack. Here I talk about my experiences learning about full-stack web development.",
		tags: ["React", "MongoDB", "Tailwind", "Express"],
		imageUrl: broecodeImg,
	},
	{
		title: "DevFlow",
		description:
			"A Stack Overflow clone website that I build using Next.js 14 and MongoDB.",
		tags: ["React", "TypeScript", "Next.js", "Tailwind", "MongoDB"],
		imageUrl: devflowImg,
	},
	{
		title: "MERN Estate",
		description:
			"A real estate website that I built using the MERN development stack.",
		tags: ["React", "MongoDB", "Tailwind", "Express", "OAuth"],
		imageUrl: mernestateImg,
	},
] as const;

export const skillsData = [
	"HTML",
	"CSS",
	"JavaScript",
	"TypeScript",
	"React",
	"Next.js",
	"Node.js",
	"Git",
	"Tailwind",
	"Prisma",
	"MongoDB",
	"Redux",
	"Python",
	"Framer Motion",
	"SAFe Agile",
] as const;
