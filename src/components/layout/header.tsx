'use client';

import HeaderLogo from './headerLogo';
import { motion, useScroll, useSpring, useTransform } from 'framer-motion';
import { useRef } from 'react';
import BurgerButton from './burgerButton';
import Sidebars from './sidebars';
import dynamic from 'next/dynamic';

const CartNavigation = dynamic(() => import('../cartNavigation'), { ssr: false });
const FavoritesNavigation = dynamic(() => import('../favoritesNavigation'), { ssr: false });

export const animLimit = 50; // scroll limit in pixels

type HeaderProps = {};

export default function Header({}: HeaderProps) {
	const headerRef = useRef<HTMLElement>(null);
	const { scrollY } = useScroll();
	const headerHeightRaw = useTransform(scrollY, [0, animLimit], [5, 3]);
	const springHeaderHeight = useTransform(
		useSpring(headerHeightRaw, { mass: 0.3, stiffness: 200 }),
		(val) => `${(val as number).toFixed(2)}rem`,
	);

	return (
		<>
			<motion.header
				ref={headerRef}
				className=" sticky top-0 w-full backdrop-blur-sm bg-white/10 flex flex-col z-50 items-center"
				style={{ height: springHeaderHeight }}
			>
				<nav className=" h-full w-full max-w-[1680px] flex flex-row justify-between items-center px-5">
					<div className=" flex justify-start">
						<BurgerButton />
					</div>
					<HeaderLogo />
					<div className=" flex justify-end items-center gap-5">
						<FavoritesNavigation />
						<CartNavigation />
					</div>
				</nav>
				<Sidebars header={headerRef} />
			</motion.header>
		</>
	);
}
