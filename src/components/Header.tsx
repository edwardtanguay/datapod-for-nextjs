"use client"
import Link from "next/link"
import { useSelectedLayoutSegment } from 'next/navigation';

export const Header = () => {
	const activeSegment = useSelectedLayoutSegment();
	return (
		<div>
			<h1 className="text-xl sm:text-3xl py-2 px-4 sm:py-4 sm:px-4">Datapod for Next.js 0.00.10</h1>
			<nav className="p-2 mainnav bg-slate-300 pl-4">
				<ul className="flex gap-x-2 gap-y-0 flex-wrap">
					<li>
						<Link
							href="/"
							className={`border-0 ${activeSegment === null ? 'text-orange-800' : ''}`}
						>
							Welcome
						</Link>
					</li>
					<li>
						<Link
							href="/info"
							className={`border-0 ${activeSegment === 'info' ? 'text-orange-800' : ''}`}
						>
							Info
						</Link>
					</li>
					<li>
						<Link
							href="/about"
							className={`border-0 ${activeSegment === 'about' ? 'text-orange-800' : ''}`}
						>
							About
						</Link>
					</li>
				</ul>
			</nav>
		</div>
	)
}