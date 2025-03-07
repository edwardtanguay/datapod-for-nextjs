import { Info } from "@/types";
import Link from "next/link"

export default async function About() {
	const response = await fetch(`http://localhost:3670/api/infos`);
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