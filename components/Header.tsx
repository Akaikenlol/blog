import { HeaderProps } from "@/types";
import React from "react";

const Header = ({ title, subTitle }: HeaderProps) => {
	return (
		<section className="text-center px-5 pt-16">
			<h1 className="text-4xl md:text-5xl font-bold mb-5">{title}</h1>
			<p className="max-w-[750px] mx-auto leading-8">{subTitle}</p>
		</section>
	);
};

export default Header;
