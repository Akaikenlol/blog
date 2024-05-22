import { navBarLinks } from "@/constants";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Navbar = () => {
	return (
		<header className="flex justify-between items-center py-4 px-7 border-b">
			<Link href={"/"}>
				<Image
					src={"/assets/logo.png"}
					alt="logo"
					width={50}
					height={50}
					quality={100}
					className="invert w-[45px] h-[45px]"
				/>
			</Link>
			<nav>
				<ul className="flex justify-between gap-x-6 text-sm">
					{navBarLinks.map((link) => (
						<li key={link.label}>
							<Link
								href={link.route}
								className="text-zinc-400 hover:text-zinc-900 ease-in-out duration-300"
							>
								{link.label}
							</Link>
						</li>
					))}
				</ul>
			</nav>
		</header>
	);
};

export default Navbar;
