import Logo from '../assets/logo.svg';
import { useTranslation } from 'react-i18next';
import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
	{ href: '#about', label: 'about' },
	{ href: '#projects', label: 'project' },
	{ href: '#contact', label: 'contact' },
];

const Navbar = () => {
	const { t } = useTranslation();
	const [show, setShow] = useState(true);
	const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
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

	// Fermer le menu mobile quand on clique sur un lien
	const handleMobileLinkClick = () => {
		setIsMobileMenuOpen(false);
	};

	// Empêcher le scroll du body quand le menu mobile est ouvert
	useEffect(() => {
		if (isMobileMenuOpen) {
			document.body.style.overflow = 'hidden';
		} else {
			document.body.style.overflow = 'unset';
		}
		
		// Cleanup
		return () => {
			document.body.style.overflow = 'unset';
		};
	}, [isMobileMenuOpen]);

	return (
		<>
			{/* Navbar principale */}
			<nav
				className={`w-full py-4 px-4 md:px-8 flex items-center justify-between fixed top-0 left-0 z-50 transition-transform duration-500 ${show ? "translate-y-0" : "-translate-y-full"}`}
				style={{ background: "linear-gradient(180deg, #faf6e7 20%, transparent 100%)" }}
			>
				{/* Logo */}
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
				
				{/* Bouton hamburger mobile */}
				<button
					onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
					className="md:hidden p-2 text-[#ff4300] hover:bg-[#ff4300] hover:bg-opacity-10 rounded-md transition-colors duration-200"
					aria-label="Menu"
					aria-expanded={isMobileMenuOpen}
				>
					<svg 
						className="w-6 h-6" 
						fill="none" 
						stroke="currentColor" 
						viewBox="0 0 24 24"
					>
						{isMobileMenuOpen ? (
							// Icône X pour fermer
							<path 
								strokeLinecap="round" 
								strokeLinejoin="round" 
								strokeWidth={2} 
								d="M6 18L18 6M6 6l12 12" 
							/>
						) : (
							// Icône hamburger
							<path 
								strokeLinecap="round" 
								strokeLinejoin="round" 
								strokeWidth={2} 
								d="M4 6h16M4 12h16M4 18h16" 
							/>
						)}
					</svg>
				</button>
				
				<div className="hidden md:block w-12" /> {/* Équilibrage desktop */}
			</nav>

			{/* Menu mobile overlay avec Framer Motion */}
			<AnimatePresence>
				{isMobileMenuOpen && (
					<>
						{/* Backdrop animé */}
						<motion.div 
							className="fixed inset-0  bg-opacity-20 z-40 md:hidden"
							onClick={() => setIsMobileMenuOpen(false)}
							initial={{ opacity: 0 }}
							animate={{ opacity: 1 }}
							exit={{ opacity: 0 }}
							transition={{ duration: 0.3 }}
						/>
						
						{/* Sidebar animée */}
						<motion.div 
							className="fixed top-0 right-0 h-full w-80 max-w-[85vw] bg-[#faf6e7] z-50 md:hidden shadow-2xl"
							initial={{ x: "100%", opacity: 0 }}
							animate={{ x: 0, opacity: 1 }}
							exit={{ x: "100%", opacity: 0 }}
							transition={{ 
								type: "spring",
								damping: 25,
								stiffness: 200,
								duration: 0.6
							}}
						>
							{/* Header du menu */}
							<div className="flex items-center justify-between p-6 border-b border-[#ff4300] border-opacity-20">
								<img src={Logo} alt="Logo" className="h-10 w-auto" />
								<button
									onClick={() => setIsMobileMenuOpen(false)}
									className="p-2 text-[#ff4300] hover:bg-[#ff4300] hover:bg-opacity-10 rounded-md transition-colors duration-200"
									aria-label="Fermer le menu"
								>
									<svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
										<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
									</svg>
								</button>
							</div>
							
							{/* Navigation links avec animations en cascade */}
							<nav className="p-6">
								<ul className="space-y-6">
									{navLinks.map((link, index) => (
										<motion.li 
											key={link.href}
											initial={{ x: 50, opacity: 0 }}
											animate={{ x: 0, opacity: 1 }}
											transition={{ 
												delay: index * 0.1,
												type: "spring",
												damping: 20,
												stiffness: 300
											}}
										>
											<a
												href={link.href}
												onClick={handleMobileLinkClick}
												className="block text-[#ff4300] text-2xl font-light hover:text-[#ff5722] transition-colors duration-200 py-2"
											>
												{t(link.label)}
											</a>
										</motion.li>
									))}
								</ul>
							</nav>
						</motion.div>
					</>
				)}
			</AnimatePresence>
		</>
	);
};

export default Navbar;
