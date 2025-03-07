import Link from "next/link"

export const Header = () => {
	return (
		<nav className="bg-slate-900 p-2 mainnav mb-6">
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
	)
}