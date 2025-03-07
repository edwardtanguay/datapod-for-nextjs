"use client"
import Link from "next/link"
import { useSelectedLayoutSegment } from 'next/navigation';

export const Header = () => {
	const activeSegment = useSelectedLayoutSegment();
	return (
		<div>
			<div className="flex justify-between py-2 px-4 sm:py-4 sm:px-4">
				<h1 className="text-xl sm:text-3xl">Datapod for Next.js</h1>
				<div className="text-xs">0.00.11</div>
			</div>
			<nav className="p-2 mainnav bg-slate-300 pl-4">
				<ul className="flex gap-x-2 gap-y-0 flex-wrap">
					<li>
						<Link
							href="/"
							className={`border-0 ${activeSegment === null ? 'menuHighlight' : ''}`}
						>
							Welcome
						</Link>
					</li>
					<li>
						<Link
							href="/info"
							className={`border-0 ${activeSegment === 'info' ? 'menuHighlight' : ''}`}
						>
							Info
						</Link>
					</li>
					<li>
						<Link
							href="/about"
							className={`border-0 ${activeSegment === 'about' ? 'menuHighlight' : ''}`}
						>
							About
						</Link>
					</li>
				</ul>
			</nav>
		</div>
	)
}