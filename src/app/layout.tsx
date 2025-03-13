import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import "./styles.scss";
import { Header } from "@/components/Header";

const geistSans = Geist({
	variable: "--font-geist-sans",
	subsets: ["latin"],
});

const geistMono = Geist_Mono({
	variable: "--font-geist-mono",
	subsets: ["latin"],
});

export const metadata: Metadata = {
	title: "Info Site",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body
				suppressHydrationWarning
				className={`${geistSans.variable} ${geistMono.variable} antialiased bg-slate-400`}
			>
				<div className="container bg-white sm:mx-auto sm:w-[60rem]">
					<Header />
					<div className="p-4 min-h-screen font-[family-name:var(--font-geist-sans)]">
						<main className="flex flex-col gap-4 sm:gap-8 row-start-2 sm:items-start">
							{children}
						</main>
					</div>
				</div>
			</body>
		</html>
	);
}
