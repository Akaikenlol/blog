"use client";

import { navBarLinks } from "@/constants";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import MobileNav from "@/components/MobileNav";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { SignedIn, SignedOut, UserButton } from "@clerk/nextjs";
import { Button } from "./ui/button";

const Navbar = () => {
	const pathname = usePathname();
	return (
		<header className="flex justify-between items-center py-2 px-7 border-b w-full">
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
			<nav className="flex text-center justify-center items-center">
				<ul className="lg:flex justify-between text-center items-center w-full gap-5 text-sm hidden">
					{navBarLinks.map((link) => {
						const isActive = pathname === link.route;
						return (
							<li key={link.label}>
								<Link
									href={link.route}
									key={link.label}
									className={cn("flex py-1 px-3 max-w-36", {
										"rounded-xl border border-slate-500 ease-in-out duration-500":
											isActive,
									})}
								>
									<p
										className={cn(
											"font-semibold text-zinc-400 hover:text-zinc-900 ease-in-out duration-300",
											{
												"text-zinc-700": isActive,
											}
										)}
									>
										{link.label}
									</p>
								</Link>
							</li>
						);
					})}
				</ul>
				<div className="flex w-32 justify-end">
					<div className="flex gap-5 justify-center items-center">
						<SignedIn>
							<UserButton />
							<MobileNav />
						</SignedIn>
					</div>
					<SignedOut>
						<Button
							asChild
							className="border-slate-500 border py-1 px-5 rounded-xl hover:bg-zinc-100 ease-in-out duration-300"
						>
							<Link href={"/sign-in"}>Login</Link>
						</Button>
					</SignedOut>
				</div>
			</nav>
		</header>
	);
};

export default Navbar;
