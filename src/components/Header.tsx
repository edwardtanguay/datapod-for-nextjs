import Link from "next/link"

export const Header = () => {
	return (
		<div>
			<h1 className="text-xl sm:text-3xl py-2 px-4 sm:py-4 sm:px-4">Datapod for Next.js 0.09</h1>
			<nav className="p-2 mainnav bg-slate-300 pl-4">
				<ul className="flex gap-x-2 gap-y-0 flex-wrap">
					<li>
						<Link
							href="/"
						>
							Welcome
						</Link>
					</li>
					<li>
						<Link
							href="/info"
						>
							Info
						</Link>
					</li>
					<li>
						<Link
							href="/about"
						>
							About
						</Link>
					</li>
				</ul>
			</nav>
		</div>
	)
}