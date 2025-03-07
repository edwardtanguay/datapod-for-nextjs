import { Info } from "@/types";
import Link from "next/link"

export default async function About() {
	// Use absolute URL with process.env or a hardcoded base URL
	// const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3670'}/api/infos`);
	const response = await fetch(process.env.SITE_URL + '/api/infos');
	const infos: Info[] = await response.json();

	return (
		<div className="p-4">
			<ul>
				{infos.map((info) => (
					<li key={info.id}>
						<Link
							href={`info/${info.id}`}
						>
							{info.content}
						</Link>
					</li>
				))}
			</ul>
		</div>
	);
}