import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { LuGraduationCap } from "react-icons/lu";
import quotegeneratorImg from "@/public/quotegenerator.png";
import mernestateImg from "@/public/mernestate.png";
import devflowImg from "@/public/devflow.png";

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
		title: "System Operator - Intralot",
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
		title: "DevFlow",
		description: "A Stack Overflow clone that I built using Next.js.",
		tags: ["React", "Next.js", "MongoDB", "Tailwind"],
		imageUrl: devflowImg,
		url: "https://devflow-smoky.vercel.app/",
	},
	{
		title: "Random Quote Generator",
		description:
			"A random quote generator that I built as an opportunity to incorporate my existing knowledge of AWS.",
		tags: ["React", "TypeScript", "Next.js", "GraphQL", "AWS Amplify"],
		imageUrl: quotegeneratorImg,
		url: "https://prod.d2x5at9p7rhcg4.amplifyapp.com/",
	},
	{
		title: "MERN Estate",
		description:
			"A real estate website that I built using the MERN development stack.",
		tags: ["React", "MongoDB", "Tailwind", "Express", "OAuth"],
		imageUrl: mernestateImg,
		url: "https://mern-estate-b28f.onrender.com",
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
