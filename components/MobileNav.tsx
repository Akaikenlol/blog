"use client";

import React from "react";
import {
	Sheet,
	SheetClose,
	SheetContent,
	SheetTrigger,
} from "@/components/ui/sheet";
import { usePathname } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { navBarLinks } from "@/constants";
import { cn } from "@/lib/utils";

const MobileNav = () => {
	const pathname = usePathname();
	return (
		<section className="inline-block cursor-pointer lg:hidden">
			<Sheet>
				<SheetTrigger>
					<Image
						src={"/assets/hamburger.svg"}
						alt="menu"
						width={30}
						height={30}
						className="cursor-pointer"
					/>
				</SheetTrigger>
				<SheetContent side={"left"} className="border-none bg-white">
					<Link
						href={"/"}
						className="cursor-pointer flex items-center gap-1 px-4"
					>
						<Image
							src={"/assets/logo.png"}
							alt="logo"
							width={50}
							height={50}
							quality={100}
							className="invert w-[45px] h-[45px]"
						/>
					</Link>
					<div className="mobilenav-sheet">
						<SheetClose asChild>
							<nav className="flex h-full flex-col gap-6 pt-16 text-white">
								{navBarLinks.map((link) => {
									const isActive = pathname === link.route;

									return (
										<SheetClose asChild key={link.route}>
											<Link
												href={link.route}
												key={link.label}
												className={cn(
													"flex gap-3 items-center p-4 rounded-lg w-full max-w-60",
													{
														"text-16 rounded-xl border-2 border-slate-500 font-semibold text-white shadow-form":
															isActive,
													}
												)}
											>
												<p
													className={cn("text-16 font-semibold text-zinc-400", {
														"text-zinc-700": isActive,
													})}
												>
													{link.label}
												</p>
											</Link>
										</SheetClose>
									);
								})}

								{/* {navBarLinks.map((link) => (
									<li key={link.label}>
										<Link
											href={link.route}
											className="text-zinc-400 hover:text-zinc-900 ease-in-out duration-300"
										>
											{link.label}
										</Link>
									</li>
								))} */}
							</nav>
						</SheetClose>
					</div>
				</SheetContent>
			</Sheet>
		</section>
	);
};

export default MobileNav;
