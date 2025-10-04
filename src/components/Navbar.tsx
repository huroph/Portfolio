import Logo from '../assets/logo.svg';
import { useTranslation } from 'react-i18next';

const navLinks = [
	{ href: '#about', label: 'about' },
	{ href: '#projects', label: 'project' },
	{ href: '#contact', label: 'contact' },
];


import { useEffect, useRef, useState } from "react";

const Navbar = () => {
	const { t } = useTranslation();
	const [show, setShow] = useState(true);
	const lastScroll = useRef(0);

	useEffect(() => {
		const handleScroll = () => {
			const current = window.scrollY;
			if (current > lastScroll.current && current > 40) {
				setShow(false); // scroll down
			} else {
				setShow(true); // scroll up
			}
			lastScroll.current = current;
		};
		window.addEventListener("scroll", handleScroll);
		return () => window.removeEventListener("scroll", handleScroll);
	}, []);

		return (
			<nav
				className={`w-full py-4 px-4 md:px-8 flex items-center justify-between fixed top-0 left-0 z-50 transition-transform duration-500 ${show ? "translate-y-0" : "-translate-y-full"}`}
				style={{ background: "linear-gradient(180deg, #faf6e7 20%, transparent 100%)" }}
			>
			<div className="flex items-center">
				<img src={Logo} alt="Logo" className="h-12 md:h-16 w-auto" />
			</div>
			
			{/* Navigation desktop */}
			<ul className="hidden md:flex flex-1 justify-center gap-24">
				{navLinks.map((link) => (
					<li key={link.href}>
						<a
							href={link.href}
							className="text-[#ff4300] text-xl font-light hover:underline transition"
						>
							{t(link.label)}
						</a>
					</li>
				))}
			</ul>
			
			{/* Navigation mobile */}
			<ul className="flex md:hidden gap-6">
				{navLinks.map((link) => (
					<li key={link.href}>
						<a
							href={link.href}
							className="text-[#ff4300] text-sm font-light hover:underline transition"
						>
							{t(link.label)}
						</a>
					</li>
				))}
			</ul>
			
			<div className="w-4 md:w-12" /> {/* Pour équilibrer l'espace à droite */}
		</nav>
	);
};

export default Navbar;
