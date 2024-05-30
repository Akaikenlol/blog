import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ClerkProvider } from "@clerk/nextjs";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
	title: "Blog: Wondering Thoughts",
	description: "A blog about my thoughts and ideas.",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en" className="scrollbar-hide !scroll-smooth">
			<ClerkProvider
				appearance={{
					variables: {
						colorBackground: "#E8EFF2",
						colorPrimary: "#0E78F9",
					},
				}}
			>
				<body className={`${inter.className} text-zinc-900 bg-zinc-100`}>
					{children}
				</body>
			</ClerkProvider>
		</html>
	);
}
