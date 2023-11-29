import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import { Roboto } from "next/font/google";
import "./globals.css";

const roboto = Roboto({
	weight: [ "100","300", "400", "500", "700", "900"],
	style: ["normal", "italic"],
	subsets: ["latin"],
	display: "swap",
});

export const metadata: Metadata = {
	title: "Frontend Projects",
	description: "List of all projects I've coded",
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang='en'>
			<body className={roboto.className}>{children}</body>
		</html>
	);
}
