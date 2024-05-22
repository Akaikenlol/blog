import React from "react";

const Container = ({ children }: { children: React.ReactNode }) => {
	return (
		<div className="max-w-[1350px] mx-auto bg-white min-h-screen flex flex-col">
			{children}
		</div>
	);
};

export default Container;
