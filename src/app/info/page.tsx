import Link from "next/link"

export default function About() {
	const infos = [
		{ id: 1, content: "First item content" },
		{ id: 2, content: "Second item content" },
		{ id: 3, content: "Third item content" }
	];

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